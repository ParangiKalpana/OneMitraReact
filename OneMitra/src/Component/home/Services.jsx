import { Link } from "react-router-dom";
import {
  BriefcaseIcon,
  CpuChipIcon,
  ArrowPathRoundedSquareIcon,
  CommandLineIcon,
  ChartBarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: BriefcaseIcon,
    title: "Business Consulting",
    description: "Diagnose operating gaps and build a roadmap leadership can act on immediately.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: CpuChipIcon,
    title: "Digital Transformation",
    description: "Modernize systems and workflows without disrupting day-to-day operations.",
    color: "from-indigo-500 to-blue-700",
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    title: "Process Optimization",
    description: "Remove bottlenecks, cut cost-to-serve, and standardize what actually works.",
    color: "from-cyan-500 to-blue-700",
  },
  {
    icon: CommandLineIcon,
    title: "Technology Consulting",
    description: "Architecture and tooling decisions that scale with the business, not against it.",
    color: "from-blue-600 to-indigo-800",
  },
  {
    icon: ChartBarIcon,
    title: "Growth Strategy",
    description: "Go-to-market and expansion plans backed by data, not guesswork.",
    color: "from-green-500 to-blue-700",
  },
];

function Services() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
              What we do
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Consulting built around execution
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Five focused practice areas, each designed to move from strategy
              to measurable outcome.
            </p>
          </div>
          <Link
            to="/services"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 sm:flex"
          >
            View all services
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fadeUp flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-md bg-linear-to-br ${service.color}`}
              >
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Learn more
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 sm:hidden"
        >
          View all services
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default Services;