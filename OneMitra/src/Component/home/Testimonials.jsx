const testimonials = [
  {
    quote: "They didn't just hand us a deck. OneMitra stayed until the new process was actually running.",
    name: "VP of Operations",
    org: "Healthcare Network",
  },
  {
    quote: "The clearest strategy engagement we've run. Every recommendation tied back to a number we already cared about.",
    name: "CEO",
    org: "Manufacturing Group",
  },
  {
    quote: "Our team adopted the new workflow within two weeks because it was designed with them, not for them.",
    name: "Head of Strategy",
    org: "Professional Services Firm",
  },
];

function Testimonials() {
  return (
    <section className="bg-linear-to-br from-blue-900 to-blue-950 py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto px-4 text-center sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-300">
          Client voices
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          Trusted by operators who need results, not slides
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <figure
              key={t.name}
              className="animate-fadeUp flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm sm:p-7"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <blockquote className="flex-1 text-base leading-relaxed text-white sm:text-lg">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-blue-300">{t.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;