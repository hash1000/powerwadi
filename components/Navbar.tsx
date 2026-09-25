"use client";

import Link from "next/link";
import { useState } from "react";
import { Camera, Menu, Phone, X } from "lucide-react";
import { company, navigation } from "@/data/site-data";

function Brand() {
  return (
    <Link href="#home" aria-label="Power Wadi Al Ram home" className="flex min-w-0 items-center gap-3">
      <span className="grid size-11 shrink-0 place-items-center border border-[#d9ad55] font-heading text-2xl font-extrabold text-[#d9ad55]">P</span>
      <span className="min-w-0 font-heading text-sm font-extrabold leading-tight text-white sm:text-base">
        POWER WADI AL RAM
        <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.15em] text-white/55">Building Maintenance W.L.L</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#07111f] text-[11px] text-white/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-2.5 md:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            <a className="inline-flex items-center gap-2 hover:text-[#d9ad55]" href={company.phoneLink}><Phone size={13} />{company.phone}</a>
            <a className="hidden hover:text-[#d9ad55] sm:inline" href={company.whatsappLink} target="_blank" rel="noreferrer">WhatsApp {company.whatsapp}</a>
            <a className="hidden hover:text-[#d9ad55] lg:inline" href={`mailto:${company.email}`}>{company.email}</a>
          </div>
          <div className="flex items-center gap-3 text-[#d9ad55]">
            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer"><span className="font-heading text-sm font-extrabold leading-none">f</span></a>
            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><Camera size={15} /></a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a1628]/95 text-white shadow-[0_12px_36px_rgba(3,10,20,.16)] backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Brand />
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map(({ label, href }) => <Link key={label} href={href} className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/75 transition hover:text-[#d9ad55]">{label}</Link>)}
            <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#d9ad55] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0a1628] transition hover:bg-white">Get a Quote</a>
          </div>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-11 place-items-center border border-white/20 lg:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </nav>
        {open && <div className="border-t border-white/10 bg-[#0a1628] px-5 py-4 lg:hidden">
          {navigation.map(({ label, href }) => <Link onClick={() => setOpen(false)} key={label} href={href} className="block border-b border-white/10 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/75">{label}</Link>)}
          <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="mt-4 block bg-[#d9ad55] px-5 py-3 text-center text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0a1628]">Get a Quote</a>
        </div>}
      </header>
    </>
  );
}