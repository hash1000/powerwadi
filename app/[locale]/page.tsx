import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { CTABanner } from "@/components/CTABanner";
import { FeaturesRow } from "@/components/FeaturesRow";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { routing } from "@/i18n/routing";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WelcomeSection />
        <ServicesGrid />
        <IndustriesGrid />
        <CTABanner />
        <FeaturesRow />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}