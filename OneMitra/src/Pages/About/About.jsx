import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  ScaleIcon,
  SparklesIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Accountable",
    description: "We stay through execution — the plan is judged by the outcome, not the deck.",
    ring: "ring-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: ScaleIcon,
    title: "Honest",
    description: "If something won't work for your business, we'll say so before you spend on it.",
    ring: "ring-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: SparklesIcon,
    title: "Specific",
    description: "No generic playbooks. Every recommendation is built for your operating context.",
    ring: "ring-green-100",
    iconColor: "text-green-600",
  },
];

const stats = [
  { value: "120+", label: "Engagements delivered" },
  { value: "18", label: "Industries served" },
  { value: "94%", label: "Client retention" },
  { value: "6.4x", label: "Avg. ROI reported" },
];

function About() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-blue-200/40 blur-3xl" />
        <div
          className="pointer-events-none absolute top-10 -right-16 h-64 w-64 animate-pulse rounded-full bg-green-200/30 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative w-full max-w-[1280px] mx-auto grid grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-10">
          <div className="animate-fadeUp lg:col-span-7">
            <p className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700">
              About OneMitra
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Consulting built by people who've{" "}
              <span className="bg-linear-to-r from-blue-700 to-green-500 bg-clip-text text-transparent">
                run the operations they advise
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              OneMitra was founded on a simple idea: strategy only matters if
              it survives contact with the day-to-day. We work alongside
              your team through planning and execution, so recommendations
              are shaped by what's actually possible to implement.
            </p>
          </div>

          <div
            className="animate-fadeUp lg:col-span-5"
            style={{ animationDelay: "150ms" }}
          >
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
              <dl className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="transition-transform duration-200 hover:-translate-y-1"
                  >
                    <dt className="font-mono text-2xl font-bold text-blue-700 sm:text-3xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs text-gray-500 sm:text-sm">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-4 text-center sm:px-6 lg:px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
            How we work
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
            What guides every engagement
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="animate-fadeUp flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md ring-4 ${value.ring}`}>
                  <value.icon className={`h-7 w-7 ${value.iconColor}`} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
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
                Want to work with us?
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

export default About;