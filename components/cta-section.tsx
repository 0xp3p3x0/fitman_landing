import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ExternalLink, Twitter, MessageCircle, FileText } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-4xl animate-coin-spin">💰</div>
        <div className="absolute top-20 right-20 text-3xl animate-wiggle">🚀</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-float">⚡</div>
        <div className="absolute top-1/3 right-1/3 text-2xl animate-bounce-slow">🔥</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-belly-shake">🦸‍♂️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <Card className="relative overflow-hidden bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 border-4 border-amber-400 hover:border-amber-500 transition-all duration-300 hover-grow">
          <CardContent className="p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left space-y-6">
                <h2 className="font-display text-4xl md:text-5xl font-bold animate-wiggle">
                  Ready to Join the <span className="text-amber-600 animate-pulse-glow">FAT Revolution</span>? 🚀
                </h2>
                <p className="text-xl text-amber-800 animate-bounce-slow">
                  Don't miss out on the meme coin that's actually building something EPIC! 💪 Get your $FAT tokens now
                  and become part of the chunkiest, most utility-packed ecosystem in crypto! No FOMO, just FAT MO! 🍔💰
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 font-bold bg-amber-500 hover:bg-amber-600 animate-belly-shake hover-grow border-2 border-amber-600"
                  >
                    <ExternalLink className="mr-2 h-5 w-5 animate-wiggle" />🥞 Buy $FAT on PancakeSwap (Get Chunky!)
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 font-bold bg-white/80 border-2 border-amber-500 text-amber-700 hover:bg-amber-100 hover-wiggle"
                  >
                    <FileText className="mr-2 h-5 w-5 animate-float" />📜 Read Our Epic Whitepaper
                  </Button>
                </div>

                <div className="flex justify-center lg:justify-start gap-4 mt-6">
                  <div className="bg-red-100 border-2 border-red-300 rounded-lg px-4 py-2 animate-pulse-glow">
                    <p className="text-red-700 font-bold text-sm">🔥 TRENDING NOW!</p>
                  </div>
                  <div className="bg-green-100 border-2 border-green-300 rounded-lg px-4 py-2 animate-bounce-slow">
                    <p className="text-green-700 font-bold text-sm">✅ AUDITED & SAFE!</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 relative">
                <div className="absolute -top-10 -right-10 text-6xl animate-float">💰</div>
                <div className="absolute -bottom-5 -left-5 text-4xl animate-wiggle">🍔</div>
                <div className="absolute top-5 -left-10 text-3xl animate-coin-spin">⚡</div>
                <Image
                  src="/images/fatman-detective.png"
                  alt="FATMAN Detective - Ready for Action!"
                  width={300}
                  height={300}
                  className="animate-belly-shake hover-grow cursor-pointer"
                />
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-3 shadow-lg border-2 border-amber-400 animate-float">
                  <p className="text-sm font-bold text-amber-800">Ready to get FAT profits? 🚀</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-amber-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="mt-12 text-center space-y-6">
          <h3 className="font-display text-2xl font-bold text-amber-900 animate-wiggle">
            Join Our Chunky Community! 🦸‍♂️
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-blue-50 border-2 border-blue-300 text-blue-700 hover:bg-blue-100 hover-grow animate-float"
            >
              <Twitter className="h-5 w-5 animate-wiggle" />🐦 Twitter
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-blue-50 border-2 border-blue-300 text-blue-700 hover:bg-blue-100 hover-grow animate-bounce-slow"
            >
              <MessageCircle className="h-5 w-5 animate-wiggle" />📱 Telegram
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-purple-50 border-2 border-purple-300 text-purple-700 hover:bg-purple-100 hover-grow animate-belly-shake"
            >
              <MessageCircle className="h-5 w-5 animate-wiggle" />💬 Discord
            </Button>
          </div>
          <p className="text-amber-700 italic animate-float">
            "Join us for daily memes, alpha calls, and the occasional snack recommendation!" - FATMAN 🍕
          </p>
        </div>

        {/* Contract Address */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-2 border-amber-300 hover:border-amber-400 transition-all duration-300 hover-grow">
            <CardContent className="p-6">
              <h4 className="font-display text-lg font-bold mb-3 text-amber-900 animate-wiggle">
                🔐 Official Contract Address 🔐
              </h4>
              <div className="bg-amber-50 p-4 rounded-lg font-mono text-sm break-all border-2 border-amber-200 animate-pulse-glow">
                0x1234567890abcdef1234567890abcdef12345678
              </div>
              <p className="text-xs text-amber-700 mt-3 font-bold animate-bounce-slow">
                ⚠️ Always verify the contract address before purchasing! ⚠️
              </p>
              <p className="text-xs text-amber-600 italic mt-1">
                "Safety first, profits second, snacks third!" - FATMAN 🛡️
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
