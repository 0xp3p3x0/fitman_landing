import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock } from "lucide-react"
import Image from "next/image"

export function RoadmapSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/back.png')", backgroundSize: 'cover' }}
    >
      <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
      <Image
          src="/images/roadmap.png"
          alt="Hero Image"
          loading="lazy"
          width={1000}
          height={1000}
          className="absolute top-20 z-3 max-w-full h-auto w-fit"
        />
      <div>
        
        <div className="relative top-40 left-0 justify-center right-0 grid grid-cols-3 gap-4 z-3">
          {/* First Row: 3 Columns */}
          <Image
            src="/images/roadmap0.png"
            alt="Button 1"
            width={100}
            height={100}
            className="w-full h-full"
          />
          <Image
            src="/images/roadmap1.png"
            alt="Button 2"
            width={100}
            height={100}
            className="w-full h-full"
          />
          <Image
            src="/images/roadmap2.png"
            alt="Button 3"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <div className="relative top-30 left-0 items-center justify-items-center grid grid-cols-2 gap-4 z-3 px-40">
          {/* Second Row: 2 Columns */}
          <Image
            src="/images/roadmap3.png"
            alt="Button 4"
            width={100}
            height={100}
            className="w-auto h-auto"
          />
          <Image
            src="/images/roadmap4.png"
            alt="Button 5"
            width={100}
            height={100}
            className="w-auto h-auto"
          />
        </div>
        
      </div>
      <Image
          src="/images/roadmap.gif"
          alt="Hero Image"
          width={100}
          height={1000}
          className="absolute bottom-0 max-w-full h-auto w-full z-20"
        />  
      <div className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 z-2"></div>
    </section>
  )
}
