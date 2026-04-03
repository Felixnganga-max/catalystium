import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroLocal from "../images/file.png";
import { useCalendly } from "../hooks/useCalendly";
import coaching from "../assets/coaching.jpg";
import strategy from "../assets/strategy.jfif";

const slides = [
  {
    badge: "Coaching · Execution · Results",
    headline: ["Sparking", "Change"],
    accent: "Igniting Transformation",
    sub: "We coach leaders and teams to think clearly and execute with confidence.",
    tags: [],
    primaryLabel: "Explore Services",
    primaryHref: "/services",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
    secondaryIcon: "phone",
    image: heroLocal,
    imageAlt: "Leadership",
    bg: { from: "#f86f17", via: "#c2410c", to: "#7c2d12" },
    panelBg: "linear-gradient(135deg,#f86f17 0%,#ea580c 55%,#9a3412 100%)",
  },
  {
    badge: "Coaching",
    headline: ["Leadership", "Coaching"],
    accent: "That Actually Works",
    sub: "1:1, group, and life coaching — built around your goals, not a template.",
    tags: ["1:1 Executive", "Group Cohorts", "Life Coaching"],
    primaryLabel: "View Coaching",
    primaryHref: "/services",
    secondaryLabel: "Book a Call",
    secondaryHref: null,
    secondaryIcon: "calendar",
    image: coaching,
    imageAlt: "Coaching",
    bg: { from: "#1e3a8a", via: "#1d4ed8", to: "#3b82f6" },
    panelBg: "linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 55%,#60a5fa 100%)",
  },
  {
    badge: "Organizational Development",
    headline: ["Strategy", "That Sticks"],
    accent: "Systems Built to Last",
    sub: "Vision alignment, execution systems, and training for lasting change.",
    tags: ["Boards & Execs", "Corporate Training", "Culture Systems"],
    primaryLabel: "View Strategy",
    primaryHref: "/services",
    secondaryLabel: "Book a Call",
    secondaryHref: null,
    secondaryIcon: "calendar",
    image: strategy,
    imageAlt: "Strategy",
    bg: { from: "#14532d", via: "#15803d", to: "#4ade80" },
    panelBg: "linear-gradient(135deg,#14532d 0%,#15803d 55%,#4ade80 100%)",
  },
  {
    badge: "Speaking & Insights",
    headline: ["Ideas That", "Move People"],
    accent: "Keynotes & Leadership Talks",
    sub: "Tailored speaking engagements that turn insight into lasting action.",
    tags: ["Keynotes", "Leadership Summits", "Corporate Retreats"],
    primaryLabel: "View Speaking",
    primaryHref: "/services",
    secondaryLabel: "Book a Call",
    secondaryHref: null,
    secondaryIcon: "calendar",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=90&fit=crop&crop=faces",
    imageAlt: "Speaking",
    bg: { from: "#7c2d12", via: "#c2410c", to: "#f97316" },
    panelBg: "linear-gradient(135deg,#7c2d12 0%,#c2410c 55%,#f97316 100%)",
  },
];

