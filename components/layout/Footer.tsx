import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Layout";
import { footerNav } from "@/lib/navigation";
import { contactPlaceholders, siteConfig } from "@/lib/site";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[0.8rem] font-semibold tracking-[0.14em] text-white uppercase">
      {children}
    </h2>
  );
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-[0.94rem] text-navy-200 transition-colors hover:text-white">
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
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div aria-hidden="true" className="bg-grid-dark mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 font-display text-lg font-semibold text-white">{siteConfig.tagline}</p>
            <p className="mt-3 max-w-sm text-[0.94rem] leading-relaxed">
              Technology-enabled revenue cycle management support for Home Health, Hospice, and growing
              healthcare organizations across the United States.
            </p>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks links={footerNav.quickLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Services</FooterHeading>
            <FooterLinks links={footerNav.services} />
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-5 space-y-4 text-[0.94rem]">
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal-400" />
                {email ? (
                  <a href={`mailto:${email}`} className="hover:text-white">
                    {email}
                  </a>
                ) : (
                  <span className="text-navy-200/70 italic">{contactPlaceholders.email}</span>
                )}
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal-400" />
                {phone ? (
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">
                    {phone}
                  </a>
                ) : (
                  <span className="text-navy-200/70 italic">{contactPlaceholders.phone}</span>
                )}
              </li>
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal-400" />
                {address ? (
                  <span>{address}</span>
                ) : (
                  <span className="text-navy-200/70 italic">{contactPlaceholders.address}</span>
                )}
              </li>
            </ul>
            <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-[0.83rem] leading-relaxed">
              Please do not send protected health information (PHI) through this website or by
              unsecured email.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-[0.86rem] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Revanta RCM. All rights reserved.</p>
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
    </footer>
  );
}
