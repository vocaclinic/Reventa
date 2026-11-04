import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/home-health-rcm", priority: 0.9, changeFrequency: "monthly" },
  { path: "/hospice-rcm", priority: 0.9, changeFrequency: "monthly" },
  { path: "/specialties", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
