import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EdTechSection } from "@/components/sections/EdTechSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import MissionVision from "@/components/sections/MissionVision";
import Testimonials from "@/components/sections/Testimonials";
import Awards from "@/components/sections/Awards";
import CTABanner from "@/components/sections/CTABanner";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <AboutSection />
      <ServicesSection />
      <EdTechSection />
      <ProductsSection />
      <WhyChooseUs />
      <MissionVision />
      <Testimonials />
      <Awards />
      <CTABanner />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
