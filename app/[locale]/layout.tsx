import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DM_Sans, Manrope, Tajawal } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/data/site-config";
import { ContactActions } from "@/components/ContactActions";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "../globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap", preload: false });
const headingFont = Manrope({ subsets: ["latin"], variable: "--font-heading", display: "swap", preload: false });
const arabicFont = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "metadata" });
  const url = `/${locale}`;

  return {
    metadataBase: new URL(siteConfig.website),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      url,
      siteName: siteConfig.brandName,
      locale: locale === "ar" ? "ar_QA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_QA"],
      images: [{ url: siteConfig.logoPath, alt: "Power Wadi Al Ram logo" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      images: [{ url: siteConfig.logoPath, alt: "Power Wadi Al Ram logo" }],
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const isArabic = locale === "ar";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    url: siteConfig.website,
    telephone: siteConfig.phone,
    email: [siteConfig.primaryEmail, siteConfig.secondaryEmail],
    logo: new URL(siteConfig.logoPath, siteConfig.website).toString(),
    image: new URL(siteConfig.logoPath, siteConfig.website).toString(),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressCountry: siteConfig.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
  };

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"} className={isArabic ? arabicFont.variable : `${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <ContactActions />
          <Toaster position={isArabic ? "bottom-left" : "bottom-right"} richColors dir={isArabic ? "rtl" : "ltr"} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}