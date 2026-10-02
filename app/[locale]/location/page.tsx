import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { LocationSection } from "@/components/LocationSection";
import { PageHeader } from "@/components/PageHeader";
import { getPageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/data/site-config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return getPageMetadata(locale as Locale, "location");
}

export default async function LocationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("pageHeaders.location");
  return <main><PageHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} image={siteConfig.pageHeroImages.location} /><LocationSection /></main>;
}
