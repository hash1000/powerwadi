import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { CTABanner } from "@/components/CTABanner";
import { getPageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return getPageMetadata(locale as Locale, "industries");
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("pageHeaders.industries");
  return <><Navbar /><main><PageHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} /><IndustriesGrid /><CTABanner /></main><Footer /></>;
}
