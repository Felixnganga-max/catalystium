import React, { useState, useEffect, useRef } from "react";
import {
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Users,
  BarChart3,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function SectionOne() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white" ref={containerRef}>
      {/* ── HERO SECTION ── */}
      <section className="relative">
        <div className="absolute inset-0 bg-[#efe7df]">
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-700/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#f86f17]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full mb-5 shadow-sm border border-blue-700/10">
              <Lightbulb className="w-4 h-4 text-blue-700" strokeWidth={2} />
              <span className="text-xs text-[#6e6a64] tracking-wider font-medium">
                Coaching Excellence
              </span>
              <div className="w-1 h-1 rounded-full bg-blue-700" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#151412] mb-4 tracking-tight leading-tight">
              Sustainable Performance
              <br />
              <span className="font-semibold text-blue-700">
                Through Coaching
              </span>
            </h1>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-16 h-px bg-blue-700/30" />
              <Sparkles className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
              <div className="w-16 h-px bg-blue-700/30" />
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[#6e6a64] leading-relaxed max-w-2xl mx-auto mb-7 font-light">
              At Catalystium Solutions, coaching is the foundation of everything
              we do. We strengthen leaders' ability to navigate complexity,
              align strategy with action, and embed learning for long-term
              results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/services"
                className="group inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30"
              >
                <Target className="w-4 h-4" strokeWidth={2} />
                Explore Our Approach
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2}
                />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full text-sm font-medium border border-blue-700/20 hover:bg-[#efe7df] transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECOND SECTION ── */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-72 h-72 bg-blue-700/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#f86f17]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#efe7df] px-5 py-2 rounded-full mb-4 border border-blue-700/10">
              <Award className="w-4 h-4 text-blue-700" strokeWidth={2} />
              <span className="text-xs text-[#6e6a64] tracking-wider font-medium">
                Why Catalystium
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-[#151412] mb-3 tracking-tight">
              The{" "}
              <span className="font-semibold text-blue-700">Catalystium</span>{" "}
              Difference
            </h2>

            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-20 h-px bg-blue-700/20" />
              <TrendingUp className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
              <div className="w-20 h-px bg-blue-700/20" />
            </div>

            <p className="text-base text-[#6e6a64] max-w-2xl mx-auto font-light">
              Coaching-driven, measurable, context-aware transformation
            </p>
          </div>

          {/* Feature Cards — Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Sparkles,
                title: "The C.A.T.A.L.Y.S.T™ Model",
                description:
                  "Structured coaching that turns reflection into insight, insight into action, and action into results.",
                accent: "blue",
              },
              {
                icon: Users,
                title: "Leadership in Action",
                description:
                  "We coach leaders to make better decisions, build accountability, and align teams successfully.",
                accent: "orange",
              },
              {
                icon: BarChart3,
                title: "Coaching for Results",
                description:
                  "Track real outcomes of coaching, leadership, and team performance with practical MEL.",
                accent: "blue",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-px rounded-xl bg-gradient-to-br ${
                    item.accent === "blue"
                      ? "from-blue-700/20 to-blue-600/10"
                      : "from-[#f86f17]/20 to-[#ff8c5a]/10"
                  } opacity-0 group-hover:opacity-100 transition-opacity blur-sm`}
                />
                <div className="relative h-full bg-[#efe7df] rounded-xl overflow-hidden border border-[#d4c4b4] group-hover:border-blue-700/30 transition-all">
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                        item.accent === "blue"
                          ? "from-blue-700 to-blue-600"
                          : "from-[#f86f17] to-[#ff8c5a]"
                      } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <item.icon
                        className="w-5 h-5 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-[#151412] mb-3 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <div
                      className={`w-12 h-px bg-gradient-to-r ${
                        item.accent === "blue"
                          ? "from-blue-700 to-transparent"
                          : "from-[#f86f17] to-transparent"
                      } rounded-full mb-3 group-hover:w-16 transition-all`}
                    />
                    <p className="text-sm text-[#6e6a64] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Cards — Mobile */}
          <div
            className="md:hidden overflow-x-auto -mx-6 px-6 mb-10"
            ref={cardsRef}
          >
            <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
              {[
                {
                  icon: Sparkles,
                  title: "The C.A.T.A.L.Y.S.T™ Model",
                  description:
                    "Structured coaching that turns reflection into insight, insight into action, and action into results.",
                  accent: "blue",
                },
                {
                  icon: Users,
                  title: "Leadership in Action",
                  description:
                    "We coach leaders to make better decisions, build accountability, and align teams successfully.",
                  accent: "orange",
                },
                {
                  icon: BarChart3,
                  title: "Coaching for Results",
                  description:
                    "Track real outcomes of coaching, leadership, and team performance with practical MEL.",
                  accent: "blue",
                },
              ].map((item, index) => (
                <div key={index} className="w-72 flex-shrink-0">
                  <div className="h-full bg-[#efe7df] rounded-xl overflow-hidden border border-[#d4c4b4]">
                    <div className="p-6">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                          item.accent === "blue"
                            ? "from-blue-700 to-blue-600"
                            : "from-[#f86f17] to-[#ff8c5a]"
                        } flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <item.icon
                          className="w-5 h-5 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-[#151412] mb-3">
                        {item.title}
                      </h3>
                      <div
                        className={`w-12 h-px bg-gradient-to-r ${
                          item.accent === "blue"
                            ? "from-blue-700 to-transparent"
                            : "from-[#f86f17] to-transparent"
                        } rounded-full mb-3`}
                      />
                      <p className="text-sm text-[#6e6a64] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Box */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-700/20 via-[#f86f17]/20 to-blue-700/20 rounded-xl opacity-50 group-hover:opacity-75 blur-lg transition-opacity" />
              <div className="relative p-7 md:p-9 bg-white rounded-xl border border-blue-700/20 shadow-xl">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-700 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle2
                      className="w-6 h-6 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-[#151412] mb-3">
                      Our Commitment to You
                    </h4>
                    <p className="text-base text-[#6e6a64] leading-relaxed mb-4">
                      We create insight through coaching while maintaining a
                      relentless focus on action, ownership, and measurable
                      results—so transformation is practical, sustainable, and
                      real.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-5">
                      {[
                        { color: "text-blue-700", label: "Practical approach" },
                        {
                          color: "text-[#f86f17]",
                          label: "Measurable results",
                        },
                        { color: "text-blue-700", label: "Sustainable impact" },
                      ].map((pt, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-4 h-4 ${pt.color} flex-shrink-0 mt-0.5`}
                            strokeWidth={2}
                          />
                          <span className="text-xs text-[#6e6a64]">
                            {pt.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
