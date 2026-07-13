import { Link } from "react-router-dom";
import {
  CodeBracketIcon,
  MegaphoneIcon,
  PencilSquareIcon,
  PaintBrushIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: CodeBracketIcon,
    title: "Web Development",
    description:
      "Fast, scalable websites and web apps built with modern frameworks — from marketing sites to full custom platforms.",
    color: "from-blue-500 to-indigo-700",
  },
  {
    icon: MegaphoneIcon,
    title: "Digital Marketing",
    description:
      "Campaigns across search, social, and paid channels built to generate qualified leads, not just impressions.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: PencilSquareIcon,
    title: "Content Marketing",
    description:
      "Strategic content — articles, guides, and campaigns — built to attract, engage, and convert your audience.",
    color: "from-emerald-500 to-teal-700",
  },
  {
    icon: PaintBrushIcon,
    title: "Web Design",
    description:
      "Interfaces that look premium and convert — designed around your brand, not a generic template.",
    color: "from-purple-500 to-pink-600",
  },
];

function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <div className="animate-fadeUp">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
              What we do
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Consulting built around execution
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Four focused practice areas, each designed to move from
              strategy to measurable outcome.
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

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fadeUp group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-md bg-linear-to-br ${service.color} shadow-sm transition-transform duration-200 group-hover:scale-105`}
              >
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Learn more about {service.title}
                <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
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