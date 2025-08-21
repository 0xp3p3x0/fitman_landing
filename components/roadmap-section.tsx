import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock } from "lucide-react"
import Image from "next/image"

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "🏗️ Foundation",
    status: "completed",
    items: ["🚀 Token Launch on BSC", "💧 Initial Liquidity Pool", "👥 Community Building", "🌐 Website & Socials"],
    image: "/fatman-origin-comic.png",
    funnyQuote: '"Every superhero needs an origin story... mine involves a lot of donuts!" - FATMAN',
  },
  {
    phase: "Phase 2",
    title: "⚡ Utility Launch",
    status: "in-progress",
    items: ["🔄 FATSWAP DEX Launch", "🖼️ FAT NFT Collection", "🏦 Staking Mechanism", "🤝 First Partnerships"],
    image: "/superhero-tech-team.png",
    funnyQuote: '"Building utilities faster than I can eat pizza!" - FATMAN',
  },
  {
    phase: "Phase 3",
    title: "🌟 Ecosystem Expansion",
    status: "upcoming",
    items: ["🚀 FAT Launchpad", "🎮 FATVERSE Games Alpha", "📱 Mobile App", "🌉 Cross-chain Bridge"],
    image: "/superhero-hq-construction.png",
    funnyQuote: '"Expanding faster than my waistline!" - FATMAN',
  },
  {
    phase: "Phase 4",
    title: "🌍 Global Domination",
    status: "upcoming",
    items: ["🏢 Major CEX Listings", "🛍️ FATMERCH Store", "❤️ FAT for Food Charity", "🌐 Metaverse Integration"],
    image: "/crypto-conquering-hero.png",
    funnyQuote: '"World domination, one snack at a time!" - FATMAN',
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-5 w-5 text-green-500 animate-bounce-slow" />
    case "in-progress":
      return <Clock className="h-5 w-5 text-amber-600 animate-wiggle" />
    default:
      return <Circle className="h-5 w-5 text-amber-400 animate-float" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-100 text-green-700 border-green-300 animate-pulse-glow">✅ Completed</Badge>
    case "in-progress":
      return <Badge className="bg-amber-100 text-amber-700 border-amber-300 animate-belly-shake">⚡ In Progress</Badge>
    default:
      return (
        <Badge variant="outline" className="border-amber-300 text-amber-600 animate-float">
          🔮 Upcoming
        </Badge>
      )
  }
}

export function RoadmapSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 text-4xl animate-float">🗺️</div>
        <div className="absolute top-24 right-20 text-3xl animate-wiggle">🚀</div>
        <div className="absolute bottom-24 left-1/4 text-5xl animate-bounce-slow">⭐</div>
        <div className="absolute top-1/3 right-1/4 text-2xl animate-coin-spin">🏆</div>
        <div className="absolute bottom-16 right-16 text-4xl animate-belly-shake">🌍</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold animate-wiggle">
            <span className="text-amber-600 animate-pulse-glow">Roadmap</span> to Success 🗺️
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto animate-bounce-slow">
            Our journey from meme to mainstream! 🚀 Every milestone brings us closer to making FATMAN the most
            utility-packed, belly-shaking meme coin in crypto! 💪
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapPhases.map((phase, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-amber-200 hover:border-amber-400 hover-grow"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="font-display border-amber-400 text-amber-700 animate-wiggle">
                    {phase.phase}
                  </Badge>
                  {getStatusIcon(phase.status)}
                </div>
                <div className="space-y-2">
                  <CardTitle className="font-display text-xl text-amber-900 group-hover:animate-wiggle">
                    {phase.title}
                  </CardTitle>
                  {getStatusBadge(phase.status)}
                </div>

                <div className="relative h-24 bg-amber-50 rounded-lg border-2 border-dashed border-amber-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src={phase.image || "/placeholder.svg"}
                    alt={`${phase.title} graphic`}
                    width={80}
                    height={80}
                    className="animate-belly-shake"
                  />
                  <div className="absolute top-1 right-1 bg-amber-400 text-amber-900 text-xs px-1 py-0.5 rounded-full font-bold">
                    🎨
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-4">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm hover-grow">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0 animate-bounce-slow" />
                      <span className="text-amber-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-amber-100 p-3 rounded-lg border-l-4 border-amber-500 animate-float">
                  <p className="text-xs italic text-amber-900 font-medium">{phase.funnyQuote}</p>
                </div>
              </CardContent>

              {/* Connector Line */}
              {index < roadmapPhases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-amber-300 animate-wiggle" />
              )}
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-amber-200 rounded-2xl p-8 border-4 border-amber-400 animate-pulse-glow">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 animate-wiggle">🎯 Current Mission Status 🎯</h3>
            <div className="flex justify-center items-center gap-4 text-lg">
              <span className="text-green-600 font-bold animate-bounce-slow">✅ Phase 1 Complete!</span>
              <span className="text-amber-600 font-bold animate-belly-shake">⚡ Phase 2 In Progress!</span>
            </div>
            <p className="text-amber-800 mt-4 italic">
              "Rome wasn't built in a day, but they weren't building it with this much enthusiasm... or snacks!" -
              FATMAN 🍕
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
