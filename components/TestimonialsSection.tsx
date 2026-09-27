"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { testimonials } from "@/data/site-data";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#a77a25]">{t("eyebrow")}</p><h2 className="font-heading text-3xl font-extrabold leading-tight text-[#0a1628] md:text-5xl">{t("title")}</h2></div>
          <p className="max-w-md text-xs leading-5 text-[#80652b]">{t("placeholderNotice")}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map(({ key }, index) => {
            const item = t.raw(`items.${key}`) as { name: string; quote: string };
            return (
              <motion.figure key={key} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: index * 0.08 }} className="flex min-h-48 flex-col justify-between border border-[#e5e7e4] border-s-2 border-s-[#d9ad55] bg-[#fbfbfa] p-6">
                <blockquote className="font-heading text-lg font-semibold leading-7 text-[#0a1628]">“{item.quote}”</blockquote>
                <figcaption className="mt-7 text-xs font-bold text-[#637083]">{item.name}</figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
