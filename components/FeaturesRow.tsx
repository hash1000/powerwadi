"use client";
import { motion } from "framer-motion";
import { features } from "@/data/site-data";
import { useTranslations } from "next-intl";
export function FeaturesRow() {
	const t = useTranslations("features");
	return (
		<section className="bg-[#d9ad55] px-5 py-16 md:px-8 md:py-20">
			<div className="mx-auto max-w-7xl">
				<div className="mb-11 max-w-2xl">
					<p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#604719]">{t("eyebrow")}</p>
					<h2 className="font-heading text-3xl font-extrabold leading-tight text-[#0a1628] md:text-5xl">{t("title")}</h2>
				</div>
				<div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, index) => {
						const item = t.raw(`items.${feature.key}`) as { title: string; description: string };
						return (
							<motion.article key={feature.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="border-t border-[#755723]/35 pt-5">
								<span dir="ltr" className="font-heading text-3xl font-extrabold text-[#0a1628]/40">{feature.number}</span>
								<h3 className="mt-4 font-heading text-lg font-extrabold leading-snug text-[#0a1628]">{item.title}</h3>
								<p className="mt-2 text-xs leading-5 text-[#493817]">{item.description}</p>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
}