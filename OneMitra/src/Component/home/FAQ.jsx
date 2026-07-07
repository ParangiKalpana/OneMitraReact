import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is digital transformation?",
    answer: "Digital transformation is the process of redesigning how a business operates by adopting digital tools, data, and workflows — not just installing new software, but changing how decisions get made and work gets done.",
  },
  {
    question: "Why does process optimization matter?",
    answer: "Inefficient processes quietly add cost and slow decision-making. Optimizing them reduces cost-to-serve, shortens cycle times, and frees teams to focus on higher-value work.",
  },
  {
    question: "How long does consulting implementation take?",
    answer: "Most engagements run 6 to 16 weeks depending on scope, with an initial diagnostic phase followed by a structured rollout and measurement period.",
  },
  {
    question: "What industries benefit most?",
    answer: "We've delivered the strongest results in healthcare, manufacturing, retail, logistics, and professional services, though our frameworks apply across most operationally intensive industries.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
            FAQs
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
            Straight answers before you book a call.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white shadow-sm">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
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
  );
}

export default FAQ;