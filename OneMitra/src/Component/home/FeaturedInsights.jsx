import { Link } from "react-router-dom";
import { ArrowRightIcon, ClockIcon } from "@heroicons/react/24/outline";

const articles = [
  {
    category: "Guide",
    badge: "bg-blue-100 text-blue-700",
    title: "What Is Digital Transformation, Really?",
    excerpt: "A practical definition, why it matters for mid-market companies, and how to scope a first initiative.",
    readTime: "7 min read",
  },
  {
    category: "Playbook",
    badge: "bg-green-100 text-green-700",
    title: "The 90-Day Process Optimization Playbook",
    excerpt: "A step-by-step framework for finding and fixing operational bottlenecks fast.",
    readTime: "9 min read",
  },
  {
    category: "Industry Insight",
    badge: "bg-amber-100 text-amber-700",
    title: "Growth Strategy Benchmarks for Retail in 2026",
    excerpt: "What's driving margin recovery across retail operators this year, with data.",
    readTime: "6 min read",
  },
];

function FeaturedInsights() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
              Knowledge Center
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Insights worth acting on
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Guides, playbooks, and frameworks built from real engagements.
            </p>
          </div>
          <Link
            to="/knowledge-center"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 sm:flex"
          >
            Visit Knowledge Center
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              key={article.title}
              to="/knowledge-center"
              className="animate-fadeUp flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${article.badge}`}>
                {article.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-900">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                {article.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-1.5 border-t border-gray-100 pt-4 text-xs text-gray-500">
                <ClockIcon className="h-4 w-4" />
                {article.readTime}
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/knowledge-center"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 sm:hidden"
        >
          Visit Knowledge Center
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default FeaturedInsights;