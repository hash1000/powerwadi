import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(254),
  subject: z.string().trim().min(3, "Please add a subject").max(150),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  message: z.string().trim().min(10, "Tell us a little more").max(5000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
