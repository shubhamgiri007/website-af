import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CustomersSection from "@/components/CustomersSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhySection from "@/components/WhySection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhitepaperCallout from "@/components/WhitepaperCallout";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CustomersSection />
      <SolutionsSection />
      <WhySection />
      <CaseStudiesSection />
      <WhitepaperCallout />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
