import React, { useEffect, useState } from "react";
import { Phone, Mail, CalendarDays } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80";

// ── Inline Calendly Widget Component ─────────────────────────────────────────
function CalendlyInline() {
  useEffect(() => {
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/catalystiumsolutions/clarity-call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f16115"
      style={{ minWidth: "320px", height: "700px", width: "100%" }}
    />
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const cards = [
    {
      icon: Phone,
      title: "CALL US",
      body: "Prefer to speak directly? We're available Monday through Friday, 9am – 6pm EAT.",
      detail: "+254 740 600 150",
      href: "tel:+254740 600 150",
    },
    {
      icon: Mail,
      title: "EMAIL US",
      body: "Send us a message and we'll respond within one business day.",
      detail: "info@catalystiumsolutions.com",
      href: "mailto:info@catalystiumsolutions.com",
    },
    {
      icon: CalendarDays,
      title: "DISCOVERY CALL",
      body: "Ready to explore what's possible? Schedule a free clarity call with Esther below.",
      detail: "↓ Schedule below",
      href: null,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .contact-root { font-family: 'DM Sans', sans-serif; color: #333; }

        /* Hero */
        .contact-hero {
          position: relative; width: 100%; min-height: 52vh;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .contact-hero__bg {
          position: absolute; inset: 0;
          background-image: url('${HERO_IMAGE}');
          background-size: cover; background-position: center 40%;
        }
        .contact-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(10,10,20,0.38) 0%, rgba(10,10,20,0.62) 60%, rgba(10,10,20,0.78) 100%);
        }
        .contact-hero__content {
          position: relative; z-index: 2; text-align: center;
          padding: 4rem 1.5rem 3rem; max-width: 680px; margin: 0 auto;
        }
        .contact-hero__eyebrow {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; margin-bottom: 1.1rem;
        }
        .contact-hero__eyebrow span { display: block; width: 36px; height: 1px; background: #f86f17; opacity: 0.85; }
        .contact-hero__eyebrow p {
          font-size: 0.65rem; font-weight: 600; letter-spacing: 0.28em;
          color: #f86f17; text-transform: uppercase; margin: 0;
        }
        .contact-hero__title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 4.2rem); font-weight: 700;
          color: #f86f17; letter-spacing: 0.08em; text-transform: uppercase;
          margin: 0 0 1rem; line-height: 1.05;
        }
        .contact-hero__dots { display: flex; gap: 6px; justify-content: center; margin-bottom: 1.4rem; }
        .contact-hero__dots span { width: 5px; height: 5px; border-radius: 50%; background: #f86f17; opacity: 0.7; }
        .contact-hero__sub {
          font-size: 0.95rem; font-weight: 300; color: rgba(255,255,255,0.88);
          line-height: 1.75; max-width: 480px; margin: 0 auto;
        }

        /* Cards */
        .contact-cards { background: #fff; padding: 5rem 1.5rem 3rem; }
        .contact-cards__divider { width: 60px; height: 1px; background: rgba(248,111,23,0.2); margin: 0 auto 4rem; }
        .contact-cards__grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2.5rem; max-width: 1000px; margin: 0 auto;
        }
        .contact-card {
          text-align: center; padding: 2.8rem 2rem 2.4rem; border-radius: 4px;
          position: relative; opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
        }
        .contact-card.visible { opacity: 1; transform: translateY(0); }
        .contact-card:nth-child(2) { transition-delay: 0.12s; }
        .contact-card:nth-child(3) { transition-delay: 0.24s; }
        .contact-card:hover { box-shadow: 0 12px 40px rgba(248,111,23,0.1); }
        .contact-card::before {
          content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 0; height: 2px;
          background: linear-gradient(to right, transparent, #f86f17, transparent);
          transition: width 0.4s ease; border-radius: 2px;
        }
        .contact-card:hover::before { width: 70%; }
        .contact-card__icon-wrap {
          width: 62px; height: 62px; margin: 0 auto 1.4rem;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%; background: rgba(248,111,23,0.07);
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .contact-card:hover .contact-card__icon-wrap {
          background: rgba(248,111,23,0.14); transform: scale(1.08) rotate(-4deg);
        }
        .contact-card__icon { width: 28px; height: 28px; color: #f86f17; stroke-width: 1.5; }
        .contact-card__title {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #1a1a2e; margin: 0 0 0.9rem;
        }
        .contact-card__body { font-size: 0.87rem; font-weight: 300; color: #777; line-height: 1.75; margin: 0 0 1.4rem; }
        .contact-card__detail {
          font-size: 0.85rem; font-weight: 600; color: #f86f17;
          text-decoration: none; display: inline-block;
          transition: color 0.2s, letter-spacing 0.2s;
        }
        a.contact-card__detail:hover { color: #d45c0a; letter-spacing: 0.02em; }

        /* Calendly section */
        .contact-calendly { background: #fafafa; padding: 3rem 1.5rem 6rem; }
        .contact-calendly__header { text-align: center; margin-bottom: 2.5rem; }
        .contact-calendly__label {
          font-size: 0.65rem; font-weight: 600; letter-spacing: 0.28em;
          color: #f86f17; text-transform: uppercase; display: block; margin-bottom: 0.6rem;
        }
        .contact-calendly__title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700;
          color: #1a1a2e; margin: 0 0 0.6rem;
        }
        .contact-calendly__sub {
          font-size: 0.88rem; font-weight: 300; color: #888;
          max-width: 400px; margin: 0 auto; line-height: 1.7;
        }
        .contact-calendly__widget {
          max-width: 900px; margin: 0 auto;
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(248,111,23,0.08);
          border: 1px solid rgba(248,111,23,0.1);
        }

        @media (max-width: 640px) {
          .contact-hero__title { font-size: 2.2rem; }
          .contact-card { padding: 2.2rem 1.4rem 2rem; }
        }
      `}</style>

      <div className="contact-root">
        {/* ══ HERO ══ */}
        <section className="contact-hero">
          <div className="contact-hero__bg" />
          <div className="contact-hero__overlay" />
          <div className="contact-hero__content">
            <div className="contact-hero__eyebrow">
              <span />
              <p>Catalystium Solutions</p>
              <span />
            </div>
            <h1 className="contact-hero__title">Contact Us</h1>
            <div className="contact-hero__dots">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} />
              ))}
            </div>
            <p className="contact-hero__sub">
              Need an expert? You're more than welcome to reach out — we'll be
              in touch and ready to help you move forward with clarity and
              confidence.
            </p>
          </div>
        </section>

        {/* ══ CARDS ══ */}
        <section className="contact-cards">
          <div className="contact-cards__divider" />
          <div className="contact-cards__grid">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`contact-card${visible ? " visible" : ""}`}
                >
                  <div className="contact-card__icon-wrap">
                    <Icon className="contact-card__icon" />
                  </div>
                  <h3 className="contact-card__title">{card.title}</h3>
                  <p className="contact-card__body">{card.body}</p>
                  {card.href ? (
                    <a href={card.href} className="contact-card__detail">
                      {card.detail}
                    </a>
                  ) : (
                    <span
                      className="contact-card__detail"
                      style={{ cursor: "default" }}
                    >
                      {card.detail}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ══ CALENDLY INLINE WIDGET ══ */}
        <section className="contact-calendly">
          <div className="contact-calendly__header">
            <span className="contact-calendly__label">
              Free 30-Minute Session
            </span>
            <h2 className="contact-calendly__title">
              Book a Clarity Call with Esther
            </h2>
            <p className="contact-calendly__sub">
              Choose a time that works for you. No pressure, just a genuine
              conversation about where you are and where you want to go.
            </p>
          </div>
          <div className="contact-calendly__widget">
            <CalendlyInline />
          </div>
        </section>
      </div>
    </>
  );
}
