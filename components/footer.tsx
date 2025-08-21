import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-amber-100 text-amber-900 border-t-4 border-amber-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/fatman-grumpy.png"
                alt="FATMAN Logo"
                width={40}
                height={40}
                className="animate-wiggle hover-grow"
              />
              <span className="font-display text-xl font-bold animate-bounce-slow">FATMAN 🦸‍♂️</span>
            </div>
            <p className="text-sm text-amber-800 animate-float">
              The meme coin with REAL utility! 💪 Building the future of DeFi, one fat profit at a time. 🍔💰
            </p>
            <p className="text-xs italic text-amber-700">
              "Not the hero crypto deserved, but the one it needed!" - FATMAN
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-amber-900 animate-wiggle">🔗 Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  🚀 <span>Buy $FAT</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  📜 <span>Whitepaper</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  🗺️ <span>Roadmap</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  📊 <span>Tokenomics</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Utilities */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-amber-900 animate-wiggle">⚡ Ecosystem</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  🔄 <span>FATSWAP</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  🖼️ <span>FAT NFTs</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  🚀 <span>Launchpad</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  🎮 <span>Games</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-amber-900 animate-wiggle">👥 Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  🐦 <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  📱 <span>Telegram</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  💬 <span>Discord</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  📱 <span>Reddit</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-amber-300" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-amber-800">
          <div className="flex items-center gap-2 animate-float">
            <span>&copy; 2024 FATMAN. All rights reserved.</span>
            <span className="animate-wiggle">🦸‍♂️</span>
          </div>
          <div className="flex items-center gap-2 animate-bounce-slow">
            <span>Not financial advice. DYOR before investing.</span>
            <span className="animate-wiggle">⚠️</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-amber-200 rounded-lg p-4 border-2 border-amber-400 animate-pulse-glow">
            <p className="text-amber-900 font-bold italic">
              "Remember: With great power comes great responsibility... and great snacks!" - FATMAN 🍕⚡
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
