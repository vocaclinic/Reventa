# Revdian — Website

Marketing website for **Revdian** (revenue + guardian; tagline "Revenue, Guarded."), a healthcare revenue cycle management company. It is built with Next.js (App Router), React, TypeScript, Tailwind CSS v4, Lucide icons and Framer Motion.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/services` | Services (each service has an anchor, e.g. `/services#denial-management`) |
| `/home-health-rcm` | Home Health RCM |
| `/hospice-rcm` | Hospice RCM |
| `/specialties` | Industries / Specialties |
| `/contact` | Contact form and consultation request |
| `/privacy-policy` | Privacy Policy (template) |
| `/terms-and-conditions` | Terms and Conditions (template) |
| `/api/contact` | Contact form endpoint (POST) |

`/sitemap.xml`, `/robots.txt`, `/opengraph-image` and the favicon (`app/icon.svg`) are generated from files in `app/`.

## Getting started

Requirements: Node.js 20.9 or newer.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:3000
npm run build      # create a production build
npm run start      # serve the production build
npm run typecheck  # run the TypeScript checker
```

Copy `.env.example` to `.env.local` and fill in the values you need (see below).

## Configuration

### Company details (email, phone, address)

Edit **`lib/site.ts`**:

```ts
contact: {
  email: "team@revdian.com",
  phone: "",                       // optional; hidden while empty
  address: "Wyoming, United States",
},
schedulingUrl: "https://calendly.com/your-team/consultation",
```

While the email or address is an empty string, the site shows a clearly marked placeholder such as `[Email address — to be added]` in the footer, the contact page and the legal pages. An empty phone number is hidden instead. Once you set a value, it appears everywhere and becomes a `mailto:` or `tel:` link.

`schedulingUrl` is optional. While it is empty, the contact page asks visitors to include preferred times in the form. Once you set it, a "Book a Consultation" button links to the scheduler.

### Site URL (canonical links, sitemap, Open Graph)

Set `NEXT_PUBLIC_SITE_URL` to the production domain, for example `https://www.revdian.com`. Until then, canonical URLs use the placeholder `https://www.example.com`.

### Contact form submission

The form posts to `/api/contact`. That route checks the input with the same rules the browser uses (`lib/contact/schema.ts`), then passes the lead to `deliverLead()` in `lib/contact/delivery.ts`. Choose a provider with an environment variable:

| `CONTACT_PROVIDER` | Behavior |
| --- | --- |
| *(unset)* | Nothing is delivered. Visitors are told that online submissions aren't enabled yet and are shown the contact email. |
| `smtp` (recommended) | Emails each lead through your own mailbox's SMTP server using [Nodemailer](https://nodemailer.com). No third-party form service is involved. Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` and `SMTP_PASS` (an app password); the email goes to `CONTACT_TO_EMAIL` (defaults to the contact email in `lib/site.ts`), and Reply goes straight to the visitor. See `.env.example` for Google Workspace, Zoho and Microsoft 365 settings. |
| `webhook` | POSTs `{ "type": "contact_request", "lead": { ... } }` as JSON to `CONTACT_WEBHOOK_URL`. If `CONTACT_WEBHOOK_SECRET` is set, it is sent as the `X-Webhook-Secret` header. |
| `console` | Development only: logs the lead to the server console and tells the visitor it was not delivered. It is disabled in production. |

Visitors see the "request received" message only after a provider confirms delivery.

**The webhook option connects to most tools:** Zapier, Make or n8n (and from there email, Google Sheets, Slack and so on), HubSpot or Salesforce inbound webhooks, or a small serverless email relay.

**To add a direct integration** (for example a CRM SDK or a database), add a provider function in `lib/contact/delivery.ts` and a matching `case` in `deliverLead()`. The form UI talks only to `submitContactForm()` in `lib/contact/client.ts`, so it does not need to change.

Built-in spam protection is a hidden honeypot field plus server-side validation. For a high-traffic site, consider adding rate limiting or a CAPTCHA (for example Cloudflare Turnstile) in `app/api/contact/route.ts`.

