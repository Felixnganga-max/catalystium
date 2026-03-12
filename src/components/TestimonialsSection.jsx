import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import muthomi from "../images/muthomi.png";
import sr from "../assets/sr.jpg";
import mt from "../assets/mt.jpg";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(null);

  const testimonials = [
    {
      name: "Muthomi B Mwiti",
      title: "Royal Gather Inc",
      quote:
        "Partnering with Coach Essy to deliver the Master Class on Planning was a deeply enriching experience for the Royal Gather Inc. community. She brought a rare blend of warmth, empathy, and practical insight that created a safe and engaging learning environment for our participants. Her facilitation was both inspiring and highly actionable, helping our members gain clarity, structure their goals, and approach planning with confidence and purpose.",
      image: muthomi,
    },
    {
      name: "Dr. Mercy",
      title: "Mountain Balm Medical Centre",
      quote:
        "Coach Essy's sessions did something I didn't expect — they helped me see my medical practice not just as a clinical space, but as a living, breathing mission. I came in thinking I needed business strategy. What I received was a deeper understanding of myself as a leader, a healer, and a visionary. She helped me reconnect with why I started Mountain Balm in the first place, and from that clarity, everything else — our team culture, patient experience, and growth — began to align.",
      image: mt,
    },
    {
      name: "Felix Ngunga",
      title: "Developer - Serenly Digital Marketing",
      quote:
        "Before working with Coach Essy, I was running a digital agency on instinct and caffeine. Her coaching gave me structure, but more importantly, it gave me self-awareness. I understood for the first time how my own patterns, fears, and blind spots were shaping my business decisions. The planning masterclass was a turning point — I walked out with a roadmap for Serenely that was rooted in both strategy and purpose.",
      image: sr,
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && testimonials.length > 1) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating, testimonials.length, currentSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 overflow-hidden py-12 px-4 md:px-8">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 via-transparent to-orange-300/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── DESKTOP: 3 columns ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed font-light flex-1">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-orange-100">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-200 flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE: swipe carousel ── */}
        <div
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-5 transition-all duration-500">
            <div className="flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-gray-800 leading-relaxed font-light text-center">
                {testimonials[currentSlide].quote}
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-2 pt-2 border-t border-orange-100">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/50 shadow-md">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  — {testimonials[currentSlide].name}
                </p>
                <p className="text-xs text-gray-500">
                  {testimonials[currentSlide].title}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 pt-1">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>

                <div className="flex gap-1.5">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-6 bg-orange-400"
                          : "w-1.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
