import type { ReactNode } from "react";
import { cn } from "./cn";

export type SectionTone = "dark" | "steel" | "light";

const toneClasses: Record<SectionTone, string> = {
  dark: "bg-asphalt text-offwhite",
  steel: "bg-steel text-offwhite",
  light: "bg-offwhite text-asphalt",
};

interface SectionProps {
  id: string;
  tone?: SectionTone;
  divider?: boolean;
  className?: string;
  children: ReactNode;
}

export function Section({ id, tone = "dark", divider = true, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("relative py-16 sm:py-24", toneClasses[tone], className)}
    >
      {divider ? <div aria-hidden="true" className="road-divider" /> : null}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  sectionId: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: SectionTone;
}

export function SectionHeading({
  sectionId,
  eyebrow,
  title,
  description,
  tone = "dark",
}: SectionHeadingProps) {
  const isLight = tone === "light";
  return (
    <div className="mb-12 max-w-2xl">
      <p
        className={cn(
          "font-heading text-sm font-semibold uppercase tracking-[0.2em]",
          isLight ? "text-signal-dark" : "text-safety"
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={`${sectionId}-heading`}
        className="mt-2 font-heading text-4xl font-bold uppercase leading-none sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-lg", isLight ? "text-ink-muted" : "text-concrete")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
