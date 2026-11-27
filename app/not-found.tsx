import type { Metadata } from "next";
import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="bg-ivory px-2.5 pt-1 pb-10 sm:px-4 sm:pt-2 sm:pb-16">
    <section className="bg-royal-stage stage-frame relative isolate overflow-hidden text-royal-200">
      <div aria-hidden="true" className="bg-grain absolute inset-0 -z-10" />
      <div aria-hidden="true" className="bg-grid-dark mask-fade-y absolute inset-0 -z-10" />
      <Container className="flex min-h-[64vh] flex-col items-center justify-center py-24 text-center">
        <LogoMark tone="dark" className="h-14 w-14" />
        <p className="mt-8 font-display text-xl text-gold-400 italic">Error 404</p>
        <h1 className="mt-4 text-5xl leading-[1.05] text-white sm:text-6xl">We couldn&apos;t find that page.</h1>
        <p className="mt-6 max-w-lg text-lg text-royal-100/90">
          The page may have moved, or the link may be incorrect. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="accent" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost-dark">
            Contact Our Team
          </ButtonLink>
        </div>
      </Container>
    </section>
    </div>
  );
}
