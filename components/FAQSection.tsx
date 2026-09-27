"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { faqItems } from "@/data/site-data";
import { Link } from "@/i18n/navigation";

export function FAQSection({ limit }: { limit?: number }) {
  const t = useTranslations("faq");
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <section className="bg-[#f4f5f2] px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#a77a25]">{t("eyebrow")}</p>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#0a1628] md:text-5xl">{t("title")}</h2>
        </div>
        <div className="divide-y divide-[#d9ddda] border-y border-[#d9ddda]">
          {faqItems.slice(0, limit).map(({ key }, index) => {
            const item = t.raw(`items.${key}`) as { question: string; answer: string };
            const expanded = openItem === key;
            const panelId = `faq-panel-${key}`;
            const triggerId = `faq-trigger-${key}`;
            return (
              <motion.div key={key} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.32, delay: index * 0.05 }}>
                <h3>
                  <button id={triggerId} type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpenItem(expanded ? null : key)} className="flex w-full items-center justify-between gap-5 py-5 text-start font-heading text-sm font-extrabold leading-6 text-[#0a1628] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b48329] md:text-base">
                    <span>{item.question}</span><ChevronDown size={18} aria-hidden="true" className={`shrink-0 text-[#a77a25] transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div id={panelId} role="region" aria-labelledby={triggerId} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                      <p className="max-w-3xl pb-5 pe-8 text-sm leading-7 text-[#637083]">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        {limit && <Link href="/contact" className="mt-5 inline-flex border-b border-[#d9ad55] pb-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#0a1628]">{t("more")}</Link>}
      </div>
    </section>
  );
}
