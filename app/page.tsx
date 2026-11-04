import { Hero } from "@/components/home/Hero";
import {
  ProcessSection,
  ServicesOverview,
  SpecialtiesSection,
  TechnologySection,
  ValueProposition,
  WhyRevanta,
} from "@/components/home/HomeSections";
import { CtaSection } from "@/components/shared/CtaSection";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Revanta RCM | Healthcare Revenue Cycle Management",
  description: siteConfig.description,
  path: "/",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/icon.svg"),
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  areaServed: { "@type": "Country", name: "United States" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <SpecialtiesSection />
      <WhyRevanta />
      <ProcessSection />
      <TechnologySection />
      <CtaSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
