import { HeroSection } from "@/components/hero-section"
import { UtilitiesSection } from "@/components/utilities-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"


export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <TokenomicsSection />
      <UtilitiesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
