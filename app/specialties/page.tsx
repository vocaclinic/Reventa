import Link from "next/link";
import { ArrowRight, HeartHandshake, House } from "lucide-react";
import { CheckList } from "@/components/shared/CheckList";
import { CtaSection } from "@/components/shared/CtaSection";
import { PageHero } from "@/components/shared/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Container, IconTile, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Healthcare Specialties We Support | Revdian",
  description:
    "Revdian provides specialty-focused revenue cycle management for Home Health agencies and Hospice providers, with workflows built around each specialty's Medicare billing rules.",
  path: "/specialties",
});

const comparison = [
  { label: "Payment model", homeHealth: "PDGM — case-mix adjusted payment per 30-day period of care", hospice: "Daily (per diem) rates by level of care" },
  { label: "Key notices", homeHealth: "Notice of Admission (NOA)", hospice: "Notice of Election (NOE) and Notice of Termination/Revocation (NOTR)" },
  { label: "Care periods", homeHealth: "60-day certification periods, billed as two 30-day periods", hospice: "Two 90-day benefit periods, then unlimited 60-day periods" },
  { label: "Core documentation", homeHealth: "OASIS, Plan of Care and signed orders, face-to-face encounter", hospice: "Election statement, certification of terminal illness, plan of care, face-to-face before period 3+" },
  { label: "Billing cadence", homeHealth: "Claim per 30-day period of care", hospice: "Typically monthly, processed in sequence" },
  { label: "Payment adjustments to watch", homeHealth: "Late NOA reductions, LUPAs", hospice: "Late NOE non-covered days, aggregate and inpatient caps" },
];

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Specialties"
        eyebrow="Specialties"
        title="Specialty-Focused Revenue Cycle Management"
        description="Revenue cycle work is never one-size-fits-all. We begin with Home Health and Hospice — and build each workflow around the rules, documentation, and payers specific to that specialty."
        actions={
          <ButtonLink href="/contact" variant="accent" size="lg" arrow>
            Book a Consultation
          </ButtonLink>
        }
      />

      <Section labelledBy="focus-heading">
        <Container>
          <SectionHeading id="focus-heading" eyebrow="Current focus" title="Where We Focus Today" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                href: "/home-health-rcm",
                icon: House,
                title: "Home Health RCM",
                description:
                  "Support for Home Health agencies across NOA tracking, 30-day period billing, documentation completeness checks, A/R follow-up, denials, and payment posting.",
                points: ["NOA tracking support", "PDGM period claims", "Documentation completeness checks", "A/R and denial follow-up"],
                cta: "Explore Home Health RCM",
              },
              {
                href: "/hospice-rcm",
                icon: HeartHandshake,
                title: "Hospice RCM",
                description:
                  "Support for hospice providers across NOE tracking, monthly claims by level of care, eligibility verification, A/R follow-up, denials, and reporting.",
                points: ["NOE and NOTR tracking", "Monthly claims support", "Eligibility and payer verification", "Payment posting and reporting"],
                cta: "Explore Hospice RCM",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.href} delay={index * 0.08} className="h-full">
                  <article className="group flex h-full flex-col rounded-[28px] border border-line bg-ivory p-8 transition-all duration-300 hover:border-gold-200 hover:shadow-lift sm:p-10">
                    <IconTile tone="royal">
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <h3 className="mt-7 text-2xl font-medium sm:text-3xl">{item.title}</h3>
                    <p className="mt-4 leading-relaxed text-body">{item.description}</p>
                    <CheckList items={item.points} columns={2} className="mt-7" />
                    <Link
                      href={item.href}
                      className="mt-auto inline-flex items-center gap-1.5 pt-9 font-semibold text-gold-700 transition-colors hover:text-royal-800"
                    >
                      {item.cta}
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" labelledBy="compare-heading" className="border-y border-line">
        <Container>
          <SectionHeading
            id="compare-heading"
            eyebrow="Why specialty matters"
            title="Home Health and Hospice Are Different — So Are Their Workflows"
            description="Both specialties are reimbursed by Medicare, but the rules, notices, and documentation that drive billing are distinct. Here is a simplified overview of how they differ."
          />
          <Reveal>
            <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] text-left">
                  <caption className="sr-only">Comparison of Home Health and Hospice billing characteristics</caption>
                  <thead>
                    <tr className="border-b border-line bg-royal-900 text-white">
                      <th scope="col" className="w-[22%] px-6 py-4 text-sm font-semibold">
                        Area
                      </th>
                      <th scope="col" className="px-6 py-4 text-sm font-semibold">
                        <span className="inline-flex items-center gap-2">
                          <House aria-hidden="true" className="h-4 w-4 text-gold-400" /> Home Health
                        </span>
                      </th>
                      <th scope="col" className="px-6 py-4 text-sm font-semibold">
                        <span className="inline-flex items-center gap-2">
                          <HeartHandshake aria-hidden="true" className="h-4 w-4 text-gold-400" /> Hospice
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {comparison.map((row) => (
                      <tr key={row.label} className="align-top">
                        <th scope="row" className="px-6 py-5 text-[0.93rem] font-semibold text-royal-800">
                          {row.label}
                        </th>
                        <td className="px-6 py-5 text-[0.93rem] leading-relaxed">{row.homeHealth}</td>
                        <td className="px-6 py-5 text-[0.93rem] leading-relaxed">{row.hospice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted">
            Simplified for general information about traditional Medicare. Payer rules change over time and vary by payer;
            current CMS guidance and your payer contracts govern actual requirements.
          </p>
        </Container>
      </Section>

      <CtaSection
        title="Let's Discuss Your Specialty's Revenue Cycle."
        description="Whether you're a Home Health agency or a hospice, tell us about your workflows and we'll talk through how we may be able to help."
      />
    </>
  );
}
