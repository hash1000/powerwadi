import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/lib/email-template";
import { createContactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    const requestedLocale = request.headers.get("accept-language")?.toLowerCase().includes("ar") ? "ar" : "en";
    const messages = (await import(`@/messages/${requestedLocale}.json`)).default;
    return NextResponse.json({ message: messages.contact.validation.invalidRequest }, { status: 400 });
  }

  const requestedLocale = typeof body === "object" && body !== null && "locale" in body && body.locale === "ar" ? "ar" : "en";
  const messages = (await import(`@/messages/${requestedLocale}.json`)).default;
  const validation = messages.contact.validation;
  const result = createContactSchema(validation).safeParse(body);
  if (!result.success) {
    return NextResponse.json({ message: result.error.issues[0]?.message ?? validation.checkFields }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ message: messages.contact.api.notConfigured }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Power Wadi Al Ram <onboarding@resend.dev>",
      to,
      replyTo: result.data.email,
      subject: messages.contact.emailSubject.replace("{subject}", result.data.subject),
      react: ContactEmail(result.data, messages.brand.legalName, messages.contact.fields, messages.contact.emailPreview, requestedLocale),
    });

    if (error) return NextResponse.json({ message: messages.contact.api.sendFailed }, { status: 502 });
    return NextResponse.json({ success: true, message: messages.contact.toast.successDescription });
  } catch {
    return NextResponse.json({ message: messages.contact.api.sendFailed }, { status: 500 });
  }
}