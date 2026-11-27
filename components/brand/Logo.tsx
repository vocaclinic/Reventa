import Link from "next/link";
import { useId } from "react";
import { cn } from "@/lib/utils";
import {
  CROSS_GRADIENT,
  CROSS_PATH,
  MARK_BODY_WIDTH,
  MARK_VIEWBOX,
  R_BODY_PATH,
  R_LEG_PATH,
  V_ARM_GRADIENT_Y,
  V_ARM_PATH,
  V_ARM_WIDTH,
  markColors,
} from "./paths";

type Tone = "light" | "dark";

/**
 * Revdian symbol: a medical cross set into an "R" whose leg runs into a rising
 * "V", navy turning to gold. Use tone="dark" on navy backgrounds.
 */
export function LogoMark({ tone = "light", className }: { tone?: Tone; className?: string }) {
  const id = useId().replace(/:/g, "");
  const c = markColors[tone];
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={cn("h-10 w-10 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={`${id}-arm`}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1={V_ARM_GRADIENT_Y[0]}
          x2="0"
          y2={V_ARM_GRADIENT_Y[1]}
        >
          <stop offset="0" stopColor={c.armTop} />
          <stop offset="1" stopColor={c.body} />
        </linearGradient>
        <linearGradient id={`${id}-cross`} gradientUnits="userSpaceOnUse" {...CROSS_GRADIENT}>
          <stop offset="0" stopColor={c.cross[0]} />
          <stop offset="0.5" stopColor={c.cross[1]} />
          <stop offset="1" stopColor={c.cross[2]} />
        </linearGradient>
      </defs>
      <path d={R_BODY_PATH} fill="none" stroke={c.body} strokeWidth={MARK_BODY_WIDTH} />
      <path d={R_LEG_PATH} fill={c.body} />
      <path
        d={V_ARM_PATH}
        fill="none"
        stroke={`url(#${id}-arm)`}
        strokeWidth={V_ARM_WIDTH}
        strokeLinecap="round"
      />
      <path d={CROSS_PATH} fill={`url(#${id}-cross)`} />
    </svg>
  );
}

/** Horizontal logo: symbol + "Revdian" wordmark, with the optional "Revenue, guarded." tagline. */
export function Logo({
  tone = "light",
  className,
  href = "/",
  tagline = false,
}: {
  tone?: Tone;
  className?: string;
  href?: string;
  tagline?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-2", className)}
      aria-label="Revdian — home"
    >
      <LogoMark
        tone={tone}
        className={cn(
          "transition-transform duration-500 ease-[var(--ease-brand)] group-hover:-translate-y-px",
          tagline ? "h-14 w-14" : "h-11 w-11",
        )}
      />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-logo leading-none font-bold tracking-[-0.025em]",
            tagline ? "text-[2rem]" : "text-[1.6rem]",
            tone === "light" ? "text-royal-900" : "text-white",
          )}
        >
          Revdian
        </span>
        {tagline && (
          <span
            className={cn(
              "mt-1.5 font-logo text-[0.6rem] leading-none font-semibold tracking-[0.32em] uppercase",
              tone === "light" ? "text-gold-700" : "text-gold-400",
            )}
          >
            Revenue, guarded.
          </span>
        )}
      </span>
    </Link>
  );
}
