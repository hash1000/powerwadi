"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export function ServicesGrid() {
  const t = useTranslations("services");
  const locale = useLocale();
  const serviceNames = t.raw("list") as string[];
  return (
    <section id="services" className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="service-panel mx-auto max-w-7xl bg-[#0a0a0a] px-7 py-10 text-white sm:px-10 md:px-16 md:py-14">
        <div className="grid gap-8 md:grid-cols-[.75fr_1.25fr] md:gap-12">
          <div>
            <h2 className="font-heading text-4xl font-extrabold leading-none text-[#e8c14b] sm:text-5xl md:text-6xl">{t("title")}</h2>
            <div className="mt-4 h-px w-24 bg-[#e8c14b]" />
          </div>
          <ul className="space-y-3 md:space-y-3.5">
            {serviceNames.map((service, index) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: index * 0.055 }}
                className="flex items-baseline gap-3 text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl"
              >
                <span aria-hidden="true" className="shrink-0 text-[0.72em] text-[#e8c14b]">{locale === "ar" ? "◀" : "▶"}</span>
                <span>{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}