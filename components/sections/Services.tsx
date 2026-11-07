import { Check } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section id="services" tone="light">
      <SectionHeading
        sectionId="services"
        tone="light"
        eyebrow="What we move"
        title="Freight services"
        description="Pick the service that fits the load. We handle the booking, the carrier, and the follow-up."
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <li key={service.title}>
              <Reveal delay={index * 0.05} className="h-full">
                <article className="h-full border-t-4 border-safety bg-white p-6 shadow-sm">
                  <Icon className="h-9 w-9 text-asphalt" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-2xl font-bold uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-ink-muted">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-dark" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
