import Hero from "@/components/Hero"
import About from "@/components/About"
import Roadmap from "@/components/Roadmap"
import Tokenomics from "@/components/Tokenomics"
import Utils from "@/components/Utils"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Roadmap />
      <Tokenomics />
      <Utils />
      <CTA />
      <Footer />
    </main>
  )
}
