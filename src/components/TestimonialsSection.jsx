import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const allTestimonials = [
    {
      name: "Sarah Mitchell",
      title: "CEO, TechVentures Inc.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      quote:
        "Working with Catalystium transformed how our leadership team operates. The coaching wasn't just insightful—it was actionable.",
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder, Innovation Capital",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      quote:
        "The C.A.T.A.L.Y.S.T™ framework gave us the structure we needed to turn vision into reality. Our team is more aligned than ever.",
    },
    {
      name: "Jennifer Chen",
      title: "COO, Global Health Alliance",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      quote:
        "Catalystium didn't just coach us—they equipped us with tools to sustain high performance. Our organizational capacity has grown exponentially.",
    },
    {
      name: "David Okonkwo",
      title: "Executive Director, ADI",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote:
        "The leadership development program was transformative. Our emerging leaders are now driving change with confidence and clarity.",
    },
    {
      name: "Lisa Thompson",
      title: "VP Strategy, GlobalTech",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      quote:
        "The measurable impact on our team's performance exceeded all expectations. This is coaching that delivers real, tangible results.",
    },
    {
      name: "Ahmed Hassan",
      title: "Managing Director, Apex Group",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      quote:
        "Catalystium's approach to leadership coaching is unlike anything we've experienced. Strategic, practical, and deeply transformative.",
    },
  ];

  const desktopSlides = [
    allTestimonials.slice(0, 3),
    allTestimonials.slice(3, 6),
  ];

  const slides = isMobile ? allTestimonials.map((t) => [t]) : desktopSlides;
  const totalSlides = slides.length;

  const handleDotClick = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      handleDotClick(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      handleDotClick(currentSlide - 1);
    }
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  return (
    <div className="relative backdrop-blur-md bg-white/60 overflow-hidden font-poppins">
      {/* Decorative Background Shapes */}
      <div className="absolute top-20 right-12 w-96 h-96 rounded-full bg-blue-300 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-40 left-16 w-80 h-80 bg-orange-500 opacity-20 blur-3xl"></div>

      {/* Orange Accent Shape with Text */}
      <div className="absolute top-1/3 left-8 w-64 h-48 bg-orange-500 opacity-15 rounded-3xl transform -rotate-12 hidden lg:block"></div>
      <div className="absolute top-1/3 left-8 w-64 h-48 flex items-center justify-center transform -rotate-12 hidden lg:block">
        <span className="text-white text-6xl font-bold opacity-20 font-gothic">
          500+
        </span>
      </div>

      {/* Blue Accent Shape */}
      <div className="absolute bottom-20 right-20 w-72 h-56 bg-blue-400 opacity-10 rounded-3xl transform rotate-6 hidden lg:block"></div>

      {/* Main Section */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-orange-600 tracking-wider uppercase mb-3 font-poppins">
              Our Clients
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-gothic">
              Reviews
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div
            className="relative min-h-[520px] md:min-h-[520px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {slides.map((slideGroup, slideIndex) => (
              <div
                key={slideIndex}
                className={`absolute inset-0 transition-all duration-600 ${
                  slideIndex === currentSlide
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {slideGroup.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="mb-8">
                        <p className="text-gray-700 leading-relaxed text-sm font-poppins">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 font-gothic">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-600 font-poppins">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-500 w-8"
                    : "bg-orange-300 hover:bg-orange-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
