import type { Metadata } from "next";
import { siteConfig } from "./site";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Used for the canonical URL. */
  path: string;
};

/** Builds consistent per-page metadata: title, description, canonical and social tags. */
export function createMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      url: path,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
