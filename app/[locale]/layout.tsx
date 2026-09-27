import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DM_Sans, Manrope, Tajawal } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { routing } from "@/i18n/routing";
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
    metadataBase: new URL("https://powerwadialram.com"),
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
      siteName: t("openGraphTitle"),
      locale: locale === "ar" ? "ar_QA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_QA"],
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"} className={isArabic ? arabicFont.variable : `${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Toaster position={isArabic ? "bottom-left" : "bottom-right"} richColors dir={isArabic ? "rtl" : "ltr"} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}