import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const cases = [
  {
    industry: "Manufacturing",
    title: "Cutting production downtime by 31%",
    metric: "31%",
    metricLabel: "Less downtime",
    color: "text-blue-700",
  },
  {
    industry: "Healthcare",
    title: "Streamlining patient intake across 12 clinics",
    metric: "2.4x",
    metricLabel: "Faster intake",
    color: "text-rose-600",
  },
  {
    industry: "Logistics",
    title: "Redesigning last-mile delivery routing",
    metric: "18%",
    metricLabel: "Lower cost-to-serve",
    color: "text-green-600",
  },
];

function CaseStudies() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
              Case studies
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Outcomes, not anecdotes
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              A sample of engagements where the results were tracked end to end.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 sm:flex"
          >
            View all case studies
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {cases.map((item, index) => (
            <Link
              key={item.title}
              to="/case-studies"
              className="animate-fadeUp flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {item.industry}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-900">
                  {item.title}
                </h3>
              </div>
              <div className="mt-8 flex items-end justify-between border-t border-gray-100 pt-5">
                <div>
                  <p className={`font-mono text-3xl font-bold ${item.color}`}>
                    {item.metric}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{item.metricLabel}</p>
                </div>
                <ArrowRightIcon className="h-5 w-5 text-blue-600" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;