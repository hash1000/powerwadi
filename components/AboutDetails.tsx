"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { company } from "@/data/site-data";

export function AboutDetails() {
  const t = useTranslations("about");
  const brand = useTranslations("brand");
  return (
    <section className="bg-[#f4f5f2] px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-7 md:p-10">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#a77a25]">{t("storyTitle")}</p>
          <p className="mt-5 text-sm leading-7 text-[#637083] md:text-base md:leading-8">{t("storyBody")}</p>
          <h3 className="mt-8 font-heading text-xl font-extrabold text-[#0a1628]">{t("missionTitle")}</h3>
          <p className="mt-3 text-sm leading-7 text-[#637083]">{t("missionBody")}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="bg-[#0a1628] p-7 text-white md:p-10">
          <h3 className="font-heading text-xl font-extrabold text-[#e4bd69]">{t("managerLabel")}</h3>
          <p className="mt-4 text-2xl font-bold">{t("managerName")}</p>
          <p className="mt-2 text-sm leading-7 text-white/70">{t("managerDescription")}</p>
          <div className="mt-8 border-t border-white/15 pt-6">
            <p className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#e4bd69]">{t("legalTitle")}</p>
            <dl className="space-y-4 text-sm">
              <div><dt className="text-white/50">{t("legalNameLabel")}</dt><dd className="mt-1 font-semibold">{brand("legalName")}</dd></div>
              <div className="flex items-baseline justify-between gap-4"><dt className="text-white/50">{t("crLabel")}</dt><dd dir="ltr" className="font-semibold">{company.crNumber}</dd></div>
              <div className="flex items-baseline justify-between gap-4"><dt className="text-white/50">{t("locationLabel")}</dt><dd className="font-semibold">{t("location")}</dd></div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
