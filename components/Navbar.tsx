"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { pageRoutes } from "@/data/site-data";
import { clients } from "@/data/clients";
import { siteConfig } from "@/data/site-config";

const observedSections = ["home", "about", "services", "industries", "clients", "location", "contact"];

function Brand({ priority = false, onClick, logoPath }: { priority?: boolean; onClick?: () => void; logoPath: string }) {
  return (
    <Link href="/" aria-label={`${siteConfig.legalName} home`} onClick={onClick} className="flex shrink-0 items-center">
      <Image src={logoPath} alt="Power Wadi Al Ram Building Maintenance W.L.L" width={logoPath === siteConfig.logoArabicPath ? 448 : 668} height={logoPath === siteConfig.logoArabicPath ? 92 : 132} sizes="(max-width: 767px) 202px, 263px" priority={priority} className="h-10 w-auto object-contain md:h-13" />
    </Link>
  );
}

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPath, setDrawerPath] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const open = drawerOpen && drawerPath === pathname;
  const switchLocale = locale === "en" ? "ar" : "en";
  const logoPath = locale === "ar" ? siteConfig.logoArabicPath : siteConfig.logoLightPath;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const elements = observedSections.map((id) => document.getElementById(id)).filter((element): element is HTMLElement => Boolean(element));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.1, 0.25, 0.5] });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusables = [...drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKeys);
    const closeOnHistoryChange = () => setDrawerOpen(false);
    window.addEventListener("popstate", closeOnHistoryChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeys);
      window.removeEventListener("popstate", closeOnHistoryChange);
    };
  }, [open]);

  const changeLocale = () => {
    setDrawerOpen(false);
    router.replace(`${pathname}${window.location.hash}` as typeof pathname, { locale: switchLocale });
  };
  const hrefFor = (key: string, href: string) => key === "clients" && clients.length === 0 ? "/#contact" : href;
  const activeFor = (key: string, href: string) => isHome ? activeSection === (key === "home" ? "home" : href.split("#")[1] || key) : pathname === href;
  const navLinkClass = (active: boolean) => `relative whitespace-nowrap py-2 text-[11px] font-bold uppercase text-white transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-start after:bg-[#e4bd69] after:transition-transform ${active ? "text-[#f0cf80] after:scale-x-100" : "text-white/85 after:scale-x-0 hover:text-white hover:after:scale-x-100"}`;

  return (
    <>
      <div className={`fixed inset-x-0 top-0 z-[60] hidden h-10 bg-[#07111f] text-[11px] text-white/75 transition-transform duration-300 md:block ${scrolled ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-6">
            <a href={siteConfig.phoneLink} className="inline-flex items-center gap-2 hover:text-[#e4bd69]"><Phone size={13} aria-hidden="true" /><bdi dir="ltr">{siteConfig.phone}</bdi></a>
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#e4bd69]"><MessageCircle size={13} aria-hidden="true" /><bdi dir="ltr">{siteConfig.whatsappNumber}</bdi></a>
            <a dir="ltr" href={`mailto:${siteConfig.primaryEmail}`} className="hover:text-[#e4bd69]">{siteConfig.primaryEmail}</a>
          </div>
          <button type="button" aria-label={t("switchLanguage")} onClick={changeLocale} className="font-bold text-white transition hover:text-[#e4bd69]">{locale === "en" ? "عربي" : "EN"}</button>
        </div>
      </div>
      <header className={`fixed inset-x-0 z-50 border-b text-white transition-[top,background-color,box-shadow,border-color] duration-300 ${scrolled ? "top-0 border-white/10 bg-[#0a1628]/95 shadow-[0_8px_24px_rgba(3,10,20,.2)] backdrop-blur-md" : `top-0 border-white/15 shadow-none backdrop-blur-sm md:top-10 ${isHome ? "bg-[#07111f]/40 md:bg-transparent" : "bg-[#0a1628]/95"}`}`}>
        <nav className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 md:min-h-[88px] md:px-8">
          <Brand priority logoPath={logoPath} />
          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            {pageRoutes.map(({ key, href }) => (
              <Link key={key} href={hrefFor(key, href)} aria-current={activeFor(key, href) ? "page" : undefined} className={navLinkClass(activeFor(key, href))}>{t(key)}</Link>
            ))}
            <Link href="/#contact" className="inline-flex min-h-11 items-center bg-[#d9ad55] px-4 text-[10px] font-extrabold uppercase text-[#0a1628] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{t("quote")}</Link>
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <button type="button" aria-label={t("switchLanguage")} onClick={changeLocale} className="text-xs font-bold text-[#e4bd69] md:hidden">{locale === "en" ? "عربي" : "EN"}</button>
            <button ref={menuButtonRef} type="button" aria-label={open ? t("closeMenu") : t("openMenu")} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { if (open) setDrawerOpen(false); else { setDrawerPath(pathname); setDrawerOpen(true); } }} className="grid size-11 place-items-center border border-white/30 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4bd69]"><span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>{open ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </nav>
      </header>
      <div ref={drawerRef} id="mobile-navigation" aria-label={t("mobileNavigation")} aria-modal={open ? "true" : undefined} role={open ? "dialog" : undefined} className={`fixed inset-0 z-70 flex min-h-svh flex-col bg-[#0a1628] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 text-white transition-transform duration-300 ease-out lg:hidden ${open ? "translate-x-0" : `pointer-events-none ${locale === "ar" ? "-translate-x-full" : "translate-x-full"}`}`} inert={!open}>
        <div className="flex min-h-[60px] items-center justify-between border-b border-white/15 pb-4">
          <Brand onClick={() => setDrawerOpen(false)} logoPath={logoPath} />
          <button type="button" onClick={() => setDrawerOpen(false)} aria-label={t("closeMenu")} className="grid size-11 place-items-center border border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4bd69]"><X size={21} /></button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 py-6" aria-label={t("mobileNavigation")}>
          {pageRoutes.map(({ key, href }) => <Link key={key} href={hrefFor(key, href)} onClick={() => setDrawerOpen(false)} aria-current={activeFor(key, href) ? "page" : undefined} className={`border-b border-white/10 py-3 text-lg font-heading font-bold ${activeFor(key, href) ? "text-[#e4bd69]" : "text-white/90"}`}>{t(key)}</Link>)}
        </nav>
        <Link href="/#contact" onClick={() => setDrawerOpen(false)} className="flex min-h-12 items-center justify-center bg-[#d9ad55] px-5 text-sm font-extrabold uppercase text-[#0a1628] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{t("quote")}</Link>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <a href={siteConfig.phoneLink} className="flex min-h-12 items-center justify-center gap-2 border border-white/20 text-sm font-semibold"><Phone size={16} />{t("call")}</a>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 border border-white/20 text-sm font-semibold"><MessageCircle size={16} />{t("whatsapp")}</a>
        </div>
        <button type="button" aria-label={t("switchLanguage")} onClick={changeLocale} className="mt-4 min-h-10 self-start text-sm font-bold text-[#e4bd69]">{locale === "en" ? "عربي" : "EN"}</button>
      </div>
    </>
  );
}