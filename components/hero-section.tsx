'use client';
import { Button } from '@/components/ui/button';
export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/back.png')", backgroundSize: 'cover' }}
    >
      <img
        src="/images/back3.png"
        alt="Hero Image"
        loading="lazy"
        className="absolute top-8 sm:top-16 z-10 w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto h-auto"
      />
      <img
        src="/images/back2.png"
        alt="Hero Image"
        loading='lazy'
        className="absolute bottom-0 max-w-full h-auto w-fit"
      />
      <div className="absolute bottom-4 sm:bottom-8 z-10 text-center px-4 sm:px-6 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <Button
          className="relative !p-0 !m-0 !border-0 !bg-transparent 
               !bg-contain !bg-center !bg-no-repeat 
               w-48 sm:w-56 md:w-64 lg:w-80 
               !aspect-[256/64] h-auto 
               hover:scale-105 transition-transform"
          style={{
            backgroundImage: "url('/images/PINKSALE.png')"
          }}
          onClick={() =>
            (window.location.href = 'https://pancakeswap.finance/swap')
          }
        />
        <Button
          className="relative !p-0 !m-0 !border-0 !bg-transparent 
               !bg-contain !bg-center !bg-no-repeat 
               w-48 sm:w-56 md:w-64 lg:w-80 
               !aspect-[256/64] h-auto 
               hover:scale-105 transition-transform"
          style={{
            backgroundImage: "url('/images/WHITEPAPER.png')"
          }}
          onClick={() =>
            (window.location.href = 'https://pancakeswap.finance/swap')
          }
        />
      </div>

      <div className="absolute bottom-6 right-4 sm:bottom-10 sm:right-10 z-10 text-center px-2 sm:px-6 flex flex-col space-y-3 sm:space-y-4">
        <img
          src="/images/button_1.png"
          alt="Scroll Down"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:text-amber-600 transition-colors hover-grow"
        />
        <img
          src="/images/button_2.png"
          alt="Scroll Down"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:text-amber-600 transition-colors hover-grow"
        />
        <img
          src="/images/button_3.png"
          alt="Scroll Down"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:text-amber-600 transition-colors hover-grow"
        />
        <img
          src="/images/button_4.png"
          alt="Scroll Down"

          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:text-amber-600 transition-colors hover-grow"
        />
      </div>
    </section>
  );
}
