import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const headingFont = Manrope({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Asteria Contracting & Trading | Qatar",
  description: "Asteria Contracting & Trading delivers people, projects and procurement solutions across Qatar.",
  openGraph: { title: "Asteria Contracting & Trading", description: "Built for the work that matters.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}</body>
    </html>
  );
}
