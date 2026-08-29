import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { privacySchema } from "@/lib/schema";
import { IconArrow, IconMail, IconPhone, ToothMark } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Rudra Dental Privacy Policy.",
  keywords: ["Privacy", "Policy", "Rudra Dental"],
  alternates: { canonical: `${SITE.url}/privacy-policy` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy - Rudra Dental",
    description: "Rudra Dental Privacy Policy.",
    url: `${SITE.url}/privacy-policy`,
    type: "article",
  },
};

const SECTIONS = [
  {
    heading: "Introduction",
    body: [
      "At Rudra Dental, accessible from https://www.rudradental.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Rudra Dental and how we use it.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us, such as booking appointments, or when you contact us directly through our email or phone number.",
    ],
    list: [
      "Personal Identification Information: Name, email address, phone number, and address when filling out forms or contacting us directly.",
      "Automatically Collected Information: IP address, browser type, device type, location information, and browsing behavior on our website.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: ["We use the information we collect in the following ways:"],
    list: [
      "To respond to inquiries or provide requested information.",
      "To provide appointment booking services.",
      "To monitor and analyze website traffic and usage to enhance user experience.",
      "To send you updates or promotional information if you have opted-in.",
    ],
  },
  {
    heading: "Google Analytics and Cookies",
    body: [
      "Our website uses Google Analytics to track user activity on our site. Cookies are small text files placed on your device to collect standard internet log information and visitor behavior information.",
      "You can opt to disable cookies through your browser settings.",
    ],
  },
  {
    heading: "Third-Party Services",
    body: [
      "We may use third-party services like Google Tag Manager, Facebook Pixel, and others for analytics and marketing purposes.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We employ appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.",
    ],
  },
  {
    heading: "Your Data Protection Rights",
    list: [
      "Access, correct, or delete your personal information.",
      "Restrict or object to the processing of your personal data.",
      "Withdraw consent at any time.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute -top-40 left-1/3 -z-10 h-[34rem] w-[34rem] rounded-full bg-gold-500/[0.09] blur-3xl" />

        <header className="border-b border-gold-500/12">
          <div className="shell flex h-[var(--header-h)] items-center justify-between">
            <Link href="/" className="flex items-center gap-3" aria-label="Rudra Dental home">
              <ToothMark className="h-9 w-8" />
              <span className="leading-none">
                <span className="block font-[family-name:var(--font-mark)] text-[1.05rem] font-bold tracking-[0.16em] text-gold-gradient">
                  RUDRA
                </span>
                <span className="block text-[0.6rem] font-medium tracking-[0.42em] text-mist-400 uppercase">
                  Dental
                </span>
              </span>
            </Link>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-gold-500/25 px-5 py-2.5 text-sm text-gold-100 transition hover:bg-gold-500/10"
            >
              <IconArrow className="h-4 w-4 rotate-180 transition group-hover:-translate-x-1" />
              Back to site
            </Link>
          </div>
        </header>

        <main className="shell py-16 lg:py-24">
          <p className="eyebrow">Privacy Policy</p>
          <h1 className="display mt-4 max-w-3xl text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
            Your privacy is{" "}
            <span className="text-gold-gradient">important to us</span>
          </h1>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.32fr_0.68fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <nav aria-label="Policy sections" className="surface rounded-2xl p-5">
                <p className="text-xs tracking-[0.16em] text-gold-400 uppercase">
                  On this page
                </p>
                <ul className="mt-4 space-y-2.5">
                  {SECTIONS.map((section) => (
                    <li key={section.heading}>
                      <a
                        href={`#${section.heading.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                        className="text-sm text-mist-400 transition hover:text-gold-200"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact-us"
                      className="text-sm text-mist-400 transition hover:text-gold-200"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            <div className="space-y-10">
              {SECTIONS.map((section) => (
                <section
                  key={section.heading}
                  id={section.heading.toLowerCase().replace(/[^a-z]+/g, "-")}
                  className="scroll-mt-28"
                >
                  <h2 className="display text-2xl text-gold-200 sm:text-[1.75rem]">
                    {section.heading}
                  </h2>
                  {section.body?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-4 leading-relaxed text-mist-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="mt-4 space-y-2.5">
                      {section.list.map((item) => (
                        <li
                          key={item.slice(0, 40)}
                          className="flex items-start gap-3 text-mist-300"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section id="contact-us" className="scroll-mt-28">
                <h2 className="display text-2xl text-gold-200 sm:text-[1.75rem]">
                  Contact Us
                </h2>
                <p className="mt-4 leading-relaxed text-mist-300">
                  If you have any questions or concerns, please contact us at{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-gold-300 underline underline-offset-4"
                  >
                    {SITE.email}
                  </a>{" "}
                  or call us at{" "}
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-gold-300 underline underline-offset-4"
                  >
                    {SITE.phone}
                  </a>
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 px-5 py-3 text-sm text-gold-100 transition hover:bg-gold-500/10"
                  >
                    <IconPhone className="h-4 w-4" />
                    {SITE.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-mist-400/15 px-5 py-3 text-sm text-mist-200 transition hover:border-gold-500/30 hover:text-gold-100"
                  >
                    <IconMail className="h-4 w-4" />
                    {SITE.email}
                  </a>
                </div>
              </section>

              <p className="border-t border-gold-500/12 pt-6 text-sm text-mist-400">
                Effective Date: This privacy policy was last updated on 06/09/2024.
              </p>
            </div>
          </div>
        </main>

        <footer className="border-t border-gold-500/12 py-8">
          <div className="shell flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-mist-400">
              &copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
            </p>
            <Link href="/" className="text-xs text-mist-400 transition hover:text-gold-200">
              rudradental.com
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
