import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { UtilitiesSection } from "@/components/utilities-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <UtilitiesSection />
      <TokenomicsSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </main>
  )
}
