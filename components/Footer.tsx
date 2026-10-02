import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { pageRoutes } from "@/data/site-data";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();
  const logoPath = locale === "ar" ? siteConfig.logoArabicPath : siteConfig.logoLightPath;
  const navigation = pageRoutes.filter(({ key }) => key !== "home");
  return (
    <footer className="bg-[#07111f] px-5 pb-6 pt-14 text-white md:px-8 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src={logoPath} alt="Power Wadi Al Ram Building Maintenance W.L.L" width={locale === "ar" ? 448 : 668} height={locale === "ar" ? 92 : 132} sizes="223px" className="h-11 w-auto object-contain" />
          </Link>
          <p className="mt-5 max-w-xs text-xs leading-6 text-white/55">{t("description")}</p>
          <div className="mt-5 flex gap-2">
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label={nav("whatsapp")} className="grid size-9 place-items-center border border-white/20 text-white/65 transition hover:border-[#d9ad55] hover:text-[#d9ad55]"><MessageCircle size={15} /></a>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#e4bd69]">{t("quickLinks")}</h3>
          <div className="space-y-3 text-xs text-white/60">{navigation.map(({ key, href }) => <Link key={key} className="block transition hover:text-white" href={key === "clients" ? "/#contact" : href}>{nav(key)}</Link>)}<Link className="block transition hover:text-white" href="/website-offer">{t("websiteOffer")}</Link></div>
        </div>
        <div>
          <h3 className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#e4bd69]">{t("services")}</h3>
          <div className="space-y-3 text-xs text-white/60">{siteConfig.services.map((service) => <Link key={service} className="block transition hover:text-white" href="/services">{service}</Link>)}</div>
        </div>
        <div>
          <h3 className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#e4bd69]">{t("contact")}</h3>
          <p className="text-xs leading-6 text-white/60">{siteConfig.address}<br /><a dir="ltr" href={`mailto:${siteConfig.primaryEmail}`} className="break-all hover:text-white">{siteConfig.primaryEmail}</a><br /><a dir="ltr" href={`mailto:${siteConfig.secondaryEmail}`} className="break-all hover:text-white">{siteConfig.secondaryEmail}</a></p>
          <a href={siteConfig.phoneLink} className="mt-3 flex items-center gap-2 text-xs text-white/60 hover:text-white"><Phone size={13} /><bdi dir="ltr">{siteConfig.phone}</bdi></a>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-2 block text-xs text-white/60 hover:text-white">{nav("whatsapp")} <bdi dir="ltr">{siteConfig.whatsappNumber}</bdi></a>
          <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-2 block text-xs text-white/60 hover:text-white">{t("directions")}</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 pt-5 text-[9px] font-medium uppercase tracking-[0.1em] text-white/35 sm:flex-row">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}</span><span>{siteConfig.address}</span>
      </div>
    </footer>
  );
}