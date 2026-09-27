import type { MetadataRoute } from "next";

const siteUrl = "https://powerwadialram.com";
const routes = ["", "/about", "/services", "/industries", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const englishUrl = `${siteUrl}/en${route}`;
    const arabicUrl = `${siteUrl}/ar${route}`;
    const alternates = { en: englishUrl, ar: arabicUrl, "x-default": englishUrl };
    return [
      { url: englishUrl, alternates: { languages: alternates } },
      { url: arabicUrl, alternates: { languages: alternates } },
    ];
  });
}