function SectionHeading({ eyebrow, title, description, align = "left", invert = false }) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const eyebrowColor = invert ? "text-brand-300" : "text-brand-600";
  const titleColor = invert ? "text-white" : "text-ink-900";
  const descColor = invert ? "text-white/70" : "text-ink-500";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <p className={`font-mono text-xs font-semibold tracking-[0.14em] uppercase mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold sm:text-4xl ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;