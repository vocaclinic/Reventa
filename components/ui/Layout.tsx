import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type Tone = "white" | "ivory" | "ink";

const tones: Record<Tone, string> = {
  white: "bg-white",
  ivory: "bg-ivory",
  ink: "bg-ink-aurora text-ink-200 isolate overflow-hidden",
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
      className={cn("relative py-24 sm:py-28 lg:py-36", tones[tone], className)}
    >
      {tone === "ink" && <div aria-hidden="true" className="bg-grain pointer-events-none absolute inset-0 -z-10" />}
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
        "inline-flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.28em] uppercase",
        tone === "light" ? "text-gold-700" : "text-gold-400",
        className,
      )}
    >
      <span aria-hidden="true" className="inline-flex items-center gap-1.5">
        <span className={cn("h-1.5 w-1.5 rotate-45", tone === "light" ? "bg-ruby-600" : "bg-ruby-500")} />
        <span className="h-px w-7 bg-current opacity-60" />
      </span>
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
          "mt-5 text-[2.35rem] leading-[1.06] sm:text-5xl lg:text-[3.6rem]",
          tone === "dark" && "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
            tone === "light" ? "text-body" : "text-ink-200",
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
  tone = "gold",
  className,
}: {
  children: ReactNode;
  tone?: "gold" | "ink" | "dark";
  className?: string;
}) {
  const styles = {
    gold: "bg-gold-50 text-gold-700 ring-1 ring-gold-200/70",
    ink: "bg-ink-900 text-gold-400 ring-1 ring-ink-900 shadow-[inset_0_1px_0_rgb(255_255_255/0.1)]",
    dark: "bg-white/[0.04] text-gold-400 ring-1 ring-gold-400/20",
  }[tone];
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl [&_svg]:h-[21px] [&_svg]:w-[21px] [&_svg]:stroke-[1.6]",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}
