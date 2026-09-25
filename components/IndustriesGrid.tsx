"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function IndustriesGrid() {
  return (
    <section id="industries" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Who we support" title="People and places, across Qatar." />
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#637083]">
            From ongoing workforce needs to a one-off weekend callout, our services fit the way each space operates.
          </p>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4 border-b border-[#e5e7e4] py-6 first:pt-0 sm:py-7"
              >
                <span className="grid size-11 shrink-0 place-items-center border border-[#d9ad55] text-[#8e671f]">
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-base font-extrabold text-[#0a1628]">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#637083]">
                    {industry.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}