import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const headingFont = Manrope({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL("https://powerwadialram.com"),
  title: "Power Wadi Al Ram | Manpower & Building Maintenance in Qatar",
  description:
    "Power Wadi Al Ram Building Maintenance W.L.L provides contract manpower, on-demand cleaning, and building maintenance across Doha, Qatar.",
  openGraph: {
    title: "Power Wadi Al Ram Building Maintenance W.L.L",
    description: "Manpower & Building Maintenance, On Your Schedule",
    url: "https://powerwadialram.com",
    siteName: "Power Wadi Al Ram",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}</body>
    </html>
  );
}
