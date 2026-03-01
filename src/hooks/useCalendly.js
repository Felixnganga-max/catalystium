import { useEffect, useCallback } from "react";

const CALENDLY_CSS_URL =
  "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_SCRIPT_URL =
  "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_URL = "https://calendly.com/catalystiumsolutions/clarity-call";

/**
 * useCalendly
 *
 * Injects the Calendly CSS + JS and exposes:
 *  - initBadge()  → floating badge button (used on pages OTHER than /contact)
 *  - openPopup()  → programmatic popup overlay (for button clicks)
 *  - destroyBadge() → removes the floating badge when not needed
 */
export function useCalendly() {
  // ── Inject CSS + JS once ────────────────────────────────────────────────────
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
      document.head.appendChild(script);
    }
  }, []);

  // ── Wait for Calendly to be ready ──────────────────────────────────────────
  const whenReady = useCallback((fn) => {
    if (window.Calendly) {
      fn();
      return;
    }
    const iv = setInterval(() => {
      if (window.Calendly) {
        clearInterval(iv);
        fn();
      }
    }, 100);
  }, []);

  /**
   * initBadge — renders the floating orange badge button.
   * Call this on pages where you want the persistent floating CTA.
   */
  const initBadge = useCallback(() => {
    whenReady(() => {
      window.Calendly.initBadgeWidget({
        url: CALENDLY_URL,
        text: "Schedule time with me",
        color: "#f86f17", // brand orange (overrides the blue from the snippet)
        textColor: "#ffffff",
        branding: false,
      });
    });
  }, [whenReady]);

  /**
   * destroyBadge — removes the floating badge DOM node.
   * Call this on /contact since the inline widget is already there.
   */
  const destroyBadge = useCallback(() => {
    const badge = document.querySelector(".calendly-badge-widget");
    if (badge) badge.remove();
  }, []);

  /**
   * openPopup — opens a Calendly popup overlay on demand (button click).
   */
  const openPopup = useCallback(() => {
    whenReady(() => {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    });
  }, [whenReady]);

  return { initBadge, destroyBadge, openPopup };
}
