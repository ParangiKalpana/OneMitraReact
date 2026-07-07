import { Link } from "react-router-dom";
import { ChatBubbleLeftRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const stats = [
  { value: "120+", label: "Engagements delivered" },
  { value: "18", label: "Industries served" },
  { value: "94%", label: "Client retention" },
  { value: "6.4x", label: "Avg. ROI reported" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_55%)]" />

      <div className="relative w-full max-w-[1280px] mx-auto grid grid-cols-1 gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-28">
        <div className="lg:col-span-7 animate-fadeUp">
          <p className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 sm:mb-5">
            Consulting &amp; Growth Advisory
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Strategy that gets executed.{" "}
            <span className="bg-linear-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Results you can measure.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:mt-6 sm:text-lg">
            OneMitra partners with businesses to plan transformation, run it
            end-to-end, and prove the outcome — across digital, operations,
            and growth strategy.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
            >
              Book a Consultation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/917383840814"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-green-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-600 sm:w-auto"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 sm:mt-10 sm:text-sm">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Trusted by 120+ businesses
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              18 industries served
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              94% client retention
            </span>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-gray-200 pt-6 sm:mt-14 sm:grid-cols-4 sm:gap-y-8 sm:pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-2xl font-semibold text-blue-700 sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-gray-500 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="lg:col-span-5 lg:pt-6 animate-fadeUp"
          style={{ animationDelay: "150ms" }}
        >
          <div className="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-blue-600">
              Client outcome
            </p>
            <p className="text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
              "OneMitra restructured our operating model in 9 weeks. Fulfillment
              costs dropped 22% within the first quarter."
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
              <div className="h-10 w-10 shrink-0 rounded-full bg-linear-to-br from-blue-500 to-blue-800" />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Operations Director
                </p>
                <p className="text-xs text-gray-500">Retail &amp; Logistics Group</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;