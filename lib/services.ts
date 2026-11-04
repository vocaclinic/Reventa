import {
  Banknote,
  ChartColumnIncreasing,
  CircleDollarSign,
  ClipboardCheck,
  FileSearch,
  FileText,
  Send,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  icon: LucideIcon;
  summary: string;
  involves: string;
  challenge: string;
  support: string;
  points: string[];
};

/** Detailed service catalog used on the Services page and in navigation. */
export const services: Service[] = [
  {
    slug: "medical-billing",
    title: "Medical Billing",
    navLabel: "Medical Billing",
    icon: FileText,
    summary:
      "Organized billing workflows that help services move from delivery to claim-ready status with fewer gaps and handoff delays.",
    involves:
      "Reviewing billing-ready services, confirming that required data elements are present, preparing charges according to payer and client requirements, and maintaining a consistent billing cadence.",
    challenge:
      "Billing backlogs, inconsistent handoffs between clinical and billing teams, and missing information can delay claims and make cash flow harder to predict.",
    support:
      "We work within your agreed workflows to organize billing queues, flag missing or incomplete information for your authorized staff, and keep billing activity on a consistent, visible schedule.",
    points: [
      "Billing queue management",
      "Pre-billing data checks",
      "Charge preparation support",
      "Billing cadence tracking",
    ],
  },
  {
    slug: "claims-management",
    title: "Claims Management",
    navLabel: "Claims Management",
    icon: Send,
    summary:
      "Claim preparation, submission support, and status monitoring so every claim has a clear owner and a defined next step.",
    involves:
      "Preparing claims in your billing system or clearinghouse, supporting submission, reviewing clearinghouse and payer rejections, and monitoring claim status through resolution.",
    challenge:
      "Rejected or stalled claims that go unnoticed can age quickly and take considerably more effort to resolve later.",
    support:
      "We monitor claim status, work rejections promptly, document corrections, and report on claims that need attention so nothing sits without follow-up.",
    points: [
      "Claim preparation",
      "Claim submission support",
      "Rejection review and correction",
      "Claim status monitoring",
    ],
  },
  {
    slug: "accounts-receivable",
    title: "Accounts Receivable Management",
    navLabel: "A/R Management",
    icon: CircleDollarSign,
    summary:
      "Structured follow-up on outstanding claims, supported by aging analysis and clear accounts receivable reporting.",
    involves:
      "Prioritizing outstanding claims by age, balance, and payer; following up through payer portals and phone; documenting outcomes; and escalating items that need provider input.",
    challenge:
      "Aging receivables tend to build up when follow-up is reactive, inconsistent, or spread across busy staff with competing priorities.",
    support:
      "We establish a prioritized follow-up workflow, track every payer touchpoint, and provide aging visibility so your team always knows where receivables stand.",
    points: ["Outstanding claim follow-up", "Aging analysis", "Payer follow-ups", "A/R reporting"],
  },
  {
    slug: "denial-management",
    title: "Denial Management",
    navLabel: "Denial Management",
    icon: FileSearch,
    summary:
      "Identify, categorize, and act on denials with tracked corrective actions and appeal workflow support.",
    involves:
      "Reviewing remittance data to identify denials, categorizing them by reason and source, coordinating corrections or appeals, and tracking recurring patterns over time.",
    challenge:
      "Without categorization and root-cause tracking, the same denial reasons can recur month after month and appeal deadlines can be missed.",
    support:
      "We organize denials into actionable worklists, coordinate corrections and appeals with your team within payer timelines, and report on recurring trends to inform process improvements.",
    points: [
      "Denial identification",
      "Denial categorization",
      "Corrective action tracking",
      "Appeal workflow support",
    ],
  },
  {
    slug: "payment-posting",
    title: "Payment Posting and Reconciliation",
    navLabel: "Payment Posting",
    icon: Banknote,
    summary:
      "Timely posting of payments and adjustments with ERA/EOB reconciliation and clear payment reporting.",
    involves:
      "Posting payments, adjustments, and patient responsibility from electronic remittance advice (ERA) and explanation of benefits (EOB) documents, then reconciling posted amounts against deposits.",
    challenge:
      "Posting delays or errors distort A/R balances, obscure potential underpayments, and make financial reports harder to trust.",
    support:
      "We post remittances on an agreed schedule, reconcile against deposits, flag potential underpayments for your review, and share payment reporting with your team.",
    points: [
      "Payment posting",
      "ERA/EOB reconciliation",
      "Underpayment identification support",
      "Payment reporting",
    ],
  },
  {
    slug: "eligibility-verification",
    title: "Eligibility and Benefits Verification",
    navLabel: "Eligibility Verification",
    icon: UserCheck,
    summary:
      "Verification of patient eligibility and benefits at intake and throughout care to reduce avoidable coverage issues.",
    involves:
      "Checking coverage, payer, plan, and benefit details through payer portals and eligibility tools, documenting results, and flagging coverage changes that affect billing.",
    challenge:
      "Coverage changes, Medicare Advantage enrollment, and inaccurate payer information are common sources of rejected claims and rework.",
    support:
      "We verify eligibility and benefits according to your intake workflow, document findings, and alert your team to coverage issues that need attention before they affect claims.",
    points: [
      "Eligibility verification",
      "Benefits verification",
      "Coverage change monitoring",
      "Payer-related follow-ups",
    ],
  },
  {
    slug: "authorization-support",
    title: "Authorization Support",
    navLabel: "Authorization Support",
    icon: ClipboardCheck,
    summary:
      "Tracking of prior authorizations and authorization-related follow-ups for payers that require them.",
    involves:
      "Identifying payer authorization requirements; tracking requests, status, approved visits or units, and expiration dates; and coordinating follow-ups with payers.",
    challenge:
      "Missed or expired authorizations are a frequent source of avoidable denials, particularly with Medicare Advantage and commercial plans.",
    support:
      "We maintain an authorization tracker, monitor upcoming expirations and visit limits, and coordinate with your intake and clinical staff when new or extended authorizations are needed.",
    points: [
      "Authorization tracking",
      "Expiration and limit monitoring",
      "Payer follow-ups",
      "Authorization status reporting",
    ],
  },
  {
    slug: "rcm-reporting",
    title: "RCM Reporting and Analytics",
    navLabel: "RCM Reporting",
    icon: ChartColumnIncreasing,
    summary:
      "Clear revenue cycle reporting that gives leadership visibility into claims, A/R, denials, and operational performance.",
    involves:
      "Preparing recurring reports on claim activity, A/R aging, denial trends, and payment activity using data from your billing system and our workflow tracking.",
    challenge:
      "Many organizations lack a consistent, trustworthy view of their revenue cycle, which makes it difficult to spot issues early or plan with confidence.",
    support:
      "We agree with you on the metrics that matter to your organization, deliver reports on a defined schedule, and review findings with your team.",
    points: [
      "Revenue cycle reports",
      "A/R aging visibility",
      "Denial trend analysis",
      "Operational performance tracking",
    ],
  },
];

