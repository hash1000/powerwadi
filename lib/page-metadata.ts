import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { siteConfig } from "@/data/site-config";

export async function getPageMetadata(locale: Locale, page: "about" | "services" | "industries" | "location" | "contact"): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `pageMeta.${page}` });
  const path = page === "about" ? "/about" : `/${page}`;
  const url = `${siteConfig.website}/${locale}${path}`;
  const englishUrl = `${siteConfig.website}/en${path}`;
  const arabicUrl = `${siteConfig.website}/ar${path}`;
  const title = `${t("title")} | ${siteConfig.brandName}`;

  return {
    title,
    description: t("description"),
    alternates: {
      canonical: url,
      languages: { en: englishUrl, ar: arabicUrl, "x-default": englishUrl },
    },
    openGraph: {
      title,
      description: t("description"),
      url,
      siteName: siteConfig.brandName,
      locale: locale === "ar" ? "ar_QA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_QA"],
      images: [{ url: siteConfig.logoPath, alt: "Power Wadi Al Ram logo" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t("description"),
      images: [{ url: siteConfig.logoPath, alt: "Power Wadi Al Ram logo" }],
    },
  };
}
