import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ServiceCards } from "@/components/ServiceCards";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { ClientsSection } from "@/components/ClientsSection";
import { LocationSection } from "@/components/LocationSection";
import { CTABanner } from "@/components/CTABanner";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { routing } from "@/i18n/routing";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <main>
        <Hero />
        <WelcomeSection compact />
        <ServiceCards preview />
        <IndustriesGrid />
        <ProcessSection />
        <ClientsSection />
        <LocationSection />
        <CTABanner />
        <ContactSection />
        <FAQSection />
      </main>
    </>
  );
}