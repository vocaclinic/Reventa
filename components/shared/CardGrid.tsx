import type { LucideIcon } from "lucide-react";
import { IconTile } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export type CardItem = { title: string; description: string; icon: LucideIcon };

/** Grid of icon cards used for challenges, values and principles. */
export function CardGrid({
  items,
  columns = 3,
  tone = "white",
}: {
  items: CardItem[];
  columns?: 2 | 3 | 4;
  tone?: "white" | "ivory";
}) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
      )}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.title} delay={(index % columns) * 0.06} className="h-full">
            <article
              className={cn(
                "group h-full rounded-[28px] border border-line p-8 transition-all duration-500 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-gold-200 hover:shadow-lift",
                tone === "white" ? "bg-white" : "bg-ivory",
              )}
            >
              <IconTile className="transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-gold-400 group-hover:ring-ink-900">
                <Icon aria-hidden="true" />
              </IconTile>
              <h3 className="mt-7 text-2xl leading-tight">{item.title}</h3>
              <p className="mt-2.5 leading-relaxed text-body">{item.description}</p>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
