import {
  Banknote,
  CalendarClock,
  ChartColumnIncreasing,
  CircleDollarSign,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Layers,
  ListOrdered,
  Send,
  UserCheck,
  Network,
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
import { HospiceTracker } from "@/components/visuals/Trackers";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hospice Billing & Revenue Cycle Management | Revdian",
  description:
    "Hospice billing and revenue cycle management support: NOE tracking, monthly claims by level of care, eligibility and payer verification, denial management, A/R follow-up, payment posting, and reporting for hospice providers.",
  path: "/hospice-rcm",
});

const challenges = [
  {
    icon: CalendarClock,
    title: "NOE timeliness",
    description:
      "Medicare requires a Notice of Election within five calendar days after the election date. When an NOE is late, days before it is filed are generally not covered and become the hospice's responsibility.",
  },
  {
    icon: Layers,
    title: "Benefit periods and recertification",
    description:
      "The hospice benefit runs in two 90-day periods followed by unlimited 60-day periods, each requiring certification — with a face-to-face encounter before the third period and beyond.",
  },
  {
    icon: Gauge,
    title: "Levels of care and per diem billing",
    description:
      "Claims reflect daily rates across Routine Home Care, Continuous Home Care, Inpatient Respite, and General Inpatient care, along with Service Intensity Add-on visits where applicable.",
  },
  {
    icon: ListOrdered,
    title: "Sequential monthly billing",
    description:
      "Hospice claims are typically billed monthly and must process in sequence, so one unresolved claim can hold up the claims that follow it.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Cap awareness",
    description:
      "Medicare's aggregate and inpatient caps make it important for leadership to have consistent, timely visibility into billing and census-related data.",
  },
  {
    icon: Network,
    title: "Coordination across payers",
    description:
      "Medicaid, commercial plans, and room-and-board arrangements for facility residents add verification and billing steps beyond Medicare.",
  },
];

const features: Feature[] = [
  {
    id: "claims-management",
    eyebrow: "Claims",
    title: "Hospice Claims Management",
    icon: Send,
    description: (
      <>
        <p>
          Hospice claims carry levels of care, visit detail, and benefit period information that must align with the
          patient&apos;s election and certification status. Because claims process in sequence, keeping each month
          moving matters.
        </p>
        <p>
          We support monthly claim preparation and submission, review claims before release, work clearinghouse
          rejections, and track NOE and Notice of Termination/Revocation (NOTR) status alongside claims.
        </p>
      </>
    ),
    points: [
      "Monthly claim preparation and submission support",
      "Pre-billing review of level of care and visit detail",
      "NOE and NOTR status tracking",
      "Rejection review and correction coordination",
      "Sequential claim monitoring",
    ],
  },
  {
    id: "eligibility-verification",
    eyebrow: "Eligibility",
    title: "Eligibility and Payer Verification",
    icon: UserCheck,
    description: (
      <p>
        Before and during care, we verify coverage and benefit details, check for prior hospice elections and benefit
        periods already used, and confirm the correct payer. For Medicare Advantage enrollees, hospice services are
        generally billed to Original Medicare — verification helps route claims correctly from the start.
      </p>
    ),
    points: [
      "Medicare, Medicaid, and commercial eligibility checks",
      "Prior hospice election and benefit period review",
      "Medicare Advantage enrollment identification",
      "Coverage change monitoring and alerts",
    ],
  },
  {
    id: "documentation-coordination",
    eyebrow: "Documentation workflow",
    title: "Documentation Workflow Coordination",
    icon: ClipboardCheck,
    description: (
      <p>
        Hospice billing depends on documentation such as the election statement, certification of terminal illness,
        face-to-face encounter attestation, and the plan of care. We track whether these billing-related items are in
        place and coordinate with your authorized personnel when something is missing or incomplete.
      </p>
    ),
    note: "Revdian does not determine terminal prognosis or hospice eligibility, and does not create or alter clinical records. Those determinations and records belong to the hospice's physicians and interdisciplinary group.",
    points: [
      "Election statement status tracking",
      "Certification and recertification status tracking",
      "Face-to-face encounter timing visibility",
      "Coordinated follow-up with authorized hospice staff",
    ],
  },
  {
    id: "ar-follow-up",
    eyebrow: "Accounts receivable",
    title: "Accounts Receivable Follow-up",
    icon: CircleDollarSign,
    description: (
      <p>
        We prioritize outstanding hospice claims by age, balance, and payer, follow up through payer portals and phone,
        and document each action — including room-and-board and Medicaid balances where they apply.
      </p>
    ),
    points: [
      "Aging-based follow-up prioritization",
      "Medicare, Medicaid, and commercial payer follow-up",
      "Documented follow-up notes",
      "Escalation of items needing hospice input",
    ],
  },
  {
    id: "denial-management",
    eyebrow: "Denials",
    title: "Denial Management",
    icon: FileSearch,
    description: (
      <p>
        We identify denials and adjustments from remittance data, categorize them by reason and source, coordinate
        corrections or appeals with your team within payer timelines, and report on recurring patterns.
      </p>
    ),
    points: [
      "Denial identification and categorization",
      "Correction and appeal workflow coordination",
      "Additional Documentation Request (ADR) tracking support",
      "Recurring denial trend reporting",
    ],
  },
  {
    id: "payment-posting",
    eyebrow: "Payments",
    title: "Payment Posting",
    icon: Banknote,
    description: (
      <p>
        We post payments and adjustments from ERAs and EOBs on an agreed schedule, reconcile against deposits, and flag
        potential underpayments or unexpected adjustments for review.
      </p>
    ),
    points: [
      "ERA and EOB payment posting",
      "Deposit reconciliation",
      "Potential underpayment flagging",
      "Payment activity reporting",
    ],
  },
  {
    id: "reporting",
    eyebrow: "Reporting",
    title: "Reporting and Visibility",
    icon: ChartColumnIncreasing,
    description: (
      <p>
        Leadership needs a consistent picture of hospice revenue operations. We provide recurring reports on claims,
        A/R aging, denials, and payments, along with billing data that supports your team&apos;s monitoring of cap
        considerations.
      </p>
    ),
    note: "Formal hospice cap calculations should be reviewed by your finance team or advisors; our reporting is designed to support that work, not replace it.",
    points: [
      "Claims and A/R aging reports",
      "Denial and payment trend reporting",
      "Billing data to support cap monitoring",
      "Regular review sessions with your team",
    ],
  },
];

