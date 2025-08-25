"use client"
import Image from "next/image";
import RoadmapSections from "./ui/roadmap-sections";

export function RoadmapSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pt-60"
      style={{ backgroundImage: "url('/images/back.png')", backgroundSize: "cover" }}
    >
      <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
      
      {/* Hero Image */}
      <Image
        src="/images/roadmap.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute top-10 z-3 max-w-full h-auto w-fit"
      />

      {/* Roadmap Sections */}
      <div className="relative w-full px-8 py-10 z-10">
        {/* First Row: 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 z-3">
          <RoadmapSections
            title="PHASE 0 <br/>PRE-LAUNCH"
            imageSrc="/images/graphics/24.png"
            imageAlt="Decorative Shape"
            text={`<ul class="space-y-1 list-disc pl-6">
              <li>BRAND</li>
              <li>WEBSITE</li>
              <li>COMMUNITY BUILDUP</li>
              <li>MARKETING CAMPAIGNS</li>
              <li>PINKSALE FAIRLAUNCH</li></ul>`}
          />
          <RoadmapSections
            title="PHASE 1 <br/>CORE UTILITY(MONTH 1)"
            imageSrc="/images/graphics/25.png"
            imageAlt="Decorative Shape"
            text={`<ul class="space-y-1 list-disc pl-6">
              <li>FATSWAP v1 live with fee tiers and buyback/burn dashboard</li>
              <li>Transparency hub for wallets, liquidity locks, and reports</li>
            </ul>`}
          />
          <RoadmapSections
            title="PHASE 2 <br/>DEVELOPMENT"
            imageSrc="/images/graphics/28.png"
            imageAlt="Decorative Shape"
            text={`<ul class="space-y-1 list-disc pl-6">
              <li>FATSWAP v1 live with fee tiers and buyback/burn dashboard</li>
              <li>Transparency hub for wallets, liquidity locks, and reports</li>
            </ul>`}
          />
        </div>

        {/* Second Row: 2 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 z-3 px-32 mx-10 my-10">
          <RoadmapSections
            title="PHASE 3<br/>SCALE & MONETIZE (MONTHS 3–6)"
            imageSrc="/images/graphics/26.png"
            imageAlt="Decorative Shape"
            text={`<ul class="space-y-1 list-disc pl-6">
              <li>FAT Launchpad pilots for meme token projects</li>
              <li>First partner launches</li>
              <li>FATMERCH store with apparel, plushies, mugs, and collectibles</li>
              <li>First charity report for FAT for Food program</li>
            </ul>`}
          />
          <RoadmapSections
            title="PHASE 4 <br/>FUTURE DEVELOPMENT"
            imageSrc="/images/graphics/27.png"
            imageAlt="Decorative Shape"
            text={`<ul class="space-y-1 list-disc pl-6">
              <li>Expanded CEX/DEX listings</li>
              <li>Strategic partnerships with meme projects and brands</li>
              <li>Recurring seasonal burns and community events</li>
            </ul>`}
          />
        </div>
      </div>

      {/* Footer Image */}
      <Image
        src="/images/roadmap.gif"
        alt="Hero Image"
        width={100}
        height={1000}
        className="absolute bottom-0 max-w-full h-auto w-full z-20"
      />

      <div className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 z-2"></div>
    </section>
  );
}
