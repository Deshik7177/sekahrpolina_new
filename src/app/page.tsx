import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import CurriculumSection from "@/components/CurriculumSection";
import FeaturesPrice from "@/components/FeaturesPrice";
import FAQSection from "@/components/FAQSection";
import BRollFinale from "@/components/BRollFinale";
import SplashCursor from "@/components/SplashCursor";
// ...existing code...

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AuthoritySection />
      <CurriculumSection />
      <FeaturesPrice />
      <FAQSection />
      <BRollFinale />
      <SplashCursor />
    </>
  );
}
