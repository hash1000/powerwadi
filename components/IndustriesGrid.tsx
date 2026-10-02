"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { industries } from "@/data/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function IndustriesGrid() {
  const t = useTranslations("industries");
  const reduceMotion = useReducedMotion();
  return (
    <section id="industries" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#637083]">{t("intro")}</p>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {industries.map(({ key, icon: Icon }, index) => {
            const item = t.raw(`items.${key}`) as { title: string; description: string };
            return (
              <motion.article key={key} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : index * 0.04 }} className="flex gap-4 border-b border-[#e5e7e4] py-6 first:pt-0 sm:py-7">
                <span className="grid size-11 shrink-0 place-items-center border border-[#d9ad55] text-[#8e671f]"><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></span>
                <div className="min-w-0">
                  <h3 className="font-heading text-base font-extrabold text-[#0a1628]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#637083]">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
