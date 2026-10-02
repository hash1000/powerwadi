import Image from "next/image";
import { useTranslations } from "next-intl";
import { clients } from "@/data/clients";

export function ClientsSection() {
  const t = useTranslations("clients");
  if (clients.length === 0) return null;

  return (
    <section id="clients" className="bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#a77a25]">{t("eyebrow")}</p>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#0a1628] md:text-5xl">{t("title")}</h2>
          <p className="mt-4 text-sm leading-6 text-[#637083]">{t("subtitle")}</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <li key={client.name} className="group grid min-h-32 place-items-center border border-[#e5e7e4] bg-[#fcfcfb] p-5 transition-colors hover:bg-white motion-safe:animate-[page-enter_400ms_ease-out_both]">
              {client.url ? (
                <a href={client.url} target="_blank" rel="noopener noreferrer" aria-label={client.name} className="grid h-full w-full place-items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b48329]">
                  <Image src={client.logo} alt={`${client.name} logo`} width={180} height={80} className="h-12 w-full object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
                </a>
              ) : (
                <Image src={client.logo} alt={`${client.name} logo`} width={180} height={80} className="h-12 w-full object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
