"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { company } from "@/data/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function WelcomeSection() {
  return (
    <section id="about" className="overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="relative pr-4 pb-5">
          <div className="absolute bottom-0 right-0 h-[78%] w-[78%] border-b border-r border-[#d9ad55]" />
          <div className="relative z-10 overflow-hidden bg-[#e8e9e6]">
            <Image src={company.aboutImage} alt="A clean, well-maintained workspace" width={1200} height={950} className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]" />
          </div>
          <div className="absolute bottom-0 left-0 z-20 max-w-[230px] bg-[#d9ad55] px-5 py-4 text-[#0a1628] sm:px-7 sm:py-5">
            <p className="font-heading text-2xl font-extrabold leading-tight">ON-CALL</p><p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.12em]">7 days a week</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1 }}>
          <SectionHeading eyebrow="Welcome to Power Wadi Al Ram" title="Reliable People, Delivered When You Need Them" />
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#637083] md:text-base md:leading-8">{company.name} supports businesses across Qatar with dependable contract manpower and building maintenance. We work with offices, retail, construction sites, and hotels to keep their teams and spaces ready for the day.</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#637083] md:text-base md:leading-8">Need a single office clean on a Sunday, a quick home repair, or a technician today? Our on-demand services are built around real schedules, including weekends when other providers may be closed.</p>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold text-[#0a1628]">
            <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#b48329]" />Ongoing staffing contracts</span>
            <span className="inline-flex items-center gap-2"><Check size={15} className="text-[#b48329]" />Single on-demand jobs</span>
          </div>
          <p className="mt-7 text-xs font-semibold text-[#637083]">General Manager <span className="ml-1 text-[#0a1628]">{company.generalManager}</span></p>
          <a href="#services" className="mt-7 inline-flex items-center gap-2 border-b border-[#d9ad55] pb-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#0a1628]">Explore what we do <ArrowUpRight size={15} className="text-[#b48329]" /></a>
        </motion.div>
      </div>
    </section>
  );
}