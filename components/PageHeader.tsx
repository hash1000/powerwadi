export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a1628] px-5 py-16 text-white md:px-8 md:py-20">
      <div aria-hidden="true" className="absolute inset-y-0 end-0 -z-10 w-1/3 bg-[linear-gradient(135deg,transparent_0%,rgba(217,173,85,.08)_100%)]" />
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#e4bd69]">{eyebrow}</p>
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.08] md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">{description}</p>
        <div className="mt-7 h-px w-20 bg-[#d9ad55]" />
      </div>
    </section>
  );
}
