import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-offwhite">
      <div aria-hidden="true" className="bg-grid mask-fade-y absolute inset-0 -z-10" />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">404</p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">We couldn&apos;t find that page.</h1>
        <p className="mt-5 max-w-lg text-lg text-body">
          The page may have moved, or the link may be incorrect. Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact Our Team
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
