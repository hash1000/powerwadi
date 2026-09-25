export function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`mb-4 text-[9px] font-extrabold uppercase tracking-[0.2em] ${light ? "text-[#e4bd69]" : "text-[#a77a25]"}`}>{eyebrow}</p>
      <h2 className={`font-heading text-3xl font-extrabold leading-[1.08] md:text-5xl ${light ? "text-white" : "text-[#0a1628]"}`}>{title}</h2>
    </div>
  );
}