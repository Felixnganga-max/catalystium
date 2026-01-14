import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 text-white flex items-center justify-center font-bold shadow-lg text-lg">
                C
              </div>
              <span className="font-bold font-gothic text-white tracking-wider text-lg">
                Catalystium
                <br />
                Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed font-poppins text-gray-400">
              Coaching leaders and teams to think clearly, make confident
              decisions, and execute strategies that drive measurable results.
            </p>
            <div className="flex items-center gap-4">
              <a className="text-orange-400 hover:text-orange-300 hover:scale-110 transition transform cursor-pointer">
                <Facebook size={20} />
              </a>
              <a className="text-orange-400 hover:text-orange-300 hover:scale-110 transition transform cursor-pointer">
                <Twitter size={20} />
              </a>
              <a className="text-orange-400 hover:text-orange-300 hover:scale-110 transition transform cursor-pointer">
                <Instagram size={20} />
              </a>
              <a className="text-orange-400 hover:text-orange-300 hover:scale-110 transition transform cursor-pointer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold font-gothic text-white text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3 font-poppins text-sm">
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  1:1 Leadership Coaching
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  Group Coaching
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  Corporate Training
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  Organizational Development
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  Speaking & Leadership Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-gothic text-white text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 font-poppins text-sm">
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  C.A.T.A.L.Y.S.T™ Model
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  Client Success Stories
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  Blogs
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400 transition cursor-pointer flex items-center gap-2 group">
                  <ArrowRight
                    size={14}
                    className="text-orange-500 group-hover:translate-x-1 transition"
                  />
                  Book Discovery Call
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold font-gothic text-white text-lg mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4 font-poppins text-sm">
              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-orange-500 mt-0.5 flex-shrink-0"
                />
                <a
                  href="mailto:info@catalystiumsolutions.com"
                  className="hover:text-orange-400 transition"
                >
                  info@catalystiumsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-orange-500 mt-0.5 flex-shrink-0"
                />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-orange-500 mt-0.5 flex-shrink-0"
                />
                <span>
                  123 Leadership Lane
                  <br />
                  Suite 100
                  <br />
                  Your City, ST 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-12 pb-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="text-[10px] tracking-[0.2em] text-orange-500 uppercase font-bold font-poppins">
              Stay Connected
            </div>
            <h3 className="font-bold font-gothic text-white text-2xl">
              Subscribe to Our Leadership Insights
            </h3>
            <p className="text-sm text-gray-400 font-poppins">
              Get practical coaching tips, leadership strategies, and
              transformation insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition font-poppins text-sm"
              />
              <button className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl hover:scale-105 transition font-poppins">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-poppins text-gray-500">
            <p>© 2026 Catalystium Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a className="hover:text-orange-400 transition cursor-pointer">
                Privacy Policy
              </a>
              <a className="hover:text-orange-400 transition cursor-pointer">
                Terms of Service
              </a>
              <a className="hover:text-orange-400 transition cursor-pointer">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </footer>
  );
}
