import {
  LightBulbIcon,
  RocketLaunchIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

const pillars = [
  {
    icon: LightBulbIcon,
    title: "Strategic Expertise",
    description: "Senior consultants who've operated inside the industries they advise, not just studied them.",
    ring: "ring-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: RocketLaunchIcon,
    title: "Execution Focus",
    description: "We stay through implementation. Plans are tested against real operational constraints.",
    ring: "ring-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Measurable Outcomes",
    description: "Every engagement is scoped against a metric leadership already tracks.",
    ring: "ring-indigo-100",
    iconColor: "text-indigo-600",
  },
];

function WhyOneMitra() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto px-4 text-center sm:px-6 lg:px-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
          Why OneMitra
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
          Consulting that earns its seat past the first meeting
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="animate-fadeUp flex flex-col items-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md ring-4 ${pillar.ring}`}>
                <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {pillar.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyOneMitra;