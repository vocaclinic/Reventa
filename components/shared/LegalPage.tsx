import type { ReactNode } from "react";
import { TriangleAlert } from "lucide-react";
import { Container } from "@/components/ui/Layout";
import { PageHero } from "./PageHero";

export function LegalPage({
  title,
  breadcrumb,
  intro,
  children,
}: {
  title: string;
  breadcrumb: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero breadcrumb={breadcrumb} eyebrow="Legal" title={title} description={intro} />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div
              role="note"
              className="mb-12 flex gap-3 rounded-2xl border border-gold-200 bg-gold-50 p-5 text-[0.93rem] leading-relaxed text-royal-800"
            >
              <TriangleAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" />
              <p>
                <strong>Template notice:</strong> This page is a general template provided for website development. It
                must be reviewed and adapted by qualified legal counsel to reflect Revdian&apos;s actual practices,
                agreements, and applicable law before it is relied upon.
              </p>
            </div>
            <div className="legal-content">{children}</div>
          </div>
        </Container>
      </section>
    </>
  );
}
