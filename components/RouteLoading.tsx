"use client";

import { useTranslations } from "next-intl";

export function RouteLoading() {
  const t = useTranslations("ui");
  return (
    <main role="status" aria-label={t("loading")} className="min-h-screen bg-[#f4f5f2]">
      <div className="bg-[#07111f] px-5 py-3"><div className="mx-auto h-3 max-w-7xl animate-pulse bg-white/10" /></div>
      <div className="bg-[#0a1628] px-5 py-16 md:px-8 md:py-20"><div className="mx-auto max-w-7xl animate-pulse"><div className="h-3 w-32 bg-[#d9ad55]/35" /><div className="mt-6 h-12 max-w-2xl bg-white/10" /><div className="mt-4 h-4 max-w-xl bg-white/10" /></div></div>
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-3 md:px-8">{[0, 1, 2].map((item) => <div key={item} className="h-52 animate-pulse bg-white" />)}</div>
      <span className="sr-only">{t("loading")}</span>
    </main>
  );
}
