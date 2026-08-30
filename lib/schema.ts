import {
  SITE,
  SERVICE_AREAS,
  STRUCTURED_SERVICES,
  FAQS,
  DOCTORS,
  ARTICLES,
  REVIEWS,
  GALLERY,
} from "./site";

const OG_IMAGE = `${SITE.url}/og.png`;
const CLINIC_ID = `${SITE.url}/#clinic`;
const ORG_ID = `${SITE.url}/#organization`;
const SAME_AS = [
  SITE.social.facebook,
  SITE.social.instagram,
  SITE.social.googleMaps,
];

export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: SITE.name,
  alternateName: [SITE.legalName, "Rudra Dental Anakaputhur", "RUDRA DENTAL"],
  image: OG_IMAGE,
  logo: `${SITE.url}/logo.png`,
  "@id": CLINIC_ID,
  url: SITE.canonical,
  telephone: SITE.phone,
  branchOf: { "@id": ORG_ID },
  email: SITE.email,
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  medicalSpecialty: "Dentistry",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  hasMap: SITE.mapsShortLink,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.value,
    reviewCount: SITE.rating.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: REVIEWS.slice(0, 24).map((item) => ({
    "@type": "Review",
    author: { "@type": "Person", name: item.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: item.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: item.text,
  })),
  photo: GALLERY.map((item) => ({
    "@type": "ImageObject",
    url: `${SITE.url}${item.src}`,
    caption: item.alt,
  })),
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: area,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: SITE.hours.opens,
    closes: SITE.hours.closes,
  },
  sameAs: SAME_AS,
  employee: DOCTORS.map((doctor) => ({
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.role,
    medicalSpecialty: "Dentistry",
  })),
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `https://wa.me/${SITE.whatsapp}`,
      inLanguage: "en-IN",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Dental appointment at Rudra Dental",
    },
  },
  service: STRUCTURED_SERVICES.map((service) => ({
    "@type": "MedicalService",
    name: service.name,
    description: service.description,
  })),
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.canonical,
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
  about: { "@id": CLINIC_ID },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": ORG_ID,
  name: SITE.name,
  alternateName: [SITE.legalName, "Rudra Dental Anakaputhur"],
  legalName: SITE.legalName,
  url: SITE.canonical,
  logo: `${SITE.url}/logo.png`,
  image: OG_IMAGE,
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: String(SITE.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil"],
  },
  department: { "@id": CLINIC_ID },
  sameAs: SAME_AS,
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.canonical,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE.url}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "About Us",
      item: `${SITE.url}/#about`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Our Doctors",
      item: `${SITE.url}/#doctors`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Blog",
      item: `${SITE.url}/#blog`,
    },
  ],
};

export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE.name} Blog`,
  url: `${SITE.url}/#blog`,
  blogPost: ARTICLES.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    image: `${SITE.url}${article.image}`,
    datePublished: article.date,
    description: article.excerpt,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  })),
};

export const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: `${SITE.url}/privacy-policy`,
  isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.canonical },
  description: "Rudra Dental Privacy Policy.",
};

export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Rudra Dental clinic launch in Anakaputhur",
  description:
    "Opening day at Rudra Dental, the dental clinic on Kamaraj Street in Anakaputhur, Chennai.",
  thumbnailUrl: [`${SITE.url}/media/launch-2023-poster.jpg`],
  uploadDate: "2024-09-05",
  duration: "PT50S",
  contentUrl: `${SITE.url}/media/launch-2023.mp4`,
  embedUrl: `${SITE.url}/#story`,
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: { "@type": "ImageObject", url: `${SITE.url}/brand/logo-full.png` },
  },
};

export const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `Inside ${SITE.name}, Anakaputhur`,
  url: `${SITE.url}/#gallery`,
  associatedMedia: GALLERY.map((item) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE.url}${item.src}`,
    name: item.caption,
    description: item.alt,
  })),
};
