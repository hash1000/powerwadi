"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/SectionHeading";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function WelcomeSection({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("about");
  const reduceMotion = useReducedMotion();
  return (
    <section id="about" className={`overflow-hidden bg-white px-5 ${compact ? "py-14 md:px-8 md:py-16" : "py-20 md:px-8 md:py-28"}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reduceMotion ? 0 : 0.5 }} className="relative pe-4 pb-5">
          <div className="absolute bottom-0 end-0 h-[78%] w-[78%] border-b border-e border-[#d9ad55]" />
          <div className="relative z-10 overflow-hidden bg-[#e8e9e6]">
            <Image src={siteConfig.aboutImage} alt="Facility management and building maintenance" width={1200} height={950} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]" />
          </div>
          <div className="absolute bottom-0 start-0 z-20 max-w-[250px] bg-[#d9ad55] px-5 py-4 text-[#0a1628] sm:px-7 sm:py-5">
            <p className="font-heading text-lg font-extrabold leading-tight">{siteConfig.brandName}</p><p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.12em]">{siteConfig.contactRole}: {siteConfig.contactPerson}</p>
          </div>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.08 }}>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#637083] md:text-base md:leading-8">{t("summary")}</p>
          <p className="mt-7 text-xs font-semibold text-[#637083]">{siteConfig.contactRole} <span dir="ltr" className="ms-1 text-[#0a1628]">{siteConfig.contactPerson}</span></p>
          <Link href={compact ? "/about" : "/services"} className="mt-7 inline-flex items-center gap-2 border-b border-[#d9ad55] pb-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#0a1628]">{t("link")} <ArrowUpRight size={15} className="text-[#b48329]" /></Link>
        </motion.div>
      </div>
    </section>
  );
}