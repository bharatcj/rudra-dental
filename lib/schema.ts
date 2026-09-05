import {
  SITE,
  SERVICE_AREAS,
  STRUCTURED_SERVICES,
  FAQS,
  DOCTORS,
  GALLERY,
} from "./site";
import { TREATMENTS, type Treatment } from "./treatments";
import { AREAS, licenceUrl, type ServiceArea } from "./areas";
import { POSTS_BY_DATE, type BlogPost } from "./blog";

const OG_IMAGE = `${SITE.url}/og.png`;
const IST_OFFSET = "+05:30";

function istTimestamp(date: string, time = "10:00:00") {
  return `${date}T${time}${IST_OFFSET}`;
}
const CLINIC_ID = `${SITE.url}/#clinic`;
const ORG_ID = CLINIC_ID;
const SAME_AS = [
  SITE.social.facebook,
  SITE.social.instagram,
  SITE.social.googleMaps,
  SITE.social.googleReviews,
];

const LOGO = {
  "@type": "ImageObject",
  url: `${SITE.url}/icon.png`,
  contentUrl: `${SITE.url}/icon.png`,
  width: 512,
  height: 512,
  caption: `${SITE.name} logo`,
  creator: { "@id": CLINIC_ID },
  creditText: SITE.name,
  copyrightNotice: SITE.legalName,
  license: `${SITE.url}/privacy-policy#image-use`,
  acquireLicensePage: `${SITE.url}/privacy-policy#image-use`,
};

const IMAGE_LICENCE_PAGE = `${SITE.url}/privacy-policy#image-use`;

function clinicImage(
  src: string,
  caption: string,
  size?: { width: number; height: number },
) {
  return {
    "@type": "ImageObject",
    url: `${SITE.url}${src}`,
    contentUrl: `${SITE.url}${src}`,
    ...(size ? { width: size.width, height: size.height } : {}),
    caption,
    creator: { "@id": CLINIC_ID },
    creditText: SITE.name,
    copyrightNotice: `${SITE.legalName}`,
    license: IMAGE_LICENCE_PAGE,
    acquireLicensePage: IMAGE_LICENCE_PAGE,
  };
}

function commonsImage(photo: {
  src: string;
  caption: string;
  width: number;
  height: number;
  author: string;
  licence: string;
  source: string;
}) {
  return {
    "@type": "ImageObject",
    url: `${SITE.url}${photo.src}`,
    contentUrl: `${SITE.url}${photo.src}`,
    caption: photo.caption,
    width: photo.width,
    height: photo.height,
    creator: { "@type": "Person", name: photo.author },
    creditText: `${photo.author}, ${photo.licence}, via Wikimedia Commons`,
    copyrightNotice: `${photo.author}, licensed ${photo.licence}`,
    license: licenceUrl(photo.licence),
    acquireLicensePage: photo.source,
  };
}

const DESCRIPTION = `${SITE.name} is a dental clinic on ${SITE.address.street}, ${SITE.address.locality}, Chennai ${SITE.address.postalCode}, open since ${SITE.established}. Five in-house dentists, three of them MDS specialists, provide root canal treatment, dental implants, braces and clear aligners, laser dentistry, children's dentistry and full mouth rehabilitation, ${SITE.hours.days.toLowerCase()}, ${SITE.hours.short}.`;

const DISAMBIGUATION = `${SITE.name} practises only from ${SITE.address.street}, ${SITE.address.locality}, Chennai ${SITE.address.postalCode}, on ${SITE.phoneDisplay}. It has no branches and is not connected to Rudra Dental Smilelature in Salem, to Dr Rudra Dental Care, or to any other practice using a similar name.`;

export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalClinic"],
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: [SITE.legalName, "Rudra Dental Anakaputhur", "RUDRA DENTAL"],
  description: DESCRIPTION,
  disambiguatingDescription: DISAMBIGUATION,
  image: [OG_IMAGE, `${SITE.url}/gallery/exterior-day.jpg`],
  logo: LOGO,
  "@id": CLINIC_ID,
  url: SITE.canonical,
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: String(SITE.established),
  isAcceptingNewPatients: true,
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  medicalSpecialty: "https://schema.org/Dentistry",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "GooglePlaceId",
    value: SITE.placeId,
  },
  knowsAbout: STRUCTURED_SERVICES.map((item) => item.name),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil"],
  },
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
  photo: GALLERY.map((item) =>
    clinicImage(item.src, item.alt, { width: item.width, height: item.height }),
  ),
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: area,
  })),
  openingHoursSpecification: [
    ...SITE.hours.sessions.map((session) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: session.opens,
      closes: session.closes,
    })),
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [SITE.hours.closedDay],
      opens: "00:00",
      closes: "00:00",
    },
  ],
  sameAs: SAME_AS,
  founder: {
    "@type": "Person",
    name: DOCTORS[0].name,
    jobTitle: DOCTORS[0].role,
    honorificSuffix: DOCTORS[0].credentials,
  },
  employee: DOCTORS.map((doctor) => ({
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.role,
    honorificSuffix: doctor.credentials,
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
  availableService: STRUCTURED_SERVICES.map((service) => ({
    "@type": "MedicalProcedure",
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
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.canonical,
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
  about: { "@id": CLINIC_ID },
};

export const organizationSchema = dentistSchema;

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

export const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: `${SITE.url}/privacy-policy`,
  isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.canonical },
  description: `How ${SITE.name} handles the details you share when you book an appointment or send a WhatsApp message, and the terms for using the photographs on this site.`,
};

export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Rudra Dental clinic launch in Anakaputhur",
  description:
    "Opening day at Rudra Dental, the dental clinic on Kamaraj Street in Anakaputhur, Chennai.",
  thumbnailUrl: [`${SITE.url}/media/launch-2023-poster.jpg`],
  uploadDate: istTimestamp("2024-09-05"),
  duration: "PT50S",
  contentUrl: `${SITE.url}/media/launch-2023.mp4`,
  embedUrl: `${SITE.url}/#story`,
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: LOGO,
  },
};

export const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `Inside ${SITE.name}, Anakaputhur`,
  url: `${SITE.url}/#gallery`,
  associatedMedia: GALLERY.map((item) => ({
    ...clinicImage(item.src, item.alt, {
      width: item.width,
      height: item.height,
    }),
    name: item.caption,
    description: item.alt,
  })),
};

