"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site-config";

export function AboutDetails() {
  const t = useTranslations("about");
  return (
    <section className="bg-[#f4f5f2] px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-7 md:p-10">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#a77a25]">{t("legalTitle")}</p>
          <p className="mt-5 font-heading text-2xl font-extrabold text-[#0a1628]">{siteConfig.legalName}</p>
          <p className="mt-3 text-sm leading-7 text-[#637083]">{siteConfig.address}</p>
          <h3 className="mt-8 font-heading text-xl font-extrabold text-[#0a1628]">{t("servicesTitle")}</h3>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-[#637083]">{siteConfig.services.map((service) => <li key={service}>{service}</li>)}</ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="bg-[#0a1628] p-7 text-white md:p-10">
          <h3 className="font-heading text-xl font-extrabold text-[#e4bd69]">{siteConfig.contactRole}</h3>
          <p dir="ltr" className="mt-4 text-2xl font-bold">{siteConfig.contactPerson}</p>
        </motion.div>
      </div>
    </section>
  );
}
