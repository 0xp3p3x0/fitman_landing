import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightLeft, Coins, Rocket, Gamepad2, ShoppingBag, Heart, Users } from "lucide-react"
import Image from "next/image"
import Sections from "./ui/sections"


export function UtilitiesSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#FEE280' }}
    >
      <div className="grid grid-cols-2 gap-32 p-8">
        <Sections
          text="Charity fighting hunger! Because even
heroes need to eat well, and so should
everyone else. Making the world
fatter... with kindness!"
          imageSrc="/images/graphics/16.png"
          imageAlt="About Bottom Image"
          imageBanner="/images/back3.png"
        />
        <Sections
          text="Community governance where every
vote counts! Shape the future while
FATMAN munches on governance
proposals. Democracy never tasted
SO GOOD!"
          imageSrc="/images/graphics/17.png"
          imageAlt="About Bottom Image"
          imageBanner="/images/back3.png"
        />
        <Sections
          text="Our chunky DEX with 0.25% trading
fees! Swap tokens while FATMAN gets fatter from the fees! Every trade
makes our hero more powerful!"
          imageSrc="/images/graphics/15.png"
          imageAlt="About Bottom Image"
          imageBanner="/images/back3.png"
        />
        <Sections
          text="Launch projects with FATMAN's
backing! We help good projects get fat returns while our hero provides the muscle (and belly)!"
          imageSrc="/images/graphics/18.png"
          imageAlt="About Bottom Image"
          imageBanner="/images/back3.png"
        />
      </div>
    </section>
  )
}
