import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ServiceCards } from "@/components/ServiceCards";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { TrustStrip } from "@/components/TrustStrip";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTABanner } from "@/components/CTABanner";
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
        <TrustStrip />
        <WelcomeSection compact />
        <ServiceCards preview />
        <IndustriesGrid preview />
        <ProcessSection />
        <CTABanner />
        <TestimonialsSection compact />
        <ContactSection />
        <FAQSection limit={4} />
      </main>
      <Footer />
    </>
  );
}