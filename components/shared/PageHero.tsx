import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

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
    <section className="relative isolate overflow-hidden border-b border-line bg-offwhite">
      <div aria-hidden="true" className="bg-grid mask-fade-y absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-10%] -z-10 h-[28rem] w-[28rem] rounded-full bg-teal-100/70 blur-3xl"
      />
      <Container
        className={cn(
          "py-16 sm:py-20 lg:py-24",
          Boolean(aside) && "grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
        )}
      >
        <div className={cn(!aside && "max-w-3xl")}>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-navy-800">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-navy-700">
                {breadcrumb}
              </li>
            </ol>
          </nav>
          <Reveal>
            {eyebrow && <Eyebrow className="mt-8">{eyebrow}</Eyebrow>}
            <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.1rem]">{title}</h1>
            {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">{description}</p>}
            {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
            {children}
          </Reveal>
        </div>
        {aside && <Reveal delay={0.12}>{aside}</Reveal>}
      </Container>
    </section>
  );
}
