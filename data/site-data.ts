import { Building2, HardHat, House, Hotel, Laptop, Store } from "lucide-react";

export const pageRoutes = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "industries", href: "/industries" },
  { key: "clients", href: "/#clients" },
  { key: "location", href: "/location" },
  { key: "contact", href: "/contact" },
] as const;

export const serviceCards = [
  { key: "manpower", image: "/images/heroes/industries.webp" },
  { key: "facility", image: "/images/heroes/services.webp" },
];

export const industries = [
  { key: "offices", icon: Building2 },
  { key: "retail", icon: Store },
  { key: "homes", icon: House },
  { key: "hospitality", icon: Hotel },
  { key: "construction", icon: HardHat },
  { key: "it", icon: Laptop },
];

export const processSteps = [
  { number: "01", key: "contact" },
  { number: "02", key: "understand" },
  { number: "03", key: "assign" },
  { number: "04", key: "complete" },
  { number: "05", key: "followUp" },
];

export const faqItems = ["services", "location", "contact"] as const;