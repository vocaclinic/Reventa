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
      <PageHero breadcrumb={breadcrumb} eyebrow="Legal" title={title} description={intro}>
        <p className="mt-6 text-sm text-muted">Last updated: [Date — to be added upon legal review]</p>
      </PageHero>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div
              role="note"
              className="mb-10 flex gap-3 rounded-2xl border border-navy-200 bg-navy-50 p-5 text-[0.93rem] leading-relaxed text-navy-800"
            >
              <TriangleAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
              <p>
                <strong>Template notice:</strong> This page is a general template provided for website development. It
                must be reviewed and adapted by qualified legal counsel to reflect Revanta RCM&apos;s actual practices,
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
