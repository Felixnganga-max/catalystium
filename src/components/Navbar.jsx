import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "../images/catalystium.png";
import { useCalendly } from "../hooks/useCalendly";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { initBadge, destroyBadge, openPopup } = useCalendly();

  const isContactPage =
    typeof window !== "undefined" && window.location.pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Show floating badge on all pages EXCEPT /contact ──────────────────────
  useEffect(() => {
    if (isContactPage) {
      // Remove badge if it somehow exists (e.g. navigated from another page)
      destroyBadge();
    } else {
      // Init the floating badge button
      initBadge();
    }

    return () => {
      // Clean up badge when component unmounts / route changes
      destroyBadge();
    };
  }, [isContactPage, initBadge, destroyBadge]);

  const handleBooking = () => {
    setIsMobileMenuOpen(false);

    if (isContactPage) {
      // Scroll to inline widget already on the page
      const widget = document.querySelector(".calendly-inline-widget");
      if (widget) {
        widget.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      // Open popup on click (badge is already floating, this is for the nav button)
      openPopup();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 md:px-8 pt-3 md:pt-4">
      <div className="w-full mx-auto">
        <div
          className={`relative backdrop-blur-2xl bg-gradient-to-r from-white/80 via-white/70 to-white/80 border border-white/40 rounded-2xl shadow-2xl transition-all duration-500 ${
            scrolled ? "shadow-orange-500/10" : ""
          }`}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative container mx-auto px-6 py-2">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-8 rounded-lg flex items-center justify-center mr-3">
                  <img src={logo} alt="Catalystium Logo" />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  Catalystium Solutions
                </span>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "Blogs", path: "/blogs" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="relative px-4 py-1.5 text-sm font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/5 to-amber-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 group-hover:w-4/5 transition-all duration-300 rounded-full shadow-lg shadow-orange-500/50" />
                  </a>
                ))}
              </div>

              {/* Right side */}
              <div className="flex items-center space-x-3">
                {/* Desktop CTA */}
                <button
                  onClick={handleBooking}
                  className="hidden md:flex items-center gap-2 group relative overflow-hidden bg-gradient-to-r from-orange-500 via-[#f86f17] to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-2xl shadow-orange-500/40 transform transition-all duration-500 hover:scale-105 hover:shadow-orange-500/60 hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </button>

                {/* Mobile hamburger */}
                <button
                  className="md:hidden relative p-2 text-gray-700 hover:text-orange-600 z-50 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 transition-all duration-300 group"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <div className="relative w-6 h-6">
                    {isMobileMenuOpen ? (
                      <X
                        size={24}
                        className="absolute inset-0 transition-all duration-300 group-hover:rotate-90"
                      />
                    ) : (
                      <Menu
                        size={24}
                        className="absolute inset-0 transition-all duration-300 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-orange-500/10 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
                isMobileMenuOpen
                  ? "max-h-[500px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-4 pb-4 space-y-1 border-t border-orange-100">
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "Blogs", path: "/blogs" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item, idx) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block relative group overflow-hidden rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      animation: isMobileMenuOpen
                        ? `slideIn 0.3s ease-out ${idx * 0.05}s both`
                        : "none",
                    }}
                  >
                    <div className="flex items-center gap-3 px-4 py-3 relative z-10">
                      <div className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                      <span className="text-gray-700 group-hover:text-orange-600 font-medium transition-all duration-300 group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 rounded-xl" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-8 bg-gradient-to-r from-orange-500 to-transparent group-hover:w-1 transition-all duration-300 rounded-r" />
                  </a>
                ))}

                {/* Mobile CTA */}
                <button
                  onClick={handleBooking}
                  className="w-full mt-4 group relative overflow-hidden bg-gradient-to-r from-orange-500 via-[#f86f17] to-orange-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-xl shadow-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center"
                  style={{
                    animation: isMobileMenuOpen
                      ? `slideIn 0.3s ease-out ${5 * 0.05}s both`
                      : "none",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
