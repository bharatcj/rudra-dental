export const SITE = {
  name: "Rudra Dental",
  legalName: "Rudra Dental Clinic",
  url: "https://rudradental.com",
  canonical: "https://rudradental.com/",
  phone: "+918072143199",
  phoneDisplay: "+91 80721 43199",
  whatsapp: "918072143199",
  email: "info@rudradental.com",
  mapsShortLink: "https://g.co/kgs/tn1CaxF",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.354560344702!2d80.1293464!3d12.9821704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f9a7d9b385f%3A0x7390a16adfa2e45a!2sRUDRA%20DENTAL!5e0!3m2!1sen!2sin!4v1725458735814!5m2!1sen!2sin",
  clinicPortal: "/app/",
  established: 2023,
  address: {
    street: "India T.N. PIN 600070",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600070",
    country: "IN",
    display: "Anakaputhur, Chennai, Tamil Nadu 600070",
  },
  geo: { latitude: 13.0827, longitude: 80.2707 },
  hours: { opens: "09:00", closes: "22:00", display: "Monday to Sunday, 9:00 AM to 9:00 PM" },
  social: {
    facebook: "https://www.facebook.com/people/Rudra-Dental/61565090079593/",
    instagram: "https://www.instagram.com/rudra_dental.clinic/",
    instagramHandle: "@rudra_dental.clinic",
  },
  analytics: {
    ga4: "G-4NB7KXEQSP",
    gtm: "GTM-N3Z7NKKD",
    facebookDomainVerification: "w0njjnejxtq6lgmd9i4l0z4ekkmp8h",
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION ?? "",
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },
} as const;

export const SERVICE_AREAS = [
  "Anakaputhur",
  "Pallavaram",
  "Pammal",
  "Chromepet",
  "Kundrathur",
  "Tambaram",
  "Porur",
  "Mangadu",
  "Meenambakkam",
  "Madipakkam",
  "Thiruneermalai",
  "Chennai",
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  icon: string;
};

export const SERVICES: Service[] = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    short: "Painless endodontics, often in a single sitting.",
    description:
      "Specialized root canal treatments, including single-sitting root canals, in Anakaputhur, Pallavaram, and nearby areas.",
    points: ["Single sitting RCT", "Rotary endodontics", "Post and core build up"],
    icon: "rct",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    short: "Titanium roots that feel and function like your own.",
    description:
      "Offering dental implant services, including full-mouth rehabilitation, in Chennai and surrounding locations.",
    points: ["Single tooth implants", "Full mouth implants", "Implant supported dentures"],
    icon: "implant",
  },
  {
    slug: "orthodontic-treatment",
    title: "Orthodontic Treatment",
    short: "Braces, aligners and invisible correction for every age.",
    description:
      "Comprehensive orthodontic care including braces, Invisalign, and teeth straightening solutions.",
    points: ["Metal and ceramic braces", "Clear aligners and Invisalign", "Lingual and self ligating braces"],
    icon: "ortho",
  },
  {
    slug: "tooth-extraction-and-impaction",
    title: "Tooth Extraction & Impaction",
    short: "Surgical precision for wisdom teeth and difficult cases.",
    description:
      "Emergency and surgical tooth extraction, wisdom tooth impaction surgery and abscess management.",
    points: ["Wisdom tooth surgery", "Surgical extraction", "Abscess and infection care"],
    icon: "extraction",
  },
  {
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    short: "Minimally invasive procedures with faster healing.",
    description:
      "Advanced laser dental treatments for gum surgery, teeth whitening, and other minimally invasive procedures.",
    points: ["Laser gum contouring", "Laser teeth whitening", "Reduced bleeding and downtime"],
    icon: "laser",
  },
  {
    slug: "kids-dentistry",
    title: "Kids Dentistry",
    short: "Gentle, playful care that builds lifelong habits.",
    description:
      "Dedicated dental care for children, including cavity fillings, preventive dentistry, and orthodontic treatments for kids.",
    points: ["Pit and fissure sealants", "Fluoride application", "Habit breaking appliances"],
    icon: "kids",
  },
  {
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    short: "Complete reconstruction, designed smile first.",
    description:
      "Comprehensive restorative services including zirconia crowns, metal-free crowns, dental bridges and complete rehabilitation.",
    points: ["Zirconia and metal free crowns", "Bridges and dentures", "Digital smile design"],
    icon: "fullmouth",
  },
];

