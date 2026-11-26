import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";
import { createMetadata } from "@/lib/seo";
import { contactPlaceholders, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy | Revdian",
  description: "How Revdian collects, uses, and protects information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const email = siteConfig.contact.email || contactPlaceholders.email;
  const address = siteConfig.contact.address || contactPlaceholders.address;

  return (
    <LegalPage
      breadcrumb="Privacy Policy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how Revdian collects, uses, and safeguards information you provide when you visit this website or contact us."
    >
      <h2>1. Scope</h2>
      <p>
        This policy applies to information collected through this website, including the contact form. It does not
        govern information Revdian may process on behalf of clients under a services agreement or business
        associate agreement; that information is handled according to the terms of those agreements.
      </p>

      <h2>2. Information we collect</h2>
      <h3>Information you provide</h3>
      <p>When you submit our contact form, we collect the information you choose to share, such as:</p>
      <ul>
        <li>Your name, work email address, and phone number</li>
        <li>Your organization&apos;s name and type</li>
        <li>The challenges and services you are interested in discussing</li>
        <li>Any message you include</li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        Like most websites, our hosting provider may automatically record technical information such as IP address,
        browser type, pages visited, and the date and time of visits for security and operational purposes.
        [Describe any analytics, cookies, or tracking tools once they are selected.]
      </p>

      <h2>3. Protected health information</h2>
      <p>
        <strong>
          Please do not submit protected health information (PHI) — such as patient names, dates of birth, medical
          record numbers, or clinical details — through this website or by unsecured email.
        </strong>{" "}
        The contact form is intended only for general business inquiries.
      </p>

      <h2>4. How we use information</h2>
      <ul>
        <li>To respond to your inquiry and schedule consultations</li>
        <li>To understand your organization&apos;s needs and discuss potential services</li>
        <li>To maintain the security and performance of our website</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>We do not sell the personal information you submit through this website.</p>

      <h2>5. How we share information</h2>
      <p>
        We may share information with service providers who help us operate this website and manage inquiries (for
        example, hosting, email, or customer relationship management tools), subject to appropriate obligations. We may
        also disclose information where required by law. [List categories of service providers once confirmed.]
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain inquiry information for as long as reasonably necessary to respond to you and for legitimate business
        purposes, after which it is deleted or anonymized. [Specify retention periods.]
      </p>

      <h2>7. Security</h2>
      <p>
        Privacy and security are important to our approach to healthcare operations. We use reasonable measures
        designed to protect information submitted through this website; however, no method of transmission over the
        internet is completely secure.
      </p>

      <h2>8. Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights to request access to, correction of, or deletion of your
        personal information. To make a request, contact us using the details below. [Add any state-specific
        disclosures required for your business.]
      </p>

      <h2>9. Children&apos;s privacy</h2>
      <p>This website is intended for business users and is not directed to children under 13.</p>

      <h2>10. Changes to this policy</h2>
      <p>We may update this policy from time to time. The &ldquo;Last updated&rdquo; date above reflects the most recent revision.</p>

      <h2>11. Contact us</h2>
      <p>
        Questions about this policy can be directed to Revdian at {email}, {address}, or through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
