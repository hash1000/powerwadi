import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components";
import type { ContactFormData } from "@/lib/contact-schema";
import { company } from "@/data/site-data";

export function ContactEmail({ name, email, subject, phone, message }: ContactFormData) {
  return (
    <Html>
      <Head />
      <Preview>New website enquiry from {name}</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f5f2", padding: "40px 0" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "36px", maxWidth: "600px" }}>
          <Heading style={{ color: "#0a1628" }}>{company.shortName} enquiry</Heading>
          <Section>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Phone:</strong> {phone}</Text>
            <Text><strong>Subject:</strong> {subject}</Text>
            <Text><strong>Message:</strong> {message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}