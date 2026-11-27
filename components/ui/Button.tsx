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
    "bg-royal-700 text-ivory shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_1px_2px_rgb(28_51_95/0.25),0_14px_30px_-14px_rgb(36_63_112/0.75)] hover:bg-royal-800 hover:-translate-y-px",
  accent:
    "bg-[linear-gradient(135deg,#EBD7A6_0%,#D4AF67_50%,#C29A4E_100%)] text-royal-900 shadow-[inset_0_1px_0_rgb(255_255_255/0.45),0_14px_34px_-14px_rgb(212_175_103/0.8)] hover:-translate-y-px hover:brightness-[1.05]",
  secondary:
    "border border-royal-700/20 bg-white/70 text-royal-700 backdrop-blur hover:border-royal-700/50 hover:bg-white",
  "ghost-dark":
    "border border-white/20 bg-white/[0.06] text-white backdrop-blur hover:border-gold-400/60 hover:bg-white/[0.1]",
  link: "px-0! py-0! text-gold-700 hover:text-royal-700",
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
