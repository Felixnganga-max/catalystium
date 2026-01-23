import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, Award, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const carouselRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
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

  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "CEO, TechVentures Inc.",
      quote:
        "Working with Catalystium transformed how our leadership team operates. The coaching wasn't just insightful—it was actionable.",
      color: "blue",
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder, Innovation Capital",
      quote:
        "The C.A.T.A.L.Y.S.T™ framework gave us the structure we needed to turn vision into reality. Our team is more aligned than ever.",
      color: "orange",
    },
    {
      name: "Jennifer Chen",
      title: "COO, Global Health Alliance",
      quote:
        "Catalystium didn't just coach us—they equipped us with tools to sustain high performance. Our organizational capacity has grown exponentially.",
      color: "blue",
    },
  ];

  const handleDotClick = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating, testimonials.length]);

  return (
    <div className="relative bg-white overflow-hidden" ref={carouselRef}>
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large circles */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-blue-700/10"
          style={{
            transform: !isMobile
              ? `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
              : "none",
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 rounded-full border-2 border-[#f86f17]/10"
          style={{
            transform: !isMobile
              ? `translate(${mousePos.x * -0.015}px, ${mousePos.y * 0.015}px) rotate(${scrollY * 0.1}deg)`
              : "none",
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        {/* Squares */}
        <div
          className="absolute top-20 right-1/4 w-24 h-24 border border-blue-700/10 rotate-45"
          style={{
            transform: !isMobile
              ? `rotate(${45 + scrollY * 0.05}deg) translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`
              : "rotate(45deg)",
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-[#f86f17]/10 rotate-12"
          style={{
            transform: !isMobile
              ? `rotate(${12 + scrollY * -0.05}deg)`
              : "rotate(12deg)",
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        {/* Small accent circles */}
        <div className="absolute top-40 left-20 w-4 h-4 rounded-full bg-blue-700/20"></div>
        <div className="absolute bottom-40 right-32 w-3 h-3 rounded-full bg-[#f86f17]/20"></div>
        <div className="absolute top-1/3 right-16 w-2 h-2 rounded-full bg-blue-700/30"></div>
      </div>

      {/* Main Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#efe7df] px-5 py-2 rounded-full mb-6 border border-blue-700/10">
              <Award className="w-4 h-4 text-blue-700" strokeWidth={2} />
              <span className="text-xs font-medium text-[#6e6a64] tracking-wider">
                Client Success Stories
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-light text-[#151412] mb-4 tracking-tight">
              Trusted by{" "}
              <span className="font-semibold text-blue-700">Leaders</span>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-20 h-px bg-blue-700/20"></div>
              <Sparkles className="w-4 h-4 text-[#f86f17]" strokeWidth={1.5} />
              <div className="w-20 h-px bg-blue-700/20"></div>
            </div>

            <p className="text-base text-[#6e6a64] max-w-2xl mx-auto">
              Hear from executives and leaders who transformed their
              organizations
            </p>
          </div>

          {/* Desktop: Animated Cards Grid */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.15}s backwards`,
                  }}
                >
                  {/* Animated border */}
                  <div
                    className={`absolute -inset-1 rounded-2xl ${
                      testimonial.color === "blue"
                        ? "bg-blue-700/20"
                        : "bg-[#f86f17]/20"
                    } opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl`}
                  ></div>

                  <div className="relative bg-white rounded-2xl p-8 border border-[#efe7df] group-hover:border-blue-700/30 transition-all duration-500 h-full flex flex-col">
                    {/* Quote icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${
                        testimonial.color === "blue"
                          ? "bg-blue-700"
                          : "bg-[#f86f17]"
                      } flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Quote className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#f86f17] fill-[#f86f17]"
                          style={{
                            animation: `starPop 0.3s ease-out ${i * 0.1}s backwards`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="flex-1 mb-6">
                      <p className="text-sm text-[#6e6a64] leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    {/* Author */}
                    <div className="pt-6 border-t border-[#efe7df]">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-full ${
                            testimonial.color === "blue"
                              ? "bg-blue-700/10"
                              : "bg-[#f86f17]/10"
                          } flex items-center justify-center flex-shrink-0`}
                        >
                          <span
                            className={`text-lg font-semibold ${
                              testimonial.color === "blue"
                                ? "text-blue-700"
                                : "text-[#f86f17]"
                            }`}
                          >
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#151412]">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-[#6e6a64]">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <div
                  key={index + 3}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${(index + 3) * 0.15}s backwards`,
                  }}
                >
                  <div
                    className={`absolute -inset-1 rounded-2xl ${
                      testimonial.color === "blue"
                        ? "bg-blue-700/20"
                        : "bg-[#f86f17]/20"
                    } opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl`}
                  ></div>

                  <div className="relative bg-white rounded-2xl p-8 border border-[#efe7df] group-hover:border-blue-700/30 transition-all duration-500 h-full flex flex-col">
                    <div
                      className={`w-12 h-12 rounded-xl ${
                        testimonial.color === "blue"
                          ? "bg-blue-700"
                          : "bg-[#f86f17]"
                      } flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Quote className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#f86f17] fill-[#f86f17]"
                          style={{
                            animation: `starPop 0.3s ease-out ${i * 0.1}s backwards`,
                          }}
                        />
                      ))}
                    </div>

                    <blockquote className="flex-1 mb-6">
                      <p className="text-sm text-[#6e6a64] leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    <div className="pt-6 border-t border-[#efe7df]">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-full ${
                            testimonial.color === "blue"
                              ? "bg-blue-700/10"
                              : "bg-[#f86f17]/10"
                          } flex items-center justify-center flex-shrink-0`}
                        >
                          <span
                            className={`text-lg font-semibold ${
                              testimonial.color === "blue"
                                ? "text-blue-700"
                                : "text-[#f86f17]"
                            }`}
                          >
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#151412]">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-[#6e6a64]">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-80 flex-shrink-0">
                  <div className="relative bg-white rounded-2xl p-8 border border-[#efe7df] h-full flex flex-col shadow-lg">
                    <div
                      className={`w-12 h-12 rounded-xl ${
                        testimonial.color === "blue"
                          ? "bg-blue-700"
                          : "bg-[#f86f17]"
                      } flex items-center justify-center mb-6`}
                    >
                      <Quote className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#f86f17] fill-[#f86f17]"
                        />
                      ))}
                    </div>

                    <blockquote className="flex-1 mb-6">
                      <p className="text-sm text-[#6e6a64] leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    <div className="pt-6 border-t border-[#efe7df]">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-full ${
                            testimonial.color === "blue"
                              ? "bg-blue-700/10"
                              : "bg-[#f86f17]/10"
                          } flex items-center justify-center flex-shrink-0`}
                        >
                          <span
                            className={`text-lg font-semibold ${
                              testimonial.color === "blue"
                                ? "text-blue-700"
                                : "text-[#f86f17]"
                            }`}
                          >
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#151412]">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-[#6e6a64]">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
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

        @keyframes starPop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
