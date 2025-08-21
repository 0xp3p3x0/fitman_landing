import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-amber-400 rounded-full animate-coin-spin opacity-50"></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-yellow-500 rounded-full animate-bounce-slow opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-orange-400 rounded-full animate-wiggle opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-yellow-300 rounded-full animate-float opacity-30"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.65_0.15_45/0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight animate-wiggle">
                Meet <span className="text-amber-600 animate-pulse-glow">FATMAN</span>
              </h1>
              <p className="text-xl md:text-2xl text-amber-700 font-medium animate-bounce-slow">
                🦸‍♂️ The Hero Gotham Deserves (But Didn't Expect) 🍔
              </p>
            </div>

            <p className="text-lg md:text-xl text-amber-800 max-w-2xl animate-float">
              Not all heroes wear capes that fit! 😂 FATMAN ($FAT) waddles into the crypto world with REAL utility. Get
              ready for FATSWAP, chunky NFTs, a Launchpad that actually launches, and profits so fat they need their own
              utility belt! 💰
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 py-6 font-semibold bg-amber-500 hover:bg-amber-600 animate-belly-shake hover-grow"
              >
                🚀 Buy $FAT Now (Get Chunky!)
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 font-semibold bg-transparent border-amber-500 text-amber-700 hover:bg-amber-100 hover-wiggle"
              >
                📜 Read Our Epic Whitepaper
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center hover-grow">
                <div className="font-display text-2xl md:text-3xl font-bold text-amber-600 animate-coin-spin">1B</div>
                <div className="text-sm text-amber-700">🍕 Total Supply</div>
              </div>
              <div className="text-center hover-grow">
                <div className="font-display text-2xl md:text-3xl font-bold text-amber-600 animate-wiggle">7+</div>
                <div className="text-sm text-amber-700">⚡ Super Utilities</div>
              </div>
              <div className="text-center hover-grow">
                <div className="font-display text-2xl md:text-3xl font-bold text-amber-600 animate-bounce-slow">
                  BSC
                </div>
                <div className="text-sm text-amber-700">🌐 Network</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-3xl scale-110 animate-pulse-glow" />
              <div className="absolute -top-10 -right-10 text-6xl animate-float">💰</div>
              <div className="absolute -bottom-5 -left-5 text-4xl animate-wiggle">🍔</div>
              <div className="absolute top-5 -left-10 text-3xl animate-bounce-slow">⚡</div>
              <Image
                src="/images/fatman-hero.png"
                alt="FATMAN Hero - The Chunkiest Superhero in Crypto"
                width={400}
                height={400}
                className="relative z-10 animate-belly-shake hover-grow cursor-pointer"
                priority
              />
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-3 shadow-lg border-2 border-amber-400 animate-float">
                <p className="text-sm font-bold text-amber-800">Ready to get FAT profits? 🚀</p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-amber-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
