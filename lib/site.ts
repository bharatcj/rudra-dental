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
  established: 2023,
  address: {
    street: "Babu Reddy Avenue, Plot No.1, Kamaraj St, Kamatchi Nagar, Guruswamy Nagar",
    locality: "Anakaputhur",
    region: "Tamil Nadu",
    postalCode: "600070",
    country: "IN",
    display:
      "Babu Reddy Avenue, Plot No.1, Kamaraj St, Kamatchi Nagar, Guruswamy Nagar, Anakaputhur, Chennai, Tamil Nadu 600070",
    shortDisplay: "Kamaraj St, Guruswamy Nagar, Anakaputhur, Chennai 600070",
  },
  geo: { latitude: 12.9821704, longitude: 80.1293464 },
  hours: {
    opens: "09:00",
    closes: "21:00",
    days: "Monday to Saturday",
    closedDay: "Sunday",
    display: "Monday to Saturday, 9:00 AM to 9:00 PM",
  },
  social: {
    facebook: "https://www.facebook.com/people/Rudra-Dental/61565090079593/",
    instagram: "https://www.instagram.com/rudradentalofficial/",
    instagramHandle: "@rudradentalofficial",
    googleReviews: "https://g.co/kgs/tn1CaxF",
    googleMaps:
      "https://www.google.com/maps/place/?q=place_id:ChIJXzibfZpfUjoRWuSi32qhkHM",
  },
  placeId: "ChIJXzibfZpfUjoRWuSi32qhkHM",
  rating: {
    value: 5.0,
    count: 275,
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
    credentials: "BDS",
  },
  {
    name: "Dr. Rakesh Mohan",
    role: "Oral & Maxillofacial Surgeon",
    image: "/doctors/dr-rakesh-mohan.jpg",
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
  { value: 275, suffix: "", label: "Google reviews" },
  { value: 5, suffix: "", label: "Specialist dentists" },
  { value: 14, suffix: "+", label: "Treatment specialities" },
  { value: 6, suffix: " days", label: "Open every week" },
];

export { REVIEWS, REVIEW_TOPICS } from "./googleReviews";
export type { Review } from "./googleReviews";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/gallery/logo-wall.jpg",
    alt: "The gold Rudra Dental mark in the reception lounge",
    caption: "Reception lounge",
    width: 1500,
    height: 1187,
  },
  {
    src: "/gallery/exterior-day.jpg",
    alt: "Rudra Dental street frontage on Kamaraj Street, Anakaputhur",
    caption: "Kamaraj Street",
    width: 652,
    height: 745,
  },
  {
    src: "/gallery/reception.jpg",
    alt: "Reception and waiting lounge at Rudra Dental Anakaputhur",
    caption: "Front of house",
    width: 1500,
    height: 908,
  },
  {
    src: "/gallery/operatory.jpg",
    alt: "Fully equipped dental operatory with a modern chair unit",
    caption: "Operatory one",
    width: 1500,
    height: 1000,
  },
  {
    src: "/gallery/exterior-night.jpg",
    alt: "Rudra Dental clinic frontage lit at night in Anakaputhur",
    caption: "Open until 9pm",
    width: 1125,
    height: 1500,
  },
  {
    src: "/gallery/front-desk.jpg",
    alt: "Front desk at Rudra Dental",
    caption: "Front desk",
    width: 844,
    height: 1500,
  },
  {
    src: "/gallery/corridor.jpg",
    alt: "Treatment corridor with operatory rooms",
    caption: "Treatment wing",
    width: 720,
    height: 1280,
  },
  {
    src: "/gallery/operatory-two.jpg",
    alt: "Second operatory with dental chair and equipment",
    caption: "Operatory two",
    width: 1170,
    height: 613,
  },
  {
    src: "/gallery/waiting-lounge.jpg",
    alt: "Patient waiting lounge with seating",
    caption: "Waiting lounge",
    width: 1500,
    height: 1130,
  },
  {
    src: "/gallery/logo-panel.jpg",
    alt: "Rudra Dental signage panel inside the clinic",
    caption: "Signage",
    width: 720,
    height: 1280,
  },
  {
    src: "/gallery/waiting-logo.jpg",
    alt: "Waiting area facing the Rudra Dental logo wall",
    caption: "Waiting area",
    width: 1079,
    height: 566,
  },
  {
    src: "/gallery/consult-corridor.jpg",
    alt: "Corridor leading to the consultation rooms",
    caption: "Consult rooms",
    width: 1500,
    height: 846,
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
    q: "Is Rudra Dental the same as Dr Rudra Dental Care?",
    a: "No. Rudra Dental is an independent clinic on Kamaraj Street in Anakaputhur, Chennai 600070, reachable on +91 80721 43199 and online at rudradental.com. Any other practice with a similar name is unrelated to us.",
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
  "Open Monday to Saturday, 9am to 9pm",
  "Emergency same day slots",
  "Five in-house specialists",
];
