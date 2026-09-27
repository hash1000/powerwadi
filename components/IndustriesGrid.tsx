"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/site-data";
import { SectionHeading } from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

export function IndustriesGrid() {
  const t = useTranslations("industries");
  return (
    <section id="industries" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#637083]">{t("intro")}</p>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const item = t.raw(`items.${industry.key}`) as { title: string; description: string };
            return (
              <motion.article
                key={industry.key}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4 border-b border-[#e5e7e4] py-6 first:pt-0 sm:py-7"
              >
                <span className="grid size-11 shrink-0 place-items-center border border-[#d9ad55] text-[#8e671f]">
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-base font-extrabold text-[#0a1628]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#637083]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}