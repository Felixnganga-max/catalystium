import React from "react";
import { Facebook, Twitter, Instagram, Phone } from "lucide-react";
import heroLocal from "../images/file.png";

export default function Hero({ imageUrl = heroLocal }) {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-gray-300 via-gray-100 to-white flex items-center justify-center p-2 relative overflow-hidden pt-28 -mt-4">
        {/* Ambient background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="w-full max-w-[1600px] relative z-10">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div className="backdrop-blur-md bg-white/60 rounded-lg border border-white/20">
              <div className="flex flex-col lg:flex-row relative min-h-[600px]">
                {/* RIGHT PANEL - CREATIVE DESIGN (First on mobile) */}
                <div className="lg:w-1/2 relative h-[400px] lg:h-auto order-1 lg:order-2">
                  {/* Organic Shape Background with SVG */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="100 0 600 500"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="orangeGlow"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#ea580c" stopOpacity={1} />
                        <stop
                          offset="50%"
                          stopColor="#f97316"
                          stopOpacity={0.98}
                        />
                        <stop
                          offset="100%"
                          stopColor="#fb923c"
                          stopOpacity={0.95}
                        />
                      </linearGradient>

                      <linearGradient
                        id="brownWave"
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#78350f"
                          stopOpacity={0.85}
                        />
                        <stop
                          offset="50%"
                          stopColor="#92400e"
                          stopOpacity={0.75}
                        />
                        <stop
                          offset="100%"
                          stopColor="#b45309"
                          stopOpacity={0.65}
                        />
                      </linearGradient>

                      <filter id="glow">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Main organic flowing shape */}
                    <path
                      d="M-70,0 Q150,80 250,150 T400,280 Q500,380 450,500 T350,650 L1800,700 L1000,0 Z"
                      fill="url(#orangeGlow)"
                      opacity="1"
                    />
                  </svg>

                  {/* Image container with circular clip */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16">
                    <div
                      className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-101"
                      style={{
                        clipPath: "circle(50% at 50% 50%)",
                      }}
                    >
                      <div className="absolute inset-0 bg-orange/10"></div>

                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt="Hero"
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* LEFT PANEL (Second on mobile) */}
                <div className="lg:w-1/2 p-6 md:p-10 lg:p-16 z-30 relative order-2 lg:order-1">
                  {/* Micro label */}
                  <div className="text-xs tracking-widest text-[#f86f17]/80 mb-4 uppercase font-bold text-center md:text-left">
                    coaching / execution / results
                  </div>

                  {/* Elegant Headline */}
                  <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900 mb-5 font-bold text-center md:text-left">
                    <span className="block">Sparking Change</span>
                    <span className="block bg-[#f86f17]/80 bg-clip-text text-transparent">
                      Igniting
                    </span>
                    <span className="block">Transformation</span>
                  </h1>

                  {/* Subtle decorative line */}
                  <div className="w-24 h-1 bg-[#f86f17]/80 rounded-full mb-8 mx-auto md:mx-0"></div>

                  {/* Description */}
                  <p className="text-gray-600 font-poppins font-light max-w-lg mb-8 leading-relaxed text-center md:text-left mx-auto md:mx-0">
                    We coach leaders and teams to think clearly, make confident
                    decisions, and execute strategies that drive measurable
                    results.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
                    <button className="group relative overflow-hidden bg-[#f86f17] text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl transform transition hover:scale-105 hover:shadow-2xl">
                      <span className="relative z-10">Join Now</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="flex items-center gap-2 border-2 border-[#f86f17] text-orange-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-50 hover:border-orange-500 transition">
                      <Phone size={16} />
                      Contact Now
                    </button>
                  </div>

                  {/* Footer row: social + email */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <a className="text-orange-600 hover:text-orange-700 hover:scale-110 transition transform cursor-pointer">
                        <Facebook size={18} />
                      </a>
                      <a className="text-orange-600 hover:text-orange-700 hover:scale-110 transition transform cursor-pointer">
                        <Twitter size={18} />
                      </a>
                      <a className="text-orange-600 hover:text-orange-700 hover:scale-110 transition transform cursor-pointer">
                        <Instagram size={18} />
                      </a>
                    </div>

                    <div className="text-xs text-gray-500 hidden sm:block font-medium">
                      info@catalystiumsolutions.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
          .delay-700 {
            animation-delay: 0.7s;
          }
        `}</style>
      </section>
    </>
  );
}
