import { Link } from "react-router-dom";
import { ChatBubbleLeftRightIcon, ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

const stats = [
  { value: "120+", label: "Engagements delivered" },
  { value: "18", label: "Industries served" },
  { value: "94%", label: "Client retention" },
  { value: "6.4x", label: "Avg. ROI reported" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white">
      {/* decorative animated glows */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 animate-pulse rounded-full bg-blue-200/40 blur-3xl" />
      <div
        className="pointer-events-none absolute top-1/3 -right-16 h-64 w-64 animate-pulse rounded-full bg-green-200/40 blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative w-full max-w-[1000px] mx-auto flex flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-32">
        <p className="animate-fadeUp mb-5 inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700 sm:mb-6">
          <SparklesIcon className="h-3.5 w-3.5" />
          Consulting &amp; Growth Advisory
        </p>

        <h1
          className="animate-fadeUp text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Strategy that gets executed.{" "}
          <span className="bg-linear-to-r from-blue-700 via-blue-500 to-green-500 bg-clip-text text-transparent">
            Results you can measure.
          </span>
        </h1>

        <p
          className="animate-fadeUp mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          OneMitra partners with businesses to plan transformation, run it
          end-to-end, and prove the outcome — across digital, operations,
          and growth strategy.
        </p>

        <div
          className="animate-fadeUp mt-8 flex w-full flex-col justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            to="/contact"
            className="group flex w-full items-center justify-center gap-2 rounded-md bg-blue-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:w-auto"
          >
            Book a Consultation
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/917383840814"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0F7A40] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0C6935] hover:shadow-lg sm:w-auto"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="animate-fadeUp mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-600 sm:mt-10 sm:text-sm"
          style={{ animationDelay: "300ms" }}
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0F7A40]" />
            Trusted by 120+ businesses
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
            18 industries served
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
            94% client retention
          </span>
        </div>

        {/* Stats */}
        <dl className="mt-10 grid w-full grid-cols-2 gap-x-6 gap-y-8 border-t border-gray-200 pt-8 sm:mt-14 sm:grid-cols-4 sm:pt-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fadeUp flex flex-col items-center transition-transform duration-200 hover:-translate-y-1"
              style={{ animationDelay: `${360 + index * 90}ms` }}
            >
              <dt className="font-mono text-2xl font-bold text-blue-700 sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-gray-600 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;