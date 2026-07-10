import { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.message.trim()) next.message = "Tell us a little about your goal.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // TODO: wire to CMS / email endpoint + reCAPTCHA
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-blue-200/40 blur-3xl" />
      <div
        className="pointer-events-none absolute top-1/3 -right-16 h-64 w-64 animate-pulse rounded-full bg-green-200/30 blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative w-full max-w-[1280px] mx-auto grid grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="animate-fadeUp lg:col-span-5">
          <p className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Contact
          </p>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Let's talk about{" "}
            <span className="bg-linear-to-r from-blue-700 to-green-500 bg-clip-text text-transparent">
              what you're trying to solve
            </span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Fill out the form, or reach us directly on WhatsApp — most
            conversations start there.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="https://wa.me/917383840814"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0F7A40] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0C6935] hover:shadow-lg sm:w-auto"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <ul className="space-y-4 pt-4 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <PhoneIcon className="h-4 w-4 text-blue-700" />
                </span>
                +91 7383840814
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <EnvelopeIcon className="h-4 w-4 text-blue-700" />
                </span>
                onemitramarketing@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <MapPinIcon className="h-4 w-4 text-blue-700" />
                </span>
                Ahmedabad, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div
          className="animate-fadeUp lg:col-span-7"
          style={{ animationDelay: "150ms" }}
        >
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-md bg-green-50 p-4 text-sm text-green-800">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0" />
                <p>Thanks — your message has been sent. We'll get back to you within one business day.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-900">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-900">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-900">
                  What are you trying to solve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:w-auto"
              >
                Send message
              </button>

              <p className="text-xs text-gray-600">
                Protected by reCAPTCHA. By submitting, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;