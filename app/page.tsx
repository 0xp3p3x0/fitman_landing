import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { UtilitiesSection } from "@/components/utilities-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { UtilitiesSection2 } from "@/components/utilities-section2"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <RoadmapSection />

      <TokenomicsSection />
      <UtilitiesSection />
      <UtilitiesSection2 />
      <CTASection />
      <Footer />
    </main>
  )
}
