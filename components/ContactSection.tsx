"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Send, Clock3 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/site-data";
import { createContactSchema, type ContactFormData } from "@/lib/contact-schema";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("contact");
  const locale = useLocale();
  const schema = createContactSchema({
    name: t("validation.name"),
    nameTooLong: t("validation.nameTooLong"),
    email: t("validation.email"),
    emailTooLong: t("validation.emailTooLong"),
    subject: t("validation.subject"),
    subjectTooLong: t("validation.subjectTooLong"),
    phone: t("validation.phone"),
    phoneTooLong: t("validation.phoneTooLong"),
    message: t("validation.message"),
    messageTooLong: t("validation.messageTooLong"),
  });
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    let serverError: string | undefined;
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, locale }) });
      const result = await response.json();
      if (!response.ok) {
        serverError = result.message ?? t("api.sendFailed");
        throw new Error(serverError);
      }
      toast.success(t("toast.successTitle"), { description: t("toast.successDescription") });
      reset();
    } catch {
      toast.error(t("toast.errorTitle"), { description: serverError ?? t("toast.directEmail", { email: company.email }) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#f4f5f2] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#637083]">{t("intro")}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-x-5 gap-y-4 sm:grid-cols-2" noValidate>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071]">{t("fields.name")}<Input {...register("name")} autoComplete="name" placeholder={t("placeholders.name")} aria-invalid={!!errors.name} />{errors.name && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.name.message}</span>}</label>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071]">{t("fields.email")}<Input dir="ltr" {...register("email")} type="email" autoComplete="email" placeholder={t("placeholders.email")} aria-invalid={!!errors.email} />{errors.email && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.email.message}</span>}</label>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071]">{t("fields.subject")}<Input {...register("subject")} placeholder={t("placeholders.subject")} aria-invalid={!!errors.subject} />{errors.subject && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.subject.message}</span>}</label>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071]">{t("fields.phone")}<Input dir="ltr" {...register("phone")} type="tel" autoComplete="tel" placeholder={t("placeholders.phone")} aria-invalid={!!errors.phone} />{errors.phone && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.phone.message}</span>}</label>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071] sm:col-span-2">{t("fields.message")}<Textarea {...register("message")} placeholder={t("placeholders.message")} aria-invalid={!!errors.message} />{errors.message && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.message.message}</span>}</label>
            <Button type="submit" disabled={loading} className="mt-1 w-full sm:w-fit">{loading ? t("sending") : t("submit")}<Send size={14} /></Button>
          </form>
        </div>
        <aside className="bg-[#0a1628] p-7 text-white md:p-9">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.19em] text-[#e4bd69]">Power Wadi Al Ram</p>
          <h3 className="mt-3 font-heading text-2xl font-extrabold">{t("infoTitle")}</h3>
          <div className="mt-8 space-y-6">
            <a href="https://maps.google.com/?q=Doha%2C+Qatar" target="_blank" rel="noreferrer" className="flex gap-4 text-sm leading-6 text-white/75 hover:text-white"><MapPin size={18} className="mt-1 shrink-0 text-[#e4bd69]" /><span>{t("address")}</span></a>
            <a href={`mailto:${company.email}`} className="flex gap-4 break-all text-sm text-white/75 hover:text-white"><Mail size={18} className="shrink-0 text-[#e4bd69]" /><bdi dir="ltr">{company.email}</bdi></a>
            <a href={company.phoneLink} className="flex gap-4 text-sm text-white/75 hover:text-white"><Phone size={18} className="shrink-0 text-[#e4bd69]" /><span>{t("call")}: <bdi dir="ltr">{company.phone}</bdi></span></a>
            <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="flex gap-4 text-sm text-white/75 hover:text-white"><Send size={18} className="shrink-0 text-[#e4bd69]" /><span>{t("whatsapp")}: <bdi dir="ltr">{company.whatsapp}</bdi></span></a>
          </div>
          <div className="mt-9 border-t border-white/15 pt-6">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#e4bd69]">{t("hoursTitle")}</p>
            <p className="mt-3 flex gap-3 text-sm leading-6 text-white/75"><Clock3 size={17} className="mt-0.5 shrink-0 text-[#e4bd69]" />{t("hours")}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}