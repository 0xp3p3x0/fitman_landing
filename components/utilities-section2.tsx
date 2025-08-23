import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightLeft, Coins, Rocket, Gamepad2, ShoppingBag, Heart, Users } from "lucide-react"
import Image from "next/image"
import Sections from "./ui/sections"


export function UtilitiesSection2() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#FEE280' }}
    >
      <div className="grid grid-cols-2 gap-32 p-8">
        <Sections
          text="Usage creates fees, fees fuel
buybacks, buybacks burn supply,
supply reduction drives value."
          imageSrc="/images/graphics/11.png"
          imageAlt="About Bottom Image"
          imageBanner="/images/back3.png"
        />
        <Sections
          text="Official FATMAN merchandise store!
Rep the brand in XXXL sizes while
supporting our chunky ecosystem.
Fashion meets function!"
          imageSrc="/images/graphics/12.png"
          imageAlt="About Bottom Image"
          imageBanner="/images/back3.png"
        />
        <Sections
          text="Play-to-earn games in the FATMAN
universe! Battle villains, save
Gotham, and earn $FAT rewards.
Gaming has never been this chunky!"
          imageSrc="/images/graphics/13.png"
          imageAlt="About Bottom Image"
          imageBanner="/images/back3.png"
        />
        <Sections
          text="Official FATMAN merchandise store!
Rep the brand in XXXL sizes while
supporting our chunky ecosystem.
Fashion meets function!"
          imageSrc="/images/graphics/14.png"
          imageAlt="About Bottom Image"
          imageBanner="/images/back3.png"
        />
      </div>
    </section>
  )
}
