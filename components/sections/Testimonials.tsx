import { Quote } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <Section id="testimonials" tone="dark">
      <SectionHeading
        sectionId="testimonials"
        eyebrow="Proof"
        title="Shippers and drivers on the record"
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <li key={`${item.company}-${index}`}>
            <Reveal delay={index * 0.08} className="h-full">
              <figure className="flex h-full flex-col border border-road bg-steel p-6">
                <Quote className="h-8 w-8 text-safety" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-lg">{item.quote}</blockquote>
                <figcaption className="mt-6 border-t border-road pt-4">
                  <span className="block font-heading text-lg font-semibold uppercase">
                    {item.name}
                  </span>
                  <span className="text-sm text-concrete">
                    {item.role}, {item.company}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
