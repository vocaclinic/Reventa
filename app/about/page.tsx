import {
  Compass,
  Cpu,
  Eye,
  Handshake,
  Lightbulb,
  ListChecks,
  Scale,
  ShieldCheck,
  Target,
  Telescope,
  UserCheck,
  BadgeCheck,
} from "lucide-react";
import { CardGrid } from "@/components/shared/CardGrid";
import { CtaSection } from "@/components/shared/CtaSection";
import { PageHero } from "@/components/shared/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, IconTile, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Revdian | Healthcare Revenue Cycle Management Partner",
  description:
    "Learn about Revdian's mission, vision, approach, and values as a technology-enabled healthcare revenue cycle management partner for U.S. healthcare providers.",
  path: "/about",
});

const approach = [
  {
    icon: Compass,
    title: "Understand before acting",
    description:
      "Every engagement starts with learning your specialty, systems, payer mix, and the way your team already works.",
  },
  {
    icon: ListChecks,
    title: "Structure and consistency",
    description:
      "Documented workflows, defined responsibilities, and clear escalation paths make revenue operations predictable.",
  },
  {
    icon: Cpu,
    title: "Technology with human oversight",
    description:
      "Modern tools organize and prioritize work, while experienced people make decisions and review quality.",
  },
  {
    icon: Eye,
    title: "Transparent partnership",
    description:
      "Agreed metrics, regular reporting, and open communication mean you always know where things stand.",
  },
];

const values = [
  { icon: Scale, title: "Integrity", description: "We are honest about what we do, what we can deliver, and what we cannot promise." },
  { icon: UserCheck, title: "Accountability", description: "We take ownership of our responsibilities and follow through on commitments." },
  { icon: Eye, title: "Transparency", description: "Clear reporting and communication, with no surprises about status or scope." },
  { icon: BadgeCheck, title: "Quality", description: "Process discipline and review checkpoints built into the way we work." },
  { icon: Lightbulb, title: "Innovation", description: "We look for better tools and methods that make revenue operations more effective." },
  { icon: Handshake, title: "Partnership", description: "We work alongside your team as an extension of your operations, not apart from it." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About Revdian"
        title="A More Thoughtful Approach to Healthcare Revenue Management"
        description="Revdian was envisioned to help healthcare organizations navigate the operational complexities of revenue cycle management through structured processes, industry-focused support, and technology-enabled workflows."
        actions={
          <>
            <ButtonLink href="/contact" variant="accent" size="lg" arrow>
              Book a Consultation
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost-dark" size="lg">
              Explore Our Services
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="who-heading">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading id="who-heading" align="left" eyebrow="Who we are" title="A Revenue Cycle Partner Built Around Healthcare Operations" />
          <Reveal className="space-y-5 text-lg leading-relaxed text-body lg:pt-10">
            <p>
              Revdian is a healthcare revenue cycle management company focused on helping U.S. healthcare providers
              bring more structure, consistency, and visibility to their billing and revenue operations.
            </p>
            <p>
              We are beginning with Home Health and Hospice — two specialties with distinct reimbursement models and
              documentation requirements — and plan to extend our support to dental practices, medical practices,
              clinics, and other specialty groups over time.
            </p>
            <p>
              Our work combines revenue cycle knowledge, defined processes, and modern technology, with experienced people
              responsible for quality and communication. We believe providers deserve an RCM partner that is clear about
              its role and honest about what it can deliver.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="ivory" labelledBy="mission-heading" className="border-y border-line">
        <Container>
          <h2 id="mission-heading" className="sr-only">
            Mission and vision
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <article className="relative isolate h-full overflow-hidden rounded-[28px] bg-ink-900 p-9 sm:p-12">
                <div aria-hidden="true" className="bg-grid-dark mask-fade-b absolute inset-0 -z-10" />
                <div aria-hidden="true" className="absolute -top-20 -right-20 -z-10 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" />
                <div>
                  <IconTile tone="dark">
                    <Target aria-hidden="true" />
                  </IconTile>
                </div>
                <Eyebrow tone="dark" className="mt-8">
                  Our mission
                </Eyebrow>
                <p className="mt-4 font-display text-2xl leading-snug font-medium text-white sm:text-[1.9rem]">
                  To help healthcare providers manage revenue operations with greater clarity, consistency, and
                  confidence.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08} className="h-full">
              <article className="h-full rounded-[28px] border border-line bg-white p-9 sm:p-12">
                <div>
                  <IconTile tone="ink">
                    <Telescope aria-hidden="true" />
                  </IconTile>
                </div>
                <Eyebrow className="mt-8">Our vision</Eyebrow>
                <p className="mt-4 font-display text-2xl leading-snug font-medium text-ink-800 sm:text-[1.9rem]">
                  To become a trusted healthcare revenue cycle management partner known for operational excellence,
                  innovation, and long-term client relationships.
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section labelledBy="approach-heading">
        <Container>
          <SectionHeading
            id="approach-heading"
            eyebrow="Our approach"
            title="How We Approach Revenue Cycle Work"
            description="Four principles shape every engagement, from the first conversation through ongoing operations."
          />
          <div className="mt-14">
            <CardGrid items={approach} columns={4} tone="ivory" />
          </div>
        </Container>
      </Section>

      <Section tone="ivory" labelledBy="values-heading" className="border-t border-line">
        <Container>
          <SectionHeading
            id="values-heading"
            eyebrow="Core values"
            title="The Values Behind Our Work"
            description="What our clients can expect from us, every day."
          />
          <div className="mt-14">
            <CardGrid items={values} columns={3} />
          </div>
          <Reveal>
            <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-gold-200 bg-gold-50/70 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
              <IconTile tone="ink">
                <ShieldCheck aria-hidden="true" />
              </IconTile>
              <p className="leading-relaxed text-ink-700">
                <span className="font-semibold text-ink-800">Privacy and security are important to our approach to healthcare operations.</span>{" "}
                Specific safeguards and responsibilities are defined in each client agreement, including any business
                associate agreement required for the engagement.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaSection
        title="Let's Start With a Conversation."
        description="Tell us about your organization, your specialty, and what you'd like to improve. We'll listen first."
      />
    </>
  );
}
