"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Truck, X } from "lucide-react";
import { navItems, sectionIds } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ButtonLink } from "@/components/common/Button";
import { cn } from "@/components/common/cn";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-road bg-asphalt">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-safety text-asphalt">
            <Truck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-bold uppercase tracking-wide text-offwhite">
            {siteConfig.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "rounded-sm px-3 py-2 font-heading text-base font-semibold uppercase tracking-wider transition-colors hover:text-safety",
                      isActive ? "text-safety" : "text-offwhite"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 font-semibold text-offwhite hover:text-safety"
          >
            <Phone className="h-4 w-4 text-safety" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <ButtonLink href="#quote">Get a Quote</ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-offwhite hover:text-safety lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-road bg-asphalt lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-sm px-3 py-3 font-heading text-lg font-semibold uppercase tracking-wider text-offwhite hover:bg-steel hover:text-safety"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-3 border-t border-road pt-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 px-3 font-semibold text-offwhite"
              >
                <Phone className="h-4 w-4 text-safety" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <ButtonLink href="#quote" className="w-full" onClick={closeMenu}>
                Get a Quote
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
