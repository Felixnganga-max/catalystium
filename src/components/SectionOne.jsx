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
  Zap,
} from "lucide-react";

export default function SectionOne() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isVisible = rect.top < viewportHeight && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  return (
    <div
      className="relative overflow-hidden -mt-20 bg-white font-poppins"
      ref={containerRef}
    >
      {/* Background Container - FIXED POSITIONING for parallax effect */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&fit=crop&auto=format"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform:
                !isMobile && isInView
                  ? `translateY(${scrollY * 0.5}px) scale(1.1)`
                  : "none",
              transition: "transform 0.05s linear",
            }}
          />

          <div className="absolute inset-0 bg-blue-600/80 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-blue-900/40 to-blue-950/60"></div>

          <div
            className="absolute top-20 right-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            style={
              !isMobile && isInView
                ? {
                    transform: `translateY(${scrollY * 0.2}px)`,
                    opacity: 0.3,
                  }
                : { opacity: 0 }
            }
          ></div>

          <div
            className="absolute bottom-40 left-[8%] w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
            style={
              !isMobile && isInView
                ? {
                    transform: `translateY(${scrollY * -0.15}px)`,
                    opacity: 0.2,
                  }
                : { opacity: 0 }
            }
          ></div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* First Section */}
        <section className="pt-24 md:pt-32 pb-6 md:pb-8 px-6 md:px-12 min-h-screen flex items-center">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full shadow-lg">
                <Lightbulb className="w-4 h-4 text-blue-300" strokeWidth={2} />
                <span className="text-[10px] font-medium text-white/90 tracking-wider uppercase font-poppins">
                  Our Foundation
                </span>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.2] mb-4 font-gothic">
                  Sustainable Performance Starts with{" "}
                  <span className="font-semibold text-4xl text-blue-500">
                    Leadership Capacity
                  </span>
                </h2>
              </div>

              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-400/50"></div>
                <Sparkles className="w-4 h-4 text-blue-300" strokeWidth={2} />
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-400/50"></div>
              </div>

              <div className="space-y-4">
                <p className="text-sm md:text-base text-white/85 leading-relaxed font-light max-w-3xl mx-auto font-poppins">
                  At Catalystium Solutions, coaching is the foundation of
                  everything we do. We strengthen leaders' ability to navigate
                  complexity, align strategy with action, and embed learning for
                  long-term results.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 bg-blue-500/90 hover:bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium text-xs tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 font-poppins"
                >
                  <Target className="w-4 h-4" strokeWidth={2} />
                  See How Coaching Works
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="relative h-24 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"></div>
          </div>
          <div className="absolute top-1/2 animate-bounce">
            <div className="w-2 h-2 rounded-full bg-blue-400/60 shadow-lg"></div>
          </div>
        </div>

        {/* Second Section - ENHANCED WITH MAGIC */}
        <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 px-6 md:px-12 backdrop-blur-md bg-white/60 overflow-hidden">
          {/* Animated Orange Sparks Background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-spark"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              >
                <Zap
                  className="text-orange-500"
                  size={8 + Math.random() * 12}
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.8))",
                    opacity: 0.4 + Math.random() * 0.4,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Glowing Orange Orbs */}
          <div className="absolute top-20 right-[15%] w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div
            className="absolute bottom-40 left-[10%] w-80 h-80 bg-orange-600/15 rounded-full blur-[120px] animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[150px] animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Point Light Effect Following Mouse */}
          {!isMobile && (
            <div
              className="absolute w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[100px] pointer-events-none transition-all duration-300 ease-out"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          )}

          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-500 backdrop-blur-md border border-orange-500/30 px-5 py-2 rounded-full mb-8 shadow-lg shadow-orange-500/20">
                <Award className="w-5 h-5 text-orange-400" strokeWidth={2.5} />
                <span className="text-xs font-semibold text-white tracking-widest uppercase font-poppins">
                  Why Choose Us
                </span>
                <div className="w-1 h-1 rounded-full bg-orange-400 animate-pulse"></div>
              </div>

              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.15] mb-6 font-gothic">
                  The{" "}
                  <span className="relative inline-block font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Catalystium
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                  </span>{" "}
                  Difference
                </h2>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-orange-500/50"></div>
                  <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
                  <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-orange-500/50"></div>
                </div>
                <p className="text-lg md:text-xl text-orange-500/90 font-light max-w-3xl mx-auto leading-relaxed font-poppins">
                  Coaching-Driven, Measurable, Context-Aware Transformation
                </p>
              </div>
            </div>

            {/* Enhanced Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                {
                  icon: Sparkles,
                  title: "The C.A.T.A.L.Y.S.T™ Coaching Model",
                  description:
                    "A structured, coaching-led framework that turns reflection into insight, insight into action, and action into measurable results.",
                  image:
                    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&fit=crop&auto=format",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  icon: Users,
                  title: "Leadership in Action",
                  description:
                    "We coach leaders to make better decisions, build accountability, and align teams, ensuring strategies are implemented successfully.",
                  image:
                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop&auto=format",
                  color: "from-orange-600 to-orange-700",
                },
                {
                  icon: BarChart3,
                  title: "Coaching for Results",
                  description:
                    "Using practical Monitoring, Evaluation, and Learning (MEL), we track not just activities but the real outcomes of coaching, leadership, and team performance.",
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop&auto=format",
                  color: "from-orange-700 to-orange-800",
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

                  <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-800 group-hover:border-orange-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-orange-500/20 group-hover:-translate-y-2">
                    {/* Image with Overlay */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

                      {/* Floating Icon */}
                      <div className="absolute top-4 right-4">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        >
                          <item.icon
                            className="w-7 h-7 text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>

                      {/* Orange Spark Effect on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute animate-spark-fast"
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${30 + i * 10}%`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          >
                            <div className="w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/80"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-orange-300 transition-colors duration-300 font-gothic">
                        {item.title}
                      </h3>

                      <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full mb-4 group-hover:w-20 transition-all duration-500"></div>

                      <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light font-poppins">
                        {item.description}
                      </p>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Commitment Box */}
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse-slow"></div>

                <div className="relative p-8 md:p-10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-2xl border-2 border-orange-500/30 shadow-2xl overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tl from-orange-600/10 to-transparent rounded-full blur-2xl"></div>

                  {/* Floating Sparks */}
                  <div className="absolute top-4 right-8 animate-spark-float">
                    <Zap
                      className="w-4 h-4 text-orange-400"
                      style={{
                        filter: "drop-shadow(0 0 6px rgba(249, 115, 22, 0.8))",
                      }}
                    />
                  </div>
                  <div
                    className="absolute bottom-6 left-12 animate-spark-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <Zap
                      className="w-3 h-3 text-orange-500"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(249, 115, 22, 0.6))",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/50">
                        <CheckCircle2
                          className="w-7 h-7 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight font-gothic">
                          Our Commitment to You
                        </h4>
                        <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light font-poppins">
                          We create insight through coaching while maintaining a
                          relentless focus on action, ownership, and measurable
                          results—so transformation is practical, sustainable,
                          and real.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Transition */}
        <div className="h-16 bg-gradient-to-b from-slate-950 to-slate-900"></div>
      </div>

      <style jsx>{`
        @keyframes spark {
          0%,
          100% {
            opacity: 0;
            transform: translateY(0) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateY(-30px) scale(1);
          }
        }

        @keyframes spark-fast {
          0%,
          100% {
            opacity: 0;
            transform: translate(0, 0) scale(0.3);
          }
          50% {
            opacity: 1;
            transform: translate(10px, -20px) scale(1);
          }
        }

        @keyframes spark-float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .animate-spark {
          animation: spark infinite ease-in-out;
        }

        .animate-spark-fast {
          animation: spark-fast 2s infinite ease-in-out;
        }

        .animate-spark-float {
          animation: spark-float 3s infinite ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
