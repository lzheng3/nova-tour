import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import CoreInterfacesSection from "@/components/core-interfaces-section/CoreInterfacesSection";
import HowItWorksSection from "@/components/how-it-works-section/HowItWorksSection";
import TestimonialsSection from "@/components/testimonials-section/TestimonialsSection";
import PricingSection from "@/components/pricing-section/PricingSection";
import CtaSection from "@/components/cta-section/CtaSection";
import Footer from "@/components/footer/Footer";

export default function AITravelPlannerLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
          <HeroSection />

          <CoreInterfacesSection />

          <HowItWorksSection />

          <TestimonialsSection />

          <PricingSection />

          <CtaSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
