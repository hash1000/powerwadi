"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="home-hero relative isolate flex overflow-hidden bg-[#0a1628] text-white">
      <Image src={siteConfig.heroImage} alt="Manpower and facility management services in Doha" fill priority sizes="100vw" quality={75} className={`hero-photo object-cover object-center ${reduceMotion ? "" : "hero-photo-motion"}`} />
      <div
        className={`absolute inset-0 ${locale === "ar" ? "bg-[linear-gradient(270deg,rgba(5,13,24,.94)_0%,rgba(5,13,24,.77)_49%,rgba(5,13,24,.27)_100%)]" : "bg-[linear-gradient(90deg,rgba(5,13,24,.94)_0%,rgba(5,13,24,.77)_49%,rgba(5,13,24,.27)_100%)]"}`}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,13,24,.48),transparent_45%)]"
      />
      <div className="relative mx-auto flex min-h-[100vh] min-h-[100svh] w-full max-w-7xl items-center px-5 pb-48 pt-32 md:px-8 md:pb-36 md:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.48, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase text-[#e7c475] md:mb-6 md:text-xs">
            <span className="h-px w-9 bg-[#d9ad55]" />{t("tagline")}</p>
          <h1 className="max-w-5xl font-heading text-[clamp(2.5rem,5.8vw,5rem)] font-extrabold leading-[1.03]">
            <span className="whitespace-pre-line">{t("headline")}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:mt-7 md:text-lg md:leading-8">
            {t("description")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#services"
              className="inline-flex min-h-12 items-center gap-3 bg-[#d9ad55] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#0a1628] transition hover:bg-white"
            >
              {t("servicesCta")} <ArrowDown size={15} />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center gap-3 border border-white/55 px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white transition hover:border-[#d9ad55] hover:bg-white/10"
            >
              {t("quoteCta")} <ArrowRight size={15} className="text-[#e4bd69]" />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-10 px-5 md:bottom-9 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-2 border border-white/15 bg-[#07111f]/55 p-3 text-xs text-white/90 shadow-lg backdrop-blur-md sm:grid-cols-2 sm:gap-3 sm:p-4 lg:grid-cols-4">
          <span className="flex items-center gap-2"><MapPin size={15} className="shrink-0 text-[#e4bd69]" />{siteConfig.address}</span>
          <a href={siteConfig.phoneLink} className="flex items-center gap-2 hover:text-[#e4bd69]"><Phone size={15} className="shrink-0 text-[#e4bd69]" /><bdi dir="ltr">{siteConfig.phone}</bdi></a>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#e4bd69]"><MessageCircle size={15} className="shrink-0 text-[#e4bd69]" />{t("whatsappLabel")}</a>
          <a dir="ltr" href={`mailto:${siteConfig.primaryEmail}`} className="flex min-w-0 items-center gap-2 break-all hover:text-[#e4bd69]"><Mail size={15} className="shrink-0 text-[#e4bd69]" />{siteConfig.primaryEmail}</a>
        </div>
      </div>
      <Link href="/#about" aria-label={t("scrollDown")} className="absolute bottom-4 start-1/2 z-10 hidden -translate-x-1/2 text-white/75 transition hover:text-white md:grid">
        <ArrowDown className="motion-safe:animate-bounce" size={19} />
      </Link>
      <div className="absolute end-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("whatsappLabel")}
          className="grid size-11 place-items-center border border-white/25 bg-[#0a1628]/65 text-white backdrop-blur transition hover:bg-[#d9ad55] hover:text-[#0a1628]"
        >
          <MessageCircle size={18} />
        </a>
        <a
          href={siteConfig.phoneLink}
          aria-label={t("callLabel")}
          className="grid size-11 place-items-center border border-white/25 bg-[#0a1628]/65 text-white backdrop-blur transition hover:bg-[#d9ad55] hover:text-[#0a1628]"
        >
          <Phone size={18} />
        </a>
      </div>
    </section>
  );
}