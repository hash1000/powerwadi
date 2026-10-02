"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { processSteps } from "@/data/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function ProcessSection() {
  const t = useTranslations("process");
  const reduceMotion = useReducedMotion();
  return (
    <section className="bg-[#f4f5f2] px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-11"><SectionHeading eyebrow={t("eyebrow")} title={t("title")} /></div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map(({ number, key }, index) => {
            const item = t.raw(`steps.${key}`) as { title: string; description: string };
            return (
              <motion.li key={key} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: reduceMotion ? 0 : 0.36, delay: reduceMotion ? 0 : index * 0.05 }} className="min-w-0 border-t-2 border-[#d9ad55] bg-white p-5 shadow-[0_6px_22px_rgba(10,22,40,.045)] sm:p-6">
                <span dir="ltr" className="grid size-11 place-items-center bg-[#0a1628] font-heading text-sm font-extrabold text-[#e4bd69]">{number}</span>
                <h3 className="mt-5 font-heading text-base font-extrabold leading-snug text-[#0a1628]">{item.title}</h3>
                <p className="mt-3 text-xs leading-5 text-[#637083]">{item.description}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
