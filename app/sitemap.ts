import type { MetadataRoute } from "next";

const siteUrl = "https://powerwadialram.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/en`,
      alternates: { languages: { en: `${siteUrl}/en`, ar: `${siteUrl}/ar`, "x-default": `${siteUrl}/en` } },
    },
    {
      url: `${siteUrl}/ar`,
      alternates: { languages: { en: `${siteUrl}/en`, ar: `${siteUrl}/ar`, "x-default": `${siteUrl}/en` } },
    },
  ];
}