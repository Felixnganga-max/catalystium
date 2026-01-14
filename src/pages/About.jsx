import React, { useState, useEffect, useRef } from "react";
import {
  Lightbulb,
  Brain,
  Compass,
  ArrowRight,
  Sparkles,
  Globe,
  Heart,
} from "lucide-react";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpeg";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [four];
  const nextSlide = () => setSlideIndex((s) => (s + 1) % slides.length);

  const philosophyPillars = [
    {
      icon: Brain,
      title: "Leadership in the AI Era",
      description:
        "As artificial intelligence reshapes industries and redefines work, human leadership becomes more critical than ever. Esther believes the future belongs to leaders who can navigate ambiguity, harness technology with wisdom, and lead with empathy in an automated world.",
      insight:
        "Technology amplifies capability, but only enlightened leadership ensures it serves humanity.",
    },
    {
      icon: Lightbulb,
      title: "Enlightenment Through Action",
      description:
        "True transformation isn't found in theory alone—it emerges through conscious action. Esther's approach integrates ancient wisdom with modern leadership science, helping leaders awaken to their full potential while driving measurable results.",
      insight:
        "Enlightenment isn't retreat from the world; it's deeper engagement with purpose.",
    },
    {
      icon: Compass,
      title: "Conscious Leadership",
      description:
        "In a world of noise and distraction, conscious leadership means leading from clarity, not chaos. It's about making decisions rooted in values, building systems that sustain growth, and creating organizations where people thrive alongside performance.",
      insight:
        "The most powerful strategy starts with self-awareness and extends to collective transformation.",
    },
  ];

  const journey = [
    {
      phase: "The Foundation",
      title: "From Vision to Purpose",
      description:
        "Esther's journey began with a fundamental question: How do we prepare leaders for a world being transformed by technology? With a background spanning organizational development, strategic leadership, and human potential, she recognized that traditional leadership models were insufficient for the AI era. Leaders needed more than skills—they needed wisdom, adaptability, and deep self-awareness.",
    },
    {
      phase: "The Awakening",
      title: "Leadership as Enlightenment",
      description:
        "Through years of coaching executives and transforming organizations, Esther discovered a pattern: the most effective leaders weren't just technically competent—they operated from a place of profound clarity and purpose. They had cultivated what she calls 'enlightened execution': the ability to see clearly, decide wisely, and act powerfully without losing their humanity in the process.",
    },
    {
      phase: "The Mission",
      title: "Catalystium is Born",
      description:
        "Catalystium Solutions emerged from this insight—a practice dedicated to developing leaders who can thrive in complexity, leverage technology without being diminished by it, and create organizations that are both high-performing and deeply human. It's coaching meets philosophy meets execution science.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4f0] font-sans text-[#111827]">
      <section className="pt-28">
        <div className="max-w-8xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7">
              <h1
                className="font-light leading-[0.9] text-[#0f172a] tracking-tight"
                style={{ fontSize: "clamp(3.2rem, 9vw, 6.5rem)" }}
              >
                Founder at
                <br />
                Catalystium
              </h1>
            </div>
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm md:text-base text-[#374151] max-w-md">
                A story of enlightenment, technology, and the human capacity to
                lead with wisdom in an age of acceleration. Meet Esther Mburu,
                founder of Catalystium Solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div
            className="w-full h-[420px] md:h-[520px] lg:h-[560px] rounded-sm overflow-hidden border border-white/60 shadow-lg relative"
            ref={heroRef}
          >
            <img
              src={slides[slideIndex]}
              alt="Esther Mburu - Catalystium Founder"
              className="w-full h-full object-cover object-top"
              style={{
                transform: !isMobile
                  ? `translateY(${-(scrollY * 0.03)}px)`
                  : undefined,
                transition: "transform .15s linear",
              }}
            />
            <div className="absolute left-8 bottom-8">
              <div
                className="text-white font-bold"
                style={{
                  fontSize: "clamp(2rem, 6vw, 4.25rem)",
                  letterSpacing: "0.02em",
                }}
              >
                ESTHER MBURU
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-28 h-28">
                <svg
                  viewBox="0 0 120 120"
                  className="w-28 h-28 animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <defs>
                    <path
                      id="ctaCircle"
                      d="M60,10 a50,50 0 1,1 -0.01,0"
                      fill="none"
                    />
                  </defs>
                </svg>
              </div>
            </div>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 text-[#111827]" />
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
              Another Story in the Era of AI
            </h2>
            <div className="space-y-4 text-[#374151]">
              <p>
                Esther Mburu didn't set out to build a leadership practice in
                the middle of a technological revolution. But as AI began
                reshaping industries, she recognized something crucial: while
                machines were getting smarter, leadership needed to become
                wiser.
              </p>
              <p>
                This isn't just another leadership story. It's a story about
                consciousness in an age of automation. About maintaining
                humanity while harnessing technology. About leading with
                enlightenment when the world moves at machine speed.
              </p>
              <p className="font-semibold text-[#f86f17]">
                Catalystium Solutions was born from a simple truth: Technology
                amplifies what we are—which makes who we are more important than
                ever.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={one}
                alt="Esther Mburu"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] rounded-full flex items-center justify-center shadow-lg">
              <Globe className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            A Philosophy for Modern Leadership
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            Esther's approach weaves together ancient wisdom, modern
            neuroscience, and strategic execution into a framework for
            enlightened leadership
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-sm text-[#6b7280] mb-6">
                  {pillar.description}
                </p>
                <div className="pt-4 border-t border-[#f3f4f6]">
                  <p className="text-xs italic text-[#f86f17] font-medium">
                    "{pillar.insight}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            The Journey to Catalystium
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            From insight to impact—how a vision became a movement
          </p>
        </div>
        <div className="space-y-8">
          {journey.map((stage, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start bg-white rounded-2xl p-8 shadow-sm border border-black/5"
            >
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] flex items-center justify-center text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#f86f17] font-semibold">
                    {stage.phase}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">
                  {stage.title}
                </h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-[#374151] leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src={two}
              alt="Vision and Enlightenment"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              Enlightenment Meets Execution
            </h2>
            <p className="text-[#374151]">
              At Catalystium, we believe the best leaders aren't just
              strategic—they're conscious. They don't just drive results; they
              create meaning. They don't just adapt to change; they lead
              transformation from a place of deep clarity and purpose.
            </p>
            <p className="text-[#374151]">
              This is leadership for the AI era: grounded in wisdom, powered by
              technology, and expressed through enlightened action that
              transforms organizations and elevates humanity.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <Heart className="w-6 h-6 text-[#f86f17]" />
              <span className="text-sm italic text-[#6b7280]">
                "The future belongs to those who can think clearly in chaos and
                act wisely in uncertainty." — Esther Mburu
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24 mb-24">
        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f86f17] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff8c5a] opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Lead with Enlightenment?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join leaders who are navigating the AI era with wisdom, building
              organizations that thrive on both performance and purpose.
            </p>
            <a
              href="#calendly"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] text-white font-semibold text-lg hover:shadow-xl transition-all"
            >
              Begin Your Journey <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center">
          <div className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-extralight text-[#111827] opacity-90">
            CATALYSTIUM
          </div>
          <p className="text-sm text-[#6b7280] mt-4">
            Sparking Change, Igniting Transformation
          </p>
        </div>
      </footer>
    </div>
  );
}
