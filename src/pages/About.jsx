import React, { useState } from "react";
import { Sparkles, Heart, Target, Mic, ArrowRight } from "lucide-react";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpeg";

export default function About() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [four, one, two, three];
  const nextSlide = () => setSlideIndex((s) => (s + 1) % slides.length);

  const journeyStages = [
    {
      phase: "The Foundation",
      description:
        "Catalystium Solutions is grounded in years of work across life coaching, leadership development, mindset coaching, and organization development. This work consistently revealed a common challenge across individuals and organizations: strong effort and technical capability were present, yet productivity, leadership effectiveness, and strategy execution often stalled. Despite clear plans and well-designed systems, results were inconsistent. This foundation of practice highlighted the limits of tools and frameworks when human behavior, thinking patterns, and leadership dynamics are not fully addressed.",
    },
    {
      phase: "The Awakening",
      description:
        "A critical insight emerged from this work: most performance and leadership challenges are not technical problems; they are human ones. At the core were patterns of thinking and behavior shaped by pressure, uncertainty, and decision-making influenced by competing or unclear priorities. When clarity of identity, purpose, and accountability is missing, leadership behaviors fragment and systems fail to reinforce the outcomes they were designed to support. Sustainable change required addressing how people think, decide, and take responsibility within complex systems, not simply improving processes or adding new tools.",
    },
    {
      phase: "The Mission",
      description:
        "Catalystium Solutions was established to work precisely at the intersection of clarity, leadership behavior, and organizational systems. Our mission is to partner with individuals, leaders, and organizations at moments of transition, pressure, or growth—sparking clarity, strengthening ownership, and igniting transformation through intentional action and aligned systems. By focusing on mindset, decision-making, behavior, and execution, we enable change that continues long after the engagement ends.",
    },
  ];

  const services = [
    {
      icon: Heart,
      title: "Life Coaching & Group Coaching",
      forWhom:
        "Individuals and groups seeking clarity, stronger self-leadership, and improved decision-making in both personal and professional contexts. Ideal for professionals navigating transition, pressure, role expansion, or growth.",
      benefits: [
        "Clarity on identity, purpose, priorities, and personal patterns",
        "Stronger ownership and self-leadership capacity",
        "Improved decision-making under pressure",
        "Greater consistency between intention and action",
      ],
      tagline:
        "Life coaching that sparks personal clarity and ignites sustainable change.",
    },
    {
      icon: Target,
      title: "Organization Development, Leadership Coaching & Training",
      forWhom:
        "Organizations, leadership teams, and institutions seeking to strengthen strategy execution, leadership effectiveness, accountability, and performance through aligned systems and capability building.",
      benefits: [
        "Leadership coaching that strengthens decision-making and accountability",
        "Training programs aligned to organizational strategy and performance goals",
        "Improved execution through behavior-based coaching and capability building",
        "Systems and structures that sustain performance beyond the engagement",
      ],
      tagline:
        "Organization development that sparks clarity and ignites transformation at scale.",
    },
    {
      icon: Mic,
      title: "Speaking & Facilitation",
      forWhom:
        "Organizations, leadership forums, teams, and professional audiences seeking catalytic conversations that challenge assumptions and activate responsibility.",
      benefits: [
        "Thought-provoking keynotes grounded in leadership and behavioral insight",
        "Skilled facilitation for strategic conversations and retreats",
        "Practical frameworks that move audiences from reflection to action",
      ],
      tagline:
        "Speaking and facilitation designed to spark insight and ignite intentional change.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#efe7df]">
      {/* Hero Section */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h1 className="font-light leading-[0.85] text-blue-900 tracking-tight text-[clamp(3.5rem,10vw,7rem)]">
                About
                <br />
                Catalystium
              </h1>
            </div>
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <div className="w-14 h-14 bg-[#f86f17] rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                A coaching and organization development practice sparking
                clarity, strengthening leadership, and igniting transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Slideshow */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="relative w-full h-[420px] md:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={slides[slideIndex]}
            alt="Catalystium Solutions"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute left-8 bottom-8">
            <div className="text-white font-bold text-[clamp(2rem,6vw,4.25rem)] tracking-wide">
              ESTHER MBURU
            </div>
            <p className="text-white/90 text-lg mt-2">
              Founder, Catalystium Solutions
            </p>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#f86f17] hover:text-white transition-all"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white rounded-3xl p-12 md:p-16 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
              About Catalystium Solutions
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Catalystium Solutions is a coaching and organization development
              practice that helps individuals and organizations gain clarity,
              strengthen leadership behavior, and translate insight into
              sustained performance. Working at the intersection of coaching,
              leadership development, and systems thinking, we address the human
              dynamics that shape decision-making, execution, and
              results—sparking meaningful change and igniting lasting
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* The Catalystium Journey */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            The Catalystium Journey
          </h2>
        </div>
        <div className="space-y-8">
          {journeyStages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#f86f17] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-[#f86f17] font-bold">
                      {stage.phase}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {stage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section with Image */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-[500px] lg:h-auto">
              <img
                src={two}
                alt="Coach Esther Mburu"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
            </div>
            <div className="p-12 md:p-16 text-white flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-5 py-2 bg-[#f86f17] rounded-full text-sm font-bold uppercase tracking-wide">
                  About the Founder
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Coach Esther Mburu
              </h2>
              <p className="text-blue-50 leading-relaxed mb-5 text-lg">
                Coach Esther Mburu is a Leadership & Mindset Development
                Consultant and the Founder of Catalystium Solutions, based in
                Nairobi, Kenya. A Professional Certified Coach (PCC)
                credentialed by Coach Masters Academy, Singapore, she brings
                over a decade of experience across leadership development,
                organization development, and development practice. Through
                coaching, Esther works at the human core of performance—helping
                individuals and leaders build clarity, strengthen internal
                alignment, and improve decision-making influenced by competing
                or unclear priorities. This coaching lens underpins
                Catalystium's approach, positioning coaching as the bridge
                between insight, leadership behavior, and sustainable execution.
              </p>
              <p className="text-blue-50 leading-relaxed text-lg">
                With academic training in Monitoring and Evaluation and ongoing
                doctoral research in Organizational Leadership, Esther
                integrates coaching with systems thinking, strategy, and
                learning-centered practice. Her work with organizations such as
                VSO, YMCA Kenya, Caritas, and Veterinarians Without Borders
                North America reflects a consistent focus on translating clarity
                into action and embedding change within systems. Through
                Catalystium Solutions, she partners with individuals and
                organizations during moments of transition and growth—using
                coaching to spark meaningful change and ignite transformation
                that endures beyond the engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section with One */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative rounded-3xl overflow-hidden shadow-xl h-[500px]">
          <img
            src={one}
            alt="Leadership Development"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
        </div>
        <div className="space-y-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-4 bg-gradient-to-br from-blue-900 to-blue-800 p-10 md:p-12 flex flex-col justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-[#f86f17] flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-base italic text-[#f86f17] font-semibold">
                      {service.tagline}
                    </p>
                  </div>
                  <div className="lg:col-span-8 p-10 md:p-12">
                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-[#f86f17] uppercase tracking-wider mb-3">
                        Who it is for
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {service.forWhom}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#f86f17] uppercase tracking-wider mb-4">
                        What you will get
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, bidx) => (
                          <li key={bidx} className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#f86f17] mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-lg">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Image Section with Three */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative rounded-3xl overflow-hidden shadow-xl h-[500px]">
          <img
            src={three}
            alt="Transformation and Growth"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-br from-[#f86f17] to-orange-500 rounded-3xl p-16 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900 opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Spark Change?
            </h2>
            <p className="text-white text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Partner with Catalystium Solutions to gain clarity, strengthen
              leadership, and ignite transformation that lasts.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-blue-900 text-white font-bold text-lg hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Start Your Journey <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center">
          <div className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-extralight text-blue-900 opacity-90 leading-none">
            CATALYSTIUM
          </div>
          <p className="text-base text-gray-600 mt-6 font-semibold tracking-wide">
            Sparking Change, Igniting Transformation
          </p>
        </div>
      </footer>
    </div>
  );
}
