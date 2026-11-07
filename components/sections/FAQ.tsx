import { Accordion } from "@/components/common/Accordion";
import { Section, SectionHeading } from "@/components/common/Section";
import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <Section id="faq" tone="dark">
      <SectionHeading sectionId="faq" eyebrow="Questions" title="Frequently asked" />
      <div className="max-w-3xl">
        <Accordion items={faqs} idPrefix="faq" />
      </div>
    </Section>
  );
}
