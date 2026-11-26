import Link from "next/link";
import { CalendarClock, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, IconTile } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { createMetadata } from "@/lib/seo";
import { contactPlaceholders, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Revdian | Schedule an RCM Consultation",
  description:
    "Contact Revdian to discuss Home Health billing, Hospice billing, accounts receivable management, denial management, or full revenue cycle management support for your organization.",
  path: "/contact",
});

const nextSteps = [
  { title: "We review your request", text: "Our team reads the details you share about your organization and challenges." },
  { title: "We schedule a conversation", text: "We follow up to arrange a consultation at a time that works for you." },
  { title: "We discuss potential next steps", text: "Together we explore whether and how Revdian could support your team." },
];

function ContactDetail({
  icon,
  label,
  value,
  placeholder,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  placeholder: string;
  href?: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-gold-700 ring-1 ring-gold-200">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-semibold tracking-[0.12em] text-muted uppercase">{label}</span>
        {value ? (
          href ? (
            <a href={href} className="font-medium text-ink-800 hover:text-gold-700">
              {value}
            </a>
          ) : (
            <span className="font-medium text-ink-800">{value}</span>
          )
        ) : (
          <span className="text-muted italic">{placeholder}</span>
        )}
      </span>
    </li>
  );
}

export default function ContactPage() {
  const { email, phone, address } = siteConfig.contact;

  return (
    <section className="relative isolate overflow-hidden bg-ivory">
      <div aria-hidden="true" className="bg-grid mask-fade-y absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-[-10%] -z-10 h-[30rem] w-[30rem] rounded-full bg-gold-100 blur-3xl"
      />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
        <div>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-ink-800">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-ink-700">
                Contact
              </li>
            </ol>
          </nav>
          <Reveal>
            <Eyebrow className="mt-8">Contact us</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.02] sm:text-6xl">
              Let&apos;s talk about <em className="text-gold-600">your revenue cycle.</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-body">
              Tell us a little about your organization and the challenges you are facing. Our team will use this
              information to understand your requirements and discuss potential next steps.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-14 text-3xl">What happens next</h2>
            <ol className="mt-5 space-y-5">
              {nextSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-lg text-gold-400 italic">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-medium text-ink-900">{step.title}</span>
                    <span className="mt-0.5 block text-[0.94rem] leading-relaxed text-body">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="consultation" className="bg-ink-aurora relative isolate mt-12 overflow-hidden rounded-[28px] p-8 text-ink-200 shadow-lift">
              <div className="flex items-center gap-4">
                <IconTile tone="dark">
                  <CalendarClock aria-hidden="true" />
                </IconTile>
                <h2 className="text-2xl text-white">Prefer to schedule a consultation?</h2>
              </div>
              {siteConfig.schedulingUrl ? (
                <>
                  <p className="mt-4 text-[0.94rem] leading-relaxed">
                    Choose a time that works for you using our online scheduler.
                  </p>
                  <ButtonLink
                    href={siteConfig.schedulingUrl}
                    variant="accent"
                    className="mt-5"
                    arrow
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Consultation
                  </ButtonLink>
                </>
              ) : (
                <>
                  <p className="mt-4 text-[0.94rem] leading-relaxed">
                    Online booking is not available yet. Submit the form and include a few preferred days and times in
                    your message — we&apos;ll follow up to confirm a consultation.
                  </p>
                  <ButtonLink href="#contact-form" variant="accent" className="mt-5" arrow>
                    Request a Consultation
                  </ButtonLink>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="mt-10 space-y-5">
              <ContactDetail
                icon={<Mail aria-hidden="true" className="h-[18px] w-[18px]" />}
                label="Email"
                value={email}
                placeholder={contactPlaceholders.email}
                href={email ? `mailto:${email}` : undefined}
              />
              <ContactDetail
                icon={<Phone aria-hidden="true" className="h-[18px] w-[18px]" />}
                label="Phone"
                value={phone}
                placeholder={contactPlaceholders.phone}
                href={phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : undefined}
              />
              <ContactDetail
                icon={<MapPin aria-hidden="true" className="h-[18px] w-[18px]" />}
                label="Business address"
                value={address}
                placeholder={contactPlaceholders.address}
              />
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div
            id="contact-form"
            className="relative rounded-[32px] border border-line bg-white p-6 shadow-lift sm:p-10 lg:sticky lg:top-28"
          >
            <h2 className="text-4xl">Request a consultation</h2>
            <p className="mt-2 mb-7 text-[0.95rem] text-body">
              Share a few details and we&apos;ll be in touch to discuss your needs.
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
