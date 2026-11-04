import Link from "next/link";
import { ArrowRight, ClipboardList, Layers, SlidersHorizontal } from "lucide-react";
import { CardGrid } from "@/components/shared/CardGrid";
import { CtaSection } from "@/components/shared/CtaSection";
import { PageHero } from "@/components/shared/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Container, IconTile, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = createMetadata({
  title: "Healthcare Billing & RCM Services | Revanta RCM",
  description:
    "Medical billing services, claims management, accounts receivable management, denial management, payment posting, eligibility verification, authorization support, and RCM reporting for U.S. healthcare providers.",
  path: "/services",
});

function ServiceIndex() {
  return (
    <nav
      aria-label="Services on this page"
      className="rounded-[22px] border border-line bg-white p-3 shadow-lift sm:p-4"
    >
      <p className="px-3 pt-2 pb-3 text-xs font-semibold tracking-[0.14em] text-muted uppercase">Jump to a service</p>
      <ul className="grid gap-1 sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <li key={service.slug}>
              <Link
                href={`#${service.slug}`}
                className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-offwhite"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 ring-1 ring-teal-100 transition-colors group-hover:bg-navy-800 group-hover:text-teal-400">
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 flex-1 text-[0.9rem] font-semibold text-navy-800">{service.navLabel}</span>
                <span aria-hidden="true" className="text-xs font-semibold text-navy-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Services"
        title="Healthcare Billing and Revenue Cycle Management Services"
        description="Revanta RCM supports the core operational processes of the revenue cycle — from medical billing and claims to accounts receivable follow-up, denial management, payment posting, and reporting. Each engagement is scoped around your specialty, systems, and priorities."
        actions={
          <>
            <ButtonLink href="/contact" size="lg" arrow>
              Schedule a Consultation
            </ButtonLink>
            <ButtonLink href="#scoping" variant="secondary" size="lg">
              How Engagements Work
            </ButtonLink>
          </>
        }
        aside={<ServiceIndex />}
      />

      <section aria-label="Service details" className="bg-white">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.slug}
              id={service.slug}
              className={index % 2 === 1 ? "border-y border-line bg-offwhite" : "bg-white"}
            >
              <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-14">
                <Reveal className="lg:col-span-5">
                  <div className="lg:sticky lg:top-28">
                    <div className="flex items-center gap-4">
                      <IconTile tone="navy">
                        <Icon aria-hidden="true" />
                      </IconTile>
                      <span className="font-display text-sm font-semibold tracking-[0.14em] text-muted uppercase">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-6 text-3xl leading-tight font-bold sm:text-[2.1rem]">{service.title}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-body">{service.summary}</p>
                    <ul aria-label={`${service.title} includes`} className="mt-6 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-line bg-white px-3 py-1.5 text-[0.82rem] font-medium text-navy-700"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-1.5 font-semibold text-teal-700 transition-colors hover:text-navy-800"
                    >
                      Discuss {service.title}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>

                <div className="grid gap-4 lg:col-span-7">
                  {[
                    { label: "What it involves", text: service.involves },
                    { label: "The operational challenge", text: service.challenge },
                    { label: "How Revanta RCM supports the workflow", text: service.support },
                  ].map((block, i) => (
                    <Reveal key={block.label} delay={i * 0.06}>
                      <div
                        className={
                          i === 2
                            ? "rounded-2xl bg-navy-900 p-7 text-navy-100 sm:p-8"
                            : "rounded-2xl border border-line bg-white p-7 sm:p-8"
                        }
                      >
                        <h3
                          className={
                            i === 2
                              ? "text-sm font-semibold tracking-[0.12em] text-teal-400 uppercase"
                              : "text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase"
                          }
                        >
                          {block.label}
                        </h3>
                        <p className={i === 2 ? "mt-3 text-lg leading-relaxed text-white" : "mt-3 text-lg leading-relaxed"}>
                          {block.text}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Container>
            </div>
          );
        })}
      </section>

      <Section id="scoping" tone="offwhite" labelledBy="scoping-heading" className="border-t border-line">
        <Container>
          <SectionHeading
            id="scoping-heading"
            eyebrow="Engagement models"
            title="Support That Fits How Your Organization Works"
            description="Every organization's systems, payers, and staffing are different. We define scope, responsibilities, and reporting with you before any work begins."
          />
          <div className="mt-14">
            <CardGrid
              items={[
                {
                  icon: Layers,
                  title: "Full RCM support",
                  description:
                    "End-to-end support across billing, claims, A/R follow-up, denials, payment posting, and reporting, coordinated with your internal team.",
                },
                {
                  icon: SlidersHorizontal,
                  title: "Targeted functional support",
                  description:
                    "Support for specific functions — such as A/R follow-up or payment posting — where your team needs additional capacity or structure.",
                },
                {
                  icon: ClipboardList,
                  title: "Assessment first",
                  description:
                    "A structured review of agreed workflows to identify where visibility and consistency could improve before deciding on next steps.",
                },
              ]}
            />
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-[0.94rem] leading-relaxed text-muted">
            Final workflows are determined by applicable payer rules and the terms of each client agreement. Revanta
            RCM does not guarantee specific reimbursement, collection, or denial outcomes.
          </p>
        </Container>
      </Section>

      <CtaSection
        title="Not Sure Where to Start?"
        description="Tell us about your organization and the revenue cycle challenges you are facing. We'll help you identify which services would make the most sense to discuss."
      />
    </>
  );
}
