import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  Send,
} from "lucide-react";
import logo from "../images/catalystium.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#efe7df] text-[#151412] overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#f86f17]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Catalystium Solutions"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#6e6a64]">
              Coaching leaders and teams to think clearly, make confident
              decisions, and execute strategies that drive measurable results.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-white border border-blue-700/20 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all cursor-pointer"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-white border border-blue-700/20 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all cursor-pointer"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-white border border-[#f86f17]/20 flex items-center justify-center text-[#f86f17] hover:bg-[#f86f17] hover:text-white transition-all cursor-pointer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-white border border-blue-700/20 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all cursor-pointer"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#151412] text-base mb-6">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#coaching"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-700 group-hover:w-2 transition-all"></div>
                  1:1 Leadership Coaching
                </a>
              </li>
              <li>
                <a
                  href="#group"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-[#f86f17] group-hover:w-2 transition-all"></div>
                  Group Coaching
                </a>
              </li>
              <li>
                <a
                  href="#training"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-700 group-hover:w-2 transition-all"></div>
                  Corporate Training
                </a>
              </li>
              <li>
                <a
                  href="#org-dev"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-[#f86f17] group-hover:w-2 transition-all"></div>
                  Organizational Development
                </a>
              </li>
              <li>
                <a
                  href="#speaking"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-700 group-hover:w-2 transition-all"></div>
                  Speaking & Leadership Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#151412] text-base mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-700 group-hover:w-2 transition-all"></div>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#catalyst"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-[#f86f17] group-hover:w-2 transition-all"></div>
                  C.A.T.A.L.Y.S.T™ Model
                </a>
              </li>
              <li>
                <a
                  href="#success"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-700 group-hover:w-2 transition-all"></div>
                  Client Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-[#f86f17] group-hover:w-2 transition-all"></div>
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="hover:text-blue-700 transition cursor-pointer flex items-center gap-2 group text-[#6e6a64]"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-700 group-hover:w-2 transition-all"></div>
                  Book Discovery Call
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[#151412] text-base mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-white" />
                </div>
                <a
                  href="mailto:info@catalystiumsolutions.com"
                  className="hover:text-blue-700 transition text-[#6e6a64] leading-relaxed"
                >
                  info@catalystiumsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f86f17] flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="text-[#6e6a64] leading-relaxed">
                  +254 712 345 678
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white pt-12 pb-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full mb-4 border border-blue-700/10">
              <Send className="w-4 h-4 text-blue-700" strokeWidth={2} />
              <span className="text-xs text-[#6e6a64] tracking-wider font-medium">
                Stay Connected
              </span>
            </div>
            <h3 className="font-semibold text-[#151412] text-2xl">
              Subscribe to Our Leadership Insights
            </h3>
            <p className="text-sm text-[#6e6a64]">
              Get practical coaching tips, leadership strategies, and
              transformation insights delivered to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white border border-[#d4c4b4] text-[#151412] placeholder-[#6e6a64] focus:outline-none focus:border-blue-700 transition text-sm"
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:bg-blue-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6e6a64]">
            <p>© 2026 Catalystium Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="hover:text-blue-700 transition cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-blue-700 transition cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="hover:text-blue-700 transition cursor-pointer"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
