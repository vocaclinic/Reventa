import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";
import { createMetadata } from "@/lib/seo";
import { contactPlaceholders, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms and Conditions | Revdian",
  description: "Terms and conditions governing the use of the Revdian website.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  const email = siteConfig.contact.email || contactPlaceholders.email;

  return (
    <LegalPage
      breadcrumb="Terms and Conditions"
      title="Terms and Conditions"
      intro="These Terms and Conditions govern your use of the Revdian website. By using this website, you agree to these terms."
    >
      <h2>1. About this website</h2>
      <p>
        This website provides general information about Revdian and the healthcare revenue cycle management
        services we offer. Any services are provided only under a separate written agreement between Revdian and
        the client, which governs in the event of any conflict with these terms.
      </p>

      <h2>2. Informational purposes only</h2>
      <p>
        Content on this website — including descriptions of Medicare, payer, billing, and documentation requirements —
        is general information only. It is not legal, regulatory, financial, coding, or clinical advice. Payer rules
        change frequently and vary by payer; always consult current official guidance and qualified advisors.
      </p>

      <h2>3. No guarantee of outcomes</h2>
      <p>
        Revdian does not guarantee any specific reimbursement, collection, denial, or financial outcome. Results
        depend on many factors, including documentation, payer policies, and payer determinations outside our control.
      </p>

      <h2>4. Illustrative content</h2>
      <p>
        Dashboards, charts, trackers, and similar visuals on this website are illustrative designs only. They do not
        represent actual client data, performance results, or a specific software product.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website for any unlawful purpose</li>
        <li>Submit protected health information or other sensitive personal data through the contact form</li>
        <li>Attempt to interfere with the website&apos;s security or operation</li>
        <li>Submit false, misleading, or automated inquiries</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>
        The Revdian name, logo, website design, and content are owned by Revdian or its licensors and may not be
        used without prior written permission.
      </p>

      <h2>7. Third-party links</h2>
      <p>
        This website may link to third-party websites. We are not responsible for their content or practices.
      </p>

      <h2>8. Disclaimer and limitation of liability</h2>
      <p>
        The website is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted by
        law, Revdian is not liable for any damages arising from your use of the website. [To be finalized by legal
        counsel.]
      </p>

      <h2>9. Governing law</h2>
      <p>These terms are governed by the laws of [State — to be determined], without regard to conflict-of-law rules.</p>

      <h2>10. Changes</h2>
      <p>We may update these terms from time to time. Continued use of the website means you accept the updated terms.</p>

      <h2>11. Contact</h2>
      <p>
        Questions about these terms can be sent to {email} or through our <Link href="/contact">contact page</Link>. See
        also our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
