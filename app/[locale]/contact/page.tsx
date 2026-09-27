import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/ContactSection";
import { DohaMap } from "@/components/DohaMap";
import { FAQSection } from "@/components/FAQSection";
import { getPageMetadata } from "@/lib/page-metadata";
import { routing, type Locale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return getPageMetadata(locale as Locale, "contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("pageHeaders.contact");
  return <><Navbar /><main><PageHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} /><ContactSection /><DohaMap /><FAQSection /></main><Footer /></>;
}
