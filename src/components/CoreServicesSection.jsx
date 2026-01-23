import React, { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  ArrowRight,
  Target,
  TrendingUp,
  MessageSquare,
  Award,
  Users,
  Zap,
} from "lucide-react";

export default function CoreServicesSection() {
  const [scrollY, setScrollY] = useState(0);
  const servicesRef = useRef(null);

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
      features: [
        "1:1 Executive Coaching",
        "Group Coaching",
        "Leadership Development",
      ],
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Organizational Development",
      description:
        "Strategic solutions that align teams, strengthen systems, and accelerate results.",
      color: "blue",
      features: ["Strategy Alignment", "Team Development", "Change Management"],
    },
    {
      id: 3,
      icon: MessageSquare,
      title: "Speaking & Insights",
      description:
        "Keynotes and workshops that inspire action and deepen leadership capability.",
      color: "orange",
      features: ["Keynote Speaking", "Workshops", "Leadership Insights"],
    },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#f86f17]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#efe7df] px-5 py-2 rounded-full mb-6 border border-blue-700/10">
              <Briefcase className="w-4 h-4 text-blue-700" strokeWidth={2} />
              <span className="text-xs font-medium text-[#6e6a64] tracking-wider">
                Our Core Services
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-[#151412] tracking-tight mb-4 leading-tight">
              <span className="font-semibold text-blue-700">Coaching</span> &
              Organizational Solutions
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-20 h-px bg-blue-700/20"></div>
              <Award className="w-4 h-4 text-[#f86f17]" strokeWidth={1.5} />
              <div className="w-20 h-px bg-blue-700/20"></div>
            </div>

            <p className="text-base md:text-lg text-[#6e6a64] font-light max-w-3xl mx-auto leading-relaxed">
              We partner with leaders and organizations to build capability,
              drive alignment, and deliver measurable results through coaching,
              strategy, and insight.
            </p>
          </div>

          {/* Services Grid - Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="group relative">
                  <div
                    className={`absolute -inset-px rounded-2xl ${
                      service.color === "orange"
                        ? "bg-[#f86f17]/10"
                        : "bg-blue-700/10"
                    } opacity-0 group-hover:opacity-100 transition-opacity blur-sm`}
                  ></div>

                  <div className="relative h-full bg-[#efe7df] rounded-2xl p-8 border border-[#d4c4b4] group-hover:border-blue-700/30 transition-all">
                    <div
                      className={`w-16 h-16 rounded-xl ${
                        service.color === "orange"
                          ? "bg-[#f86f17]"
                          : "bg-blue-700"
                      } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    <h3 className="text-xl font-semibold text-[#151412] mb-3">
                      {service.title}
                    </h3>

                    <div
                      className={`w-12 h-px ${
                        service.color === "orange"
                          ? "bg-[#f86f17]"
                          : "bg-blue-700"
                      } mb-4`}
                    ></div>

                    <p className="text-sm text-[#6e6a64] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div
                            className={`w-1 h-1 rounded-full ${
                              service.color === "orange"
                                ? "bg-[#f86f17]"
                                : "bg-blue-700"
                            } mt-2 flex-shrink-0`}
                          ></div>
                          <span className="text-xs text-[#6e6a64]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Hover arrow */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div
                        className={`inline-flex items-center gap-2 text-sm ${
                          service.color === "orange"
                            ? "text-[#f86f17]"
                            : "text-blue-700"
                        } font-medium`}
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Services Scroll - Mobile */}
          <div
            className="md:hidden overflow-x-auto -mx-6 px-6 mb-16"
            ref={servicesRef}
          >
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="w-80 flex-shrink-0">
                    <div className="relative h-full bg-[#efe7df] rounded-2xl p-8 border border-[#d4c4b4]">
                      <div
                        className={`w-16 h-16 rounded-xl ${
                          service.color === "orange"
                            ? "bg-[#f86f17]"
                            : "bg-blue-700"
                        } flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>

                      <h3 className="text-xl font-semibold text-[#151412] mb-3">
                        {service.title}
                      </h3>

                      <div
                        className={`w-12 h-px ${
                          service.color === "orange"
                            ? "bg-[#f86f17]"
                            : "bg-blue-700"
                        } mb-4`}
                      ></div>

                      <p className="text-sm text-[#6e6a64] leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div
                              className={`w-1 h-1 rounded-full ${
                                service.color === "orange"
                                  ? "bg-[#f86f17]"
                                  : "bg-blue-700"
                              } mt-2 flex-shrink-0`}
                            ></div>
                            <span className="text-xs text-[#6e6a64]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom separator */}
      <div className="relative h-px bg-[#efe7df]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
          <div className="w-12 h-px bg-blue-700/20"></div>
          <div className="w-2 h-2 rounded-full bg-blue-700"></div>
          <div className="w-12 h-px bg-blue-700/20"></div>
        </div>
      </div>
    </div>
  );
}
