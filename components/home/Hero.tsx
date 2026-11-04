import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { HeroDashboard } from "@/components/visuals/HeroDashboard";

const assurances = ["Home Health & Hospice focus", "Technology-enabled workflows", "Human quality oversight"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-offwhite">
      <div aria-hidden="true" className="bg-grid mask-fade-y absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute top-[-12rem] right-[-8rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-teal-100/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-14rem] left-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-navy-100/80 blur-3xl"
      />

      <Container className="grid items-center gap-16 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.12fr_1fr] lg:gap-12 lg:pt-24 lg:pb-28">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 py-1.5 pr-4 pl-2 text-[0.82rem] font-semibold text-navy-700 shadow-soft">
            <span className="rounded-full bg-navy-800 px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide text-teal-400 uppercase">
              RCM
            </span>
            Healthcare Revenue Cycle Management
          </p>
          <h1 className="mt-7 text-[2.6rem] leading-[1.05] font-extrabold sm:text-6xl lg:text-[3.2rem] xl:text-[3.7rem]">
            Smarter Revenue.
            <br />
            <span className="text-teal-600 xl:whitespace-nowrap">Stronger Healthcare.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-body sm:text-xl">
            Revanta RCM helps healthcare providers simplify revenue cycle operations, streamline billing
            workflows, and gain greater control over their financial performance through expertise,
            technology, and transparent support.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" arrow>
              Schedule a Consultation
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Explore Our Services
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-col gap-x-6 gap-y-3 border-t border-line pt-7 sm:flex-row sm:flex-wrap">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[0.92rem] font-medium text-navy-700">
                <Check aria-hidden="true" className="h-4 w-4 text-teal-600" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <HeroDashboard />
        </Reveal>
      </Container>
    </section>
  );
}
