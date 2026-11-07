import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  points: readonly string[];
}

export interface StatItem {
  value: string;
  label: string;
  positive?: boolean;
}

export interface StepItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FleetItem {
  name: string;
  length: string;
  payload: string;
  capacity: string;
  bestFor: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface HubNode {
  name: string;
  x: number;
  y: number;
  anchor: "start" | "end";
}
