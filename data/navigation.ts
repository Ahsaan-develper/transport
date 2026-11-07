import type { NavItem } from "./types";

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Fleet", href: "#fleet" },
  { label: "Coverage", href: "#coverage" },
  { label: "FAQ", href: "#faq" },
];

export const sectionIds: string[] = navItems.map((item) => item.href.slice(1));
