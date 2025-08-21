import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import Image from "next/image"

const tokenomicsData = [
  { name: "🎪 Public Sale", value: 40, color: "#F59E0B", emoji: "🎪" },
  { name: "🏊‍♂️ Liquidity Pool", value: 25, color: "#D97706", emoji: "🏊‍♂️" },
  { name: "👨‍💻 Team & Development", value: 15, color: "#92400E", emoji: "👨‍💻" },
  { name: "📢 Marketing", value: 10, color: "#F59E0B", emoji: "📢" },
  { name: "🏦 Reserve Fund", value: 10, color: "#B45309", emoji: "🏦" },
]

const revenueStreams = [
  { name: "🔄 FATSWAP Trading Fees", percentage: 30, emoji: "🔄" },
  { name: "🖼️ NFT Marketplace Fees", percentage: 20, emoji: "🖼️" },
  { name: "🚀 Launchpad Fees", percentage: 25, emoji: "🚀" },
  { name: "🎮 Gaming Revenue", percentage: 15, emoji: "🎮" },
  { name: "👕 Merchandise Sales", percentage: 10, emoji: "👕" },
]

export function TokenomicsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-4xl animate-coin-spin">💰</div>
        <div className="absolute top-32 right-16 text-3xl animate-float">📊</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-wiggle">🍕</div>
        <div className="absolute top-1/2 right-10 text-2xl animate-bounce-slow">📈</div>
        <div className="absolute bottom-32 right-1/3 text-4xl animate-belly-shake">🏦</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold animate-wiggle">
            <span className="text-amber-600 animate-pulse-glow">Tokenomics</span> & Revenue 💰
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto animate-bounce-slow">
            Transparent distribution and sustainable revenue model! 📊 Designed for long-term growth and maximum
            chunkiness! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Token Distribution */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover-grow">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-center text-amber-900 animate-wiggle">
                🍕 Token Distribution 🍕
              </CardTitle>
              <p className="text-center text-amber-700 font-bold animate-bounce-slow">
                1,000,000,000 $FAT Total Supply (That's a LOT of fat!)
              </p>

              <div className="relative h-24 bg-amber-50 rounded-lg border-2 border-dashed border-amber-300 flex items-center justify-center">
                <Image
                  src="/liquidity-pool-swimming.png"
                  alt="Liquidity Pool Swimming graphic"
                  width={80}
                  height={80}
                  className="animate-float"
                />
                <div className="absolute top-1 right-1 bg-amber-400 text-amber-900 text-xs px-2 py-1 rounded-full font-bold">
                  REPLACE! 🎨
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
               
              </div>

              <div className="mt-4 bg-amber-100 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-sm text-amber-900 font-medium italic">
                  "Even my token distribution is perfectly balanced... like my diet!" - FATMAN 🍔
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Streams */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover-grow">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-center text-amber-900 animate-wiggle">
                💰 Revenue Streams 💰
              </CardTitle>
              <p className="text-center text-amber-700 font-bold animate-bounce-slow">
                Multiple income sources for buyback & burn! 🔥
              </p>

              <div className="relative h-24 bg-amber-50 rounded-lg border-2 border-dashed border-amber-300 flex items-center justify-center">
                <Image
                  src="/fatman-community-rewards.png"
                  alt="Community Rewards graphic"
                  width={80}
                  height={80}
                  className="animate-coin-spin"
                />
                <div className="absolute top-1 right-1 bg-amber-400 text-amber-900 text-xs px-2 py-1 rounded-full font-bold">
                  REPLACE! 🎨
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {revenueStreams.map((stream, index) => (
                <div key={index} className="space-y-2 hover-grow">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-amber-900 flex items-center gap-2">
                      <span className="animate-wiggle">{stream.emoji}</span>
                      {stream.name}
                    </span>
                    <span className="text-amber-600 font-bold text-lg animate-bounce-slow">{stream.percentage}%</span>
                  </div>
                  <Progress value={stream.percentage} className="h-3 bg-amber-100" />
                </div>
              ))}

              <div className="mt-8 p-4 bg-amber-200 rounded-lg border-2 border-amber-400 animate-pulse-glow">
                <p className="text-sm text-center font-bold text-amber-900">
                  🔥 <strong>50% of all revenue</strong> goes to buyback & burn mechanism! 🔥
                </p>
                <p className="text-xs text-center text-amber-800 mt-2 italic">
                  "Burning tokens like I burn calories... wait, that doesn't sound right!" - FATMAN
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center bg-white/80 backdrop-blur-sm border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover-grow">
            <CardContent className="pt-6">
              <div className="text-4xl mb-2 animate-wiggle">🚫</div>
              <div className="text-3xl font-display font-bold text-green-600 mb-2 animate-bounce-slow">0%</div>
              <p className="text-sm text-green-700 font-bold">Buy/Sell Tax</p>
              <p className="text-xs text-green-600 italic mt-1">"No hidden fees, just hidden snacks!" - FATMAN</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover-grow">
            <CardContent className="pt-6">
              <div className="text-4xl mb-2 animate-coin-spin">🔥</div>
              <div className="text-3xl font-display font-bold text-amber-600 mb-2 animate-belly-shake">50%</div>
              <p className="text-sm text-amber-700 font-bold">Revenue to Buyback</p>
              <p className="text-xs text-amber-600 italic mt-1">"Burning tokens, not bridges!" - FATMAN</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover-grow">
            <CardContent className="pt-6">
              <div className="text-4xl mb-2 animate-float">👥</div>
              <div className="text-3xl font-display font-bold text-blue-600 mb-2 animate-wiggle">100%</div>
              <p className="text-sm text-blue-700 font-bold">Community Owned</p>
              <p className="text-xs text-blue-600 italic mt-1">
                "By the people, for the people, with snacks!" - FATMAN
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
