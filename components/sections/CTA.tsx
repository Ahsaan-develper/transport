import { ButtonLink } from "@/components/common/Button";
import { siteConfig } from "@/data/site";

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-safety text-asphalt">
      <div aria-hidden="true" className="hazard-stripes h-4" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 id="cta-heading" className="font-heading text-4xl font-bold uppercase leading-none sm:text-5xl">
            Got a load? Let&apos;s move it.
          </h2>
          <p className="mt-3 text-lg font-medium">Get a rate from our dispatch desk today.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#quote" variant="dark" size="lg">
            Get a Quote
          </ButtonLink>
          <ButtonLink href={siteConfig.phoneHref} variant="outlineDark" size="lg">
            Call {siteConfig.phone}
          </ButtonLink>
        </div>
      </div>
      <div aria-hidden="true" className="hazard-stripes h-4" />
    </section>
  );
}