export function treatmentSchema(treatment: Treatment) {
  const url = `${SITE.url}/treatments/${treatment.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": url,
    url,
    name: treatment.metaTitle,
    description: treatment.metaDescription,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: {
      "@type": treatment.surgical ? "SurgicalProcedure" : "MedicalProcedure",
      name: treatment.procedure,
      alternateName: treatment.name,
      description: treatment.summary,
      bodyLocation: treatment.bodyPart,
      howPerformed: treatment.steps
        .map((step) => `${step.title}. ${step.body}`)
        .join(" "),
      preparation: treatment.signs.map((sign) => sign.title).join(", "),
      followup: treatment.aftercare.join(" "),
      provider: { "@id": CLINIC_ID },
    },
    primaryImageOfPage: `${SITE.url}${treatment.image}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.canonical },
        {
          "@type": "ListItem",
          position: 2,
          name: "Treatments",
          item: `${SITE.url}/treatments`,
        },
        { "@type": "ListItem", position: 3, name: treatment.name, item: url },
      ],
    },
  };
}

export function treatmentBreadcrumb(treatment: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.canonical },
      {
        "@type": "ListItem",
        position: 2,
        name: "Treatments",
        item: `${SITE.url}/treatments`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: treatment.name,
        item: `${SITE.url}/treatments/${treatment.slug}`,
      },
    ],
  };
}

export const treatmentIndexBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.canonical },
    {
      "@type": "ListItem",
      position: 2,
      name: "Treatments",
      item: `${SITE.url}/treatments`,
    },
  ],
};

export const treatmentItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dental treatments at Rudra Dental",
  itemListElement: TREATMENTS.map((treatment, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: treatment.name,
    url: `${SITE.url}/treatments/${treatment.slug}`,
  })),
};

export function treatmentFaqSchema(treatment: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export const treatmentIndexSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE.url}/treatments`,
  url: `${SITE.url}/treatments`,
  name: "Dental treatments at Rudra Dental, Anakaputhur",
  inLanguage: "en-IN",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": CLINIC_ID },
};

export const blogIndexSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE.url}/blog`,
  url: `${SITE.url}/blog`,
  name: `${SITE.name} Blog`,
  description:
    "Practical dentistry written by the team at Rudra Dental, Anakaputhur.",
  inLanguage: "en-IN",
  isPartOf: { "@id": `${SITE.url}/#website` },
  publisher: { "@id": ORG_ID },
  blogPost: POSTS_BY_DATE.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${SITE.url}/blog/${post.slug}`,
    image: `${SITE.url}${post.image}`,
    datePublished: istTimestamp(post.date),
    dateModified: istTimestamp(post.date),
    description: post.excerpt,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  })),
};

export const blogIndexBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.canonical },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE.url}/blog`,
    },
  ],
};

export function postSchema(post: BlogPost) {
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    alternativeHeadline: post.metaTitle,
    description: post.metaDescription,
    articleSection: post.tag,
    inLanguage: "en-IN",
    wordCount: [
      ...post.intro,
      ...post.sections.flatMap((section) => section.body),
    ]
      .join(" ")
      .split(/\s+/).length,
    image: `${SITE.url}${post.image}`,
    datePublished: istTimestamp(post.date),
    dateModified: istTimestamp(post.date),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": `${SITE.url}/blog` },
    about: { "@id": CLINIC_ID },
  };
}

export function postBreadcrumb(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.canonical },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE.url}/blog/${post.slug}`,
      },
    ],
  };
}

export const postItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Articles from Rudra Dental",
  itemListElement: POSTS_BY_DATE.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    url: `${SITE.url}/blog/${post.slug}`,
  })),
};

export function areaSchema(area: ServiceArea) {
  const url = `${SITE.url}/dental-clinic/${area.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: area.metaTitle,
    description: area.metaDescription,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": CLINIC_ID },
    ...(area.photo
      ? {
          primaryImageOfPage: commonsImage(area.photo),
        }
      : {}),
    mainEntity: {
      "@type": "Dentist",
      "@id": CLINIC_ID,
      name: SITE.name,
      areaServed: {
        "@type": "Place",
        name: `${area.name}, Chennai`,
        address: {
          "@type": "PostalAddress",
          addressLocality: area.name,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.country,
        },
      },
    },
  };
}

export function areaFaqSchema(area: ServiceArea) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function areaBreadcrumb(area: ServiceArea) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.canonical },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas we serve",
        item: `${SITE.url}/dental-clinic`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: `${SITE.url}/dental-clinic/${area.slug}`,
      },
    ],
  };
}

export const areaIndexSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE.url}/dental-clinic`,
  url: `${SITE.url}/dental-clinic`,
  name: "Areas Rudra Dental serves around Anakaputhur",
  inLanguage: "en-IN",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": CLINIC_ID },
};

export const areaIndexBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.canonical },
    {
      "@type": "ListItem",
      position: 2,
      name: "Areas we serve",
      item: `${SITE.url}/dental-clinic`,
    },
  ],
};

export const areaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Areas served by Rudra Dental",
  itemListElement: AREAS.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: area.name,
    url: `${SITE.url}/dental-clinic/${area.slug}`,
  })),
};
