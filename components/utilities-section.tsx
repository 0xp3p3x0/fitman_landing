import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightLeft, Coins, Rocket, Gamepad2, ShoppingBag, Heart, Users } from "lucide-react"
import Image from "next/image"

const utilities = [
  {
    icon: ArrowRightLeft,
    title: "FATSWAP",
    description:
      "Our chunky DEX with 0.25% trading fees! 🍔 Swap tokens while FATMAN gets fatter from the fees! Every trade makes our hero more powerful!",
    badge: "🔄 DEX",
    color: "text-amber-600",
    image: "/cartoon-dex-fatman.png",
    funnyQuote: '"I don\'t always swap tokens, but when I do, I prefer FATSWAP!" - FATMAN',
  },
  {
    icon: Coins,
    title: "FAT DAO",
    description:
      "Community governance where every vote counts! 🗳️ Shape the future while FATMAN munches on governance proposals. Democracy never tasted so good!",
    badge: "🏛️ Governance",
    color: "text-amber-700",
    image: "/dao-voting-fatman.png",
    funnyQuote: '"With great power comes great responsibility... and snacks!" - FATMAN',
  },
  {
    icon: Rocket,
    title: "FAT Launchpad",
    description:
      "Launch projects with FATMAN's backing! 🚀 We help good projects get fat returns while our hero provides the muscle (and belly)!",
    badge: "🚀 Launchpad",
    color: "text-amber-600",
    image: "/superhero-rocket-launch.png",
    funnyQuote: '"To the moon? More like to the buffet!" - FATMAN',
  },
  {
    icon: Gamepad2,
    title: "FATVERSE Games",
    description:
      "Play-to-earn games in the FATMAN universe! 🎮 Battle villains, save Gotham, and earn $FAT rewards. Gaming has never been this chunky!",
    badge: "🎮 Gaming",
    color: "text-amber-700",
    image: "/fatman-gaming-superhero.png",
    funnyQuote: '"I am the night... snack!" - FATMAN',
  },
  {
    icon: ShoppingBag,
    title: "FATMERCH",
    description:
      "Official FATMAN merchandise store! 👕 Rep the brand in XXXL sizes while supporting our chunky ecosystem. Fashion meets function!",
    badge: "🛍️ Merchandise",
    color: "text-amber-600",
    image: "/fatman-community-rewards.png",
    funnyQuote: '"Style is eternal, but my belt size keeps growing!" - FATMAN',
  },
  {
    icon: Heart,
    title: "FAT for Food",
    description:
      "Charity fighting hunger! ❤️ Because even heroes need to eat well, and so should everyone else. Making the world fatter... with kindness!",
    badge: "❤️ Charity",
    color: "text-red-600",
    image: "/fatman-charity-donation.png",
    funnyQuote: '"No one fights crime on an empty stomach!" - FATMAN',
  },
  {
    icon: Users,
    title: "FAT NFTs",
    description:
      "Exclusive FATMAN NFT collection! 🖼️ Collect chunky superheroes with utility and staking rewards. Each NFT comes with its own cape (sold separately)!",
    badge: "🖼️ NFTs",
    color: "text-amber-700",
    image: "/fatman-nft-superheroes.png",
    funnyQuote: '"Collect them all, but leave room for dessert!" - FATMAN',
  },
]

export function UtilitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-4xl animate-float">🍔</div>
        <div className="absolute top-20 right-20 text-3xl animate-wiggle">💰</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-bounce-slow">⚡</div>
        <div className="absolute top-1/3 right-1/3 text-2xl animate-coin-spin">🚀</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-float">🦸‍♂️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold animate-wiggle">
            Real <span className="text-amber-600 animate-pulse-glow">Utilities</span> 💪
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto animate-bounce-slow">
            FATMAN isn't just another meme coin! 😤 We're building a comprehensive ecosystem with REAL utility and
            sustainable revenue streams. No cap, all fat! 🧢
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilities.map((utility, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-2 border-amber-200 hover:border-amber-400 hover-grow"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-amber-100 ${utility.color} animate-wiggle`}>
                    <utility.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="bg-amber-200 text-amber-800 animate-bounce-slow">
                    {utility.badge}
                  </Badge>
                </div>
                <CardTitle className="font-display text-xl text-amber-900 group-hover:animate-wiggle">
                  {utility.title}
                </CardTitle>

                <div className="relative h-32 bg-amber-50 rounded-lg border-2 border-dashed border-amber-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src={utility.image || "/placeholder.svg"}
                    alt={`${utility.title} graphic`}
                    width={120}
                    height={120}
                    className="animate-belly-shake hover-grow"
                  />
                  <div className="absolute top-1 right-1 bg-amber-400 text-amber-900 text-xs px-2 py-1 rounded-full font-bold">
                    REPLACE ME! 🎨
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-amber-800 mb-4">
                  {utility.description}
                </CardDescription>

                <div className="bg-amber-100 p-3 rounded-lg border-l-4 border-amber-500 animate-float">
                  <p className="text-sm italic text-amber-900 font-medium">{utility.funnyQuote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-amber-200 rounded-2xl p-8 border-4 border-amber-400 animate-pulse-glow">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 animate-wiggle">
              🦸‍♂️ Ready to Join the FAT Squad? 🦸‍♂️
            </h3>
            <p className="text-amber-800 text-lg">
              These utilities aren't just promises - they're FATMAN's superpowers! 💪 Each one makes our ecosystem
              stronger and your wallet fatter! 💰
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
