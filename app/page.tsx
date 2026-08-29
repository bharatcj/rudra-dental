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
import { Blog, Cta, Faq, Testimonials } from "@/components/sections/Content";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
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
        <About />
        <Stats />
        <Process />
        <Doctors />
        <Testimonials />
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