export const STRUCTURED_SERVICES = [
  {
    name: "Root Canal Treatment",
    description:
      "Specialized root canal treatments, including single-sitting root canals, in Anakaputhur, Pallavaram, and nearby areas.",
  },
  {
    name: "Dental Implants",
    description:
      "Offering dental implant services, including full-mouth rehabilitation, in Chennai and surrounding locations.",
  },
  {
    name: "Orthodontic Treatment",
    description:
      "Comprehensive orthodontic care including braces, Invisalign, and teeth straightening solutions.",
  },
  {
    name: "Cosmetic Dentistry",
    description:
      "Services like smile makeovers, teeth whitening, veneers, and cosmetic bonding to enhance dental aesthetics.",
  },
  {
    name: "Pediatric Dentistry",
    description:
      "Dedicated dental care for children, including cavity fillings, preventive dentistry, and orthodontic treatments for kids.",
  },
  {
    name: "Laser Dentistry",
    description:
      "Advanced laser dental treatments for gum surgery, teeth whitening, and other minimally invasive procedures.",
  },
  {
    name: "Teeth Whitening",
    description:
      "Professional teeth whitening services, including laser teeth whitening, for a brighter smile.",
  },
  {
    name: "Dental Crowns and Bridges",
    description:
      "Comprehensive restorative services including zirconia crowns, metal-free crowns, and dental bridges.",
  },
  {
    name: "Orthognathic Surgery",
    description: "Jaw correction and facial trauma surgery for severe dental and facial deformities.",
  },
  {
    name: "TMJ Treatment",
    description: "Specialized care for TMJ disorders, including pain relief and jaw alignment.",
  },
  {
    name: "Dentures and Dental Nightguards",
    description:
      "Flexible and implant-supported dentures, as well as nightguards for teeth grinding and TMJ issues.",
  },
  {
    name: "Periodontal Treatment",
    description:
      "Comprehensive gum care including gum grafting, gingivitis treatment, and periodontal surgery.",
  },
  {
    name: "Emergency Dental Care",
    description:
      "Emergency dental services including tooth extraction, abscess treatment, and urgent dental surgery.",
  },
  {
    name: "Family Dentistry",
    description:
      "Comprehensive dental care for the whole family, including preventive and restorative services.",
  },
];

export type Doctor = {
  name: string;
  role: string;
  image: string;
  focus: string;
  credentials: string;
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Gopinath",
    role: "Chief Dental Surgeon",
    image: "/doctors/dr-gopinath.jpg",
    focus: "Full mouth rehabilitation and advanced restorative dentistry",
    credentials: "BDS, MDS",
  },
  {
    name: "Dr. Jalapathi",
    role: "Oral & Maxillofacial Surgeon",
    image: "/doctors/dr-jalapathi.jpg",
    focus: "Impaction surgery, orthognathic and facial trauma procedures",
    credentials: "BDS, MDS",
  },
  {
    name: "Dr. Sarala",
    role: "Dental Surgeon",
    image: "/doctors/dr-sarala.jpg",
    focus: "Preventive dentistry, pediatric care and family dentistry",
    credentials: "BDS",
  },
  {
    name: "Dr. Gururaj",
    role: "Prosthodontist",
    image: "/doctors/dr-gururaj.jpg",
    focus: "Implants, crowns, bridges and complete denture prosthetics",
    credentials: "BDS, MDS",
  },
  {
    name: "Dr. Arfath",
    role: "Orthodontist",
    image: "/doctors/dr-arfath.jpg",
    focus: "Braces, clear aligners and complex bite correction",
    credentials: "BDS, MDS",
  },
];

export const DOCTOR_NAMES = DOCTORS.map((d) => d.name);

export const PROCESS = [
  {
    step: "01",
    title: "Consultation",
    body: "A relaxed conversation about what is bothering you, followed by a full oral examination and digital records.",
  },
  {
    step: "02",
    title: "Diagnosis",
    body: "Digital X-rays and intraoral scans give us a precise picture before a single instrument touches your tooth.",
  },
  {
    step: "03",
    title: "Treatment Plan",
    body: "You see every option, timeline and cost up front. Nothing begins until you are comfortable with the plan.",
  },
  {
    step: "04",
    title: "Precision Care",
    body: "Sterile, single-use protocols and modern equipment keep every procedure calm, quick and predictable.",
  },
  {
    step: "05",
    title: "Aftercare",
    body: "Follow up reviews, home care guidance and recall reminders so results hold for years, not months.",
  },
];

