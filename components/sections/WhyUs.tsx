import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { whyUs } from "@/data/content";

export function WhyUs() {
  return (
    <Section id="why-us" tone="light">
      <SectionHeading
        sectionId="why-us"
        tone="light"
        eyebrow="Why choose us"
        title="Built for reliability"
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={item.title}>
              <Reveal delay={index * 0.05} className="h-full">
                <article className="h-full border border-asphalt/20 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-safety text-asphalt">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-2xl font-bold uppercase">{item.title}</h3>
                  <p className="mt-2 text-ink-muted">{item.description}</p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
