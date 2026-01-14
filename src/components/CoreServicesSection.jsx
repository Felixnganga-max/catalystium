import React, { useState, useEffect } from "react";
import {
  Briefcase,
  ArrowRight,
  Target,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export default function CoreServicesSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const services = [
    {
      id: 1,
      icon: Target,
      title: "Coaching",
      description:
        "Executive and leadership coaching that builds clarity, confidence, and sustained performance.",
      color: "orange",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Organizational Development",
      description:
        "Strategic solutions that align teams, strengthen systems, and accelerate results.",
      color: "blue",
    },
    {
      id: 3,
      icon: MessageSquare,
      title: "Speaking & Insights",
      description:
        "Keynotes and workshops that inspire action and deepen leadership capability.",
      color: "orange",
    },
  ];

  return (
    <div className="relative backdrop-blur-md bg-white/60 overflow-hidden font-poppins">
      {/* Background Patches */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-[800px] h-[700px] opacity-100"
          viewBox="0 0 500 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="orangePatch1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#f86f17", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ff8c5a", stopOpacity: 0.15 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M500,0 Q300,50 200,120 T100,250 L500,400 Z"
            fill="url(#orangePatch1)"
          />
        </svg>

        <svg
          className="absolute top-0 left-0 w-[850px] h-[800px] opacity-90"
          viewBox="0 0 450 500"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bluePatch1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#3b82f6", stopOpacity: 0.25 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#1e40af", stopOpacity: 0.1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q150,150 250,200 T350,350 L0,500 Z"
            fill="url(#bluePatch1)"
          />
        </svg>

        <svg
          className="absolute top-2 right-[10%] w-[800px] h-[500px] opacity-100"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="orangePatch2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#fb923c", stopOpacity: 0.35 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#f86f17", stopOpacity: 0.2 }}
              />
            </linearGradient>
          </defs>
          <ellipse
            cx="200"
            cy="150"
            rx="200"
            ry="150"
            fill="url(#orangePatch2)"
          />
        </svg>

        <div
          className="absolute top-[15%] left-[8%] w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"
          style={
            !isMobile
              ? {
                  transform: `translateY(${scrollY * 0.08}px)`,
                }
              : {}
          }
        ></div>

        <div className="absolute bottom-32 right-[12%] text-white/10 font-bold text-6xl tracking-tighter rotate-12 select-none font-gothic">
          EXCELLENCE
        </div>
      </div>

      {/* Main Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 relative">
        <div className="max-w-[1300px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-gray-300 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <Briefcase className="w-4 h-4 text-[#f86f17]" strokeWidth={2} />
              <span className="text-[10px] font-medium text-gray-700 tracking-wider uppercase font-poppins">
                Our Core Services
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight mb-4 leading-tight font-gothic">
                <span className="font-semibold text-[#f86f17]">Coaching</span> &
                Organizational Solutions
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed font-poppins">
                We partner with leaders and organizations to build capability,
                drive alignment, and deliver measurable results through
                coaching, strategy, and insight.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex flex-col items-center text-center group"
                >
                  <div
                    className={`w-20 h-20 rounded-full ${
                      service.color === "orange"
                        ? "bg-[#f86f17]/10 group-hover:bg-[#f86f17]/20"
                        : "bg-blue-100 group-hover:bg-blue-200"
                    } flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-md`}
                  >
                    <Icon
                      className={`w-10 h-10 ${
                        service.color === "orange"
                          ? "text-[#f86f17]"
                          : "text-blue-700"
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 font-gothic">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-poppins max-w-xs">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Learn More CTA */}
          <div className="text-center">
            <a
              href="/services"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white px-8 py-4 rounded-lg font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#f86f17]/30 hover:scale-105 font-poppins"
            >
              Explore Our Services
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Transition */}
      <div className="relative h-12 bg-gradient-to-b from-gray-200 to-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f86f17]/40"></div>
          <div className="w-2 h-2 rounded-full bg-[#f86f17]/40"></div>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f86f17]/40"></div>
        </div>
      </div>
    </div>
  );
}
