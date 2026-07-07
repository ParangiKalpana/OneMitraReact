import { Link } from "react-router-dom";
import { ArrowRightIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const cases = [
  {
    industry: "Manufacturing",
    title: "Cutting production downtime by 31%",
    challenge:
      "Unplanned line stoppages were eating into delivery timelines across three plants.",
    approach:
      "Mapped root causes across maintenance, staffing, and supplier lead times, then redesigned the preventive maintenance schedule.",
    metric: "31%",
    metricLabel: "Less downtime",
    color: "text-slate-700",
    badge: "bg-slate-100 text-slate-700",
  },
  {
    industry: "Healthcare",
    title: "Streamlining patient intake across 12 clinics",
    challenge:
      "Inconsistent intake processes were creating long wait times and duplicated records.",
    approach:
      "Standardized the intake workflow and rolled out a shared digital form across all locations.",
    metric: "2.4x",
    metricLabel: "Faster intake",
    color: "text-rose-600",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    industry: "Logistics",
    title: "Redesigning last-mile delivery routing",
    challenge:
      "Routing decisions were manual and didn't account for real-time traffic or driver capacity.",
    approach:
      "Implemented a dynamic routing framework and retrained dispatch on the new decision model.",
    metric: "18%",
    metricLabel: "Lower cost-to-serve",
    color: "text-blue-700",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    industry: "Retail",
    title: "Recovering margin through assortment strategy",
    challenge:
      "SKU proliferation was diluting margin without a clear read on which products drove profit.",
    approach:
      "Built a contribution-margin model and used it to guide a phased assortment reduction.",
    metric: "9%",
    metricLabel: "Margin improvement",
    color: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
  },
];

function CaseStudies() {
  return (
    <>
      {/* Hero / intro */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-blue-200/40 blur-3xl" />
        <div
          className="pointer-events-none absolute top-10 -right-16 h-64 w-64 animate-pulse rounded-full bg-amber-200/30 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative w-full max-w-[1280px] mx-auto px-4 text-center sm:px-6 lg:px-10">
          <p className="animate-fadeUp mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Case studies
          </p>
          <h1
            className="animate-fadeUp mx-auto max-w-2xl text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Engagements,{" "}
            <span className="bg-linear-to-r from-blue-700 via-amber-500 to-green-600 bg-clip-text text-transparent">
              measured end to end
            </span>
          </h1>
          <p
            className="animate-fadeUp mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            A sample of the work — the challenge, the approach, and the number
            that mattered.
          </p>
        </div>
      </section>

      {/* Case study cards */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          {cases.map((item, index) => (
            <div
              key={item.title}
              className="animate-fadeUp flex flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${item.badge}`}>
                {item.industry}
              </span>
              <h2 className="mt-3 text-xl font-semibold leading-snug text-gray-900">
                {item.title}
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-500 sm:text-base">
                <p>
                  <span className="font-semibold text-gray-900">Challenge — </span>
                  {item.challenge}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Approach — </span>
                  {item.approach}
                </p>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-5">
                <p className={`font-mono text-3xl font-bold ${item.color}`}>
                  {item.metric}
                </p>
                <p className="mt-1 text-xs text-gray-500">{item.metricLabel}</p>
              </div>
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
                Want results like these?
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

export default CaseStudies;