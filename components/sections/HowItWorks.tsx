import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { steps } from "@/data/content";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="dark">
      <SectionHeading
        sectionId="how-it-works"
        eyebrow="The route"
        title="How it works"
        description="From request to delivery in four steps."
      />
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-road lg:block"
        />
        <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title}>
                <Reveal delay={index * 0.08}>
                  <div className="flex gap-4 lg:block">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-safety text-asphalt">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <div className="lg:mt-5">
                      <p className="font-heading text-sm font-semibold tracking-widest text-concrete">
                        STEP {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-heading text-2xl font-bold uppercase">{step.title}</h3>
                      <p className="mt-2 text-concrete">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
