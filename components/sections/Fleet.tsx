import { Truck } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { fleet } from "@/data/content";

export function Fleet() {
  return (
    <Section id="fleet" tone="light">
      <SectionHeading
        sectionId="fleet"
        tone="light"
        eyebrow="Equipment"
        title="Fleet & capacity"
        description="Typical trailer specs. Exact limits vary by equipment, state, and carrier."
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fleet.map((item, index) => (
          <li key={item.name}>
            <Reveal delay={index * 0.05} className="h-full">
              <article className="h-full bg-asphalt p-6 text-offwhite">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-2xl font-bold uppercase">{item.name}</h3>
                  <Truck className="h-7 w-7 text-safety" aria-hidden="true" />
                </div>
                <dl className="mt-5 divide-y divide-road text-sm">
                  <div className="flex justify-between gap-4 py-2">
                    <dt className="text-concrete">Length</dt>
                    <dd className="text-right font-semibold">{item.length}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-2">
                    <dt className="text-concrete">Payload</dt>
                    <dd className="text-right font-semibold">{item.payload}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-2">
                    <dt className="text-concrete">Capacity</dt>
                    <dd className="text-right font-semibold">{item.capacity}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-concrete">
                  <span className="font-semibold text-safety">Best for:</span> {item.bestFor}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
