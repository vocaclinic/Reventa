import Link from "next/link";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

/**
 * Revanta "R" mark: a solid stem and bowl with a teal leg that sweeps forward,
 * representing revenue continuing to move through the cycle.
 */
export function LogoMark({ tone = "light", className }: { tone?: Tone; className?: string }) {
  const tile = tone === "light" ? "#102A43" : "rgba(255,255,255,0.08)";
  const ring = tone === "light" ? "none" : "rgba(255,255,255,0.18)";
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0.5" y="0.5" width="39" height="39" rx="11" fill={tile} stroke={ring} />
      <path
        d="M14 29.5V10.5h7.25a5.75 5.75 0 0 1 0 11.5H14"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4 22.2 25.3 27.9c1.1 1.3 2.4 1.8 4.2 1.6"
        fill="none"
        stroke="#3FC3BD"
        strokeWidth="3.4"
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
      aria-label="Revanta RCM — home"
    >
      <LogoMark tone={tone} />
      <span className="flex items-baseline gap-1.5 font-display text-[1.2rem] leading-none font-bold tracking-tight">
        <span className={tone === "light" ? "text-navy-800" : "text-white"}>Revanta</span>
        <span
          className={cn(
            "text-[0.72rem] font-semibold tracking-[0.16em]",
            tone === "light" ? "text-teal-700" : "text-teal-400",
          )}
        >
          RCM
        </span>
      </span>
    </Link>
  );
}
