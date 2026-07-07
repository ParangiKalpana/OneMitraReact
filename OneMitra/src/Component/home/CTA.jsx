import { Link } from "react-router-dom";
import { ChatBubbleLeftRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

function CTA() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="animate-fadeUp relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-900 to-blue-950 px-6 py-12 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.30),transparent_55%)]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-4xl">
              Ready to move from strategy to execution?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-lg">
              Book a free 30-minute consultation, or message us directly on
              WhatsApp — most conversations start there.
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
  );
}

export default CTA;