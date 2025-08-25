"use client"
import Image from "next/image";
import RoadmapSections from "./ui/roadmap-sections";

export function RoadmapSection() {
  const roadmapData = [
    {
      title: "PHASE 0 \nPRE-LAUNCH",
      imageSrc: "/images/graphics/24.png",
      imageAlt: "Decorative Shape",
      text: `BRAND\nWEBSITE\nCOMMUNITY BUILDUP\nMARKETING CAMPAIGNS\nPINKSALE FAIRLAUNCH`,
      className: "bottom-0 -right-12",
    },
    {
      title: "PHASE 1 \nCORE UTILITY(MONTH 1)",
      imageSrc: "/images/graphics/25.png",
      imageAlt: "Decorative Shape",
      text: `FATSWAP v1 live with fee tiers and buyback/burn dashboard\nTransparency hub for wallets, liquidity locks, and reports`,
      className: "bottom-0 -right-12",
    },
    {
      title: "PHASE 2 \nDEVELOPMENT",
      imageSrc: "/images/graphics/28.png",
      imageAlt: "Decorative Shape",
      text: `FATSWAP v1 live with fee tiers and buyback/burn dashboard\nTransparency hub for wallets, liquidity locks, and reports`,
      className: "-bottom-8 -right-12",
    },
    {
      title: "PHASE 3\nSCALE & MONETIZE (MONTHS 3–6)",
      imageSrc: "/images/graphics/26.png",
      imageAlt: "Decorative Shape",
      text: `FAT Launchpad pilots for meme token projects\nFirst partner launches\nFATMERCH store with apparel, plushies, mugs, and collectibles\nFirst charity report for FAT for Food program`,
      className: "-bottom-12 -right-12",
    },
    {
      title: "PHASE 4 \nFUTURE DEVELOPMENT",
      imageSrc: "/images/graphics/27.png",
      imageAlt: "Decorative Shape",
      text: `Expanded CEX/DEX listings\nStrategic partnerships with meme projects and brands\nRecurring seasonal burns and community events`,
      className: "-bottom-8 -right-12",
    },
  ];

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

      <div className="relative w-full px-8 py-10 z-10">
        {/* 5 Equal Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 z-3 justify-items-center">
          {roadmapData.map((phase, index) => (
            <RoadmapSections
              key={index}
              title={phase.title}
              imageSrc={phase.imageSrc}
              imageAlt={phase.imageAlt}
              text={phase.text}
              className={phase.className}
            />
          ))}
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