import {
  Banknote,
  CalendarClock,
  ClipboardCheck,
  FileSearch,
  FileText,
  Hourglass,
  Layers,
  Network,
  Users,
  CircleDollarSign,
} from "lucide-react";
import { CardGrid } from "@/components/shared/CardGrid";
import { CheckList } from "@/components/shared/CheckList";
import { CtaSection } from "@/components/shared/CtaSection";
import { FaqSection } from "@/components/shared/FaqSection";
import { FeatureList, type Feature } from "@/components/shared/FeatureBlock";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { HomeHealthTracker } from "@/components/visuals/Trackers";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Home Health Billing & RCM Services | Revdian",
  description:
    "Home Health billing and revenue cycle management support: NOA tracking, PDGM 30-day period claims, documentation completeness checks, denial management, A/R follow-up, and payment posting for Home Health agencies.",
  path: "/home-health-rcm",
});

const challenges = [
  {
    icon: CalendarClock,
    title: "NOA timeliness",
    description:
      "Medicare requires a Notice of Admission within five calendar days of the start of care. Late NOAs can result in a payment reduction for the affected days.",
  },
  {
    icon: Layers,
    title: "PDGM complexity",
    description:
      "Under PDGM, payment for each 30-day period depends on clinical grouping, admission source and timing, functional impairment, and comorbidities — so information must be complete before billing.",
  },
  {
    icon: ClipboardCheck,
    title: "Documentation dependencies",
    description:
      "Final claims depend on clinical items such as OASIS completion, a signed Plan of Care and orders, and face-to-face encounter documentation being in place.",
  },
  {
    icon: Hourglass,
    title: "Visit utilization and LUPAs",
    description:
      "When visits in a period fall below the LUPA threshold, the period is paid differently, which makes visit patterns important for billing visibility.",
  },
  {
    icon: Network,
    title: "Mixed payer requirements",
    description:
      "Medicare Advantage, Medicaid, and commercial payers each bring their own eligibility, authorization, and billing rules alongside traditional Medicare.",
  },
  {
    icon: Users,
    title: "Limited back-office capacity",
    description:
      "Busy agency teams often struggle to keep up with claim follow-up, remittance review, denials, and reporting alongside daily operations.",
  },
];