export type ServiceOverview = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  href: string;
};

/** Condensed six-card overview used on the homepage. */
export const serviceOverview: ServiceOverview[] = [
  {
    title: "Medical Billing and Claims Management",
    description: "Consistent billing workflows and claim oversight from preparation through resolution.",
    icon: FileText,
    points: [
      "Claim preparation",
      "Claim submission support",
      "Claim status monitoring",
      "Billing workflow management",
    ],
    href: "/services#medical-billing",
  },
  {
    title: "Accounts Receivable Management",
    description: "Prioritized, documented follow-up that keeps outstanding claims moving.",
    icon: CircleDollarSign,
    points: ["Outstanding claim follow-up", "Aging analysis", "Payer follow-ups", "A/R reporting"],
    href: "/services#accounts-receivable",
  },
  {
    title: "Denial Management",
    description: "Organized denial worklists with root-cause categorization and tracked actions.",
    icon: FileSearch,
    points: [
      "Denial identification",
      "Denial categorization",
      "Corrective action tracking",
      "Appeal workflow support",
    ],
    href: "/services#denial-management",
  },
  {
    title: "Payment Posting and Reconciliation",
    description: "Accurate remittance posting and reconciliation that keeps balances reliable.",
    icon: Banknote,
    points: [
      "Payment posting",
      "ERA/EOB reconciliation",
      "Underpayment identification support",
      "Payment reporting",
    ],
    href: "/services#payment-posting",
  },
  {
    title: "Eligibility and Authorization Support",
    description: "Coverage and authorization checks that help prevent avoidable claim issues.",
    icon: UserCheck,
    points: [
      "Eligibility verification",
      "Benefits verification",
      "Authorization tracking",
      "Payer-related follow-ups",
    ],
    href: "/services#eligibility-verification",
  },
  {
    title: "RCM Reporting and Analytics",
    description: "Recurring reporting that gives leadership a clear view of revenue operations.",
    icon: ChartColumnIncreasing,
    points: [
      "Revenue cycle reports",
      "A/R aging visibility",
      "Denial trend analysis",
      "Operational performance tracking",
    ],
    href: "/services#rcm-reporting",
  },
];
