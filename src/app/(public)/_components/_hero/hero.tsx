import {
  HeroBackground,
  HeroContent,
  HeroFooter,
  HeroImage,
  HeroSocialProof,
  HeroStats,
} from "./index";
import { Container, Section } from "@/components/layout";

export function Hero() {
  return (
    <Section
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 overflow-hidden"
      aria-labelledby="hero-section"
    >
      <HeroBackground />

      <Container className="py-8 px-6">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <HeroContent />

            <aside className="pt-6 sm:pt-8 space-y-4 sm:space-y-6 px-4 sm:px-0">
              <HeroStats />
              <HeroSocialProof />
            </aside>
          </div>

          <HeroImage />
        </div>
      </Container>

      <HeroFooter />
    </Section>
  );
}
