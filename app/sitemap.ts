import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/transport`,
      lastModified: "2026-11-07",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
