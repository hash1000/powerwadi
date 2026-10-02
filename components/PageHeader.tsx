import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function PageHeader({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image: string }) {
  const t = useTranslations("nav");
  return (
    <section className="relative isolate flex min-h-[390px] items-end overflow-hidden bg-[#0a1628] px-5 pb-14 pt-36 text-white md:min-h-[46vh] md:px-8 md:pb-16 md:pt-40">
      <Image src={image} alt="" fill sizes="100vw" quality={75} priority className="-z-20 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,13,24,.9)_0%,rgba(5,13,24,.76)_58%,rgba(5,13,24,.64)_100%)]" />
      <div className="mx-auto w-full max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-xs font-semibold text-white/70">
          <Link href="/" className="transition hover:text-white">{t("home")}</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-[#e4bd69]">{eyebrow}</span>
        </nav>
        <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#e4bd69]">{eyebrow}</p>
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.08] md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">{description}</p>
        <div className="mt-7 h-px w-20 bg-[#d9ad55]" />
      </div>
    </section>
  );
}
