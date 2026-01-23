import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, Phone, Sparkles, Zap } from "lucide-react";

export default function CTASection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  return (
    <div className="relative -mt-20 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large animated circles */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-2 border-blue-700/10"
          style={{
            transform: !isMobile
              ? `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.015}px) rotate(45deg)`
              : "rotate(45deg)",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full border border-[#f86f17]/10"
          style={{
            transform: !isMobile
              ? `translate(${mousePos.x * -0.015}px, ${mousePos.y * 0.02}px) rotate(-30deg)`
              : "rotate(-30deg)",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        ></div>

        {/* Floating squares */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-700/10"
          style={{
            transform: !isMobile
              ? `rotate(${mousePos.x * 0.05}deg)`
              : "rotate(15deg)",
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-[#f86f17]/10"
          style={{
            transform: !isMobile
              ? `rotate(${mousePos.y * -0.05}deg)`
              : "rotate(-20deg)",
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        {/* Small accent dots */}
        <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-blue-700/20"></div>
        <div className="absolute top-40 right-32 w-2 h-2 rounded-full bg-[#f86f17]/30"></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 rounded-full bg-blue-700/15"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-[#f86f17]/20"></div>

        {/* Gradient glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#f86f17]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Section */}
      <section className="py-32 md:py-40 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Floating badge */}
          <div
            className="text-center mb-12"
            style={{
              animation: "floatBadge 3s ease-in-out infinite",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-blue-700/20 shadow-lg">
              <Sparkles className="w-4 h-4 text-[#f86f17]" strokeWidth={2} />
              <span className="text-xs font-medium text-[#6e6a64] tracking-wider">
                Let's Connect
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-700 animate-pulse"></div>
            </div>
          </div>

          {/* Main heading with stagger animation */}
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-7xl font-light text-[#151412] mb-6 tracking-tight leading-tight"
              style={{ animation: "fadeInUp 0.8s ease-out" }}
            >
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-[#f86f17]">
                Reach
              </span>{" "}
              Us
            </h2>

            <div
              className="flex items-center justify-center gap-4 mb-6"
              style={{ animation: "fadeInUp 0.8s ease-out 0.2s backwards" }}
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-700/30 to-transparent"></div>
              <Zap className="w-5 h-5 text-[#f86f17]" strokeWidth={1.5} />
              <div className="w-24 h-px bg-gradient-to-l from-transparent via-blue-700/30 to-transparent"></div>
            </div>

            <p
              className="text-base text-[#6e6a64] max-w-xl mx-auto"
              style={{ animation: "fadeInUp 0.8s ease-out 0.4s backwards" }}
            >
              Ready to transform your leadership? Get in touch with us today
            </p>
          </div>

          {/* Contact Cards with hover effects */}
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            {/* Email Card */}
            <div
              className="group relative"
              style={{ animation: "slideInLeft 0.8s ease-out 0.5s backwards" }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-700/20 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>

              <a
                href="mailto:info@catalystiumsolutions.com"
                className="relative flex items-center gap-6 bg-white rounded-2xl p-8 border border-[#efe7df] group-hover:border-blue-700/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-blue-700 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Mail className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f86f17] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>

                <div className="flex-1 text-left">
                  <div className="text-xs text-[#6e6a64] mb-2 font-medium tracking-wider">
                    EMAIL US
                  </div>
                  <div className="text-lg font-semibold text-[#151412] group-hover:text-blue-700 transition-colors duration-300">
                    info@catalystiumsolutions.com
                  </div>
                </div>

                <ArrowRight
                  className="w-6 h-6 text-blue-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500"
                  strokeWidth={2}
                />
              </a>
            </div>

            {/* Phone Card */}
            <div
              className="group relative"
              style={{ animation: "slideInRight 0.8s ease-out 0.6s backwards" }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f86f17]/20 to-[#ff8c5a]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>

              <a
                href="tel:+254712345678"
                className="relative flex items-center gap-6 bg-white rounded-2xl p-8 border border-[#efe7df] group-hover:border-[#f86f17]/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-[#f86f17] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Phone className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>

                <div className="flex-1 text-left">
                  <div className="text-xs text-[#6e6a64] mb-2 font-medium tracking-wider">
                    CALL US
                  </div>
                  <div className="text-lg font-semibold text-[#151412] group-hover:text-[#f86f17] transition-colors duration-300">
                    +254 712 345 678
                  </div>
                </div>

                <ArrowRight
                  className="w-6 h-6 text-[#f86f17] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500"
                  strokeWidth={2}
                />
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className="text-center"
            style={{ animation: "fadeInUp 0.8s ease-out 0.7s backwards" }}
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-blue-700 text-white px-10 py-5 rounded-full font-semibold text-sm tracking-wide hover:bg-blue-800 transition-all duration-300 shadow-2xl shadow-blue-700/30 hover:shadow-blue-700/50 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Get In Touch</span>
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes floatBadge {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
