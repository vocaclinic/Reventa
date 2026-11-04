import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckList({
  items,
  tone = "light",
  className,
  columns = 1,
}: {
  items: string[];
  tone?: "light" | "dark";
  className?: string;
  columns?: 1 | 2;
}) {
  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2 sm:gap-x-6", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              tone === "light" ? "bg-teal-100 text-teal-700" : "bg-teal-500/15 text-teal-400",
            )}
          >
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span
            className={cn(
              "text-[0.95rem] leading-snug",
              tone === "light" ? "text-navy-700" : "text-navy-100",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
