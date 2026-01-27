import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Mail,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import six from "../images/six.jpg";
import nine from "../images/nine.jpg";
import eight from "../images/eight.jpg";

export default function ServicesPage() {
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [eight, nine, six];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = () => {
    console.log("Subscribed:", email);
    setEmail("");
  };

  const services = [
    {
      id: "coaching",
      title: "EXECUTIVE COACHING",
      subtitle: "Transform Leadership Through Personalized Growth",
      icon: Target,
      color: "orange",
      gradient: "from-[#f86f17] to-[#ff8c5a]",
      offerings: [
        {
          icon: Target,
          title: "1:1 Leadership Coaching",
          description:
            "Confidential coaching for executives and senior professionals navigating complexity and high-stakes decisions.",
          focus:
            "Leadership clarity, self-awareness, strategic judgment, execution discipline",
          outcomes: "Clearer decisions, stronger execution, sustainable impact",
        },
        {
          icon: Users,
          title: "Group Coaching",
          description:
            "Structured coaching for teams and leadership cohorts to strengthen alignment and execution.",
          bestFor:
            "Leadership teams, cross-functional groups, emerging leaders",
        },
      ],
      cta: {
        text: "Book Discovery Call",
        icon: Calendar,
        link: "#calendly",
      },
    },
    {
      id: "organizational",
      title: "ORGANIZATIONAL DEVELOPMENT & STRATEGY",
      subtitle: "Build Systems That Sustain Excellence",
      icon: TrendingUp,
      color: "blue",
      gradient: "from-blue-700 to-blue-900",
      description:
        "We partner with leadership teams to clarify vision, align strategy with execution, and embed systems that sustain high performance. Includes corporate training programs that integrate coaching, reflection, and application so behaviors shift and performance improves.",
      details: [
        {
          label: "Who It's For",
          value: "Boards, executive teams, senior leadership",
        },
        {
          label: "Outcomes",
          value: "Clear direction, stronger alignment, sustainable systems",
        },
        {
          label: "Corporate Training",
          value:
            "Programs integrating coaching, reflection, and application for lasting behavioral change",
        },
      ],
      cta: {
        text: "Explore Solutions",
        icon: TrendingUp,
        link: "#organizational-solutions",
      },
    },
    {
      id: "speaking",
      title: "SPEAKING & LEADERSHIP INSIGHTS",
      subtitle: "Inspire Action Through Powerful Ideas",
      icon: Sparkles,
      color: "orange",
      gradient: "from-[#f86f17] to-[#ff8c5a]",
      description:
        "Tailored speaking engagements and keynotes that translate leadership insights into actionable takeaways. Grounded in coaching, mindset development, and real-world execution challenges.",
      whoFor: [
        "Leadership summits and corporate retreats",
        "Teams seeking strategic motivation",
        "Organizations reinforcing culture",
      ],
      outcomes: [
        "Enhanced leadership awareness",
        "Practical execution strategies",
        "Improved team alignment",
      ],
      cta: {
        text: "Book Speaking",
        icon: Mail,
        link: "#contact",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-[#efe7df] text-[#151412]">
      {/* Immersive Hero Section with Sliding Images */}
      <section className="relative h-screen overflow-hidden">
        {/* Sliding Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute top-0 bottom-0 inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#151412]/95" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="flex flex-wrap mt-70 items-center justify-center gap-4">
            <a
              href="#services"
              className="px-8 py-4 bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white rounded-full font-semibold uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold uppercase text-sm tracking-wider hover:bg-white/20 transition-all border border-white/20"
            >
              Get Started
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-[#f86f17]"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-b from-[#efe7df] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-extralight uppercase tracking-tight mb-6">
              Our <span className="text-[#f86f17]">Approach</span>
            </h2>
            <p className="text-xl text-[#6e6a64] max-w-3xl mx-auto">
              Evidence-based methods combined with collaborative processes to
              deliver sustainable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#f86f17]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 uppercase tracking-wide">
                Evidence-Based
              </h3>
              <p className="text-[#6e6a64] leading-relaxed">
                Grounded in research and proven methodologies that drive
                measurable leadership transformation and organizational success.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-blue-700">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 uppercase tracking-wide">
                Collaborative
              </h3>
              <p className="text-[#6e6a64] leading-relaxed">
                Partnership-driven approach that honors your expertise while
                bringing fresh perspectives and strategic insights.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#f86f17]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 uppercase tracking-wide">
                Sustainable
              </h3>
              <p className="text-[#6e6a64] leading-relaxed">
                Long-term impact through embedded systems and practices that
                continue delivering value long after our engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <main id="services" className="py-20 bg-[#efe7df]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-extralight uppercase tracking-tight mb-6">
              Our <span className="text-blue-700">Services</span>
            </h2>
            <p className="text-xl text-[#6e6a64] max-w-3xl mx-auto">
              Comprehensive solutions for leadership development and
              organizational transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Services Column */}
            <div className="lg:col-span-2 space-y-12">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className={`group relative bg-gradient-to-br ${
                      service.color === "orange"
                        ? "from-white to-orange-50"
                        : "from-white to-blue-50"
                    } rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all overflow-hidden border-2 ${
                      service.color === "orange"
                        ? "border-[#f86f17]/20 hover:border-[#f86f17]/40"
                        : "border-blue-700/20 hover:border-blue-700/40"
                    }`}
                  >
                    {/* Decorative Background Element */}
                    <div
                      className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 ${
                        service.color === "orange"
                          ? "bg-[#f86f17]"
                          : "bg-blue-700"
                      } group-hover:opacity-20 transition-opacity`}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start gap-6 mb-8">
                        <div
                          className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${
                            service.color === "orange"
                              ? "bg-gradient-to-br from-[#f86f17] to-[#ff8c5a]"
                              : "bg-gradient-to-br from-blue-700 to-blue-900"
                          } group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-3xl font-bold mb-2 uppercase tracking-tight">
                            {service.title}
                          </h4>
                          <p
                            className={`text-sm uppercase tracking-widest ${
                              service.color === "orange"
                                ? "text-[#f86f17]"
                                : "text-blue-700"
                            } font-semibold`}
                          >
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Coaching offerings */}
                      {service.offerings && (
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          {service.offerings.map((offering, idx) => {
                            const OffIcon = offering.icon;
                            return (
                              <div
                                key={idx}
                                className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-black/5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                              >
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] mb-4 shadow-md">
                                  <OffIcon className="w-6 h-6 text-white" />
                                </div>

                                <h5 className="text-lg font-bold mb-2">
                                  {offering.title}
                                </h5>
                                <p className="text-sm text-[#6e6a64] mb-4 leading-relaxed">
                                  {offering.description}
                                </p>

                                {offering.focus && (
                                  <div className="mb-3">
                                    <p className="text-xs font-bold text-[#f86f17] uppercase tracking-wider mb-1">
                                      Focus Areas
                                    </p>
                                    <p className="text-xs text-[#6e6a64] leading-relaxed">
                                      {offering.focus}
                                    </p>
                                  </div>
                                )}

                                {offering.outcomes && (
                                  <div className="mb-3">
                                    <p className="text-xs font-bold text-[#f86f17] uppercase tracking-wider mb-1">
                                      Outcomes
                                    </p>
                                    <p className="text-xs text-[#6e6a64] leading-relaxed">
                                      {offering.outcomes}
                                    </p>
                                  </div>
                                )}

                                {offering.bestFor && (
                                  <div>
                                    <p className="text-xs font-bold text-[#f86f17] uppercase tracking-wider mb-1">
                                      Best For
                                    </p>
                                    <p className="text-xs text-[#6e6a64] leading-relaxed">
                                      {offering.bestFor}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {service.description && !service.offerings && (
                        <p className="text-base text-[#6e6a64] mb-8 leading-relaxed">
                          {service.description}
                        </p>
                      )}

                      {service.details && (
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                          {service.details.map((d, i) => (
                            <div
                              key={i}
                              className="bg-white/80 backdrop-blur rounded-xl p-5 border border-black/5 shadow-md"
                            >
                              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                                {d.label}
                              </p>
                              <p className="text-sm text-[#151412] leading-relaxed">
                                {d.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {service.whoFor && (
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-black/5 shadow-md">
                            <p className="text-xs font-bold text-[#f86f17] uppercase tracking-wider mb-4">
                              Who It's For
                            </p>
                            <ul className="space-y-3">
                              {service.whoFor.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-[#f86f17] flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-[#151412] leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-black/5 shadow-md">
                            <p className="text-xs font-bold text-[#f86f17] uppercase tracking-wider mb-4">
                              Outcomes
                            </p>
                            <ul className="space-y-3">
                              {service.outcomes &&
                                service.outcomes.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3"
                                  >
                                    <CheckCircle2 className="w-5 h-5 text-[#f86f17] flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#151412] leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* CTA Button */}
                      <div className="flex items-center gap-4">
                        <a
                          href={service.cta.link}
                          className={`inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white shadow-xl bg-gradient-to-r ${service.gradient} hover:scale-105 transition-all`}
                        >
                          <service.cta.icon className="w-5 h-5" />
                          {service.cta.text}
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Process Steps - Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 bg-gradient-to-br from-white to-[#efe7df] rounded-3xl p-8 shadow-xl border border-black/5">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#f86f17] to-blue-700">
                  Our Process
                </h3>

                <ol className="space-y-6">
                  {[
                    {
                      num: "01",
                      title: "Discovery & Alignment",
                      desc: "Understanding your unique context, challenges, and aspirations",
                    },
                    {
                      num: "02",
                      title: "Assessment & Insight",
                      desc: "Comprehensive evaluation through proven frameworks",
                    },
                    {
                      num: "03",
                      title: "Development Plan",
                      desc: "Co-creating tailored roadmaps with strategic priorities",
                    },
                    {
                      num: "04",
                      title: "Implementation",
                      desc: "Sustained engagement with regular sessions and feedback",
                    },
                    {
                      num: "05",
                      title: "Measurement",
                      desc: "Tracking progress and adapting for continuous improvement",
                    },
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <span className="text-4xl font-extralight text-[#f86f17] group-hover:scale-110 transition-transform">
                        {step.num}
                      </span>
                      <div>
                        <h5 className="text-sm font-bold uppercase tracking-wide mb-1">
                          {step.title}
                        </h5>
                        <p className="text-xs text-[#6e6a64] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's explore how we can partner to elevate your impact and drive
            sustainable organizational excellence
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#calendly"
              className="px-10 py-5 bg-white text-[#f86f17] rounded-full font-bold uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl"
            >
              Schedule a Discovery Call
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-blue-700 text-white rounded-full font-bold uppercase text-sm tracking-wider hover:bg-blue-800 transition-all shadow-2xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-4 uppercase tracking-tight">
                Stay <span className="text-[#f86f17]">Connected</span>
              </h3>
              <p className="text-lg text-[#6e6a64] mb-8">
                Receive insights on leadership development, organizational
                strategy, and exclusive resources delivered to your inbox
              </p>

              <div className="flex gap-4">
                <input
                  aria-label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-black/10 bg-[#efe7df]/50 focus:border-[#f86f17] focus:outline-none transition-colors"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white font-bold uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-10 text-white shadow-2xl">
              <h4 className="text-2xl font-bold mb-6 uppercase">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <a
                    href="mailto:hello@leadership.com"
                    className="text-lg hover:text-[#f86f17] transition-colors"
                  >
                    info@catalystiumsolutions.com
                  </a>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Leadership Coaching & Development
                  <br />
                  Trusted Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151412] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-[5rem] md:text-[8rem] lg:text-[11rem] font-extralight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#f86f17] via-white to-blue-700 select-none mb-6">
              ELEVATE
            </div>
            <p className="text-white/60 text-sm uppercase tracking-widest">
              Excellence in Leadership
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
