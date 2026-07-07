import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-ink-200 rounded-xl border border-ink-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">
                {item.question}
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-ink-500 sm:px-6 sm:text-base">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;