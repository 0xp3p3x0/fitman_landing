"use client"

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "./ui/carousel";
import RoadmapCard from "./ui/roadmap-card";

const Roadmap = () => {
  const phases = [
    {
      title: "PHASE 0 \nPRE-LAUNCH",
      imageSrc: "/images/roadmap/1.webp",
      imageAlt: "Phase 0",
      text: `BRAND\nWEBSITE\nCOMMUNITY BUILDUP\nMARKETING CAMPAIGNS\nPINKSALE FAIRLAUNCH`,
      className: "bottom-0 right-0 sm:right-0 lg:-right-8",
    },

    {
      title: "PHASE 1 \nCORE UTILITY(MONTH 1)",
      imageSrc: "/images/roadmap/2.webp",
      imageAlt: "Phase 1",
      text: `FATSWAP v1 live with fee tiers and buyback/burn dashboard\nTransparency hub for wallets, liquidity locks, and reports`,
      className: "bottom-0 right-0 sm:right-0 lg:-right-8",
    },

    {
      title: "PHASE 2 \nDEVELOPMENT",
      imageSrc: "/images/roadmap/3.webp",
      imageAlt: "Phase 2",
      text: `FATSWAP v1 live with fee tiers and buyback/burn dashboard\nTransparency hub for wallets, liquidity locks, and reports`,
      className: "-bottom-8 right-0 sm:right-0 lg:-right-8",
    },

    {
      title: "PHASE 3\nSCALE & MONETIZE (MONTHS 3–6)",
      imageSrc: "/images/roadmap/4.webp",
      imageAlt: "Phase 3",
      text: `FAT Launchpad pilots for meme token projects\nFirst partner launches\nFATMERCH store with apparel, plushies, mugs, and collectibles\nFirst charity report for FAT for Food program`,
      className: "-bottom-8 lg:-bottom-12 right-0 sm:right-0 lg:-right-8",
    },

    {
      title: "PHASE 4 \nFUTURE DEVELOPMENT",
      imageSrc: "/images/roadmap/5.webp",
      imageAlt: "Phase 4",
      text: `Expanded CEX/DEX listings\nStrategic partnerships with meme projects and brands\nRecurring seasonal burns and community events`,
      className: "-bottom-8 right-0 sm:right-0 lg:-right-8",
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat bg-yellow-200 px-4 sm:px-8 xl:px-12 py-8 gap-6 xl:gap-8"
      style={{ backgroundImage: "url('/images/roadmap/bg.webp')", backgroundSize: "cover" }}
      id="roadmap"
    >
      <div className="absolute top-0 left-0 w-full h-4 bg-yellow-400"></div>

      <Image
        src="/images/roadmap/heading.webp"
        alt="Roadmap Heading"
        width={606}
        height={191}
        loading="lazy"
        className="w-1/2 md:w-1/3 sm:mb-0 xl:mb-4"
      />

      <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 z-10">
        {phases.map((phase, index) =>
          index <= 2 ? (
            <RoadmapCard
              key={index}
              title={phase.title}
              imageSrc={phase.imageSrc}
              imageAlt={phase.imageAlt}
              text={phase.text}
              className={phase.className}
            />
          ) : null
        )}
      </div>

      <div className="hidden lg:grid lg:grid-cols-2 gap-6 xl:gap-8 z-10">
        {phases.map((phase, index) =>
          index > 2 ? (
            <RoadmapCard
              key={index}
              title={phase.title}
              imageSrc={phase.imageSrc}
              imageAlt={phase.imageAlt}
              text={phase.text}
              className={phase.className}
            />
          ) : null
        )}
      </div>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full flex flex-col lg:hidden"
      >
        <CarouselContent>
          {phases.map((phase, index) => (
            <CarouselItem key={index} className={`${index > 0 && "pl-6"} md:basis-1/2`}>
              <RoadmapCard
                key={index}
                title={phase.title}
                imageSrc={phase.imageSrc}
                imageAlt={phase.imageAlt}
                text={phase.text}
                className={phase.className}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-2">
          <CarouselPrevious className="relative static bg-[#0b1623] border-[#223043] text-white hover:bg-[#223043]" />
          <CarouselNext className="relative static bg-[#0b1623] border-[#223043] text-white hover:bg-[#223043]" />
        </div>
      </Carousel>

      {/* Footer Image */}
      <Image
        src="/images/roadmap/fat.webp"
        alt="Roadmap FATMAN"
        width={334}
        height={285}
        loading="lazy"
        className="absolute left-0 bottom-0 z-20 move-right max-lg:w-[222px] max-lg:h-[190px]"
      />
    </section>
  );
}

export default Roadmap;