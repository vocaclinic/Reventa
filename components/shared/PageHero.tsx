import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Dark hero used at the top of every inner page. Pass light-on-dark buttons
 * (`variant="accent"` / `variant="ghost-dark"`) in `actions`.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  actions,
  aside,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Label of the current page shown after "Home" */
  breadcrumb: string;
  actions?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink-aurora relative isolate overflow-hidden text-ink-200">
      <div aria-hidden="true" className="bg-grain pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="bg-grid-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 -z-10 h-[34rem] w-[34rem] rounded-full border border-gold-400/10"
      />
      <div aria-hidden="true" className="rule-gold absolute inset-x-0 bottom-0 h-px opacity-40" />
      <Container
        className={cn(
          "py-16 sm:py-20 lg:py-28",
          Boolean(aside) && "grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
        )}
      >
        <div className={cn(!aside && "max-w-4xl")}>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-ink-200/60">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-ink-100">
                {breadcrumb}
              </li>
            </ol>
          </nav>
          <Reveal>
            {eyebrow && (
              <Eyebrow tone="dark" className="mt-10">
                {eyebrow}
              </Eyebrow>
            )}
            <h1 className="mt-6 text-[2.6rem] leading-[1.04] text-white sm:text-[3.4rem] lg:text-[3.75rem]">{title}</h1>
            {description && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-200 sm:text-xl">{description}</p>}
            {actions && <div className="mt-10 flex flex-col gap-3 sm:flex-row">{actions}</div>}
            {children}
          </Reveal>
        </div>
        {aside && <Reveal delay={0.12}>{aside}</Reveal>}
      </Container>
    </section>
  );
}
