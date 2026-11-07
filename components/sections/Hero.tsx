import { Clock, Navigation, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { ButtonLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { siteConfig } from "@/data/site";
import { HeroQuoteCard } from "./HeroQuoteCard";

const highlights = [
  { label: "24/7 dispatch desk", icon: Clock },
  { label: "Vetted carriers", icon: ShieldCheck },
  { label: "Live shipment updates", icon: Navigation },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative bg-asphalt py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8">
        <Reveal>
          <Badge>Truck dispatch &amp; freight</Badge>
          <h1
            id="hero-heading"
            className="mt-6 font-heading text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl"
          >
            Freight moved <span className="text-safety">on time.</span> Every load, every lane.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-concrete">
            Load booking, route planning, carrier support, and shipment tracking for shippers and
            owner-operators. One dispatch desk, always answering.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#quote" size="lg">
              Get a Quote
            </ButtonLink>
            <ButtonLink href={siteConfig.phoneHref} variant="outline" size="lg">
              Call Dispatch
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-offwhite">
            {highlights.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-safety" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <HeroQuoteCard />
        </Reveal>
      </div>
    </section>
  );
}
