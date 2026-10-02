import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { websiteOffer } from "@/data/website-offer";
import { PageHeader } from "@/components/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "websiteOffer" });
  return { title: t("title"), description: t("description") };
}

export default async function WebsiteOfferPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("websiteOffer");

  return (
    <main>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("heading")}
        description={t("description")}
        image="/images/heroes/services.webp"
      />
      <section className="bg-[#f4f5f2] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 border border-[#e4e6e2] bg-white p-6 shadow-[0_12px_34px_rgba(10,22,40,.07)] sm:p-10 lg:grid-cols-[1fr_.7fr] lg:gap-16 lg:p-12">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#a77a25]">{t("includesLabel")}</p>
            <ul className="mt-6 space-y-5">
              {websiteOffer.inclusions.map((key) => (
                <li key={key} className="flex gap-3 text-sm leading-6 text-[#263548]">
                  <Check size={18} className="mt-0.5 shrink-0 text-[#a77a25]" aria-hidden="true" />
                  <span>{t(`inclusions.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="flex flex-col justify-center border-t border-[#e5e7e4] pt-7 lg:border-s lg:border-t-0 lg:ps-10 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#637083]">{t("priceLabel")}</p>
            <p className="mt-2 font-heading text-5xl font-extrabold text-[#0a1628]">{websiteOffer.currency} {websiteOffer.price}</p>
            <Link href={websiteOffer.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 bg-[#d9ad55] px-5 text-xs font-extrabold uppercase text-[#0a1628] transition hover:bg-[#e7c475] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]">
              {t("whatsappCta")} <ArrowUpRight size={16} />
            </Link>
            <p className="mt-4 text-center text-sm text-[#637083]" dir="ltr">{websiteOffer.whatsappNumber}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}