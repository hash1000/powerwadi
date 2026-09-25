import Link from "next/link";
import { Camera, MessageCircle, Phone } from "lucide-react";
import { additionalServices, company, navigation, serviceNames } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="bg-[#07111f] px-5 pb-6 pt-14 text-white md:px-8 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_1fr_1fr]">
        <div>
          <Link href="#home" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center border border-[#d9ad55] font-heading text-2xl font-extrabold text-[#d9ad55]">P</span>
            <span className="font-heading text-sm font-extrabold leading-tight">POWER WADI AL RAM<span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.15em] text-white/55">Building Maintenance W.L.L</span></span>
          </Link>
          <p className="mt-5 max-w-xs text-xs leading-6 text-white/55">{company.tagline}. Contract staffing and responsive maintenance for companies, homes, and shops across Doha.</p>
          <div className="mt-5 flex gap-2">
            <a href={company.whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid size-9 place-items-center border border-white/20 text-white/65 transition hover:border-[#d9ad55] hover:text-[#d9ad55]"><MessageCircle size={15} /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-9 place-items-center border border-white/20 text-white/65 transition hover:border-[#d9ad55] hover:text-[#d9ad55]"><span className="font-heading text-sm font-extrabold leading-none">f</span></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-9 place-items-center border border-white/20 text-white/65 transition hover:border-[#d9ad55] hover:text-[#d9ad55]"><Camera size={15} /></a>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#e4bd69]">Quick Links</h3>
          <div className="space-y-3 text-xs text-white/60">{navigation.map(({ label, href }) => <Link key={label} className="block transition hover:text-white" href={href}>{label}</Link>)}</div>
        </div>
        <div>
          <h3 className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#e4bd69]">Services</h3>
          <div className="space-y-3 text-xs text-white/60">{serviceNames.map((service) => <Link key={service} className="block transition hover:text-white" href="#services">{service}</Link>)}{additionalServices.map((service) => <Link key={service} className="block transition hover:text-white" href="#industries">{service}</Link>)}</div>
        </div>
        <div>
          <h3 className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#e4bd69]">Contact</h3>
          <p className="text-xs leading-6 text-white/60">{company.address}<br /><a href={`mailto:${company.email}`} className="break-all hover:text-white">{company.email}</a></p>
          <a href={company.phoneLink} className="mt-3 flex items-center gap-2 text-xs text-white/60 hover:text-white"><Phone size={13} />{company.phone}</a>
          <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="mt-2 block text-xs text-white/60 hover:text-white">WhatsApp {company.whatsapp}</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 pt-5 text-[9px] font-medium uppercase tracking-[0.1em] text-white/35 sm:flex-row">
        <span>© 2026 Power Wadi Al Ram Building Maintenance W.L.L. All rights reserved.</span><span>C.R. No. {company.crNumber} · Doha, Qatar</span>
      </div>
    </footer>
  );
}