/* ── Reusable desktop image circle ── */
function ImageCircle({ slides, current, mousePos, slide, size = 580 }) {
  return (
    <div
      style={{
        transform: `translate(${mousePos.x * 14}px, ${mousePos.y * 14}px)`,
        transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
        width: "100%",
        maxWidth: size,
        aspectRatio: "1",
        position: "relative",
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          inset: -18,
          border: "1.5px solid rgba(255,255,255,0.18)",
          borderRadius: "50%",
          animation: "spinSlow 18s linear infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          inset: -36,
          border: "1px dashed rgba(255,255,255,0.1)",
          borderRadius: "50%",
          animation: "spinSlow 32s linear infinite reverse",
        }}
      />
      <div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          boxShadow: `0 30px 80px rgba(0,0,0,0.55), 0 0 0 3px rgba(255,255,255,0.22)`,
          background: slide.panelBg,
        }}
      >
        {slides.map((s, i) => (
          <img
            key={i}
            src={typeof s.image === "string" ? s.image : s.image}
            alt={s.imageAlt}
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.9s ease",
              transform: i === current ? "scale(1.03)" : "scale(1)",
              animation: i === current ? "imgZoom 8s ease forwards" : "none",
            }}
          />
        ))}
      </div>
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-10"
        style={{
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.9)",
          fontSize: "0.68rem",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          padding: "5px 14px",
          borderRadius: 999,
          animation: "slideUp 0.65s ease 0.55s both",
        }}
        key={`imgbadge-${current}`}
      >
        {slide.badge}
      </div>
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const autoRef = useRef(null);
  const { openPopup, loading } = useCalendly();

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      6500,
    );
  }, []);

  const go = useCallback(
    (idx) => {
      setCurrent(((idx % slides.length) + slides.length) % slides.length);
      startAuto();
    },
    [startAuto],
  );

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(current + 1);
      if (e.key === "ArrowLeft") go(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  const onMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  }, []);

  const handleSecondary = (e, s) => {
    if (!s.secondaryHref) {
      e.preventDefault();
      openPopup();
    }
  };

  const slide = slides[current];

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative w-full overflow-hidden flex"
      style={{
        height: "100svh",
        minHeight: 620,
        fontFamily: "'DM Sans', sans-serif",
        background: "#efe7df",
      }}
    >
      {/* ═══════════════════════════════════════
          LEFT / MAIN PANEL — text content
      ═══════════════════════════════════════ */}
      <div
        className="relative z-10 flex flex-col justify-between w-full lg:w-[55%] px-8 md:px-14 lg:px-20 py-6 pt-20 lg:pt-28 lg:py-10 overflow-y-auto"
        style={{ flexShrink: 0 }}
      >
        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 500,
            height: 500,
            background: `radial-gradient(circle, ${slide.bg.from}28 0%, transparent 70%)`,
            top: "40%",
            left: "30%",
            transform: `translate(-50%,-50%) translate(${mousePos.x * 50}px,${mousePos.y * 50}px)`,
            transition: "transform 0.7s ease, background 0.9s ease",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />

        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.025,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
          }}
        />

        {/* ══════════════════════════════════
            MOBILE IMAGE CIRCLE — lg:hidden
            Sits right below the navbar area,
            above the badge and headline.
        ══════════════════════════════════ */}
        <div
          className="flex lg:hidden justify-center relative z-10 mb-5"
          key={`mobile-img-${current}`}
          style={{ animation: "slideUp 0.65s ease 0.05s both" }}
        >
          {/* Soft coloured glow behind circle */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: slide.panelBg,
              filter: "blur(32px)",
              opacity: 0.45,
              transition: "background 0.7s ease",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {/* Circle wrapper */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: 190,
              height: 190,
              flexShrink: 0,
            }}
          >
            {/* Spinning decorative rings */}
            <div
              style={{
                position: "absolute",
                inset: -12,
                border: "1.5px solid rgba(0,0,0,0.1)",
                borderRadius: "50%",
                animation: "spinSlow 18s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -24,
                border: "1px dashed rgba(0,0,0,0.07)",
                borderRadius: "50%",
                animation: "spinSlow 32s linear infinite reverse",
              }}
            />

            {/* The image circle itself */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                boxShadow: `0 14px 48px rgba(0,0,0,0.28), 0 0 0 3px rgba(255,255,255,0.55)`,
                background: slide.panelBg,
                transition: "background 0.7s ease",
              }}
            >
              {slides.map((s, i) => (
                <img
                  key={i}
                  src={typeof s.image === "string" ? s.image : s.image}
                  alt={s.imageAlt}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 0.9s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* TOP: badge */}
        <div
          key={`badge-${current}`}
          className="relative z-10"
          style={{ animation: "slideUp 0.6s ease 0.1s both" }}
        >
          <span
            className="inline-flex items-center gap-2 border border-[#151412]/15 text-[#151412]/70 text-[10px] font-semibold tracking-[2.5px] uppercase px-4 py-2 rounded-full"
            style={{ background: "rgba(21,20,18,0.05)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: slide.bg.to }}
            />
            {slide.badge}
          </span>
        </div>

        {/* MIDDLE: headline + body + CTAs */}
        <div className="relative z-10 flex flex-col" key={`body-${current}`}>
          {/* Headline */}
          <div style={{ animation: "slideUp 0.65s ease 0.05s both" }}>
            <h1
              className="leading-[0.9] tracking-tight text-[#151412] mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.6rem, 6.5vw, 6.5rem)",
                fontWeight: 900,
                textShadow: "0 4px 40px rgba(0,0,0,0.4)",
              }}
            >
              {slide.headline[0]}
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px rgba(21,20,18,0.7)",
                  color: "transparent",
                  display: "block",
                }}
              >
                {slide.headline[1]}
              </span>
            </h1>
          </div>

          {/* Accent */}
          <div style={{ animation: "slideUp 0.65s ease 0.18s both" }}>
            <p
              className="text-[#6e6a64] font-light uppercase tracking-[0.18em] mb-4 mt-1"
              style={{ fontSize: "clamp(0.7rem,1.2vw,1rem)" }}
            >
              — {slide.accent}
            </p>
          </div>

          {/* Animated rule */}
          <div
            key={`rule-${current}`}
            style={{
              height: 1,
              background: `linear-gradient(to right, ${slide.bg.from}, transparent)`,
              borderRadius: 99,
              marginBottom: "1.2rem",
              animation: "expandWidth 0.8s ease 0.25s both",
              width: 0,
            }}
          />

          {/* Sub-copy */}
          <div style={{ animation: "slideUp 0.65s ease 0.3s both" }}>
            <p
              className="text-[#6e6a64] font-light leading-relaxed mb-4 max-w-md"
              style={{ fontSize: "clamp(0.82rem,1.3vw,1rem)" }}
            >
              {slide.sub}
            </p>
          </div>

          {/* Tags */}
          {slide.tags.length > 0 && (
            <div
              className="flex flex-wrap gap-2 mb-5"
              style={{ animation: "slideUp 0.65s ease 0.38s both" }}
            >
              {slide.tags.map((t, i) => (
                <span
                  key={i}
                  className="text-[0.72rem] font-medium text-[#151412]/70 border border-[#151412]/15 px-3 py-1 rounded-full"
                  style={{ background: "rgba(21,20,18,0.05)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-3"
            style={{ animation: "slideUp 0.65s ease 0.44s both" }}
          >
            <a
              href={slide.primaryHref}
              className="group relative overflow-hidden bg-white text-gray-900 px-8 py-3.5 rounded-full text-[0.88rem] font-bold shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{ minWidth: 155, textAlign: "center" }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {slide.primaryLabel}
              </span>
              <div
                className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"
                style={{ background: slide.bg.from }}
              />
            </a>
            <a
              href={slide.secondaryHref || "#"}
              onClick={(e) => handleSecondary(e, slide)}
              className="flex items-center gap-2 border border-[#151412]/30 text-[#151412] px-7 py-3.5 rounded-full text-[0.88rem] font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              style={{ background: "rgba(21,20,18,0.05)" }}
            >
              {slide.secondaryIcon === "phone" ? (
                <Phone size={14} />
              ) : (
                <Calendar size={14} />
              )}
              {loading && !slide.secondaryHref
                ? "Loading..."
                : slide.secondaryLabel}
            </a>
          </div>
        </div>

        {/* BOTTOM: arrows + dots + socials */}
        <div
          className="relative z-10 flex items-end justify-between"
          style={{ animation: "slideUp 0.65s ease 0.5s both" }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(current - 1)}
              className="w-10 h-10 rounded-full border border-[#151412]/25 text-[#151412] flex items-center justify-center hover:bg-[#151412] hover:text-white transition-all duration-200"
              style={{ background: "rgba(21,20,18,0.05)" }}
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(current + 1)}
              className="w-10 h-10 rounded-full border border-[#151412]/25 text-[#151412] flex items-center justify-center hover:bg-[#151412] hover:text-white transition-all duration-200"
              style={{ background: "rgba(21,20,18,0.05)" }}
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
            <div className="flex items-center gap-2 ml-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    height: 5,
                    borderRadius: 99,
                    transition: "all 0.35s ease",
                    width: i === current ? 26 : 6,
                    background:
                      i === current ? "#151412" : "rgba(21,20,18,0.2)",
                  }}
                />
              ))}
            </div>
            <span className="text-[#151412]/35 text-[11px] tracking-[3px] ml-1 font-light hidden sm:block">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-[#151412]/25 text-[#151412] flex items-center justify-center hover:bg-[#151412] hover:text-white transition-all duration-200"
                  style={{ background: "rgba(21,20,18,0.05)" }}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
            <span className="text-[#151412]/40 text-[10px] tracking-widest uppercase hidden sm:block">
              info@catalystiumsolutions.com
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          RIGHT PANEL — desktop only (lg+)
      ═══════════════════════════════════════ */}
      <div
        className="hidden lg:block relative flex-1 overflow-hidden"
        style={{ flexShrink: 0 }}
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0 z-0 transition-all duration-700"
          style={{ background: slide.panelBg }}
        />

        {/* SVG organic wave mask */}
        <svg
          className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
          viewBox="0 0 700 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 Q120,150 80,300 T100,600 Q120,750 0,900 L0,0 Z"
            fill="#efe7df"
          />
        </svg>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Circular image — mouse parallax */}
        <div
          className="absolute inset-0 z-[2] flex items-center justify-center"
          style={{ padding: "2rem 1.5rem 2rem 2.5rem" }}
        >
          <ImageCircle
            slides={slides}
            current={current}
            mousePos={mousePos}
            slide={slide}
            size={580}
          />
        </div>

        {/* Right-side slide counter */}
        <div className="absolute top-6 right-6 z-10 text-[11px] font-semibold text-white/50 tracking-[3px]">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{ height: 2, background: "rgba(255,255,255,0.08)" }}
      >
        <div
          key={`progress-${current}`}
          style={{
            height: "100%",
            background: `linear-gradient(to right, ${slide.bg.from}, ${slide.bg.to})`,
            animation: "progressBar 6.5s linear forwards",
            width: 0,
          }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes slideUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes expandWidth {
          from { width:0; opacity:0; }
          to   { width:72px; opacity:1; }
        }
        @keyframes progressBar {
          from { width:0%; }
          to   { width:100%; }
        }
        @keyframes spinSlow {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes imgZoom {
          from { transform:scale(1); }
          to   { transform:scale(1.03); }
        }
      `}</style>
    </section>
  );
}
