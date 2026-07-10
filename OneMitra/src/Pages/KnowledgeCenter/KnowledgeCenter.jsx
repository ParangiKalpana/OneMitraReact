import { useMemo, useState } from "react";
import { MagnifyingGlassIcon, ClockIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const categories = [
  "All",
  "Guides",
  "Playbooks",
  "Industry Insights",
  "Templates",
  "FAQs",
  "Comparisons",
  "Frameworks",
  "Case Analysis",
];

const categoryColors = {
  Guides: "bg-blue-100 text-blue-700",
  Playbooks: "bg-green-100 text-green-700",
  "Industry Insights": "bg-amber-100 text-amber-700",
  Templates: "bg-purple-100 text-purple-700",
  FAQs: "bg-pink-100 text-pink-700",
  Comparisons: "bg-cyan-100 text-cyan-700",
  Frameworks: "bg-indigo-100 text-indigo-700",
  "Case Analysis": "bg-rose-100 text-rose-700",
};

const articles = [
  {
    category: "Guides",
    title: "What Is Digital Transformation, Really?",
    excerpt: "A practical definition and how to scope a first initiative.",
    readTime: "7 min read",
  },
  {
    category: "Playbooks",
    title: "The 90-Day Process Optimization Playbook",
    excerpt: "A step-by-step framework for fixing operational bottlenecks.",
    readTime: "9 min read",
  },
  {
    category: "Industry Insights",
    title: "Growth Strategy Benchmarks for Retail in 2026",
    excerpt: "What's driving margin recovery across retail operators.",
    readTime: "6 min read",
  },
  {
    category: "Templates",
    title: "Operating Model Assessment Template",
    excerpt: "A ready-to-use framework to audit your current operating model.",
    readTime: "4 min read",
  },
  {
    category: "Frameworks",
    title: "The RACI-Based Decision Framework",
    excerpt: "Clarify ownership across cross-functional transformation projects.",
    readTime: "5 min read",
  },
  {
    category: "Comparisons",
    title: "Build vs. Buy: A Technology Decision Framework",
    excerpt: "How to evaluate custom builds against off-the-shelf platforms.",
    readTime: "8 min read",
  },
  {
    category: "Case Analysis",
    title: "How a Logistics Firm Cut Cost-to-Serve by 18%",
    excerpt: "A breakdown of the routing redesign and change management approach.",
    readTime: "10 min read",
  },
  {
    category: "FAQs",
    title: "Consulting Engagement FAQs, Answered",
    excerpt: "Pricing, timelines, and what to expect from a first engagement.",
    readTime: "3 min read",
  },
];

const faqs = [
  {
    question: "How often is the Knowledge Center updated?",
    answer:
      "New guides, playbooks, and industry insights are published regularly, drawn from active client engagements.",
  },
  {
    question: "Can I request a topic?",
    answer:
      "Yes — reach out through the contact page or WhatsApp and we'll consider it for an upcoming guide.",
  },
];

function KnowledgeCenter() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;
      const matchesQuery = `${article.title} ${article.excerpt}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      {/* Hero / intro */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-blue-200/40 blur-3xl" />
        <div
          className="pointer-events-none absolute top-10 -right-16 h-64 w-64 animate-pulse rounded-full bg-purple-200/30 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <p className="animate-fadeUp mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Knowledge Center
            </p>
            <h1
              className="animate-fadeUp mx-auto max-w-2xl text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl"
              style={{ animationDelay: "80ms" }}
            >
              Guides, playbooks, and{" "}
              <span className="bg-linear-to-r from-blue-700 via-purple-600 to-green-500 bg-clip-text text-transparent">
                frameworks worth acting on
              </span>
            </h1>
          </div>

          {/* Search */}
          <div
            className="animate-fadeUp mx-auto mt-8 w-full max-w-md"
            style={{ animationDelay: "220ms" }}
          >
            <div className="relative">
              <MagnifyingGlassIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, guides, FAQs..."
                aria-label="Search Knowledge Center"
                className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Category pills */}
          <div
            className="animate-fadeUp mt-6 flex flex-wrap justify-center gap-2"
            style={{ animationDelay: "280ms" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-150 sm:text-sm ${
                  activeCategory === category
                    ? "border-blue-700 bg-blue-900 text-white shadow-sm"
                    : "border-gray-200 bg-white text-gray-600 hover:border-blue-400 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-sm text-gray-500">
              No articles match your search. Try a different keyword or category.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filtered.map((article, index) => (
                <a
                  key={article.title}
                  href="#"
                  className="animate-fadeUp flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <span
                    className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                      categoryColors[article.category] || "bg-gray-100 text-gray-700"
                    }`}
                  >
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
                </a>
              ))}
            </div>
          )}
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
              About the Knowledge Center
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white shadow-sm">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.question}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
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
    </>
  );
}

export default KnowledgeCenter;