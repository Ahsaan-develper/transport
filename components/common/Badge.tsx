import type { ReactNode } from "react";
import { cn } from "./cn";

type BadgeTone = "amber" | "outline" | "success";

const tones: Record<BadgeTone, string> = {
  amber: "bg-safety text-asphalt",
  outline: "border border-road text-concrete",
  success: "bg-success text-asphalt",
};

interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = "amber", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm px-3 py-1 font-heading text-sm font-semibold uppercase tracking-widest",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
