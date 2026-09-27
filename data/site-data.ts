import { BadgeDollarSign, Building2, CalendarDays, Clock3, HardHat, House, Laptop, ShieldCheck, Store, Hotel } from "lucide-react";

const whatsappMessage = "Hello, I found your website and need help with...";

export const company = {
  crNumber: "172417",
  phone: "+974 7701 5175",
  phoneLink: "tel:+97477015175",
  whatsapp: "+974 3051 2196",
  whatsappLink: `https://wa.me/97430512196?text=${encodeURIComponent(whatsappMessage)}`,
  email: "powerwadialram2022@gmail.com",
  heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90",
  aboutImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
  bannerImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85",
};

export const trustItems = [
  { key: "sameDay", icon: Clock3 },
  { key: "vetted", icon: ShieldCheck },
  { key: "weekends", icon: CalendarDays },
  { key: "pricing", icon: BadgeDollarSign },
];

export const processSteps = [
  { number: "01", key: "contact" },
  { number: "02", key: "understand" },
  { number: "03", key: "assign" },
  { number: "04", key: "complete" },
  { number: "05", key: "followUp" },
];

export const testimonials = [
  { key: "reviewOne", placeholder: true },
  { key: "reviewTwo", placeholder: true },
  { key: "reviewThree", placeholder: true },
];

export const faqItems = [
  { key: "pricing" },
  { key: "response" },
  { key: "weekends" },
  { key: "coverage" },
  { key: "customers" },
];

// TODO(client): Replace these editable placeholders with verified company figures.
export const editableStats = {
  yearsInBusiness: "[Add verified years in business]",
  workersOnRoster: "[Add verified workers on roster]",
  jobsCompleted: "[Add verified jobs completed]",
};

export const industries = [
  { key: "offices", icon: Building2 },
  { key: "retail", icon: Store },
  { key: "homes", icon: House },
  { key: "hospitality", icon: Hotel },
  { key: "construction", icon: HardHat },
  { key: "it", icon: Laptop },
];

export const features = [
  { number: "01", key: "flexibility" },
  { number: "02", key: "workers" },
  { number: "03", key: "response" },
  { number: "04", key: "pricing" },
];