import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { footerNav } from "@/lib/navigation";
import { contactPlaceholders, siteConfig } from "@/lib/site";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-sans text-[0.72rem] font-medium tracking-[0.28em] text-gold-400 uppercase">{children}</h2>;
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="mt-6 space-y-3.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-[0.94rem] text-royal-100/85 transition-colors hover:text-white">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const { email, phone, address } = siteConfig.contact;
  const year = new Date().getFullYear();

  return (
    <div className="bg-ivory px-2.5 pb-2.5 sm:px-4 sm:pb-4">
    <footer className="bg-royal-stage stage-frame relative isolate overflow-hidden text-royal-200">
      <div aria-hidden="true" className="bg-grain pointer-events-none absolute inset-0 -z-10" />
      <Container className="relative">
        {/* Statement row */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/15 py-16 lg:flex-row lg:items-end lg:py-20">
          <p className="max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
            Revenue, <em className="text-gold-gradient pr-1">guarded.</em>
            <span className="mt-3 block text-2xl text-royal-200/85 sm:text-3xl">So your team can stay focused on care.</span>
          </p>
          <ButtonLink href="/contact" variant="accent" size="lg" arrow>
            Book a Consultation
          </ButtonLink>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-6 max-w-sm text-[0.94rem] leading-relaxed text-royal-100/85">
              Technology-enabled revenue cycle management support for Home Health, Hospice, and growing healthcare
              organizations across the United States.
            </p>
            <p className="mt-6 max-w-sm font-display text-[1.05rem] text-royal-200/80 italic">
              Rev·di·an: from <span className="text-gold-400 not-italic">revenue</span> and{" "}
              <span className="text-gold-400 not-italic">guardian</span>.
            </p>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <FooterLinks links={footerNav.quickLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Services</FooterHeading>
            <FooterLinks links={footerNav.services} />
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-6 space-y-4 text-[0.94rem]">
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-400" strokeWidth={1.6} />
                {email ? (
                  <a href={`mailto:${email}`} className="hover:text-white">
                    {email}
                  </a>
                ) : (
                  <span className="text-royal-200/80 italic">{contactPlaceholders.email}</span>
                )}
              </li>
              {phone && (
                <li className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-400" strokeWidth={1.6} />
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              )}
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-400" strokeWidth={1.6} />
                {address ? (
                  <span>{address}</span>
                ) : (
                  <span className="text-royal-200/80 italic">{contactPlaceholders.address}</span>
                )}
              </li>
            </ul>
            <p className="mt-7 rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-[0.83rem] leading-relaxed text-royal-100/85">
              Please do not send protected health information (PHI) through this website or by unsecured email.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-7 text-[0.86rem] text-royal-200/85 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Oversized engraved wordmark */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] text-center font-display text-[25vw] leading-none tracking-[-0.05em] text-transparent select-none [-webkit-text-stroke:1px_rgb(212_175_103/0.22)]"
      >
        Revdian
      </p>
    </footer>
    </div>
  );
}
