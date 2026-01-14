import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Calendar,
  Mail,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import six from "../images/six.png";
import seven from "../images/seven.png";
import eight from "../images/eight.png";

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const services = [
    {
      id: "coaching",
      title: "COACHING",
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
        {
          icon: BookOpen,
          title: "Corporate Training",
          description:
            "Programs integrating coaching, reflection, and application so behaviors shift and performance improves.",
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
        "We partner with leadership teams to clarify vision, align strategy with execution, and embed systems that sustain high performance. Coaching is integrated throughout.",
      details: [
        {
          label: "Who It's For",
          value: "Boards, executive teams, senior leadership",
        },
        {
          label: "Outcomes",
          value: "Clear direction, stronger alignment, sustainable systems",
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
      {/* MASSIVE top headline */}
      <section className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1
            className="w-full text-left font-extralight uppercase leading-[0.85] select-none"
            aria-label="Excellence in Leadership"
          >
            <span className="text-[3.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11rem] tracking-tight">
              EXCELLENCE
            </span>
            <span className="block text-[3.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[11rem] tracking-tight">
              IN LEADERSHIP
            </span>
          </h1>
        </div>
      </section>

      {/* Editorial hero block */}
      <main ref={heroRef} className="relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left image + caption */}
            <figure className="flex flex-col gap-4">
              <img
                src={seven}
                alt="Professional team collaborating"
                className="w-full h-72 rounded-md object-cover shadow-lg"
              />
              <figcaption className="text-xs text-[#6e6a64]">
                We understand that true leadership isn't just about strategy
              </figcaption>
            </figure>

            {/* Center hero image */}
            <figure className="flex justify-center">
              <img
                src={six}
                alt="Leadership team in strategic planning session"
                className="w-full max-w-lg h-96 rounded-md object-cover shadow-2xl"
                style={{
                  transform: !isMobile
                    ? `translateY(${scrollY * -0.05}px)`
                    : "none",
                }}
              />
            </figure>

            {/* Right image + caption */}
            <figure className="flex flex-col gap-4 items-end text-right">
              <img
                src={eight}
                alt="Executive coaching session"
                className="w-full h-72 rounded-md object-cover shadow-lg"
              />
              <figcaption className="text-xs text-[#6e6a64]">
                Designed for those who aspire to transform organizations
              </figcaption>
            </figure>
          </div>

          {/* Hero tagline */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Transform
              <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#f86f17] to-[#ff8c5a]">
                Leadership & Impact
              </span>
            </h2>

            <p className="mt-6 text-lg md:text-xl text-[#6e6a64] font-light">
              Coaching, strategy, and insights that build exceptional leaders
              and high-performing organizations
            </p>

            <ChevronDown className="w-8 h-8 mx-auto mt-8 text-[#47443f] animate-bounce" />
          </div>

          {/* Approach badges row */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-black/5">
              <Target className="w-5 h-5 text-[#f86f17]" />
              <span className="text-xs text-[#6e6a64] uppercase tracking-widest">
                EVIDENCE-BASED APPROACH
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-black/5">
              <Users className="w-5 h-5 text-blue-700" />
              <span className="text-xs text-[#6e6a64] uppercase tracking-widest">
                COLLABORATIVE PROCESS
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-black/5">
              <Sparkles className="w-5 h-5 text-[#f86f17]" />
              <span className="text-xs text-[#6e6a64] uppercase tracking-widest">
                SUSTAINABLE RESULTS
              </span>
            </div>
          </div>

          {/* Process & Services area */}
          <section className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left column: services content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-2xl font-medium tracking-wide uppercase">
                  OUR SERVICES
                </h3>
                <p className="mt-4 text-sm text-[#6e6a64]">
                  Explore our comprehensive approach to leadership development
                  and organizational transformation.
                </p>
              </div>

              {/* Services */}
              <div className="space-y-12">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <article
                      key={service.id}
                      id={service.id}
                      className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-black/5"
                    >
                      <div className="flex items-start gap-6">
                        <div
                          className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center ${
                            service.color === "orange"
                              ? "bg-gradient-to-br from-[#f86f17] to-[#ff8c5a]"
                              : "bg-gradient-to-br from-blue-700 to-blue-900"
                          }`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                            <h4 className="text-lg font-semibold">
                              {service.title}
                            </h4>
                            <span className="text-xs text-[#6e6a64] uppercase tracking-widest">
                              {service.subtitle}
                            </span>
                          </div>

                          {/* Coaching offerings */}
                          {service.offerings && (
                            <div className="mt-6 grid md:grid-cols-3 gap-6">
                              {service.offerings.map((offering, idx) => {
                                const OffIcon = offering.icon;
                                return (
                                  <div
                                    key={idx}
                                    className="bg-white rounded-xl p-5 border border-black/5 shadow-sm"
                                  >
                                    <div className="w-12 h-12 rounded-md flex items-center justify-center bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] mb-4">
                                      <OffIcon className="w-5 h-5 text-white" />
                                    </div>

                                    <h5 className="text-sm font-semibold mb-1">
                                      {offering.title}
                                    </h5>
                                    <p className="text-xs text-[#6e6a64] mb-3">
                                      {offering.description}
                                    </p>

                                    {offering.focus && (
                                      <>
                                        <p className="text-[10px] font-semibold text-[#f86f17] uppercase tracking-wider">
                                          Focus Areas
                                        </p>
                                        <p className="text-xs text-[#6e6a64]">
                                          {offering.focus}
                                        </p>
                                      </>
                                    )}

                                    {offering.outcomes && (
                                      <>
                                        <p className="text-[10px] font-semibold text-[#f86f17] uppercase tracking-wider mt-3">
                                          Outcomes
                                        </p>
                                        <p className="text-xs text-[#6e6a64]">
                                          {offering.outcomes}
                                        </p>
                                      </>
                                    )}

                                    {offering.bestFor && (
                                      <>
                                        <p className="text-[10px] font-semibold text-[#f86f17] uppercase tracking-wider mt-3">
                                          Best For
                                        </p>
                                        <p className="text-xs text-[#6e6a64]">
                                          {offering.bestFor}
                                        </p>
                                      </>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {service.description && !service.offerings && (
                            <p className="mt-4 text-sm text-[#6e6a64]">
                              {service.description}
                            </p>
                          )}

                          {service.details && (
                            <div className="mt-6 grid md:grid-cols-2 gap-6">
                              {service.details.map((d, i) => (
                                <div
                                  key={i}
                                  className="bg-white rounded-xl p-5 border border-black/5 shadow-sm"
                                >
                                  <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
                                    {d.label}
                                  </p>
                                  <p className="text-sm text-[#151412] font-light">
                                    {d.value}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {service.whoFor && (
                            <div className="mt-6 grid md:grid-cols-2 gap-6">
                              <div className="bg-white rounded-xl p-5 border border-black/5 shadow-sm">
                                <p className="text-xs font-semibold text-[#f86f17] uppercase tracking-wider mb-4">
                                  Who It's For
                                </p>
                                <ul className="space-y-3">
                                  {service.whoFor.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-3"
                                    >
                                      <CheckCircle2 className="w-5 h-5 text-[#f86f17] flex-shrink-0 mt-0.5" />
                                      <span className="text-sm text-[#151412]">
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="bg-white rounded-xl p-5 border border-black/5 shadow-sm">
                                <p className="text-xs font-semibold text-[#f86f17] uppercase tracking-wider mb-4">
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
                                        <span className="text-sm text-[#151412]">
                                          {item}
                                        </span>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* CTA Button */}
                          <div className="mt-8">
                            <a
                              href={service.cta.link}
                              className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium uppercase tracking-wider text-white shadow-lg bg-gradient-to-r ${service.gradient} hover:scale-[1.02] transition-transform`}
                            >
                              <service.cta.icon className="w-4 h-4" />
                              {service.cta.text}
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Right column: process steps */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                <ol className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-3xl font-extralight text-[#bdb6ad]">
                      01
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold">
                        DISCOVERY & ALIGNMENT
                      </h5>
                      <p className="text-xs text-[#6e6a64]">
                        We begin by understanding your unique context,
                        challenges, and aspirations
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-3xl font-extralight text-[#bdb6ad]">
                      02
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold">
                        ASSESSMENT & INSIGHT
                      </h5>
                      <p className="text-xs text-[#6e6a64]">
                        Comprehensive evaluation of current state and potential
                        through proven frameworks
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-3xl font-extralight text-[#bdb6ad]">
                      03
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold">
                        DEVELOPMENT PLAN
                      </h5>
                      <p className="text-xs text-[#6e6a64]">
                        Co-create a tailored roadmap that integrates coaching
                        with strategic priorities
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-3xl font-extralight text-[#bdb6ad]">
                      04
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold">
                        IMPLEMENTATION & GROWTH
                      </h5>
                      <p className="text-xs text-[#6e6a64]">
                        Sustained engagement with regular sessions, feedback,
                        and skill development
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-3xl font-extralight text-[#bdb6ad]">
                      05
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold">
                        MEASUREMENT & EVOLUTION
                      </h5>
                      <p className="text-xs text-[#6e6a64]">
                        Track progress, celebrate wins, and adapt strategies for
                        continuous improvement
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </aside>
          </section>

          {/* Subscribe + contact row */}
          <div className="mt-16 border-t border-black/5 pt-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-[#6e6a64] uppercase tracking-widest mb-4">
                Stay Connected With Our Leadership Insights
              </p>
              <div className="flex gap-3 max-w-md">
                <input
                  aria-label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-black/5 bg-white"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-5 py-3 rounded-md bg-[#151412] text-white uppercase text-xs font-semibold hover:bg-[#2a2826] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="text-sm text-[#6e6a64] flex flex-col md:items-end gap-2">
              <div>LEADERSHIP COACHING & DEVELOPMENT</div>
              <div>
                <a
                  href="mailto:hello@leadership.com"
                  className="text-[#151412] hover:text-[#f86f17] transition-colors"
                >
                  hello@leadership.com
                </a>
                <span className="ml-4">TRUSTED WORLDWIDE</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Huge bottom brand wordmark */}
      <footer className="mt-8 bg-[#151412]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="py-10">
            <div className="text-left text-[4rem] md:text-[6rem] lg:text-[8rem] font-extralight tracking-tight text-[#efe7df] opacity-95 select-none">
              ELEVATE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
