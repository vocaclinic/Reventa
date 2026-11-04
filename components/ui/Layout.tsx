import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type Tone = "white" | "offwhite" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-white",
  offwhite: "bg-offwhite",
  navy: "bg-navy-900 text-navy-200",
};

export function Section({
  id,
  tone = "white",
  className,
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative py-20 sm:py-24 lg:py-28", tones[tone], className)}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase",
        tone === "light" ? "text-teal-700" : "text-teal-400",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-70" />
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone} className={align === "center" ? "justify-center" : undefined}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl leading-[1.15] font-bold sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" && "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "light" ? "text-body" : "text-navy-200",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Rounded square container for a section/card icon. */
export function IconTile({
  children,
  tone = "teal",
  className,
}: {
  children: ReactNode;
  tone?: "teal" | "navy" | "dark";
  className?: string;
}) {
  const styles = {
    teal: "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
    navy: "bg-navy-800 text-teal-400",
    dark: "bg-white/5 text-teal-400 ring-1 ring-white/10",
  }[tone];
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl [&_svg]:h-[22px] [&_svg]:w-[22px]",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}