const features: Feature[] = [
  {
    id: "noa-tracking",
    eyebrow: "NOA tracking and timeliness",
    title: "NOA Tracking and Timeliness Support",
    icon: CalendarClock,
    description: (
      <>
        <p>
          A Notice of Admission establishes the start of a home health period of care sequence with Medicare. Because
          late NOAs can reduce payment, timeliness depends on clear visibility into new admissions and start-of-care
          dates.
        </p>
        <p>
          We help your team keep NOAs on schedule by tracking admissions, monitoring NOA submission and acceptance
          status, and flagging items that need attention before deadlines.
        </p>
      </>
    ),
    points: [
      "Start-of-care and NOA deadline tracking",
      "NOA submission and acceptance monitoring",
      "Rejected NOA follow-up and correction coordination",
      "Visibility into periods affected by late NOAs",
    ],
  },
  {
    id: "billing-claims",
    eyebrow: "Billing and claims",
    title: "Billing and Claims Management",
    icon: FileText,
    description: (
      <>
        <p>
          Under PDGM, Medicare home health claims are submitted for 30-day periods of care within a 60-day
          certification period. Each claim depends on accurate admission, assessment, and visit information.
        </p>
        <p>
          We support claim preparation and submission workflows, review claims against agency and payer requirements
          before submission, and monitor status through your clearinghouse and payer systems.
        </p>
      </>
    ),
    points: [
      "30-day period of care claim preparation",
      "Pre-billing review against agency and payer requirements",
      "Clearinghouse rejection review and correction",
      "Claim status monitoring through resolution",
      "Medicare Advantage and commercial payer billing support",
    ],
  },
  {
    id: "documentation-support",
    eyebrow: "Documentation workflow",
    title: "Documentation Workflow Support",
    icon: ClipboardCheck,
    description: (
      <p>
        Billing depends on clinical documentation, but clinical documentation belongs to your clinicians. Our role is
        to identify missing or incomplete billing-related items — such as unsigned orders or a pending OASIS — and
        coordinate with your authorized personnel to resolve them before claims move forward.
      </p>
    ),
    note: "Revdian does not create, alter, or interpret clinical records, and does not make clinical eligibility, homebound status, or medical necessity determinations. Those remain with your agency's clinicians and the certifying practitioner.",
    points: [
      "Pre-billing documentation completeness checks",
      "Plan of Care and signed order status tracking",
      "OASIS completion status confirmation",
      "Face-to-face encounter documentation status tracking",
      "Coordinated follow-up with authorized agency staff",
    ],
  },
  {
    id: "denial-management",
    eyebrow: "Denials",
    title: "Denial Management",
    icon: FileSearch,
    description: (
      <p>
        We review remittance advice to identify denied and adjusted claims, categorize them by reason and root cause,
        coordinate corrections or appeals with your team within payer timelines, and track recurring issues so they
        can be addressed at the source.
      </p>
    ),
    points: [
      "Remittance-based denial identification",
      "Categorization by reason code and root cause",
      "Correction and appeal workflow coordination",
      "Additional Documentation Request (ADR) tracking support",
      "Denial trend reporting",
    ],
  },
  {
    id: "ar-follow-up",
    eyebrow: "Accounts receivable",
    title: "Accounts Receivable Follow-up",
    icon: CircleDollarSign,
    description: (
      <p>
        We prioritize outstanding claims by age, balance, and payer, follow up through payer portals and phone, and
        document every action so your agency has a clear record of where each claim stands and what happens next.
      </p>
    ),
    points: [
      "Aging-based follow-up prioritization",
      "Medicare, Medicare Advantage, and commercial payer follow-up",
      "Documented follow-up notes for every touchpoint",
      "Escalation of items that need agency input",
    ],
  },
  {
    id: "payment-posting",
    eyebrow: "Payments and reporting",
    title: "Payment Posting and Reporting",
    icon: Banknote,
    description: (
      <p>
        We post payments and adjustments from electronic remittance advice (ERA/835) and EOBs, reconcile against
        deposits, and provide recurring reports covering claims, accounts receivable, denials, and payments.
      </p>
    ),
    points: [
      "ERA and EOB payment posting",
      "Deposit reconciliation",
      "Potential underpayment flagging for review",
      "Recurring Home Health RCM reports",
    ],
  },
];

const services = [
  "NOA tracking support",
  "Billing and claims management",
  "Eligibility verification",
  "Documentation completeness checks",
  "Accounts receivable follow-up",
  "Denial management",
  "Payment posting and reporting",
  "Authorization tracking for non-Medicare payers",
];

const process = [
  {
    title: "Understand",
    description:
      "We learn your agency's EMR and billing systems, payer mix, intake-to-billing handoffs, and current challenges.",
  },
  {
    title: "Assess",
    description:
      "We review agreed workflows — NOAs, pre-billing checks, claims, and A/R — to find gaps in visibility and consistency.",
  },
  {
    title: "Implement",
    description:
      "We set up defined responsibilities, worklists, escalation paths, communication channels, and reporting.",
  },
  {
    title: "Optimize",
    description:
      "We monitor agreed metrics, review recurring denials and delays with your team, and refine workflows over time.",
  },
];

