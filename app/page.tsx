import BookingProvider from "@/components/booking/BookingProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  BackToTop,
  CursorGlow,
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

export default async function HomePage() {
  const feed = await getReviewFeed();

  return (
    <BookingProvider>
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ServiceMarquee />
        <Services />
        <Story />
        <About />
        <Stats />
        <Gallery />
        <Process />
        <Doctors />
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
