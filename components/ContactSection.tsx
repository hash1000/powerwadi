"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Send, Clock3 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/site-data";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message ?? "Unable to send your message right now");
      toast.success("Message received", { description: "Our team will be in touch shortly." });
      reset();
    } catch (error) {
      toast.error("Message not sent", { description: error instanceof Error ? error.message : `Please email ${company.email} directly.` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#f4f5f2] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Get in touch" title="Leave a Message" />
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#637083]">Tell us what you need, whether it is a staffing contract or a single job. We will get back to you as soon as we can.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-x-5 gap-y-4 sm:grid-cols-2" noValidate>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071]">Name<Input {...register("name")} autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} />{errors.name && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.name.message}</span>}</label>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071]">Email<Input {...register("email")} type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!errors.email} />{errors.email && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.email.message}</span>}</label>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071]">Subject<Input {...register("subject")} placeholder="How can we help?" aria-invalid={!!errors.subject} />{errors.subject && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.subject.message}</span>}</label>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071]">Phone<Input {...register("phone")} type="tel" autoComplete="tel" placeholder="+974" aria-invalid={!!errors.phone} />{errors.phone && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.phone.message}</span>}</label>
            <label className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#536071] sm:col-span-2">Message<Textarea {...register("message")} placeholder="Tell us about your requirements" aria-invalid={!!errors.message} />{errors.message && <span className="mt-1 block text-xs normal-case tracking-normal text-red-700">{errors.message.message}</span>}</label>
            <Button type="submit" disabled={loading} className="mt-1 w-full sm:w-fit">{loading ? "Sending..." : "Send Message"}<Send size={14} /></Button>
          </form>
        </div>
        <aside className="bg-[#0a1628] p-7 text-white md:p-9">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.19em] text-[#e4bd69]">Power Wadi Al Ram</p>
          <h3 className="mt-3 font-heading text-2xl font-extrabold">Contact Info</h3>
          <div className="mt-8 space-y-6">
            <a href="https://maps.google.com/?q=Doha%2C+Qatar" target="_blank" rel="noreferrer" className="flex gap-4 text-sm leading-6 text-white/75 hover:text-white"><MapPin size={18} className="mt-1 shrink-0 text-[#e4bd69]" /><span>{company.address}</span></a>
            <a href={`mailto:${company.email}`} className="flex gap-4 break-all text-sm text-white/75 hover:text-white"><Mail size={18} className="shrink-0 text-[#e4bd69]" /><span>{company.email}</span></a>
            <a href={company.phoneLink} className="flex gap-4 text-sm text-white/75 hover:text-white"><Phone size={18} className="shrink-0 text-[#e4bd69]" /><span>Call: {company.phone}</span></a>
            <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="flex gap-4 text-sm text-white/75 hover:text-white"><Send size={18} className="shrink-0 text-[#e4bd69]" /><span>WhatsApp: {company.whatsapp}</span></a>
          </div>
          <div className="mt-9 border-t border-white/15 pt-6">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#e4bd69]">Office Hours</p>
            <p className="mt-3 flex gap-3 text-sm leading-6 text-white/75"><Clock3 size={17} className="mt-0.5 shrink-0 text-[#e4bd69]" />On-call availability, 7 days a week, including Sundays and weekends.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}