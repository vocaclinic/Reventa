import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";

type CtaLink = { label: string; href: string };

export function CtaSection({
  title = "Let's put a guardian on your revenue cycle.",
  description = "Whether you are looking to improve billing workflows, manage outstanding receivables, or explore dedicated RCM support, let's discuss how Revdian can support your organization.",
  primary = { label: "Book a Consultation", href: "/contact" },
  secondary = { label: "Contact Our Team", href: "/contact#contact-form" },
}: {
  title?: string;
  description?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section aria-labelledby="cta-heading" className="bg-ivory py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="bg-ink-aurora relative isolate overflow-hidden rounded-[36px] px-6 py-20 text-center shadow-lift sm:px-12 sm:py-24 lg:px-20">
            <div aria-hidden="true" className="bg-grain absolute inset-0 -z-10" />
            <div aria-hidden="true" className="bg-grid-dark mask-fade-y absolute inset-0 -z-10" />
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/10"
            />
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/10"
            />
            <div aria-hidden="true" className="rule-gold absolute inset-x-0 top-0 h-px" />
            <LogoMark tone="dark" className="mx-auto h-14 w-14" />
            <h2
              id="cta-heading"
              className="mx-auto mt-8 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl"
            >
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">{description}</p>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={primary.href} variant="accent" size="lg" arrow className="w-full sm:w-auto">
                {primary.label}
              </ButtonLink>
              <ButtonLink href={secondary.href} variant="ghost-dark" size="lg" className="w-full sm:w-auto">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
