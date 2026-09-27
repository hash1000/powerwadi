"use client";

import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import { company } from "@/data/site-data";

export function DohaMap() {
  const t = useTranslations("contact");
  const mapUrl = `https://www.google.com/maps?q=${company.mapCoordinates}&z=13&output=embed`;
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-[.7fr_1.3fr] md:items-end">
        <div>
          <h2 className="font-heading text-2xl font-extrabold text-[#0a1628] md:text-3xl">{t("mapTitle")}</h2>
          <p className="mt-3 flex gap-2 text-sm leading-6 text-[#637083]"><MapPin size={17} className="mt-1 shrink-0 text-[#a77a25]" />{t("address")}</p>
          <p className="mt-4 text-xs leading-5 text-[#7a6a46]">{t("mapNote")}</p>
        </div>
        <iframe title={t("mapDescription")} src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-64 w-full border-0 bg-[#e8e9e6] md:h-80" />
      </div>
    </section>
  );
}
