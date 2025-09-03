"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/hero/bg.webp")', backgroundSize: "cover" }}
    >
      <Image
        src="/images/hero/heading.webp"
        alt="Hero Heading"
        width={1408}
        height={261}
        loading="lazy"
        className="absolute top-16 w-4/5 h-auto z-20 scale-in-loop"
      />

      <Image
        src="/images/hero/fat.webp"
        alt="Hero FATMAN"
        width={1920}
        height={650}
        loading="lazy"
        className="absolute bottom-0 max-w-full h-auto z-10"
      />

      <div className="absolute bottom-4 sm:bottom-8 lg:bottom-16 w-full flex flex-row items-center justify-between px-4 lg:px-48 z-10">
        <Button
          className="relative !p-0 !m-0 !border-0 !bg-transparent 
               !bg-contain !bg-center !bg-no-repeat 
               w-36 sm:w-48 md:w-64 lg:w-80 
               !aspect-[256/64] h-auto
               hover:scale-105 transition-transform"
          style={{
            backgroundImage: 'url("/images/hero/pinksale.webp")'
          }}
        // onClick={() =>
        //   (window.location.href = "https://pancakeswap.finance/swap")
        // }
        />

        <Button
          className="relative !p-0 !m-0 !border-0 !bg-transparent 
               !bg-contain !bg-center !bg-no-repeat 
               w-36 sm:w-48 md:w-64 lg:w-80 
               !aspect-[256/64] h-auto 
               hover:scale-105 transition-transform"
          style={{
            backgroundImage: 'url("/images/hero/whitepaper.webp")'
          }}
          onClick={() => { window.open("/docs/FAT_Whitepaper.pdf", "_blank") }}
        />
      </div>

      <div className="absolute z-10 flex flex-col gap-3 bottom-16 sm:bottom-32 lg:bottom-20 right-12">
        <Image
          src="/images/hero/clickable1.webp"
          width={160}
          height={160}
          alt="Hero Clickable"
          className="cursor-pointer w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 
                hover:text-amber-600 transition-colors hover-grow"
        />

        <Image
          src="/images/hero/clickable2.webp"
          width={160}
          height={160}
          alt="Hero Clickable"
          className="cursor-pointer w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 
                hover:text-amber-600 transition-colors hover-grow"
        />

        <Image
          src="/images/hero/clickable3.webp"
          width={160}
          height={160}
          alt="Hero Clickable"
          className="cursor-pointer w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 
                hover:text-amber-600 transition-colors hover-grow"
        />

        <Image
          src="/images/hero/clickable4.webp"
          width={160}
          height={160}
          alt="Hero Clickable"
          className="cursor-pointer w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 
                hover:text-amber-600 transition-colors hover-grow"
        />
      </div>
    </section>
  );
}

export default Hero;