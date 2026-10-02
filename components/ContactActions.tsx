"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site-config";

export function ContactActions() {
  const t = useTranslations("contactActions");
  return (
    <>
      <motion.a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label={t("floatingLabel")}
        title={t("floatingLabel")}
        className="whatsapp-pulse fixed right-4 z-[60] grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,.24)] transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] bottom-[calc(5rem+env(safe-area-inset-bottom)+1rem)] md:bottom-6 md:right-6"
        whileTap={{ scale: 0.94 }}
      >
        <MessageCircle size={27} strokeWidth={2.2} aria-hidden="true" />
      </motion.a>
      <nav aria-label={t("mobileActionsLabel")} className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-[#0a1628] pb-[env(safe-area-inset-bottom)] text-white shadow-[0_-8px_25px_rgba(0,0,0,.2)] md:hidden">
        <a href={siteConfig.phoneLink} className="flex min-h-14 flex-col items-center justify-center gap-1 px-1 text-[10px] font-bold focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#d9ad55]">
          <Phone size={17} aria-hidden="true" />{t("call")}
        </a>
        <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex min-h-14 flex-col items-center justify-center gap-1 border-x border-white/10 px-1 text-[10px] font-bold text-[#72e29a] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#d9ad55]">
          <MessageCircle size={17} aria-hidden="true" />{t("whatsapp")}
        </a>
        <Link href="/contact" className="flex min-h-14 flex-col items-center justify-center gap-1 px-1 text-[10px] font-bold focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#d9ad55]">
          <Send size={16} aria-hidden="true" />{t("quote")}
        </Link>
      </nav>
    </>
  );
}
