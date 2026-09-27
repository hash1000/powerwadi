import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("ui");
  return (
    <main className="grid min-h-[70vh] place-items-center bg-[#f4f5f2] px-5 py-16 text-center">
      <div className="max-w-xl">
        <p className="font-heading text-7xl font-extrabold text-[#d9ad55]">404</p>
        <h1 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1628]">{t("notFoundTitle")}</h1>
        <p className="mt-4 text-sm leading-7 text-[#637083]">{t("notFoundDescription")}</p>
        <Link href="/" className="mt-7 inline-flex bg-[#0a1628] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#172c47]">{t("homeLink")}</Link>
      </div>
    </main>
  );
}
