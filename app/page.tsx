import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoverageOptionsSection from "@/components/CoverageOptionsSection";
// import HappyCustomersSection from "@/components/HappyCustomersSection";
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
      {/* <HappyCustomersSection /> */}
      <section id="about">
        <BasicHealthInsuranceRulesSection />
        <BenefitsHighlightSection />
      </section>
      <section id="reviews">
        <ContactAgentSection />
      </section>
      <section id="contact">
        <ContactUsSection />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
      <Footer />
    </main>
  );
}
