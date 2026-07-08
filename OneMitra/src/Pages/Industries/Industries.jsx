import { Link } from "react-router-dom";
import {
  HeartIcon,
  BuildingStorefrontIcon,
  CogIcon,
  TruckIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const industries = [
  {
    icon: HeartIcon,
    title: "Healthcare",
    slug: "healthcare",
    color: "from-rose-500 to-pink-600",
    description:
      "Operational efficiency and patient-experience improvements for clinics, hospital groups, and healthcare networks.",
  },
  {
    icon: BuildingStorefrontIcon,
    title: "Retail",
    slug: "retail",
    color: "from-amber-500 to-orange-600",
    description:
      "Omnichannel strategy, inventory optimization, and margin recovery for retail operators.",
  },
  {
    icon: CogIcon,
    title: "Manufacturing",
    slug: "manufacturing",
    color: "from-slate-500 to-gray-700",
    description:
      "Production efficiency, downtime reduction, and supply chain resilience for manufacturers.",
  },
  {
    icon: TruckIcon,
    title: "Logistics",
    slug: "logistics",
    color: "from-blue-500 to-indigo-700",
    description:
      "Routing, fulfillment, and cost-to-serve optimization for logistics and distribution businesses.",
  },
  {
    icon: UserGroupIcon,
    title: "Professional Services",
    slug: "professional-services",
    color: "from-green-500 to-emerald-700",
    description:
      "Utilization, pricing, and delivery-model strategy for professional services firms.",
  },
];

function Industries() {
  return (
    <>
      {/* Hero / intro */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-blue-200/40 blur-3xl" />
        <div
          className="pointer-events-none absolute top-10 -right-16 h-64 w-64 animate-pulse rounded-full bg-rose-200/30 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative w-full max-w-[1280px] mx-auto px-4 text-center sm:px-6 lg:px-10">
          <p className="animate-fadeUp mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Industries
          </p>
          <h1
            className="animate-fadeUp mx-auto max-w-2xl text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Consulting shaped by{" "}
            <span className="bg-linear-to-r from-blue-700 via-rose-500 to-green-600 bg-clip-text text-transparent">
              sector realities
            </span>
          </h1>
          <p
            className="animate-fadeUp mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            We build every recommendation around the operating constraints
            specific to your industry.
          </p>
        </div>
      </section>

      {/* Industry cards */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-10">
          {industries.map((industry, index) => (
            <div
              key={industry.slug}
              id={industry.slug}
              className="animate-fadeUp flex flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-md bg-linear-to-br ${industry.color} shadow-sm`}
              >
                <industry.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-gray-900">
                {industry.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                {industry.description}
              </p>
              <Link
                to="/case-studies"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                See related case studies
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 sm:py-20">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="animate-fadeUp relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-900 to-blue-950 px-6 py-12 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.30),transparent_55%)]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold text-white sm:text-4xl">
                Ready to talk about your industry?
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
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0F7A40] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0C6935]"
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

export default Industries;