import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Cinzel } from "next/font/google";
import Script from "next/script";
import { SITE } from "@/lib/site";
import { SEO_KEYWORDS } from "@/lib/keywords";
import {
  dentistSchema,
  faqSchema,
  websiteSchema,
  organizationSchema,
  breadcrumbSchema,
  blogSchema,
  videoSchema,
  gallerySchema,
} from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
});

const TITLE =
  "Rudra Dental - Best Dental Clinic in Anakaputhur, Pallavaram, Pammal, Chromepet, Kundrathur, Chennai";

const DESCRIPTION =
  "Rudra Dental, the best dental clinic in Anakaputhur, Pallavaram, Pammal, Chromepet, Kundrathur, and surrounding areas, offers comprehensive dental care including root canal treatment, dental implants, orthodontic treatment, braces, Invisalign, cosmetic dentistry, teeth whitening, veneers, crowns, bridges, gum surgery, dentures, pediatric dentistry, emergency dental care, TMJ treatment, and more. We provide high-quality, affordable dental services for both adults and children, ensuring optimal oral health in Chennai and nearby locations.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | Rudra Dental",
  },
  description: DESCRIPTION,
  keywords: SEO_KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Dentistry",
  alternates: {
    canonical: SITE.canonical,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Rudra Dental Clinic",
    title: "Rudra Dental - Best Dental Clinic in Anakaputhur, Chennai",
    description:
      "Providing top dental services such as root canal, dental implants, orthodontic treatment, teeth whitening, and more in Anakaputhur, Pallavaram, Chromepet, Kundrathur, and nearby areas.",
    url: SITE.canonical,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rudra Dental - Best Dental Service in Anakaputhur, Pallavaram, Chennai",
    description:
      "Offering dental care services such as root canal, implants, braces, cosmetic dentistry, and more in Chennai.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/icon.png", color: "#d4af37" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    ...(SITE.analytics.googleSiteVerification
      ? { google: SITE.analytics.googleSiteVerification }
      : {}),
    other: {
      "facebook-domain-verification": SITE.analytics.facebookDomainVerification,
      ...(SITE.analytics.bing ? { "msvalidate.01": SITE.analytics.bing } : {}),
      ...(SITE.analytics.yandex
        ? { "yandex-verification": SITE.analytics.yandex }
        : {}),
    },
  },
  other: {
    language: "English",
    coverage: "Worldwide",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
    "format-detection": "telephone=yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070c" },
    { media: "(prefers-color-scheme: light)", color: "#05070c" },
  ],
  colorScheme: "dark",
};

const GRAPH = [
  dentistSchema,
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  blogSchema,
  videoSchema,
  gallerySchema,
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Rudra Dental" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${SITE.analytics.gtm}');`}
        </Script>
        {GRAPH.map((node, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
          />
        ))}
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${SITE.analytics.gtm}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.analytics.ga4}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.analytics.ga4}', { send_page_view: true });`}
        </Script>
      </body>
    </html>
  );
}
