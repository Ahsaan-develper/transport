"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/types";
import { cn } from "./cn";

interface AccordionProps {
  items: readonly FaqItem[];
  idPrefix: string;
}

export function Accordion({ items, idPrefix }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-road border-y border-road">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${idPrefix}-button-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-heading text-xl font-semibold uppercase tracking-wide text-offwhite transition-colors hover:text-safety"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-safety transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 pr-9 text-concrete"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
