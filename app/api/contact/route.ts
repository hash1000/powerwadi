import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/lib/email-template";
import { contactSchema } from "@/lib/contact-schema";
import { company } from "@/data/site-data";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ message: result.error.issues[0]?.message ?? "Please check the form fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ message: "Email service is not configured" }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Power Wadi Al Ram <onboarding@resend.dev>",
      to,
      replyTo: result.data.email,
      subject: `Website enquiry: ${result.data.subject}`,
      react: ContactEmail(result.data),
    });

    if (error) return NextResponse.json({ message: "Unable to send your message right now" }, { status: 502 });
    return NextResponse.json({ success: true, message: `Thanks for contacting ${company.shortName}` });
  } catch {
    return NextResponse.json({ message: "Unable to send your message right now" }, { status: 500 });
  }
}