const faqs = [
  {
    question: "Does Revdian work with our existing EMR and billing system?",
    answer:
      "We aim to work within the systems your agency already uses. System access, user roles, and workflows are defined during onboarding and depend on your platforms and the terms of our agreement.",
  },
  {
    question: "Can you help us stay on top of NOA deadlines?",
    answer:
      "Yes. We can track admissions and start-of-care dates, monitor NOA submission and acceptance, and flag items approaching deadlines. Responsibilities for each step are agreed with your agency in advance.",
  },
  {
    question: "Do you review or change clinical documentation?",
    answer:
      "No. We check whether billing-related items — such as OASIS completion status, signed orders, and Plan of Care — are in place, and we coordinate with your authorized staff when something is missing. We never create or alter clinical records or make clinical eligibility or medical necessity determinations.",
  },
  {
    question: "Can you guarantee fewer denials or higher reimbursement?",
    answer:
      "No, and we would be cautious of anyone who does. Outcomes depend on many factors, including documentation, payer rules, and payer behavior. We focus on consistent processes, timely follow-up, and clear reporting so your team has better visibility and control.",
  },
  {
    question: "Do you support payers other than traditional Medicare?",
    answer:
      "Our workflows are designed to support Medicare Advantage, Medicaid, and commercial payers as well. The specific payers we support for your agency are confirmed during the assessment, since each has its own requirements.",
  },
  {
    question: "Is Home Health handled the same way as Hospice?",
    answer:
      "No. Home Health and Hospice have different reimbursement models, notices, and documentation requirements, so we run them as separate workflows. If your organization provides both, each service line is set up on its own terms.",
  },
];

export default function HomeHealthPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home Health RCM"
        eyebrow="Home Health RCM"
        title="Home Health Revenue Cycle Management That Keeps Your Operations Moving."
        description="From NOA tracking and billing workflows to claims follow-up, denial management, and accounts receivable visibility, Revdian supports the financial operations of Home Health agencies."
        actions={
          <>
            <ButtonLink href="/contact" variant="accent" size="lg" arrow>
              Book a Consultation
            </ButtonLink>
            <ButtonLink href="#home-health-services" variant="ghost-dark" size="lg">
              View Home Health Services
            </ButtonLink>
          </>
        }
        aside={<HomeHealthTracker />}
      />

      <Section labelledBy="hh-challenges-heading">
        <Container>
          <SectionHeading
            id="hh-challenges-heading"
            eyebrow="The challenge"
            title="Home Health RCM Challenges"
            description="Home Health billing sits at the intersection of clinical documentation, Medicare rules, and day-to-day operations. Small gaps at intake or documentation can surface weeks later as delayed or denied claims."
          />
          <div className="mt-14">
            <CardGrid items={challenges} tone="ivory" />
          </div>
        </Container>
      </Section>

      <Section id="home-health-services" tone="ivory" labelledBy="hh-services-heading" className="border-y border-line">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            id="hh-services-heading"
            align="left"
            eyebrow="What we support"
            title="Our Home Health RCM Services"
            description="Support is structured around the Home Health workflow — from admission through payment — and scoped to the functions your agency needs."
          />
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-9">
              <CheckList items={services} columns={2} />
              <p className="mt-7 border-t border-line pt-5 text-[0.9rem] leading-relaxed text-muted">
                Final workflows are determined by payer rules and your agency&apos;s agreement with Revdian.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <section aria-labelledby="hh-details-heading" className="bg-white py-20 sm:py-24">
        <h2 id="hh-details-heading" className="sr-only">
          Home Health RCM service details
        </h2>
        <FeatureList features={features} />
      </section>

      <Section tone="ivory" labelledBy="hh-process-heading" className="border-t border-line">
        <Container>
          <SectionHeading
            id="hh-process-heading"
            eyebrow="How we work"
            title="Our Home Health RCM Process"
            description="A defined path from first conversation to ongoing improvement."
          />
          <div className="mt-16">
            <ProcessTimeline steps={process} />
          </div>
        </Container>
      </Section>

      <FaqSection
        tone="white"
        items={faqs}
        title="Home Health RCM Questions"
        description="Answers to common questions from Home Health agency owners and administrators."
      />

      <CtaSection
        title="Let's Talk About Your Home Health Revenue Cycle."
        description="Share where your agency is today — NOA timeliness, aging A/R, denials, or reporting — and we'll discuss how Revdian could support your team."
      />
    </>
  );
}
