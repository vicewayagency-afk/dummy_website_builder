interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  overline,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl mb-12 lg:mb-16`}>
      {overline && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] mb-4 font-[family-name:var(--font-heading)] ${
            light ? "text-bronze-400" : "text-bronze-500"
          }`}
        >
          {overline}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold leading-tight font-[family-name:var(--font-heading)] ${
          light ? "text-white" : "text-charcoal-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-steel-300" : "text-charcoal-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
