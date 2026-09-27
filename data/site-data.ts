import { BadgeDollarSign, Building2, CalendarDays, Clock3, HardHat, House, Laptop, ShieldCheck, Store, Hotel } from "lucide-react";

const whatsappMessage = "Hello, I found your website and need help with...";

export const company = {
  crNumber: "172417",
  phone: "+974 7701 5175",
  phoneLink: "tel:+97477015175",
  whatsapp: "+974 3051 2196",
  whatsappLink: `https://wa.me/97430512196?text=${encodeURIComponent(whatsappMessage)}`,
  email: "powerwadialram2022@gmail.com",
  // TODO(client): Replace central Doha placeholder coordinates with the confirmed office location.
  mapCoordinates: "25.2854,51.5310",
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

export const serviceCards = [
  { key: "manpower", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85" },
  { key: "maintenance", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1100&q=85" },
  { key: "cleaning", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=85" },
  { key: "ac", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=85" },
  { key: "plumbing", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1100&q=85" },
  { key: "electricalPainting", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1100&q=85" },
];

export const pageRoutes = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "industries", href: "/industries" },
  { key: "contact", href: "/contact" },
] as const;

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