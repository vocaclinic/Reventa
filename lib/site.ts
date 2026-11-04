import type { LucideIcon } from "lucide-react";

/**
 * Central company configuration.
 *
 * Update the contact details below once they are confirmed. Empty strings are
 * rendered as clearly marked placeholders across the site (header, footer,
 * contact page) so that no invented details are ever shown to visitors.
 */
type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  contact: { email: string; phone: string; address: string };
  schedulingUrl: string;
};

export const siteConfig: SiteConfig = {
  name: "Revanta RCM",
  shortName: "Revanta",
  tagline: "Smarter Revenue. Stronger Healthcare.",
  description:
    "Revanta RCM provides technology-enabled revenue cycle management and billing support for Home Health, Hospice, and healthcare providers across the United States.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/$/, ""),

  contact: {
    /** e.g. "hello@revantarcm.com" */
    email: "",
    /** e.g. "+1 (555) 010-0000" */
    phone: "",
    /** e.g. "123 Example Street, Suite 100, City, ST 00000" */
    address: "",
  },

  /**
   * Optional external scheduling link (Calendly, HubSpot Meetings, etc.).
   * Leave empty until a real booking page exists; the contact page will then
   * ask visitors to share preferred times in the form instead.
   */
  schedulingUrl: "",
};

export const contactPlaceholders = {
  email: "[Email address — to be added]",
  phone: "[Phone number — to be added]",
  address: "[Business address — to be added]",
} as const;

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};
