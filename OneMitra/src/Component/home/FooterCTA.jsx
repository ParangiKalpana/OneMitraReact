import { useState } from "react";
import { PaperAirplaneIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

function FooterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to newsletter provider / CMS endpoint
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="border-t border-gray-100 bg-white py-12 sm:py-14">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="animate-fadeUp flex flex-col items-center gap-6 rounded-xl border border-gray-200 bg-linear-to-r from-blue-50 to-white px-6 py-8 text-center sm:flex-row sm:justify-between sm:px-10 sm:py-10 sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Get playbooks and insights in your inbox
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              One useful email a month. No spam, unsubscribe anytime.
            </p>
          </div>

          <div className="w-full sm:max-w-md">
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center gap-2 rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Subscribe
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </form>

            {submitted && (
              <p className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-blue-700 sm:justify-start">
                <CheckCircleIcon className="h-4 w-4" />
                You're subscribed. Thanks!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterCTA;