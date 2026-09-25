"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/site-data";

export function CTABanner() {
  const bannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={bannerRef} className="relative isolate min-h-[380px] overflow-hidden bg-[#0a1628] md:min-h-[440px]">
      <motion.div aria-hidden="true" className="absolute inset-0 -z-10" style={{ y: imageY }}>
        <Image src={company.bannerImage} alt="" fill sizes="100vw" className="scale-[1.14] object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[#07111f]/80" />
      <div className="mx-auto flex min-h-[380px] max-w-7xl items-center px-5 py-20 md:min-h-[440px] md:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.21em] text-[#e4bd69]">A schedule that works for you</p>
          <h2 className="font-heading text-4xl font-extrabold leading-[1.08] text-white md:text-6xl">Manpower and Maintenance Solutions Built Around Your Schedule.</h2>
          <Link href={company.whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-[#d9ad55] pb-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#e4bd69]">Talk to our team <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}