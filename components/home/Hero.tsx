import { ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { HeroDashboard } from "@/components/visuals/HeroDashboard";

const assurances = [
  { label: "Home Health & Hospice", detail: "Specialty-first workflows" },
  { label: "Technology-enabled", detail: "Automation that organizes work" },
  { label: "Human oversight", detail: "Experienced people own quality" },
];

const workflowTerms = [
  "Eligibility",
  "PDGM",
  "Notice of Admission",
  "OASIS checks",
  "Notice of Election",
  "Benefit periods",
  "Claims submission",
  "A/R follow-up",
  "Denial management",
  "Payment posting",
  "Revenue reporting",
];

export function Hero() {
  return (
    <section className="bg-ivory px-2.5 pt-1 sm:px-4 sm:pt-2">
      <div className="bg-royal-stage stage-frame relative isolate overflow-hidden text-royal-200">
        <div aria-hidden="true" className="bg-grain pointer-events-none absolute inset-0 -z-10" />
        <div aria-hidden="true" className="bg-grid-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-16 -right-48 -z-10 h-[40rem] w-[40rem] rounded-full border border-gold-400/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-40 -right-24 -z-10 h-[30rem] w-[30rem] rounded-full border border-gold-400/10"
        />

        <Container className="grid items-center gap-20 pt-16 pb-20 sm:pt-20 lg:grid-cols-[1.08fr_1fr] lg:gap-14 lg:pt-24 lg:pb-28">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-white/[0.06] py-1.5 pr-4 pl-1.5 text-[0.8rem] font-medium text-royal-100 backdrop-blur">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 text-royal-900">
                <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5" />
              </span>
              Healthcare Revenue Cycle Management
            </p>

            <h1 className="mt-9 text-[3.6rem] leading-[0.95] font-normal text-white sm:text-[5.2rem] lg:text-[5.4rem] xl:text-[6.4rem]">
              Revenue,
              <br />
              <em className="text-gold-gradient pr-2 font-normal">guarded.</em>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-royal-100/90 sm:text-xl">
              Revdian is the guardian of your revenue cycle. We bring structure, vigilance, and transparent reporting
              to every claim, so Home Health and Hospice providers can focus on care.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="accent" size="lg" arrow>
                Book a Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="ghost-dark" size="lg">
                Explore Our Services
              </ButtonLink>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-8">
              {assurances.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-[1.05rem] leading-snug text-white">{item.label}</dt>
                  <dd className="mt-1 text-[0.85rem] text-royal-200/80">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <HeroDashboard />
          </Reveal>
        </Container>
      </div>

      {/* Workflow ticker, set on the ivory page below the stage */}
      <div className="py-7 sm:py-9">
        <p className="sr-only">Workflows we support: {workflowTerms.join(", ")}.</p>
        <div aria-hidden="true" className="mask-fade-x flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 motion-reduce:animate-none">
            {[...workflowTerms, ...workflowTerms].map((term, index) => (
              <span key={`${term}-${index}`} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-display text-xl text-royal-700/80 italic">{term}</span>
                <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
