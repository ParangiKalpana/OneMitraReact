import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
  BriefcaseIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: CodeBracketIcon,
    title: "Web Development",
    slug: "web-development",
    color: "from-blue-500 to-indigo-700",
    description:
      "Fast, scalable websites and web apps built with modern frameworks — from marketing sites to full custom platforms.",
    outcomes: ["Custom-built, responsive websites", "Clean, scalable codebase", "Fast load times & SEO-ready structure"],
  },
  {
    icon: PaintBrushIcon,
    title: "Web Design",
    slug: "web-design",
    color: "from-purple-500 to-pink-600",
    description:
      "Interfaces that look premium and convert — designed around your brand, not a generic template.",
    outcomes: ["Custom UI/UX design", "Mobile-first, responsive layouts", "Brand-consistent visual system"],
  },
  {
    icon: MegaphoneIcon,
    title: "Digital Marketing",
    slug: "digital-marketing",
    color: "from-orange-500 to-red-600",
    description:
      "Campaigns across search, social, and paid channels built to generate qualified leads, not just impressions.",
    outcomes: ["Multi-channel campaign strategy", "Paid ads management", "Performance tracking & reporting"],
  },
  {
    icon: MagnifyingGlassIcon,
    title: "SEO Services",
    slug: "seo-services",
    color: "from-green-500 to-emerald-700",
    description:
      "Technical, on-page, and content SEO to get you found on Google and AI-powered search engines alike.",
    outcomes: ["Technical SEO audit & fixes", "Keyword & content strategy", "AI-search & schema optimization"],
  },
  {
    icon: BriefcaseIcon,
    title: "Business Consulting",
    slug: "business-consulting",
    color: "from-blue-700 to-blue-950",
    description:
      "A structured diagnostic of your operating model, followed by a prioritized roadmap leadership can act on.",
    outcomes: ["Operating model assessment", "Prioritized 90-day roadmap", "Leadership alignment workshops"],
  },
 {
  icon: CpuChipIcon,
  title: "AI Automation",
  slug: "ai-automation",
  color: "from-cyan-500 to-blue-700",
  description:
    "Automate your business with AI-powered chatbots, workflow automation, and intelligent customer support solutions.",
  outcomes: [
    "AI Chatbot Development",
    "Business Workflow Automation",
    "OpenAI & AI Integration",],
  },
];

const faqs = [
  {
    question: "How do you scope an engagement?",
    answer:
      "We start with a short diagnostic call to understand your goals and constraints, then propose a scoped engagement with clear deliverables and a timeline before any commitment.",
  },
  {
    question: "Do you work with small and mid-size businesses?",
    answer:
      "Yes. Most of our engagements are with mid-market companies where a focused, well-executed plan makes an outsized difference.",
  },
  {
    question: "Can services be combined?",
    answer:
      "Most engagements combine two or more services — for example, a new website alongside an SEO and digital marketing push.",
  },
];

function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* Hero / intro */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute top-10 -right-16 h-64 w-64 animate-pulse rounded-full bg-green-200/30 blur-3xl" style={{ animationDelay: "1s" }} />

        <div className="relative w-full max-w-[1280px] mx-auto px-4 text-center sm:px-6 lg:px-10">
          <p className="animate-fadeUp mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Services
          </p>
          <h1
            className="animate-fadeUp mx-auto max-w-2xl text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Everything you need to{" "}
            <span className="bg-linear-to-r from-blue-700 via-purple-600 to-green-500 bg-clip-text text-transparent">
              build, grow, and get found
            </span>
          </h1>
          <p
            className="animate-fadeUp mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            From your website to your search rankings to your operating
            model — every engagement is scoped against a metric you already
            track.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="animate-fadeUp flex flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-md bg-linear-to-br ${service.color} shadow-sm`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-gray-900">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Discuss this service
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
              FAQs
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Services, answered
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white shadow-sm">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.question}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-base font-semibold text-gray-900 sm:text-lg">
                        {item.question}
                      </span>
                      <ChevronDownIcon
                        className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-gray-500 sm:px-6 sm:text-base">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 sm:py-20">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="animate-fadeUp relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-900 to-blue-950 px-6 py-12 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.30),transparent_55%)]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold text-white sm:text-4xl">
                Ready to build something that performs?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-lg">
                Book a free consultation, or message us directly on WhatsApp
                — most conversations start there.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50"
                >
                  Book a Consultation
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/917383840814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-green-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;