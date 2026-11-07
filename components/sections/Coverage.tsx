import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { hubs, regions, routes } from "@/data/content";
import type { HubNode } from "@/data/types";

function findHub(name: string): HubNode | undefined {
  return hubs.find((hub) => hub.name === name);
}

export function Coverage() {
  return (
    <Section id="coverage" tone="dark">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            sectionId="coverage"
            eyebrow="Where we run"
            title="Coverage area"
            description="Lanes across the lower 48 states, with dispatch supporting each region around the clock."
          />
          <ul className="flex flex-wrap gap-3">
            {regions.map((region) => (
              <li
                key={region}
                className="rounded-sm border border-road px-4 py-2 font-heading text-lg font-semibold uppercase tracking-wide"
              >
                {region}
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="border border-road bg-steel p-4">
            <svg
              viewBox="0 0 600 320"
              role="img"
              aria-label="Route map connecting major freight hubs: Seattle, Los Angeles, Dallas, Chicago, Atlanta and New York"
              className="h-auto w-full"
            >
              {routes.map(([from, to]) => {
                const a = findHub(from);
                const b = findHub(to);
                if (!a || !b) return null;
                return (
                  <line
                    key={`${from}-${to}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    strokeWidth={2}
                    strokeDasharray="8 8"
                    className="stroke-concrete"
                  />
                );
              })}
              {hubs.map((hub) => (
                <g key={hub.name}>
                  <circle cx={hub.x} cy={hub.y} r={9} className="fill-safety" />
                  <circle cx={hub.x} cy={hub.y} r={3} className="fill-asphalt" />
                  <text
                    x={hub.anchor === "start" ? hub.x + 16 : hub.x - 16}
                    y={hub.y + 5}
                    textAnchor={hub.anchor}
                    fontSize={15}
                    fontWeight={600}
                    className="fill-offwhite"
                  >
                    {hub.name}
                  </text>
                </g>
              ))}
            </svg>
            <p className="mt-2 text-center text-xs text-concrete">
              Illustrative route graphic, not to scale.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
