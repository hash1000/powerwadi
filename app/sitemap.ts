import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

const routes = ["", "/about", "/services", "/industries", "/location", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const englishUrl = `${siteConfig.website}/en${route}`;
    const arabicUrl = `${siteConfig.website}/ar${route}`;
    const alternates = { en: englishUrl, ar: arabicUrl, "x-default": englishUrl };
    return [
      { url: englishUrl, alternates: { languages: alternates } },
      { url: arabicUrl, alternates: { languages: alternates } },
    ];
  });
}