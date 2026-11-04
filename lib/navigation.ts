import { HeartHandshake, House, Layers } from "lucide-react";
import type { NavChild, NavItem } from "./site";
import { services } from "./services";

const serviceLinks: NavChild[] = services.map((s) => ({
  label: s.navLabel,
  href: `/services#${s.slug}`,
  icon: s.icon,
}));

const specialtyLinks: NavChild[] = [
  {
    label: "Home Health RCM",
    href: "/home-health-rcm",
    icon: House,
    description: "NOA tracking, 30-day period billing, A/R and denial follow-up.",
  },
  {
    label: "Hospice RCM",
    href: "/hospice-rcm",
    icon: HeartHandshake,
    description: "NOE tracking, monthly claims, payment visibility and follow-up.",
  },
  {
    label: "All Specialties",
    href: "/specialties",
    icon: Layers,
    description: "Our current focus areas and the specialties we are growing into.",
  },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: serviceLinks },
  { label: "Specialties", href: "/specialties", children: specialtyLinks },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Home Health RCM", href: "/home-health-rcm" },
    { label: "Hospice RCM", href: "/hospice-rcm" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Medical Billing", href: "/services#medical-billing" },
    { label: "Claims Management", href: "/services#claims-management" },
    { label: "A/R Management", href: "/services#accounts-receivable" },
    { label: "Denial Management", href: "/services#denial-management" },
    { label: "Payment Posting", href: "/services#payment-posting" },
    { label: "RCM Reporting", href: "/services#rcm-reporting" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
  ],
};
