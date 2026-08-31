import BookingProvider from "@/components/booking/BookingProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  BackToTop,
  FloatingWhatsapp,
  MobileDock,
  Preloader,
  ScrollProgress,
} from "@/components/layout/Chrome";
import Hero from "@/components/sections/Hero";
import Services, { ServiceMarquee } from "@/components/sections/Services";
import { About, Process, Stats } from "@/components/sections/About";
import Doctors from "@/components/sections/Doctors";
import { Blog, Cta, Faq } from "@/components/sections/Content";
import { Gallery, Story } from "@/components/sections/Clinic";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import { getReviewFeed } from "@/lib/reviews";
import {
  breadcrumbSchema,
  faqSchema,
  blogSchema,
  videoSchema,
  gallerySchema,
} from "@/lib/schema";
import { GoldRule } from "@/components/ui/Motion";

export default async function HomePage() {
  const feed = await getReviewFeed();

  const graph = [
    breadcrumbSchema,
    faqSchema,
    blogSchema,
    videoSchema,
    gallerySchema,
  ];

  return (
    <BookingProvider>
      {graph.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
      <Preloader />
      <ScrollProgress />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ServiceMarquee />
        <Services />
        <Story />
        <div className="shell">
          <GoldRule className="py-2" />
        </div>
        <About />
        <Stats />
        <Gallery />
        <Process />
        <Doctors />
        <div className="shell">
          <GoldRule className="py-2" />
        </div>
        <Reviews reviews={feed.reviews} rating={feed.rating} count={feed.count} />
        <Faq />
        <Blog />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsapp />
      <MobileDock />
    </BookingProvider>
  );
}
