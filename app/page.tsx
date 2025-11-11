import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoverageOptionsSection from "@/components/CoverageOptionsSection";
import HappyCustomersSection from "@/components/HappyCustomersSection";
import HealthInsuranceUnder65Section from "@/components/HealthInsuranceUnder65Section";
import Under65PlansCarousel from "@/components/Under65PlansCarousel";
import BasicHealthInsuranceRulesSection from "@/components/BasicHealthInsuranceRulesSection";
import BenefitsHighlightSection from "@/components/BenefitsHighlightSection";
import FAQSection from "@/components/FAQSection";
import ContactUsSection from "@/components/ContactUsSection";
import ContactAgentSection from "@/components/ContactAgentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoverageOptionsSection />
      <HealthInsuranceUnder65Section />
      <Under65PlansCarousel />
      <HappyCustomersSection />
      <BasicHealthInsuranceRulesSection />
      <BenefitsHighlightSection />
      <ContactAgentSection />
      <ContactUsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