const services = [
  "Billing and claims support",
  "NOE and NOTR status tracking",
  "Eligibility and payer verification",
  "Documentation workflow coordination",
  "Accounts receivable follow-up",
  "Denial management",
  "Payment posting",
  "Revenue reporting",
];

const process = [
  {
    title: "Understand",
    description:
      "We learn your hospice's EMR and billing systems, payer mix, census patterns, and intake-to-billing handoffs.",
  },
  {
    title: "Assess",
    description:
      "We review agreed workflows — NOEs, monthly claims, documentation status, and A/R — for gaps in visibility.",
  },
  {
    title: "Implement",
    description:
      "We set up defined responsibilities, monthly billing cadence, worklists, communication channels, and reporting.",
  },
  {
    title: "Optimize",
    description:
      "We monitor agreed metrics, review recurring issues with your team, and refine workflows as your hospice grows.",
  },
];

const faqs = [
  {
    question: "How is hospice billing support different from Home Health?",
    answer:
      "They are separate workflows. Hospice uses NOEs, benefit periods, per diem rates by level of care, and typically monthly sequential claims. Home Health uses NOAs and PDGM 30-day periods of care. We set up each service line on its own terms.",
  },
  {
    question: "Can you help with NOE timeliness?",
    answer:
      "Yes. We can track elections, monitor NOE submission and acceptance status, and flag items approaching deadlines. Responsibilities for each step are agreed with your hospice in advance.",
  },
  {
    question: "Do you determine hospice eligibility or review clinical documentation?",
    answer:
      "No. Eligibility, terminal prognosis, and certification are determined by the hospice's physicians and interdisciplinary group. We track whether billing-related documentation is in place and coordinate with your authorized staff when items are missing.",
  },
  {
    question: "Do you calculate our hospice cap?",
    answer:
      "We provide billing data and reporting that support your team's cap monitoring. Formal cap calculations and related decisions should be reviewed by your finance team or advisors.",
  },
  {
    question: "Can you guarantee reimbursement or fewer denials?",
    answer:
      "No. Results depend on documentation, payer rules, and other factors outside any billing partner's control. Our focus is consistent processes, timely follow-up, and transparent reporting.",
  },
  {
    question: "Will you work in our existing hospice EMR?",
    answer:
      "We aim to work within your current systems. Access, roles, and workflows are defined during onboarding based on your platforms and our agreement.",
  },
];

export default function HospicePage() {
  return (
    <>
      <PageHero
        breadcrumb="Hospice RCM"
        eyebrow="Hospice RCM"
        title="Dedicated Revenue Cycle Support for Hospice Providers."
        description="Helping hospice organizations bring greater structure and visibility to billing, claims, payment follow-up, and revenue operations."
        actions={
          <>
            <ButtonLink href="/contact" variant="accent" size="lg" arrow>
              Book a Consultation
            </ButtonLink>
            <ButtonLink href="#hospice-services" variant="ghost-dark" size="lg">
              View Hospice Services
            </ButtonLink>
          </>
        }
        aside={<HospiceTracker />}
      />

      <Section labelledBy="hospice-challenges-heading">
        <Container>
          <SectionHeading
            id="hospice-challenges-heading"
            eyebrow="The challenge"
            title="Hospice Billing Workflow Challenges"
            description="Hospice reimbursement follows its own rules — from election and benefit periods to daily rates by level of care. Keeping billing organized requires close attention to each of them."
          />
          <div className="mt-14">
            <CardGrid items={challenges} tone="ivory" />
          </div>
        </Container>
      </Section>

      <Section id="hospice-services" tone="ivory" labelledBy="hospice-services-heading" className="border-y border-line">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            id="hospice-services-heading"
            align="left"
            eyebrow="What we support"
            title="Our Hospice RCM Services"
            description="Support is organized around the hospice revenue cycle — from election through monthly claims and payment — and scoped to what your hospice needs."
          />
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-9">
              <CheckList items={services} columns={2} />
              <p className="mt-7 border-t border-line pt-5 text-[0.9rem] leading-relaxed text-muted">
                Final workflows are determined by payer rules and your hospice&apos;s agreement with Revdian.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <section aria-labelledby="hospice-details-heading" className="bg-white py-20 sm:py-24">
        <h2 id="hospice-details-heading" className="sr-only">
          Hospice RCM service details
        </h2>
        <FeatureList features={features} />
      </section>

      <Section tone="ivory" labelledBy="hospice-process-heading" className="border-t border-line">
        <Container>
          <SectionHeading
            id="hospice-process-heading"
            eyebrow="How we work"
            title="Our Hospice RCM Process"
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
        title="Hospice RCM Questions"
        description="Answers to common questions from hospice owners and administrators."
      />

      <CtaSection
        title="Bring More Structure to Your Hospice Revenue Cycle."
        description="Tell us about your hospice's billing workflow, payer mix, and current challenges, and we'll discuss how Revdian could support your team."
      />
    </>
  );
}
