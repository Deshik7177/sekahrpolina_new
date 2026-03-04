
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import CurriculumSection from "@/components/CurriculumSection";
import FeaturesPrice from "@/components/FeaturesPrice";
import FAQSection from "@/components/FAQSection";
import BRollFinale from "@/components/BRollFinale";
import SplashCursor from "@/components/SplashCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020205]">
      <SplashCursor />
      {/* Mesh bg corners — global */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_top_left,rgba(7,126,255,0.12)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[55vw] h-[55vh] bg-[radial-gradient(ellipse_at_bottom_right,rgba(7,126,255,0.10)_0%,transparent_60%)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AuthoritySection />
        <CurriculumSection />
        <FeaturesPrice />
        <FAQSection />
        <BRollFinale />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-10 px-6 text-center">
        <p className="text-white/20 text-sm">
          © 2026 Upgrido by Sekhar Polina. All rights reserved.
        </p>
        <p className="text-white/10 text-xs mt-2">
          Built with passion for creators who dare to be great.
        </p>
      </footer>
    </div>
  );
}
