"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site-config";

export function CTABanner() {
  const t = useTranslations("banner");
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate min-h-[380px] overflow-hidden bg-[#0a1628] md:min-h-[440px]">
      <motion.div aria-hidden="true" className="absolute inset-0 -z-10" initial={reduceMotion ? false : { scale: 1.04 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.8 }}>
        <Image src={siteConfig.bannerImage} alt="Modern building exterior in Doha" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#07111f]/80" />
      <div className="mx-auto flex min-h-[380px] max-w-7xl items-center px-5 py-20 md:min-h-[440px] md:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.21em] text-[#e4bd69]">{t("eyebrow")}</p>
          <h2 className="font-heading text-4xl font-extrabold leading-[1.08] text-white md:text-6xl">{t("title")}</h2>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-[#d9ad55] pb-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#e4bd69]">{t("link")} <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}