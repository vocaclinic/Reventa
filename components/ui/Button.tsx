import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "secondary" | "ghost-dark" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 ease-[var(--ease-brand)] focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-800 text-white shadow-[0_1px_2px_rgb(16_42_67/0.2),0_8px_20px_-8px_rgb(16_42_67/0.5)] hover:bg-navy-900 hover:-translate-y-px",
  accent:
    "bg-teal-500 text-navy-950 shadow-[0_8px_24px_-10px_rgb(22_166_161/0.7)] hover:bg-teal-400 hover:-translate-y-px",
  secondary:
    "border border-navy-200 bg-white text-navy-800 hover:border-navy-800 hover:bg-navy-50",
  "ghost-dark": "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
  link: "px-0! py-0! text-teal-700 hover:text-navy-800",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
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
      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
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
