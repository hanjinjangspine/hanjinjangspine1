import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website"
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.ogImage);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Hanjin Jang, MD academic endoscopic spine surgery profile"
        }
      ],
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}
