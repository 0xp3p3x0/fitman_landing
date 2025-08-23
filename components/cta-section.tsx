import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ExternalLink, Twitter, MessageCircle, FileText } from "lucide-react"

export function CTASection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#FEE280' }}
    >
      <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
      <Image
        src="/images/whitelist_fatman.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute top-20 left-0 z-3 max-w-full h-auto w-fit"
      />
      <Image
        src="/images/whitelist_fatman2.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute bottom-0 z-3 max-w-full h-auto w-fit"
      />
      <Image
        src="/images/WHITELIST.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute bottom-0 left-60 z-3 max-w-full h-auto w-fit hover:text-amber-600 transition-colors hover-grow"
      />
    </section>
  )
}
