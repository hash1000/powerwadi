import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.brandName,
    description: "Manpower Supply & Facility Management in Doha, Qatar.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1628",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
