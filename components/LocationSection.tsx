import { Mail, MapPin, Navigation, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site-config";

export function LocationSection() {
  const t = useTranslations("location");
  return (
    <section id="location" className="bg-[#f4f5f2] px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-2xl">
          <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#a77a25]">{t("eyebrow")}</p>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#0a1628] md:text-5xl">{t("title")}</h2>
        </div>
        <div className="grid overflow-hidden border border-[#e1e3df] bg-white shadow-[0_12px_34px_rgba(10,22,40,.08)] lg:grid-cols-[1.35fr_.65fr]">
          <iframe title={t("mapDescription")} src={siteConfig.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full border-0 bg-[#e8e9e6] sm:h-[460px] lg:h-full lg:min-h-[540px]" />
          <aside className="flex flex-col p-6 sm:p-8 lg:p-9">
            <h3 className="font-heading text-xl font-extrabold leading-snug text-[#0a1628]">{siteConfig.legalName}</h3>
            <p className="mt-3 flex items-center gap-3 text-sm text-[#637083]"><MapPin size={17} className="shrink-0 text-[#a77a25]" />{siteConfig.address}</p>
            <div className="mt-7 space-y-4 border-t border-[#e5e7e4] pt-6 text-sm text-[#536071]">
              <a href={siteConfig.phoneLink} className="flex items-center gap-3 hover:text-[#0a1628] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b48329]"><Phone size={17} className="shrink-0 text-[#a77a25]" /><bdi dir="ltr">{siteConfig.phone}</bdi></a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#0a1628] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b48329]"><Send size={17} className="shrink-0 text-[#a77a25]" /><span>{t("whatsapp")}</span></a>
              <a href={`mailto:${siteConfig.primaryEmail}`} className="flex min-w-0 items-center gap-3 break-all hover:text-[#0a1628] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b48329]"><Mail size={17} className="shrink-0 text-[#a77a25]" /><bdi dir="ltr">{siteConfig.primaryEmail}</bdi></a>
              <a href={`mailto:${siteConfig.secondaryEmail}`} className="flex min-w-0 items-center gap-3 break-all hover:text-[#0a1628] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b48329]"><Mail size={17} className="shrink-0 text-[#a77a25]" /><bdi dir="ltr">{siteConfig.secondaryEmail}</bdi></a>
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-[#d9ad55] px-4 text-xs font-extrabold text-[#0a1628] transition hover:bg-[#e7c475] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]"><Navigation size={15} />{t("directions")}</a>
              <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center border border-[#0a1628] px-4 text-xs font-bold text-[#0a1628] transition hover:bg-[#0a1628] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b48329]">{t("openMaps")}</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
