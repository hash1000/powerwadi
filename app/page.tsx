import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { CTABanner } from "@/components/CTABanner";
import { FeaturesRow } from "@/components/FeaturesRow";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
export default function Home() { return <><Navbar /><main><Hero /><WelcomeSection /><ServicesGrid /><IndustriesGrid /><CTABanner /><FeaturesRow /><ContactSection /></main><Footer /><Toaster position="bottom-right" richColors /></>; }
