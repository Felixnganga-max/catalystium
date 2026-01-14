import React, { useState } from "react";
import {
  Asterisk,
  User,
  Users,
  Mail,
  Phone,
  Check,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import four from "../images/four.jpeg";

const heroImage = four;

export default function CatalystiumContact() {
  const [selectedRole, setSelectedRole] = useState("individual");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
    company: "",
  });

  const companyEmail = "info@catalystiumsolutions.com";
  const companyPhone = "+254712541271";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Compose email with form data
    const subject = encodeURIComponent("Leadership Coaching Inquiry");
    const body = encodeURIComponent(
      `
Hello Catalystium Team,

I'm interested in learning more about your leadership coaching services.

Name: ${form.firstName} ${form.lastName}
Job Title: ${form.jobTitle}
Company: ${form.company}
Email: ${form.email}
Phone: ${form.phone}
Type: ${
        selectedRole === "individual"
          ? "Individual Leadership Coaching"
          : "Team/Organizational Development"
      }

I look forward to connecting with you.

Best regards,
${form.firstName} ${form.lastName}
    `.trim()
    );

    // Open email client
    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
  }

  function handleEmailClick() {
    window.location.href = `mailto:${companyEmail}`;
  }

  function handlePhoneClick() {
    window.location.href = `tel:${companyPhone}`;
  }

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8">
      <div className="w-[1100px] h-[680px] rounded-2xl mt-20 bg-white shadow-2xl flex overflow-hidden relative border-8 border-white">
        {/* Browser dots (top-left) */}
        <div className="absolute left-6 top-6 flex space-x-2 z-10">
          <span className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
        </div>

        {/* Left: Form */}
        <div className="w-1/2 p-12 overflow-y-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Begin Your Leadership Journey
          </h2>
          <p className="mt-4 text-sm text-gray-500 max-w-lg">
            Ready to lead with enlightenment? Connect with our team for
            leadership coaching that transforms. We'll respond within 24 hours.
          </p>

          {/* Direct Contact Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={handleEmailClick}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </button>
            <button
              onClick={handlePhoneClick}
              className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
          </div>

          <div className="mt-8 space-y-5">
            <div className="grid grid-cols-2 gap-x-6">
              <label className="block">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full border-b border-gray-200 px-1 py-2 text-sm focus:outline-none focus:border-blue-400"
                />
              </label>
              <label className="block">
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full border-b border-gray-200 px-1 py-2 text-sm focus:outline-none focus:border-blue-400"
                />
              </label>
            </div>

            <label className="block">
              <input
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
                placeholder="Job title"
                className="w-full border-b border-gray-200 px-1 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </label>

            <label className="block">
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company/Organization"
                className="w-full border-b border-gray-200 px-1 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </label>

            <label className="block">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                type="email"
                className="w-full border-b border-gray-200 px-1 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </label>

            <div className="flex items-center space-x-3 border-b border-gray-200 pb-2">
              <button
                type="button"
                className="flex items-center gap-2 text-sm text-gray-700"
                aria-label="country"
              >
                <span className="text-xl">🇰🇪</span>
                <span className="hidden sm:inline">KE</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+254 712 541 271"
                className="flex-1 text-sm focus:outline-none"
              />
            </div>

            {/* Leadership Type */}
            <div>
              <div className="text-sm font-semibold text-gray-800 mb-2">
                What are you looking for?
              </div>
              <div className="space-y-2">
                <OptionCard
                  title="Individual Leadership Coaching"
                  description="1:1 coaching to elevate your leadership presence."
                  icon={<User className="w-5 h-5 text-gray-700" />}
                  selected={selectedRole === "individual"}
                  onClick={() => setSelectedRole("individual")}
                />
                <OptionCard
                  title="Team & Organizational Development"
                  description="Transform your team's leadership capacity."
                  icon={<Users className="w-5 h-5 text-gray-700" />}
                  selected={selectedRole === "team"}
                  onClick={() => setSelectedRole("team")}
                />
              </div>
            </div>

            <div className="pb-6">
              <button
                onClick={handleSubmit}
                className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-colors"
              >
                Schedule Discovery Call
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image + testimonial */}
        <div className="w-1/2 relative">
          <img
            src={heroImage}
            alt="Leadership"
            className="object-cover w-full h-full"
            style={{ filter: "brightness(0.95)" }}
          />

          {/* glass rounded white border effect */}
          <div className="absolute inset-0 pointer-events-none rounded-tr-2xl rounded-br-2xl ring-1 ring-white/30" />

          {/* Top-left logo / badge */}
          <div className="absolute left-6 top-6 flex items-center gap-3 bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg">
            <div className="bg-white/20 p-1 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm font-semibold text-white/90">
              Catalystium
            </div>
          </div>

          {/* decorative stripe */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center"
          >
            <div
              className="w-4/5 h-12 bg-white/10 backdrop-blur-sm rounded-md"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.06) 100%)",
                mixBlendMode: "overlay",
              }}
            />
          </div>

          {/* Testimonial bottom-left */}
          <div className="absolute left-6 bottom-10 text-white max-w-[60%]">
            <p className="text-lg sm:text-2xl font-extrabold leading-8 drop-shadow-md">
              Technology amplifies capability, but only enlightened leadership
              ensures it serves humanity. The future belongs to those who can
              think clearly in chaos and act wisely in uncertainty.
            </p>

            <div className="mt-6">
              <div className="font-semibold">Esther Mburu</div>
              <div className="text-sm text-white/80">
                Founder & Leadership Coach
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-sm text-white/90">
              <div className="w-3 h-3 rounded-full border border-white/80" />
              <div>Catalystium Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Small card component used for the leadership type selection */
function OptionCard({ title, description, icon, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-3 rounded-xl flex items-start gap-3 border transition-colors ${
        selected
          ? "border-blue-500 ring-2 ring-blue-200 bg-white"
          : "border-gray-200 bg-white/90 hover:border-gray-300"
      }`}
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-md bg-gray-50 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-sm text-gray-900">{title}</div>
          {selected ? <Check className="w-4 h-4 text-blue-600" /> : null}
        </div>
        <div className="text-xs text-gray-500 mt-0.5">{description}</div>
      </div>
    </button>
  );
}
