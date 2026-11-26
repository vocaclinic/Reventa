import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { FaqAccordion, type FaqItem } from "./FaqAccordion";

/** FAQ block with matching FAQPage structured data for search engines. */
export function FaqSection({
  title = "Frequently Asked Questions",
  description,
  items,
  tone = "ivory",
}: {
  title?: string;
  description?: string;
  items: FaqItem[];
  tone?: "white" | "ivory";
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <Section id="faqs" tone={tone} labelledBy="faq-heading">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading id="faq-heading" eyebrow="FAQs" title={title} description={description} align="left" />
        <FaqAccordion items={items} />
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </Section>
  );
}