export const STATS = [
  { value: 12000, suffix: "+", label: "Smiles restored" },
  { value: 5, suffix: "", label: "Specialist dentists" },
  { value: 14, suffix: "+", label: "Treatment specialities" },
  { value: 7, suffix: " days", label: "Open every week" },
];

export const TESTIMONIALS = [
  {
    quote:
      "I walked in terrified of a root canal and walked out an hour later with zero pain. The team explained every single step before doing it.",
    author: "Priya R.",
    location: "Pallavaram",
  },
  {
    quote:
      "Got my braces done here two years ago. The follow ups were never rushed and the result is exactly what was shown to me on day one.",
    author: "Karthik S.",
    location: "Chromepet",
  },
  {
    quote:
      "My father needed full mouth implants at 68. Dr. Gururaj planned it in stages so it was comfortable and affordable for us.",
    author: "Anand M.",
    location: "Anakaputhur",
  },
  {
    quote:
      "Took my six year old for a filling. They made it feel like a game. She now reminds me when her next dental visit is due.",
    author: "Fathima N.",
    location: "Pammal",
  },
  {
    quote:
      "Clean clinic, on time appointments and transparent pricing. Rare combination anywhere in Chennai.",
    author: "Vignesh K.",
    location: "Kundrathur",
  },
  {
    quote:
      "The whitening result was natural, not the fake bright white I was worried about. Exactly what I wanted for my wedding.",
    author: "Divya L.",
    location: "Tambaram",
  },
];

export const FAQS = [
  {
    q: "What services does Rudra Dental offer?",
    a: "Rudra Dental offers a wide range of dental services including Root Canal Treatment, Dental Implants, Orthodontic Care, Cosmetic Dentistry, Pediatric Dentistry, and much more.",
  },
  {
    q: "What are the clinic's hours?",
    a: "The clinic is open from Monday to Saturday, 9 AM to 9 PM.",
  },
  {
    q: "Where is Rudra Dental located?",
    a: "Rudra Dental is located in Anakaputhur, Chennai, with services extending to nearby areas like Pallavaram, Pammal, Chromepet, and Kundrathur.",
  },
  {
    q: "Do you treat dental emergencies on the same day?",
    a: "Yes. Severe pain, swelling, a knocked out tooth or a broken restoration are treated as priority cases. Call +91 80721 43199 and we will fit you into the earliest available slot.",
  },
  {
    q: "How much does a root canal or an implant cost?",
    a: "Cost depends on the tooth, the extent of infection and the material you choose. You receive a written estimate after the consultation and digital X-ray, before any treatment starts.",
  },
  {
    q: "Can I book an appointment on WhatsApp?",
    a: "Yes. Use the booking form on this page to pick your dentist, date and time, and it opens a prefilled WhatsApp message to our front desk for instant confirmation.",
  },
];

export const ARTICLES = [
  {
    title: "Brushing and Flossing Techniques",
    date: "2024-08-12",
    dateDisplay: "12th Aug 2024",
    excerpt:
      "Brush your teeth at least twice a day using a soft-bristle toothbrush. The angle matters more than the pressure, and flossing reaches the 40 percent of tooth surface a brush never touches.",
    tag: "Prevention",
  },
  {
    title: "The Power of Proper Nutrition",
    date: "2024-10-18",
    dateDisplay: "18th Oct 2024",
    excerpt:
      "A healthy diet plays a significant role in maintaining your dental health. Frequency of sugar exposure damages enamel far more than the total quantity you consume in a day.",
    tag: "Lifestyle",
  },
  {
    title: "Regular Dental Check-ups",
    date: "2022-05-21",
    dateDisplay: "21th May 2022",
    excerpt:
      "Do not underestimate the importance of routine dental visits. Most cavities and gum problems are painless until they become expensive, and a six month recall catches them early.",
    tag: "Checkups",
  },
];

export const FOOTER_SERVICES = [
  "Root Canal Treatment",
  "Alignment Teeth",
  "Cosmetic Teeth",
  "Tooth Extraction & Impaction",
  "Live Advisory",
  "Laser Dentistry",
];

export const TRUST_MARKERS = [
  "Sterilised single use instruments",
  "Digital X-ray and intraoral scanning",
  "Transparent written estimates",
  "Open all 7 days, 9am to 9pm",
  "Emergency same day slots",
  "Five in-house specialists",
];
