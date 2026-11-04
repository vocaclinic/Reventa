import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";

type CtaLink = { label: string; href: string };

export function CtaSection({
  title = "Let's Make Your Revenue Cycle Work Smarter.",
  description = "Whether you are looking to improve billing workflows, manage outstanding receivables, or explore dedicated RCM support, let's discuss how Revanta RCM can support your organization.",
  primary = { label: "Schedule a Consultation", href: "/contact" },
  secondary = { label: "Contact Our Team", href: "/contact#contact-form" },
}: {
  title?: string;
  description?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section aria-labelledby="cta-heading" className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-navy-900 px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20">
            <div aria-hidden="true" className="bg-grid-dark mask-fade-y absolute inset-0 -z-10" />
            <div
              aria-hidden="true"
              className="absolute -top-40 left-1/2 -z-10 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent"
            />
            <h2 id="cta-heading" className="mx-auto max-w-3xl text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">{description}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
