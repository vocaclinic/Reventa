"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-soft">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-q-${index}`;
        const panelId = `${baseId}-a-${index}`;
        return (
          <div key={item.question}>
            <h3 className="text-base">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left font-display text-[1.05rem] font-semibold text-navy-800 transition-colors hover:text-teal-700 sm:px-8 sm:py-6"
              >
                {item.question}
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-300",
                    open ? "rotate-45 bg-navy-800 text-white ring-navy-800" : "text-navy-700 ring-navy-200",
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 leading-relaxed text-body sm:px-8 sm:pr-20">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
