import React, { useState, useEffect } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#1a3a52] shadow-lg" : "bg-[#1a3a52]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-[#f5f5f0]">
              Catalystium <span className="text-[#ff6b35]">Solutions</span>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a
                href="#solutions"
                className="text-[#f5f5f0] hover:text-[#ff6b35] transition-colors"
              >
                Solutions
              </a>
              <a
                href="#about"
                className="text-[#f5f5f0] hover:text-[#ff6b35] transition-colors"
              >
                About
              </a>
              <a
                href="#results"
                className="text-[#f5f5f0] hover:text-[#ff6b35] transition-colors"
              >
                Results
              </a>
              <a
                href="#contact"
                className="text-[#f5f5f0] hover:text-[#ff6b35] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider bg-[#ff6b35]/10 px-4 py-2 rounded-full">
                  Transform Your Organization
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-[#1a3a52] leading-tight">
                Sparking Change.
                <br />
                <span className="text-[#ff6b35]">Igniting Transformation.</span>
              </h1>

              <p className="text-xl text-[#5a7a92] leading-relaxed">
                When leadership is unclear and execution falters, results
                suffer. We help organizations and leaders build clarity,
                capability, and systems that drive measurable
                performance—locally and globally.
              </p>

              <div className="pt-4 space-y-4">
                <p className="text-lg text-[#1a3a52] font-medium">
                  Catalystium Solutions partners with organizations and
                  professionals to strengthen leadership, align strategy, and
                  embed learning so change is sustainable.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="#solutions"
                  className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e55a25] transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Explore Our Solutions
                </a>
                <a
                  href="#consultation"
                  className="bg-transparent border-2 border-[#1a3a52] text-[#1a3a52] px-8 py-4 rounded-lg font-semibold hover:bg-[#1a3a52] hover:text-white transition-all text-center"
                >
                  Book a Consultation
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#ff6b35] font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#1a3a52] font-semibold">
                      Global Expertise
                    </p>
                    <p className="text-xs text-[#5a7a92]">
                      Multi-continent reach
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#ff6b35] font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#1a3a52] font-semibold">
                      Proven Results
                    </p>
                    <p className="text-xs text-[#5a7a92]">
                      Measurable outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop"
                  alt="Professional team collaboration"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{ aspectRatio: "4/5" }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#ff6b35]/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#5a7a92]/10 rounded-full -z-10"></div>

              {/* Floating Stats Card */}
              <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#ff6b35] rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">95%</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a3a52]">
                      Client Success Rate
                    </p>
                    <p className="text-xs text-[#5a7a92]">
                      Sustained transformation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Value Proposition */}
      <section className="bg-[#e8e6df] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#ff6b35] text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">
                Build Clarity
              </h3>
              <p className="text-[#5a7a92]">
                Transform unclear vision into actionable strategy with defined
                goals and measurable outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#ff6b35] text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">
                Strengthen Capability
              </h3>
              <p className="text-[#5a7a92]">
                Develop leadership skills and organizational capacity to execute
                effectively at every level.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#ff6b35] text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">
                Sustain Results
              </h3>
              <p className="text-[#5a7a92]">
                Embed systems and learning that ensure transformation lasts
                beyond initial implementation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
