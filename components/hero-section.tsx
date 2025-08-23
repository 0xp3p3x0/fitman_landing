"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/back.png')", backgroundSize: 'cover' }}
    >
    <Image
        src="/images/back3.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute top-20 z-3 max-w-full h-auto w-fit"
    />
     <Image 
        src="/images/back2.png"
        alt="Hero Image"
        width={100}
        height={1000}
        className="absolute bottom-0 max-w-full h-auto w-fit"
      />
     <div className="absolute bottom-0 z-10 text-center px-100 justify-between w-full flex space-x-4">
        <Button
          size="lg"
          className="relative bottom-20 bg-cover bg-center bg-no-repeat rounded-full"
           style={{backgroundImage: "url('/images/PINKSALE.png')", backgroundSize: 'cover'}}    
          onClick={() => window.location.href = 'https://pancakeswap.finance/swap'}
          ></Button>
        <Button
          size={"lg"}
          className="relative bottom-20 bg-cover bg-center bg-no-repeat rounded-full" 
          style={{backgroundImage: "url('/images/WHITEPAPER.png')", backgroundSize: 'cover'}}          
          onClick={() => window.location.href = 'https://pancakeswap.finance/swap'}
        ></Button>
        
      </div>
    <div className="absolute bottom-20 right-10 z-10 text-center px-6 flex flex-col space-y-4">
        <Image 
          src="/images/button_1.png"
          alt="Scroll Down"
          width={50}
          height={50}
          className="w-30 h-30"
        />
        <Image 
          src="/images/button_2.png"
          alt="Scroll Down"
          width={50}
          height={50}
          className="w-30 h-30"
        />
        <Image 
          src="/images/button_3.png"
          alt="Scroll Down"
          width={50}
          height={50}
          className="w-30 h-30"
        />
        <Image 
          src="/images/button_4.png"
          alt="Scroll Down"
          width={50}
          height={50}
          className="w-30 h-30"
        />
    </div>

    </section>
  )
}