> The form asks visitors not to include protected health information (PHI), and they must tick a box confirming this. Keep that safeguard unless the whole pipeline (hosting, provider and storage) is covered by appropriate agreements and controls.

## Editing content

| What | Where |
| --- | --- |
| Service catalog (Services page, navigation) | `lib/services.ts` → `services` |
| Homepage service cards | `lib/services.ts` → `serviceOverview` |
| Navigation and footer links | `lib/navigation.ts` |
| Homepage sections | `components/home/` |
| Page content, FAQs, metadata | `app/<route>/page.tsx` |
| Colors (Royal Blue `royal-700` #243F70, Champagne Gold `gold-400` #D4AF67, Ivory #F7F4ED, plus their tints and shades), fonts (Newsreader serif + Geist), shadows | `app/globals.css` (`@theme` tokens) and `app/layout.tsx` (fonts) |

Each page sets its title, description and canonical URL with `createMetadata()` from `lib/seo.ts`. FAQ sections also output FAQPage structured data automatically.

## Logo, images and visuals

- **Logo:** `components/brand/Logo.tsx` contains the shield "R" mark (`LogoMark`, geometry in `components/brand/paths.ts`) and the serif wordmark, with `tone="light"` and `tone="dark"` variants. The favicon is `app/icon.svg`, and the social sharing image is `app/opengraph-image.tsx`. To use a designer-supplied logo, replace the SVG paths in all three files, or swap `LogoMark` for a `next/image` pointing at a file in `public/`.
- **Illustrations:** the dashboard, trackers and diagrams in `components/visuals/` are built in code, so they stay crisp and load quickly. They are labeled "Illustrative" and contain no real data. Keep them that way, or replace them with real screenshots only after confirming you have permission and that the screenshots contain no client or patient data.
- **Photography:** the site currently uses no photos. To add team or office photos, put them in `public/images/` and render them with `next/image`, using descriptive `alt` text. Use only photos you have rights to, and avoid stock images that imply staff or clients you don't have.

## Content and compliance guardrails

This site was written for a new company. Before publishing changes, keep to these rules:

- Do not add client counts, years in business, testimonials, client logos, certifications, awards, partnerships or performance percentages unless they are true and documented.
- Do not describe the company as "HIPAA certified."
- Do not promise reimbursement, collection or denial-reduction outcomes.
- Home Health and Hospice workflows are different; keep their content separate.
- Have qualified legal counsel review the Privacy Policy and Terms and Conditions, which are templates, before launch.

## Deployment

This app needs a Node.js runtime because the contact form uses an API route; every page itself is static.

**Vercel (recommended)**

1. Push the project to a Git repository and import it in Vercel.
2. Add the environment variables: `NEXT_PUBLIC_SITE_URL`, plus `CONTACT_PROVIDER`, `CONTACT_WEBHOOK_URL` and optionally `CONTACT_WEBHOOK_SECRET`.
3. Deploy, then add your custom domain.

**Other hosts** (Netlify, AWS Amplify, Render, a Docker container or your own server): run `npm run build`, then `npm run start` with the same environment variables. The server listens on port 3000 by default; use `-p` or the `PORT` variable to change it.

After deploying, submit `https://<your-domain>/sitemap.xml` in Google Search Console.

## Project structure

```
app/                 Routes, metadata files (sitemap, robots, icon, OG image), API route
components/brand/    Logo
components/layout/   Header (dropdowns + mobile menu), Footer, Providers
components/home/     Homepage sections
components/shared/   Reusable sections: PageHero, CtaSection, FaqSection, FeatureBlock, ProcessTimeline, CardGrid
components/ui/       Primitives: Button, Container/Section/SectionHeading, Reveal
components/visuals/  Illustrative dashboard, trackers and diagrams
components/contact/  Contact form
lib/                 Site config, navigation, services data, SEO helpers, contact schema and delivery
```

Animations are subtle and honor the visitor's reduced-motion setting. If JavaScript is unavailable, content still appears.
