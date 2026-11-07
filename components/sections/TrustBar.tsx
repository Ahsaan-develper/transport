import { stats } from "@/data/content";
import { cn } from "@/components/common/cn";

export function TrustBar() {
  return (
    <section aria-label="Company statistics" className="border-y border-road bg-steel py-10">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse text-center">
            <dt className="mt-1 text-sm font-semibold uppercase tracking-widest text-concrete">
              {stat.label}
            </dt>
            <dd
              className={cn(
                "font-heading text-4xl font-bold sm:text-5xl",
                stat.positive ? "text-success" : "text-offwhite"
              )}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
