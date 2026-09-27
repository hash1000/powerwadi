import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export async function getPageMetadata(locale: Locale, page: "about" | "services" | "industries" | "contact"): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `pageMeta.${page}` });
  const path = page === "about" ? "/about" : `/${page}`;
  const url = `https://powerwadialram.com/${locale}${path}`;
  const englishUrl = `https://powerwadialram.com/en${path}`;
  const arabicUrl = `https://powerwadialram.com/ar${path}`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: { en: englishUrl, ar: arabicUrl, "x-default": englishUrl },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: locale === "ar" ? "باور وادي الرم" : "Power Wadi Al Ram",
      locale: locale === "ar" ? "ar_QA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_QA"],
      type: "website",
    },
  };
}
