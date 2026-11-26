import Link from "next/link";
import { useId } from "react";
import { cn } from "@/lib/utils";
import { R_BOWL_PATH, R_LEG_PATH, SHIELD_PATH } from "./paths";

type Tone = "light" | "dark";

/**
 * Revdian mark: a guardian shield (Rev + guardian = Revdian) enclosing an "R"
 * whose gold leg steps forward, the revenue that keeps moving under protection.
 */
export function LogoMark({ tone = "light", className }: { tone?: Tone; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-10 w-10 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={tone === "light" ? "#1F2A42" : "#1A2338"} />
          <stop offset="100%" stopColor={tone === "light" ? "#0A0F1C" : "#05080F"} />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F1E2BD" />
          <stop offset="55%" stopColor="#D4B97F" />
          <stop offset="100%" stopColor="#9C7A3C" />
        </linearGradient>
      </defs>
      <path d={SHIELD_PATH} fill={`url(#${id}-fill)`} stroke={`url(#${id}-gold)`} strokeWidth="1.3" />
      <path
        d={R_BOWL_PATH}
        fill="none"
        stroke="#FAF8F3"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={R_LEG_PATH}
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  tone = "light",
  className,
  href = "/",
}: {
  tone?: Tone;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Revdian — home"
    >
      <LogoMark tone={tone} className="transition-transform duration-500 ease-[var(--ease-brand)] group-hover:-translate-y-px" />
      <span
        className={cn(
          "font-display text-[1.6rem] leading-none font-medium tracking-[-0.02em]",
          tone === "light" ? "text-ink-900" : "text-white",
        )}
      >
        Revdian
      </span>
    </Link>
  );
}
