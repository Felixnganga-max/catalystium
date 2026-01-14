import React from "react";
import {
  Calendar,
  ArrowRight,
  Target,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function CTASection() {
  return (
    <div className="relative backdrop-blur-lg bg-white/60 overflow-hidden font-poppins">
      {/* Subtle Background Shapes */}
      <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-16 w-80 h-80 bg-orange-500 opacity-15 blur-3xl"></div>

      {/* Orange Accent Shape */}
      <div className="absolute top-20 left-12 w-56 h-40 bg-orange-500 opacity-10 rounded-3xl transform -rotate-6 hidden lg:block"></div>

      {/* Blue Accent Shape with subtle text */}
      <div className="absolute bottom-32 right-16 w-64 h-48 bg-blue-400 opacity-10 rounded-3xl transform rotate-12 hidden lg:block"></div>

      {/* Main Section */}
      <section className="py-24 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main CTA Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"></div>

            <div className="p-10 md:p-16 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-5 py-2 rounded-full mb-6">
                <span className="text-xs font-semibold text-orange-600 tracking-wider uppercase font-poppins">
                  Start Your Journey
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-gothic">
                Ready to Strengthen{" "}
                <span className="text-orange-500">Leadership & Execution</span>?
              </h2>

              {/* Description */}
              <div className="max-w-3xl mx-auto mb-10">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 font-poppins">
                  Our coaching is a strategic partnership, not a one-off
                  conversation. We work with leaders and organizations ready to
                  invest in growth and embed lasting change.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-poppins">
                  If this describes you or your team, let's discuss how we can
                  help.
                </p>
              </div>

              {/* Value Props */}
              <div className="max-w-3xl mx-auto mb-10">
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: Target, text: "Strategic Partnership" },
                    { icon: TrendingUp, text: "Measurable Results" },
                    { icon: CheckCircle2, text: "Lasting Change" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200"
                    >
                      <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <item.icon
                          className="w-5 h-5 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 font-poppins">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <a
                  href="https://calendly.com/catalystium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-bold text-base tracking-wide uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 shadow-lg font-poppins"
                >
                  <Calendar className="w-5 h-5" strokeWidth={2.5} />
                  <span>Book Your Discovery Call</span>
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                    strokeWidth={2.5}
                  />
                </a>
              </div>

              {/* Trust Indicator */}
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <CheckCircle2
                  className="w-4 h-4 text-orange-500"
                  strokeWidth={2.5}
                />
                <span className="text-sm font-medium font-poppins">
                  Free 30-minute discovery session • No obligation
                </span>
              </div>
            </div>
          </div>

          {/* Supporting Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Calendar,
                title: "Discovery Call",
                description:
                  "Schedule a complimentary 30-minute session to explore your needs",
              },
              {
                icon: Target,
                title: "Custom Strategy",
                description:
                  "We design a coaching approach tailored to your specific goals",
              },
              {
                icon: TrendingUp,
                title: "Track Progress",
                description:
                  "Monitor real outcomes with our MEL framework throughout",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-300 p-6 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center mb-4">
                  <item.icon
                    className="w-6 h-6 text-gray-700"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 font-gothic">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-poppins">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
