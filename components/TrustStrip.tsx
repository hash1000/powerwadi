"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { trustItems } from "@/data/site-data";

export function TrustStrip() {
  const t = useTranslations("trust");
  return (
    <section aria-label={t("label")} className="border-b border-[#e8e9e6] bg-white px-5 py-5 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-4 lg:grid-cols-4">
        {trustItems.map(({ key, icon: Icon }, index) => (
          <motion.div key={key} initial={{ opacity: 0, y: 9 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }} className="flex min-w-0 items-center gap-3 text-xs font-bold text-[#0a1628] md:text-sm">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f5edda] text-[#9a7023]"><Icon size={17} strokeWidth={1.8} aria-hidden="true" /></span>
            <span className="leading-5">{t(key)}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
