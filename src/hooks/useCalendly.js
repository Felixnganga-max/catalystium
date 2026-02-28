import { useEffect, useCallback, useRef, useState } from "react";

const CALENDLY_SCRIPT_URL =
  "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS_URL =
  "https://assets.calendly.com/assets/external/widget.css";

// ── Personal Access Token ─────────────────────────────────────────────────────
// Prefer storing this in your .env file as VITE_CALENDLY_TOKEN for security.
const PAT =
  import.meta.env.VITE_CALENDLY_TOKEN ||
  "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzcyMjk0NDk5LCJqdGkiOiI4Nzg3MzVjNS1hOTAxLTQxOTItYjFlNC1jYzE4ZjhlOTI1YTkiLCJ1c2VyX3V1aWQiOiIxMDI5NGZjZC1hZTFiLTQ1NTYtYjZmZC1lODBlN2M3MmQ0ODgifQ.w0aMb4dtSAfLO7xpPIqRDo_dpeipjB8ir_UyDsGf5fyb1C5avhVFjrfFdbgy7Bjir9GcpANAWp3gxNXHXrguuA";

/**
 * useCalendly
 *
 * Automatically loads the Calendly widget script, fetches the current user's
 * scheduling URL from the Calendly API using your PAT, and exposes helpers
 * to open popup, inline, or badge embeds from anywhere in your app.
 *
 * Usage:
 *   const { openPopup, initInline, initBadge, schedulingUrl, loading } = useCalendly();
 *
 *   // Open popup — auto-uses your Calendly scheduling URL
 *   <button onClick={() => openPopup()}>Book a call</button>
 *
 *   // Or override with a specific event type URL
 *   <button onClick={() => openPopup({ url: "https://calendly.com/your/event" })}>
 */
export function useCalendly() {
  const [schedulingUrl, setSchedulingUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scriptReady = useRef(false);

  // ── 1. Inject Calendly CSS + JS widget ──────────────────────────────────────
  useEffect(() => {
    if (!document.querySelector(`link[href="${CALENDLY_CSS_URL}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS_URL;
      document.head.appendChild(link);
    }

    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_URL}"]`)) {
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_URL;
      script.async = true;
      script.onload = () => {
        scriptReady.current = true;
      };
      document.head.appendChild(script);
    } else {
      // Script tag exists — it may already be loaded
      scriptReady.current = !!window.Calendly;
    }
  }, []);

  // ── 2. Fetch current user's scheduling URL via Calendly API ─────────────────
  useEffect(() => {
    async function fetchSchedulingUrl() {
      try {
        const res = await fetch("https://api.calendly.com/users/me", {
          headers: {
            Authorization: `Bearer ${PAT}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(
            `Calendly API error: ${res.status} ${res.statusText}`,
          );
        }

        const data = await res.json();
        const url = data.resource?.scheduling_url;

        if (!url)
          throw new Error("No scheduling_url found in Calendly API response.");
        setSchedulingUrl(url);
      } catch (err) {
        console.error("[useCalendly]", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSchedulingUrl();
  }, []);

  // ── Helper: poll until Calendly widget script is ready ──────────────────────
  const whenReady = useCallback((fn) => {
    if (window.Calendly) {
      fn();
      return;
    }
    const interval = setInterval(() => {
      if (window.Calendly) {
        clearInterval(interval);
        fn();
      }
    }, 100);
  }, []);

  // ── 3. Public methods ────────────────────────────────────────────────────────

  /**
   * Open a Calendly popup overlay.
   * Falls back to the auto-fetched scheduling URL if no url is passed.
   *
   * @param {object}  [options]
   * @param {string}  [options.url]     Override URL (e.g. a specific event type)
   * @param {object}  [options.prefill] Pre-fill name/email: { name, email, customAnswers }
   * @param {object}  [options.utm]     UTM params: { utmSource, utmMedium, ... }
   */
  const openPopup = useCallback(
    ({ url, prefill = {}, utm = {} } = {}) => {
      const target = url || schedulingUrl;
      if (!target) {
        console.warn(
          "[useCalendly] Scheduling URL not ready yet. Is the API call complete?",
        );
        return;
      }
      whenReady(() =>
        window.Calendly.initPopupWidget({ url: target, prefill, utm }),
      );
    },
    [schedulingUrl, whenReady],
  );

  /**
   * Render an inline Calendly widget inside a DOM element.
   *
   * @param {object}      options
   * @param {HTMLElement} options.parentElement  The container element
   * @param {string}      [options.url]          Override URL
   * @param {object}      [options.prefill]
   * @param {object}      [options.utm]
   */
  const initInline = useCallback(
    ({ url, parentElement, prefill = {}, utm = {} } = {}) => {
      const target = url || schedulingUrl;
      if (!target || !parentElement) {
        console.error(
          "[useCalendly] initInline requires a url and a parentElement.",
        );
        return;
      }
      whenReady(() =>
        window.Calendly.initInlineWidget({
          url: target,
          parentElement,
          prefill,
          utm,
        }),
      );
    },
    [schedulingUrl, whenReady],
  );

  /**
   * Render a floating Calendly badge button on the page.
   *
   * @param {object}  [options]
   * @param {string}  [options.url]
   * @param {string}  [options.text]       Button label
   * @param {string}  [options.color]      Button background hex color
   * @param {string}  [options.textColor]  Button text hex color
   * @param {boolean} [options.branding]   Show Calendly branding
   */
  const initBadge = useCallback(
    ({
      url,
      text = "Schedule time with me",
      color = "#f86f17",
      textColor = "#ffffff",
      branding = false,
    } = {}) => {
      const target = url || schedulingUrl;
      if (!target) {
        console.error("[useCalendly] initBadge: no URL available.");
        return;
      }
      whenReady(() =>
        window.Calendly.initBadgeWidget({
          url: target,
          text,
          color,
          textColor,
          branding,
        }),
      );
    },
    [schedulingUrl, whenReady],
  );

  return {
    /** Auto-fetched scheduling URL from /users/me */
    schedulingUrl,
    /** True while the API call is in-flight */
    loading,
    /** Non-null if the API call failed */
    error,
    /** Open Calendly popup overlay */
    openPopup,
    /** Embed Calendly inline into a DOM element */
    initInline,
    /** Render a floating Calendly badge button */
    initBadge,
  };
}
