import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CatalogPreview } from "@/components/home/CatalogPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyCarstore } from "@/components/home/WhyCarstore";
import { CasosSection } from "@/components/home/CasosSection";
import { CTASection } from "@/components/home/CTASection";
import { ContactSection } from "@/components/home/ContactSection";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <SolutionsSection />
      <PlatformSection />
      <IndustriesSection />
      <CatalogPreview />
      <ServicesSection />
      <WhyCarstore />
      <CasosSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </PageTransition>
  );
};

export default Index;
