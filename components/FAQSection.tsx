"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { faqItems } from "@/data/site-data";

export function FAQSection() {
  const t = useTranslations("faq");
  const reduceMotion = useReducedMotion();
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#a77a25]">{t("eyebrow")}</p>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#0a1628] md:text-5xl">{t("title")}</h2>
        </div>
        <div className="divide-y divide-[#d9ddda] border-y border-[#d9ddda]">
          {faqItems.map((key) => {
            const item = t.raw(`items.${key}`) as { question: string; answer: string };
            const expanded = openItem === key;
            const panelId = `faq-panel-${key}`;
            const triggerId = `faq-trigger-${key}`;
            return (
              <div key={key}>
                <h3>
                  <button id={triggerId} type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpenItem(expanded ? null : key)} className="flex w-full items-center justify-between gap-5 py-5 text-start font-heading text-sm font-extrabold leading-6 text-[#0a1628] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b48329] md:text-base">
                    <span>{item.question}</span><ChevronDown size={18} aria-hidden="true" className={`shrink-0 text-[#a77a25] transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded && <motion.div id={panelId} role="region" aria-labelledby={triggerId} initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} className="overflow-hidden"><p className="max-w-3xl pb-5 pe-8 text-sm leading-7 text-[#637083]">{item.answer}</p></motion.div>}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
