import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components";
import type { ContactFormData } from "@/lib/contact-schema";

export function ContactEmail(
  { name, email, subject, phone, message }: ContactFormData,
  brandName: string,
  labels: { name: string; email: string; subject: string; phone: string; message: string },
  preview: string,
  locale: "en" | "ar",
) {
  const isArabic = locale === "ar";
  return (
    <Html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <Head />
      <Preview>{preview.replace("{name}", name)}</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f5f2", padding: "40px 0", direction: isArabic ? "rtl" : "ltr", textAlign: isArabic ? "right" : "left" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "36px", maxWidth: "600px" }}>
          <Heading style={{ color: "#0a1628" }}>{brandName}</Heading>
          <Section>
            <Text><strong>{labels.name}:</strong> {name}</Text>
            <Text><strong>{labels.email}:</strong> {email}</Text>
            <Text><strong>{labels.phone}:</strong> {phone}</Text>
            <Text><strong>{labels.subject}:</strong> {subject}</Text>
            <Text><strong>{labels.message}:</strong> {message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}