import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "secondary" | "ghost-dark" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-[-0.005em] whitespace-nowrap transition-all duration-300 ease-[var(--ease-brand)] focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-ivory shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_1px_2px_rgb(16_28_58/0.25),0_12px_28px_-12px_rgb(16_28_58/0.6)] hover:bg-ink-800 hover:-translate-y-px",
  accent:
    "bg-[linear-gradient(135deg,#F3E3BA_0%,#D4AF67_45%,#C29A4E_100%)] text-ink-950 shadow-[inset_0_1px_0_rgb(255_255_255/0.5),0_14px_34px_-14px_rgb(194_154_78/0.85)] hover:-translate-y-px hover:brightness-[1.06]",
  secondary:
    "border border-ink-900/15 bg-white/70 text-ink-900 backdrop-blur hover:border-ink-900/40 hover:bg-white",
  "ghost-dark":
    "border border-white/15 bg-white/[0.04] text-white backdrop-blur hover:border-gold-400/50 hover:bg-white/[0.08]",
  link: "px-0! py-0! text-gold-700 hover:text-ink-900",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(base, variants[variant], sizes[size], className);
}

function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
    />
  );
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  children: ReactNode;
};

export function ButtonLink({
  variant,
  size,
  className,
  arrow = false,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link {...props} className={buttonClasses({ variant, size, className })}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
};

export function Button({ variant, size, className, arrow = false, children, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonClasses({ variant, size, className })}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
