import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-amber-100 text-amber-900 border-t-4 border-amber-400  font-['Gagalin-Regular']">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/graphics/3.png"
                alt="FATMAN Logo"
                loading="lazy"
                className="w-auto h-auto"
              />
            
            </div>
            <p className="text-xl">
              The meme coin with REAL utility! 💪 Building the future of DeFi, one fat profit at a time. 🍔💰
            </p>
            <p className="text-xl italic">
              "Not the hero crypto deserved, but the one it needed!" - FATMAN
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="font-display font-bold text-2xl ">Quick Links</p>
            <ul className="space-y-2 text-2xl">
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
            <h4 className="font-display font-bold text-2xl">Ecosystem</h4>
            <ul className="space-y-2 text-2xl">
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
            <h4 className="font-display font-bold text-2xl ">Community</h4>
            <ul className="space-y-2 text-2xl">
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                  <span>Youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-amber-300" />

        
      </div>
    </footer>
  )
}
