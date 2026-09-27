import { z } from "zod";

export type ContactValidationMessages = {
  name: string;
  nameTooLong: string;
  email: string;
  emailTooLong: string;
  subject: string;
  subjectTooLong: string;
  phone: string;
  phoneTooLong: string;
  message: string;
  messageTooLong: string;
};

export function createContactSchema(messages: ContactValidationMessages) {
  return z.object({
    name: z.string({ error: messages.name }).trim().min(2, messages.name).max(100, messages.nameTooLong),
    email: z.string({ error: messages.email }).trim().email(messages.email).max(254, messages.emailTooLong),
    subject: z.string({ error: messages.subject }).trim().min(3, messages.subject).max(150, messages.subjectTooLong),
    phone: z.string({ error: messages.phone }).trim().min(7, messages.phone).max(30, messages.phoneTooLong),
    message: z.string({ error: messages.message }).trim().min(10, messages.message).max(5000, messages.messageTooLong),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
