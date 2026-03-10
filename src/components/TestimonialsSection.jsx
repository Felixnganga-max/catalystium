import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import muthomi from "../images/muthomi.png";
import sr from "../assets/sr.jpg";
import mt from "../assets/mt.jpg";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Muthomi B Mwiti",
      title: "Royal Gather Inc",
      quote:
        "Partnering with Coach Essy to deliver the Master Class on Planning was a deeply enriching experience for the Royal Gather Inc. community. She brought a rare blend of warmth, empathy, and practical insight that created a safe and engaging learning environment for our participants. Her facilitation was both inspiring and highly actionable, helping our members gain clarity, structure their goals, and approach planning with confidence and purpose. The impact of her session was evident in the feedback we received, with many describing it as timely, transformative, and empowering. Coach Essy is a gifted personal coach and trainer whose relational approach and depth of content leave a lasting impression.",
      image: muthomi,
    },
    {
      name: "Dr. Miriam",
      title: "Mountain Balm Medical Centre",
      quote:
        "Coach Essy's sessions did something I didn't expect — they helped me see my medical practice not just as a clinical space, but as a living, breathing mission. I came in thinking I needed business strategy. What I received was a deeper understanding of myself as a leader, a healer, and a visionary. She helped me reconnect with why I started Mountain Balm in the first place, and from that clarity, everything else — our team culture, patient experience, and growth — began to align. Her coaching is an investment that goes far beyond the boardroom. It reaches the soul of your business.",
      image: mt,
    },
    {
      name: "Felix Ngunga",
      title: "Developer - Serenly Digital Marketing",
      quote:
        "Before working with Coach Essy, I was running a digital agency on instinct and caffeine. Her coaching gave me structure, but more importantly, it gave me self-awareness. I understood for the first time how my own patterns, fears, and blind spots were shaping my business decisions. The planning masterclass was a turning point — I walked out with a roadmap for Serenely that was rooted in both strategy and purpose. Coach Essy has this extraordinary ability to hold space for your growth while also challenging you to think bigger. Our agency has not been the same since, and neither have I.",
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

  return (
    <div className="relative mb-20 min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 overflow-hidden py-20 px-4 md:px-8">
      {/* Gradient Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 via-transparent to-orange-300/20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Single Card with Stars */}
        <div className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] shadow-2xl p-8 md:p-12 transition-all duration-500 hover:shadow-3xl">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Left Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0 order-2 md:order-1">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-8 ring-white/50 shadow-xl">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-6 order-1 md:order-2">
              {/* Stars */}
              <div className="flex gap-2 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="space-y-4">
                <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-light text-center md:text-left">
                  {testimonials[currentSlide].quote}
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="text-center md:text-left">
                <p className="text-base font-semibold text-gray-900">
                  — {testimonials[currentSlide].name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentSlide].title}
                </p>
              </div>

              {/* Navigation Dots & Arrows */}
              <div className="flex items-center justify-center md:justify-start gap-6 pt-6">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-8 bg-orange-400"
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
