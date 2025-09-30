import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { FarmerBenefits } from "@/components/FarmerBenefits";
import { AboutSection } from "@/components/AboutSection";
import { SuccessStory } from "@/components/SuccessStory";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <FarmerBenefits />
        <AboutSection />
        <SuccessStory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
