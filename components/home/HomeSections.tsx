import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Cpu,
  HeartHandshake,
  House,
  Layers,
  MessagesSquare,
  Route,
} from "lucide-react";
import { CardGrid } from "@/components/shared/CardGrid";
import { CheckList } from "@/components/shared/CheckList";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { ButtonLink } from "@/components/ui/Button";
import { Container, IconTile, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { OperatingModel } from "@/components/visuals/OperatingModel";
import { AutomationVisual, ReportingVisual, VisibilityVisual } from "@/components/visuals/TechVisuals";
import { serviceOverview } from "@/lib/services";

export function ValueProposition() {
  return (
    <Section labelledBy="value-heading">
      <Container>
        <SectionHeading
          id="value-heading"
          eyebrow="Our approach"
          title="A Better Approach to Healthcare Revenue Management"
          description="Managing healthcare revenue requires more than submitting claims. It requires consistent processes, accurate information, proactive follow-up, and clear visibility across the entire revenue cycle."
        />
        <div className="mt-14">
          <CardGrid
            columns={4}
            tone="offwhite"
            items={[
              {
                icon: Route,
                title: "Revenue Cycle Expertise",
                description: "Structured workflows designed around the operational needs of healthcare providers.",
              },
              {
                icon: Cpu,
                title: "Technology-Enabled Operations",
                description:
                  "Modern tools and automation help simplify repetitive workflows and improve operational visibility.",
              },
              {
                icon: MessagesSquare,
                title: "Transparent Communication",
                description:
                  "Clear reporting, defined responsibilities, and consistent updates keep your team informed.",
              },
              {
                icon: BadgeCheck,
                title: "Quality-Focused Execution",
                description:
                  "A process-driven approach to claims, follow-ups, documentation checks, and revenue operations.",
              },
            ]}
          />
        </div>
      </Container>
    </Section>
  );
}

export function ServicesOverview() {
  return (
    <Section tone="offwhite" labelledBy="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Comprehensive Revenue Cycle Management Services"
          description="From initial billing workflows to payment reconciliation and accounts receivable follow-up, we support the operational processes that keep healthcare revenue moving."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceOverview.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lift sm:p-8">
                  <div className="flex items-start justify-between">
                    <IconTile className="transition-colors duration-300 group-hover:bg-navy-800 group-hover:text-teal-400 group-hover:ring-navy-800">
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <span aria-hidden="true" className="font-display text-sm font-semibold text-navy-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-body">{service.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-[0.93rem] text-navy-700">
                        <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-teal-600" strokeWidth={2.5} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[0.94rem] font-semibold text-teal-700 transition-colors hover:text-navy-800"
                  >
                    Learn More
                    <span className="sr-only"> about {service.title}</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/services" variant="secondary" arrow>
            View All Services
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

export function SpecialtiesSection() {
  return (
    <Section labelledBy="specialties-heading">
      <Container>
        <SectionHeading
          id="specialties-heading"
          eyebrow="Specialties"
          title="Specialized RCM Support for Healthcare Providers"
          description="We are starting with two specialties that each have their own reimbursement rules, documentation requirements, and billing workflows — and we treat them that way."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="relative isolate flex h-full flex-col overflow-hidden rounded-[28px] bg-navy-900 p-8 text-navy-200 sm:p-10">
              <div aria-hidden="true" className="bg-grid-dark mask-fade-b absolute inset-0 -z-10" />
              <div aria-hidden="true" className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
              <div className="flex items-center justify-between">
                <IconTile tone="dark">
                  <House aria-hidden="true" />
                </IconTile>
                <span className="text-xs font-semibold tracking-[0.16em] text-teal-400 uppercase">Specialty 01</span>
              </div>
              <h3 className="mt-8 text-3xl font-bold text-white">Home Health RCM</h3>
              <ul aria-label="Key Home Health workflows" className="mt-4 flex flex-wrap gap-2">
                {["PDGM", "NOA", "OASIS", "30-day periods"].map((tag) => (
                  <li key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-navy-100">
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed">
                Home Health revenue operations require careful coordination across patient intake, eligibility,
                documentation workflows, billing, and payer follow-up. Revanta RCM supports Home Health agencies with
                structured revenue cycle processes designed around the complexities of the specialty.
              </p>
              <CheckList
                tone="dark"
                columns={2}
                className="mt-8"
                items={[
                  "NOA tracking support",
                  "Billing and claims management",
                  "Eligibility verification",
                  "Documentation completeness checks",
                  "Accounts receivable follow-up",
                  "Denial management",
                  "Payment posting and reporting",
                ]}
              />
              <div className="mt-auto pt-10">
                <ButtonLink href="/home-health-rcm" variant="accent" arrow>
                  Explore Home Health RCM
                </ButtonLink>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <article className="relative isolate flex h-full flex-col overflow-hidden rounded-[28px] border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-white p-8 sm:p-10">
              <div aria-hidden="true" className="absolute -right-20 -bottom-24 -z-10 h-72 w-72 rounded-full bg-teal-100 blur-3xl" />
              <div className="flex items-center justify-between">
                <IconTile tone="navy">
                  <HeartHandshake aria-hidden="true" />
                </IconTile>
                <span className="text-xs font-semibold tracking-[0.16em] text-teal-700 uppercase">Specialty 02</span>
              </div>
              <h3 className="mt-8 text-3xl font-bold">Hospice RCM</h3>
              <ul aria-label="Key Hospice workflows" className="mt-4 flex flex-wrap gap-2">
                {["NOE", "Benefit periods", "Levels of care", "Monthly claims"].map((tag) => (
                  <li key={tag} className="rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-semibold text-navy-700">
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-body">
                Hospice providers operate within a specialized reimbursement and documentation environment. Our
                approach focuses on organized billing workflows, claims follow-up, payment visibility, and
                operational support tailored to hospice revenue cycle needs.
              </p>
              <CheckList
                columns={2}
                className="mt-8"
                items={[
                  "Billing and claims support",
                  "Eligibility and payer verification",
                  "Claims tracking",
                  "Accounts receivable follow-up",
                  "Denial management",
                  "Payment posting",
                  "Revenue reporting",
                ]}
              />
              <div className="mt-auto pt-10">
                <ButtonLink href="/hospice-rcm" arrow>
                  Explore Hospice RCM
                </ButtonLink>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-offwhite px-6 py-5 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-4">
              <IconTile className="h-10 w-10 [&_svg]:h-5 [&_svg]:w-5">
                <Layers aria-hidden="true" />
              </IconTile>
              <p className="text-[0.95rem] text-body">
                <span className="font-semibold text-navy-800">Growing with healthcare.</span> We plan to extend our
                support to dental practices, medical practices, clinics, and specialty groups.
              </p>
            </div>
            <Link
              href="/specialties"
              className="inline-flex shrink-0 items-center gap-1.5 text-[0.94rem] font-semibold text-teal-700 hover:text-navy-800"
            >
              View all specialties <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

const whyPoints = [
  { title: "Specialty-focused operational understanding", text: "Workflows that reflect how your specialty actually bills." },
  { title: "Technology-enabled workflows", text: "Tools that organize work and reduce manual handoffs." },
  { title: "Proactive accounts receivable management", text: "Prioritized follow-up before balances age further." },
  { title: "Transparent communication", text: "Clear ownership, regular updates, and shared reporting." },
  { title: "Structured quality assurance", text: "Defined review checkpoints within key workflows." },
  { title: "Flexible support models", text: "Full RCM support or targeted help for specific functions." },
  { title: "Scalable processes", text: "Documented processes designed to grow with your organization." },
];

export function WhyRevanta() {
  return (
    <Section tone="navy" labelledBy="why-heading" className="overflow-hidden">
      <div aria-hidden="true" className="bg-grid-dark mask-fade-y absolute inset-0" />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="order-2 lg:order-1">
          <OperatingModel />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            id="why-heading"
            tone="dark"
            align="left"
            eyebrow="Why Revanta RCM"
            title="Why Healthcare Providers Choose Revanta RCM"
            description="We believe effective revenue cycle management starts with understanding how healthcare organizations operate. Our approach combines structured processes, operational expertise, and technology to support more organized and transparent revenue operations."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {whyPoints.map((point, index) => (
              <li key={point.title}>
                <Reveal delay={index * 0.04} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-400 ring-1 ring-teal-400/30"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{point.title}</span>
                    <span className="mt-1 block text-[0.92rem] leading-relaxed text-navy-200">{point.text}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export const defaultProcessSteps = [
  {
    title: "Understand",
    description:
      "We begin by understanding your specialty, existing workflows, payer mix, and operational challenges.",
  },
  {
    title: "Assess",
    description:
      "We review the agreed workflows and identify opportunities to improve process visibility and consistency.",
  },
  {
    title: "Implement",
    description:
      "We establish defined processes, responsibilities, communication channels, and reporting workflows.",
  },
  {
    title: "Optimize",
    description:
      "We monitor agreed operational metrics, review recurring issues, and refine workflows over time.",
  },
];

export function ProcessSection() {
  return (
    <Section labelledBy="process-heading">
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow="Our process"
          title="A Clear and Structured Path to Better RCM Operations"
          description="Every engagement follows a defined path, so your team knows what happens, when, and who is responsible."
        />
        <div className="mt-16">
          <ProcessTimeline steps={defaultProcessSteps} />
        </div>
      </Container>
    </Section>
  );
}

export function TechnologySection() {
  const cards = [
    {
      title: "Workflow Automation",
      description:
        "Automation helps organize repetitive tasks — sorting worklists, routing follow-ups, and flagging items that need attention — so specialists can focus on work that requires judgment.",
      visual: <AutomationVisual />,
    },
    {
      title: "Data-Driven Reporting",
      description:
        "Billing and workflow activity becomes structured, recurring reporting on claims, A/R, denials, and payments that we review together with your team.",
      visual: <ReportingVisual />,
    },
    {
      title: "Operational Visibility",
      description:
        "Clear status tracking shows where work stands across the revenue cycle, who owns the next step, and what needs to be escalated.",
      visual: <VisibilityVisual />,
    },
  ];

  return (
    <Section tone="offwhite" labelledBy="technology-heading">
      <Container>
        <SectionHeading
          id="technology-heading"
          eyebrow="Technology & innovation"
          title="Healthcare Expertise, Powered by Smarter Technology"
          description="Technology should make healthcare revenue operations more organized, efficient, and transparent. Revanta RCM embraces modern tools and automation to support structured workflows while keeping human oversight at the center of quality-focused execution."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-white p-6 sm:p-7">
                {card.visual}
                <h3 className="mt-7 text-xl font-bold">{card.title}</h3>
                <p className="mt-2.5 leading-relaxed text-body">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-6 grid gap-4 rounded-2xl border border-teal-200 bg-teal-50/70 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6 sm:p-7">
            <IconTile tone="navy">
              <BadgeCheck aria-hidden="true" />
            </IconTile>
            <p className="leading-relaxed text-navy-700">
              <span className="font-semibold text-navy-800">AI and automation support our people — they don&apos;t replace them.</span>{" "}
              Where we use automation or AI-enabled tools, they help organize and prioritize work. Billing decisions,
              corrections, and client communication remain with experienced team members.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
