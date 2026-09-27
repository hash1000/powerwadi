"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { serviceCards } from "@/data/site-data";

export function ServiceCards({ preview = false }: { preview?: boolean }) {
  const t = useTranslations("services");
  const cards = serviceCards.slice(0, preview ? 4 : undefined);
  return (
    <section className="bg-[#f4f5f2] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#a77a25]">{t("eyebrow")}</p>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#0a1628] md:text-5xl">{t(preview ? "previewTitle" : "title")}</h2>
          </div>
          {preview && <p className="max-w-md text-sm leading-6 text-[#637083]">{t("previewDescription")}</p>}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ key, image }, index) => {
            const item = t.raw(`cards.${key}`) as { title: string; description: string; included: string[]; whoFor: string };
            return (
              <motion.article key={key} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: index * 0.06 }} className="group min-w-0 bg-white shadow-[0_6px_24px_rgba(10,22,40,.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(10,22,40,.1)]">
                <div className="relative aspect-[1.55] overflow-hidden bg-[#e4e6e2]">
                  <Image src={image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <span dir="ltr" className="absolute start-4 top-4 grid size-10 place-items-center bg-[#d9ad55] font-heading text-sm font-extrabold text-[#0a1628]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-heading text-xl font-extrabold text-[#0a1628]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#637083]">{item.description}</p>
                  {!preview && <>
                    <h4 className="mt-6 text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#a77a25]">{t("includedLabel")}</h4>
                    <ul className="mt-3 space-y-2 text-xs leading-5 text-[#536071]">
                      {item.included.map((includedItem) => <li key={includedItem} className="flex gap-2"><Check size={14} className="mt-0.5 shrink-0 text-[#a77a25]" />{includedItem}</li>)}
                    </ul>
                    <div className="mt-5 border-t border-[#e6e8e4] pt-4">
                      <h4 className="text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#a77a25]">{t("whoForLabel")}</h4>
                      <p className="mt-2 text-xs leading-5 text-[#536071]">{item.whoFor}</p>
                    </div>
                  </>}
                  <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#0a1628]">{t("requestService")} <ArrowUpRight size={14} className="text-[#a77a25]" /></Link>
                </div>
              </motion.article>
            );
          })}
        </div>
        {preview && <div className="mt-9 text-center"><Link href="/services" className="inline-flex items-center gap-2 border border-[#0a1628] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#0a1628] transition hover:bg-[#0a1628] hover:text-white">{t("viewAll")} <ArrowUpRight size={14} /></Link></div>}
      </div>
    </section>
  );
}
