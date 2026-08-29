import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rudra Dental - Best Dental Clinic in Anakaputhur, Chennai",
    short_name: "Rudra Dental",
    description:
      "Comprehensive dental care including root canal treatment, dental implants, orthodontics, cosmetic dentistry and emergency care in Anakaputhur, Pallavaram, Pammal, Chromepet and Kundrathur, Chennai.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070c",
    theme_color: "#05070c",
    lang: "en-IN",
    categories: ["health", "medical", "lifestyle"],
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      {
        src: "/maskable-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Book an appointment",
        url: "/#contact",
      },
      {
        name: "Call the clinic",
        url: `tel:${SITE.phone}`,
      },
    ],
  };
}
