"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Camera,
  MessageCircle,
  Phone,
} from "lucide-react";
import { company } from "@/data/site-data";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  return (
    <section id="home" className="relative isolate min-h-[690px] overflow-hidden bg-[#0a1628] text-white md:min-h-[760px]">
      <Image
        src={company.heroImage}
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className={`absolute inset-0 ${locale === "ar" ? "bg-[linear-gradient(270deg,rgba(5,13,24,.94)_0%,rgba(5,13,24,.77)_49%,rgba(5,13,24,.27)_100%)]" : "bg-[linear-gradient(90deg,rgba(5,13,24,.94)_0%,rgba(5,13,24,.77)_49%,rgba(5,13,24,.27)_100%)]"}`}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,13,24,.48),transparent_45%)]"
      />
      <div className="relative mx-auto flex min-h-[690px] max-w-7xl items-center px-5 pb-24 pt-20 md:min-h-[760px] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#e7c475]">
            <span className="h-px w-9 bg-[#d9ad55]" />{t("tagline")}</p>
          <h1 className="max-w-3xl font-heading text-5xl font-extrabold leading-[1.02] md:text-7xl">
            <span className="whitespace-pre-line">{t("headline")}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
            {t("description")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center gap-3 bg-[#d9ad55] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#0a1628] transition hover:bg-white"
            >
              {t("servicesCta")} <ArrowDown size={15} />
            </Link>
            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-3 border border-white/55 px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white transition hover:border-[#d9ad55] hover:bg-white/10"
            >
              {t("quoteCta")} <ArrowRight size={15} className="text-[#e4bd69]" />
            </a>
          </div>
        </motion.div>
      </div>
      <div
        className="absolute bottom-7 start-5 z-10 flex items-center gap-4 border-s-2 border-[#d9ad55] bg-[#0a1628]/90 px-5 py-4 md:bottom-10 md:start-[max(2rem,calc((100vw-80rem)/2))]"
      >
        <span dir="ltr" className="font-heading text-3xl font-extrabold text-[#e4bd69]">{t("badgeNumber")}</span>
        <span className="max-w-32 whitespace-pre-line text-[9px] font-bold uppercase leading-4 tracking-[0.13em] text-white/75">
          {t("badgeText")}
        </span>
      </div>
      <div className="absolute end-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
        <a
          href={company.whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label={t("whatsappLabel")}
          className="grid size-11 place-items-center border border-white/25 bg-[#0a1628]/65 text-white backdrop-blur transition hover:bg-[#d9ad55] hover:text-[#0a1628]"
        >
          <MessageCircle size={18} />
        </a>
        <a
          href={company.phoneLink}
          aria-label={t("callLabel")}
          className="grid size-11 place-items-center border border-white/25 bg-[#0a1628]/65 text-white backdrop-blur transition hover:bg-[#d9ad55] hover:text-[#0a1628]"
        >
          <Phone size={18} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="grid size-11 place-items-center border border-white/25 bg-[#0a1628]/65 text-white backdrop-blur transition hover:bg-[#d9ad55] hover:text-[#0a1628]"
        >
          <span className="font-heading text-xl font-extrabold">f</span>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="grid size-11 place-items-center border border-white/25 bg-[#0a1628]/65 text-white backdrop-blur transition hover:bg-[#d9ad55] hover:text-[#0a1628]"
        >
          <Camera size={18} />
        </a>
      </div>
    </section>
  );
}