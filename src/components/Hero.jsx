import React, { useState, useEffect } from "react";
import img from "../images/file.png";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f0] overflow-hidden">
      {/* Ultra-Premium Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(26,58,82,0.08)] border-b border-[#1a3a52]/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 md:py-8">
          <div className="flex justify-between items-center">
            <div className="text-lg md:text-2xl font-extralight tracking-[0.2em] md:tracking-[0.3em] text-[#1a3a52] relative">
              <span className="relative z-10">CATALYSTIUM</span>
              <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#ff6b35] via-[#ff6b35]/50 to-transparent"></div>
            </div>
            <div className="hidden lg:flex gap-12 xl:gap-16 items-center">
              <a
                href="#coaching"
                className="text-xs text-[#1a3a52]/60 hover:text-[#ff6b35] transition-all duration-500 font-extralight tracking-[0.2em] uppercase relative group"
              >
                COACHING
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff6b35] transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a
                href="#organizational"
                className="text-xs text-[#1a3a52]/60 hover:text-[#ff6b35] transition-all duration-500 font-extralight tracking-[0.2em] uppercase relative group"
              >
                ORGANIZATIONAL
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff6b35] transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a
                href="#speaking"
                className="text-xs text-[#1a3a52]/60 hover:text-[#ff6b35] transition-all duration-500 font-extralight tracking-[0.2em] uppercase relative group"
              >
                SPEAKING
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff6b35] transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-xs text-[#1a3a52]/60 hover:text-[#ff6b35] transition-all duration-500 font-extralight tracking-[0.2em] uppercase relative group"
              >
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff6b35] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 relative">
        {/* Floating Geometric Accents - Desktop Only */}
        {!isMobile && (
          <>
            <div
              className="absolute top-20 right-[10%] w-64 h-64 bg-gradient-to-br from-[#ff6b35]/5 to-transparent rounded-full blur-3xl pointer-events-none"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${
                  mousePosition.y * 0.5
                }px)`,
                transition: "transform 0.3s ease-out",
              }}
            ></div>
            <div
              className="absolute bottom-40 left-[5%] w-96 h-96 bg-gradient-to-tr from-[#1a3a52]/5 to-transparent rounded-full blur-3xl pointer-events-none"
              style={{
                transform: `translate(${-mousePosition.x * 0.3}px, ${
                  -mousePosition.y * 0.3
                }px)`,
                transition: "transform 0.3s ease-out",
              }}
            ></div>
          </>
        )}

        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8 md:space-y-16 relative z-10">
              <div className="space-y-6 md:space-y-10">
                <div className="overflow-hidden">
                  <h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-[#1a3a52] leading-[0.9] tracking-tighter"
                    style={
                      !isMobile
                        ? {
                            transform: `translateX(${mousePosition.x * 0.2}px)`,
                            transition: "transform 0.5s ease-out",
                          }
                        : {}
                    }
                  >
                    Sparking
                    <br />
                    <span className="inline-block mt-2">Change.</span>
                  </h1>
                </div>

                <div className="overflow-hidden">
                  <h2
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight bg-gradient-to-r from-[#ff6b35] via-[#ff8c5a] to-[#ff6b35] bg-clip-text text-transparent leading-[0.9] tracking-tighter"
                    style={
                      !isMobile
                        ? {
                            transform: `translateX(${
                              -mousePosition.x * 0.2
                            }px)`,
                            transition: "transform 0.5s ease-out",
                          }
                        : {}
                    }
                  >
                    Igniting
                    <br />
                    <span className="inline-block mt-2">Transformation.</span>
                  </h2>
                </div>
              </div>

              {/* Elegant Divider */}
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-[#ff6b35] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[#ff6b35]"></div>
                <div className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-[#ff6b35]/50 to-transparent"></div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <p className="text-base md:text-xl text-[#1a3a52]/70 leading-[1.8] font-light max-w-2xl tracking-wide">
                  When leadership is unclear and execution falters, results
                  suffer. We help organizations and leaders build clarity,
                  capability, and systems that drive measurable
                  performance—locally and globally.
                </p>

                <p className="text-sm md:text-base text-[#1a3a52]/50 leading-[1.9] font-extralight max-w-xl tracking-wide italic border-l-2 border-[#ff6b35]/30 pl-4 md:pl-6">
                  Catalystium Solutions partners with organizations and
                  professionals to strengthen leadership, align strategy, and
                  embed learning so change is sustainable.
                </p>
              </div>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-8 md:pt-12">
                <a
                  href="#consultation"
                  className="group relative bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] text-white px-8 md:px-12 py-4 md:py-5 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,107,53,0.4)] hover:scale-[1.02] text-center"
                >
                  <span className="relative z-10 text-xs tracking-[0.15em] md:tracking-[0.2em] font-light uppercase flex items-center justify-center gap-2 md:gap-3">
                    BOOK A CONSULTATION
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-[#1a3a52] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>

                <a
                  href="#solutions"
                  className="group relative border border-[#1a3a52]/20 text-[#1a3a52] px-8 md:px-12 py-4 md:py-5 overflow-hidden transition-all duration-500 hover:border-[#1a3a52]/60 hover:shadow-[0_20px_60px_rgba(26,58,82,0.15)] backdrop-blur-sm bg-white/50 text-center"
                >
                  <span className="relative z-10 text-xs tracking-[0.15em] md:tracking-[0.2em] font-light uppercase flex items-center justify-center gap-2 md:gap-3">
                    EXPLORE SOLUTIONS
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 group-hover:rotate-45 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 md:pt-12 flex flex-wrap items-center gap-6 md:gap-12 opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#ff6b35]/20 to-transparent border border-[#ff6b35]/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#ff6b35]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-light text-[#1a3a52] tracking-wider">
                      Global Expertise
                    </p>
                    <p className="text-xs font-extralight text-[#1a3a52]/50">
                      Local Impact
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#ff6b35]/20 to-transparent border border-[#ff6b35]/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#ff6b35]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-light text-[#1a3a52] tracking-wider">
                      Measurable Results
                    </p>
                    <p className="text-xs font-extralight text-[#1a3a52]/50">
                      Proven Impact
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div
              className="lg:col-span-6 relative mt-12 lg:mt-0"
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
              <div
                className="relative aspect-[3/4] group"
                style={
                  !isMobile
                    ? {
                        transform: `perspective(1000px) rotateY(${
                          mousePosition.x * 0.3
                        }deg) rotateX(${-mousePosition.y * 0.3}deg)`,
                        transition: "transform 0.3s ease-out",
                      }
                    : {}
                }
              >
                {/* Glossy Glass Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#1a3a52]/5 backdrop-blur-3xl rounded-2xl border border-white/20 shadow-[0_40px_100px_rgba(26,58,82,0.2)]"></div>

                {/* Main Image */}
                <div className="relative h-full overflow-hidden rounded-2xl">
                  <img
                    src={img}
                    alt="Professional team collaboration"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? "scale-110 brightness-110" : "scale-100"
                    }`}
                    style={{
                      filter: isHovered
                        ? "saturate(1.2) contrast(1.1)"
                        : "saturate(1) contrast(1)",
                    }}
                  />

                  {/* Glossy Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b35]/10 via-transparent to-[#1a3a52]/10 mix-blend-overlay"></div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Floating Card */}
                <div
                  className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 bg-white/90 backdrop-blur-xl p-6 md:p-10 shadow-[0_30px_90px_rgba(26,58,82,0.25)] border border-white/40 rounded-xl"
                  style={
                    !isMobile
                      ? {
                          transform: `translateY(${mousePosition.y * 0.5}px)`,
                          transition: "transform 0.3s ease-out",
                        }
                      : {}
                  }
                >
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-4xl md:text-7xl font-extralight bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] bg-clip-text text-transparent">
                      Proven
                    </p>
                    <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-[#ff6b35] to-transparent"></div>
                    <p className="text-xs tracking-[0.2em] text-[#1a3a52]/70 uppercase font-light">
                      Framework
                    </p>
                    <p className="text-xs text-[#1a3a52]/50 font-extralight">
                      Insight to Action
                    </p>
                  </div>
                </div>

                {/* Decorative Elements - Desktop Only */}
                {!isMobile && (
                  <>
                    <div
                      className="absolute -top-6 -left-6 w-32 h-32 border border-[#ff6b35]/20 rounded-full pointer-events-none"
                      style={{
                        transform: `translate(${-mousePosition.x * 0.8}px, ${
                          -mousePosition.y * 0.8
                        }px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    ></div>
                    <div
                      className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#ff6b35]/20 to-transparent rounded-lg backdrop-blur-sm pointer-events-none"
                      style={{
                        transform: `translate(${mousePosition.x * 0.6}px, ${
                          mousePosition.y * 0.6
                        }px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    ></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Paths Section */}
      <section className="bg-gradient-to-b from-[#f5f5f0] to-white py-20 md:py-40 px-6 md:px-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #1a3a52 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-3xl md:text-5xl font-extralight text-[#1a3a52] tracking-tight mb-6">
              Three Paths to{" "}
              <span className="text-[#ff6b35]">Transformation</span>
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#ff6b35]"></div>
              <div className="w-2 h-2 rounded-full bg-[#ff6b35]"></div>
              <div className="w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#ff6b35]"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            {[
              {
                number: "01",
                title: "Coaching & Leadership Development",
                description:
                  "Building clarity, confidence, and capability in leaders and emerging talent.",
              },
              {
                number: "02",
                title: "Organizational Development & Strategy",
                description:
                  "Aligning leadership, strategy, and systems to translate vision into measurable outcomes.",
              },
              {
                number: "03",
                title: "Speaking & Facilitation",
                description:
                  "Engaging, actionable learning sessions that inspire change and equip leaders with practical tools.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="space-y-6 md:space-y-8 group relative"
                style={
                  !isMobile
                    ? {
                        transform: `translateY(${
                          mousePosition.y * 0.1 * (index + 1)
                        }px)`,
                        transition: "transform 0.5s ease-out",
                      }
                    : {}
                }
              >
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-[#ff6b35]/20 flex items-center justify-center transition-all duration-500 group-hover:border-[#ff6b35] group-hover:bg-gradient-to-br group-hover:from-[#ff6b35]/10 group-hover:to-transparent backdrop-blur-sm">
                    <span className="text-xl md:text-2xl font-extralight text-[#ff6b35]">
                      {item.number}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#ff6b35]/5 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
                </div>

                <h4 className="text-2xl md:text-3xl font-light text-[#1a3a52] tracking-tight group-hover:text-[#ff6b35] transition-colors duration-300">
                  {item.title}
                </h4>

                <div className="w-12 h-[1px] bg-gradient-to-r from-[#ff6b35] to-transparent"></div>

                <p className="text-sm md:text-base text-[#1a3a52]/60 leading-[1.9] font-light tracking-wide">
                  {item.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-transparent to-[#ff6b35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Service CTAs */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 mt-12 md:mt-20">
            <a
              href="#coaching"
              className="group relative border border-[#ff6b35]/30 text-[#1a3a52] px-8 md:px-10 py-3 md:py-4 overflow-hidden transition-all duration-500 hover:border-[#ff6b35] hover:shadow-[0_20px_60px_rgba(255,107,53,0.2)] backdrop-blur-sm bg-white/50 text-center"
            >
              <span className="relative z-10 text-xs tracking-[0.15em] md:tracking-[0.2em] font-light uppercase">
                EXPLORE COACHING
              </span>
            </a>
            <a
              href="#organizational"
              className="group relative border border-[#ff6b35]/30 text-[#1a3a52] px-8 md:px-10 py-3 md:py-4 overflow-hidden transition-all duration-500 hover:border-[#ff6b35] hover:shadow-[0_20px_60px_rgba(255,107,53,0.2)] backdrop-blur-sm bg-white/50 text-center"
            >
              <span className="relative z-10 text-xs tracking-[0.15em] md:tracking-[0.2em] font-light uppercase">
                ORGANIZATIONAL SOLUTIONS
              </span>
            </a>
            <a
              href="#speaking"
              className="group relative border border-[#ff6b35]/30 text-[#1a3a52] px-8 md:px-10 py-3 md:py-4 overflow-hidden transition-all duration-500 hover:border-[#ff6b35] hover:shadow-[0_20px_60px_rgba(255,107,53,0.2)] backdrop-blur-sm bg-white/50 text-center"
            >
              <span className="relative z-10 text-xs tracking-[0.15em] md:tracking-[0.2em] font-light uppercase">
                INVITE ESTHER TO SPEAK
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* The Catalystium Difference */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff6b35]/5 to-transparent pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h3 className="text-3xl md:text-5xl font-extralight text-[#1a3a52] tracking-tight mb-4 md:mb-6">
              The <span className="text-[#ff6b35]">Catalystium</span> Difference
            </h3>
            <p className="text-base md:text-xl text-[#1a3a52]/60 font-light tracking-wide">
              Practical, Measurable, Context-Aware Transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Proven Framework",
                description:
                  "A tested approach turning insight into action, and action into results.",
              },
              {
                title: "Strategy Meets Execution",
                description:
                  "We develop leaders' decision-making, accountability, and team alignment so strategies are implemented successfully.",
              },
              {
                title: "Accountable Results",
                description:
                  "Through practical Monitoring, Evaluation, and Learning (MEL), we track outcomes, not just activities.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 bg-gradient-to-br from-white to-[#f5f5f0] rounded-xl border border-[#1a3a52]/5 hover:border-[#ff6b35]/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(26,58,82,0.1)]"
                style={
                  !isMobile
                    ? {
                        transform: `translateY(${
                          mousePosition.y * 0.05 * (index + 1)
                        }px)`,
                        transition: "transform 0.5s ease-out",
                      }
                    : {}
                }
              >
                <h4 className="text-xl md:text-2xl font-light text-[#1a3a52] tracking-tight mb-4 group-hover:text-[#ff6b35] transition-colors duration-300">
                  {item.title}
                </h4>
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#ff6b35] to-transparent mb-4 md:mb-6"></div>
                <p className="text-sm md:text-base text-[#1a3a52]/60 leading-[1.9] font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
