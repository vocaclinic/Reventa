import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Cpu,
  Eye,
  HeartHandshake,
  House,
  Layers,
  MessagesSquare,
  Route,
} from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { CheckList } from "@/components/shared/CheckList";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { ButtonLink } from "@/components/ui/Button";
import { Container, IconTile, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { OperatingModel } from "@/components/visuals/OperatingModel";
import { AutomationVisual, ReportingVisual, VisibilityVisual } from "@/components/visuals/TechVisuals";
import { serviceOverview } from "@/lib/services";

/** Brand statement: what the name Revdian means and the conduct it commits to. */
export function Manifesto() {
  const vows = [
    { icon: Eye, title: "Vigilant", text: "Every claim, deadline, and follow-up is tracked, not left to chance." },
    { icon: Route, title: "Structured", text: "Defined workflows replace ad-hoc billing and tribal knowledge." },
    { icon: MessagesSquare, title: "Transparent", text: "You always know where your revenue stands, and why." },
  ];

  return (
    <Section tone="white" labelledBy="manifesto-heading">
      <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-line bg-ivory p-8 sm:p-12">
            <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0" />
            <div className="relative">
              <LogoMark className="h-14 w-14" />
              <p className="mt-10 font-display text-5xl tracking-[-0.03em] text-ink-900 sm:text-6xl">
                Rev<span className="text-gold-500">·</span>di<span className="text-gold-500">·</span>an
              </p>
              <p className="mt-3 text-xs tracking-[0.24em] text-muted uppercase">Noun · Our name</p>
              <div aria-hidden="true" className="rule-gold my-8 h-px w-full" />
              <p className="font-display text-2xl leading-snug text-ink-800 italic">
                From <span className="text-gold-700 not-italic">revenue</span> and{" "}
                <span className="text-gold-700 not-italic">guardian</span>: one who stands watch over the revenue a
                healthcare provider has earned.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:pt-6">
          <SectionHeading
            id="manifesto-heading"
            align="left"
            eyebrow="Our name, our promise"
            title={
              <>
                You earned it through care. <em className="text-gold-600">We stand guard over it.</em>
              </>
            }
            description="Healthcare revenue slips away in the gaps: a missed notice, an unworked denial, a claim no one followed up on. Revdian exists to close those gaps with disciplined processes, modern tools, and people who take ownership."
          />
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {vows.map((vow, index) => {
              const Icon = vow.icon;
              return (
                <li key={vow.title}>
                  <Reveal delay={index * 0.06} className="flex items-start gap-5 py-6">
                    <IconTile>
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <div>
                      <h3 className="text-2xl">{vow.title}</h3>
                      <p className="mt-1 leading-relaxed text-body">{vow.text}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

const pillars = [
  {
    icon: Route,
    title: "Revenue Cycle Expertise",
    description: "Structured workflows designed around the operational needs of healthcare providers.",
  },
  {
    icon: Cpu,
    title: "Technology-Enabled Operations",
    description: "Modern tools and automation help simplify repetitive workflows and improve operational visibility.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent Communication",
    description: "Clear reporting, defined responsibilities, and consistent updates keep your team informed.",
  },
  {
    icon: BadgeCheck,
    title: "Quality-Focused Execution",
    description: "A process-driven approach to claims, follow-ups, documentation checks, and revenue operations.",
  },
];

export function ValueProposition() {
  return (
    <Section tone="ivory" labelledBy="value-heading" className="border-y border-line">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="value-heading"
            align="left"
            eyebrow="Our approach"
            title={
              <>
                A better approach to <em className="text-gold-600">healthcare revenue.</em>
              </>
            }
          />
          <p className="max-w-md text-lg leading-relaxed text-body lg:pb-2">
            Managing healthcare revenue requires more than submitting claims. It requires consistent processes,
            accurate information, proactive follow-up, and clear visibility across the entire revenue cycle.
          </p>
        </div>
        <ul className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="group relative border-b border-line py-10 sm:px-8 sm:odd:border-r sm:odd:pl-0 lg:border-r lg:border-b-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-px w-0 bg-gold-500 transition-all duration-700 ease-[var(--ease-brand)] group-hover:w-full"
                />
                <Reveal delay={index * 0.06}>
                  <div className="flex items-center justify-between">
                    <Icon aria-hidden="true" className="h-6 w-6 text-gold-600" strokeWidth={1.5} />
                    <span aria-hidden="true" className="font-display text-lg text-ink-200 italic">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-10 text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-body">{item.description}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

export function ServicesOverview() {
  return (
    <Section tone="white" labelledBy="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title={
            <>
              Comprehensive revenue cycle <em className="text-gold-600">management.</em>
            </>
          }
          description="From initial billing workflows to payment reconciliation and accounts receivable follow-up, we support the operational processes that keep healthcare revenue moving."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceOverview.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.06} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-ivory p-8 transition-all duration-500 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-gold-200 hover:bg-white hover:shadow-lift sm:p-9">
                  <span
                    aria-hidden="true"
                    className="rule-gold absolute inset-x-10 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="flex items-start justify-between">
                    <IconTile className="transition-colors duration-500 group-hover:bg-ink-900 group-hover:text-gold-400 group-hover:ring-ink-900">
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <span aria-hidden="true" className="font-display text-3xl text-ink-200 italic">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 text-[1.75rem] leading-tight">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-body">{service.description}</p>
                  <ul className="mt-7 space-y-3 border-t border-line pt-7">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-[0.93rem] text-ink-700">
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[0.94rem] font-medium text-ink-900 transition-colors hover:text-gold-700"
                  >
                    Learn more
                    <span className="sr-only"> about {service.title}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-14 text-center">
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
    <Section tone="ivory" labelledBy="specialties-heading" className="border-y border-line">
      <Container>
        <SectionHeading
          id="specialties-heading"
          eyebrow="Specialties"
          title={
            <>
              Specialized RCM for <em className="text-gold-600">the providers we serve.</em>
            </>
          }
          description="We are starting with two specialties that each have their own reimbursement rules, documentation requirements, and billing workflows, and we treat them that way."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="bg-ink-aurora relative isolate flex h-full flex-col overflow-hidden rounded-[32px] p-8 text-ink-200 shadow-lift sm:p-12">
              <div aria-hidden="true" className="bg-grain absolute inset-0 -z-10" />
              <div aria-hidden="true" className="bg-grid-dark mask-fade-b absolute inset-0 -z-10" />
              <div className="flex items-center justify-between">
                <IconTile tone="dark">
                  <House aria-hidden="true" />
                </IconTile>
                <span className="font-display text-lg text-gold-400 italic">Specialty 01</span>
              </div>
              <h3 className="mt-10 text-4xl text-white sm:text-5xl">Home Health RCM</h3>
              <ul aria-label="Key Home Health workflows" className="mt-5 flex flex-wrap gap-2">
                {["PDGM", "NOA", "OASIS", "30-day periods"].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-gold-400/25 bg-white/[0.03] px-3 py-1 text-xs font-medium tracking-wide text-ink-100"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-7 leading-relaxed">
                Home Health revenue operations require careful coordination across patient intake, eligibility,
                documentation workflows, billing, and payer follow-up. Revdian supports Home Health agencies with
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
              <div className="mt-auto pt-12">
                <ButtonLink href="/home-health-rcm" variant="accent" arrow>
                  Explore Home Health RCM
                </ButtonLink>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <article className="relative isolate flex h-full flex-col overflow-hidden rounded-[32px] border border-gold-200 bg-[linear-gradient(160deg,#FAF5E8_0%,#FFFFFF_55%)] p-8 shadow-soft sm:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -bottom-24 -z-10 h-80 w-80 rounded-full bg-gold-100 blur-3xl"
              />
              <div className="flex items-center justify-between">
                <IconTile tone="ink">
                  <HeartHandshake aria-hidden="true" />
                </IconTile>
                <span className="font-display text-lg text-gold-700 italic">Specialty 02</span>
              </div>
              <h3 className="mt-10 text-4xl sm:text-5xl">Hospice RCM</h3>
              <ul aria-label="Key Hospice workflows" className="mt-5 flex flex-wrap gap-2">
                {["NOE", "Benefit periods", "Levels of care", "Monthly claims"].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-gold-200 bg-white px-3 py-1 text-xs font-medium tracking-wide text-ink-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-7 leading-relaxed text-body">
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
              <div className="mt-auto pt-12">
                <ButtonLink href="/hospice-rcm" arrow>
                  Explore Hospice RCM
                </ButtonLink>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[24px] border border-line bg-white px-6 py-5 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-4">
              <IconTile className="h-10 w-10 [&_svg]:h-5 [&_svg]:w-5">
                <Layers aria-hidden="true" />
              </IconTile>
              <p className="text-[0.95rem] text-body">
                <span className="font-medium text-ink-900">Growing with healthcare.</span> We plan to extend our
                support to dental practices, medical practices, clinics, and specialty groups.
              </p>
            </div>
            <Link
              href="/specialties"
              className="inline-flex shrink-0 items-center gap-1.5 text-[0.94rem] font-medium text-ink-900 hover:text-gold-700"
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

export function WhyRevdian() {
  return (
    <Section tone="ink" labelledBy="why-heading">
      <div aria-hidden="true" className="bg-grid-dark mask-fade-y absolute inset-0 -z-10" />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <OperatingModel />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            id="why-heading"
            tone="dark"
            align="left"
            eyebrow="Why Revdian"
            title={
              <>
                Why providers trust Revdian <em className="text-gold-gradient pr-1">to stand guard.</em>
              </>
            }
            description="We believe effective revenue cycle management starts with understanding how healthcare organizations operate. Our approach combines structured processes, operational expertise, and technology to support more organized and transparent revenue operations."
          />
          <ul className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {whyPoints.map((point, index) => (
              <li key={point.title}>
                <Reveal delay={index * 0.04} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400" />
                  <span>
                    <span className="block font-medium text-white">{point.title}</span>
                    <span className="mt-1 block text-[0.92rem] leading-relaxed text-ink-200/80">{point.text}</span>
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
    <Section tone="white" labelledBy="process-heading">
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow="Our process"
          title={
            <>
              A clear, structured path to <em className="text-gold-600">better RCM operations.</em>
            </>
          }
          description="Every engagement follows a defined path, so your team knows what happens, when, and who is responsible."
        />
        <div className="mt-20">
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
        "Automation helps organize repetitive tasks (sorting worklists, routing follow-ups, and flagging items that need attention) so specialists can focus on work that requires judgment.",
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
    <Section tone="ivory" labelledBy="technology-heading" className="border-t border-line">
      <Container>
        <SectionHeading
          id="technology-heading"
          eyebrow="Technology & innovation"
          title={
            <>
              Healthcare expertise, <em className="text-gold-600">powered by smarter technology.</em>
            </>
          }
          description="Technology should make healthcare revenue operations more organized, efficient, and transparent. Revdian embraces modern tools and automation to support structured workflows while keeping human oversight at the center of quality-focused execution."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06} className="h-full">
              <article className="h-full rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-7">
                {card.visual}
                <h3 className="mt-8 text-[1.6rem] leading-tight">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-6 grid gap-4 rounded-[28px] border border-gold-200 bg-gold-50 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6 sm:p-8">
            <IconTile tone="ink">
              <BadgeCheck aria-hidden="true" />
            </IconTile>
            <p className="leading-relaxed text-ink-700">
              <span className="font-display text-xl text-ink-900">
                AI and automation support our people. They don&apos;t replace them.
              </span>{" "}
              Where we use automation or AI-enabled tools, they help organize and prioritize work. Billing decisions,
              corrections, and client communication remain with experienced team members.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
