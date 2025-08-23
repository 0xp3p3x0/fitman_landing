import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import Image from "next/image"


export function TokenomicsSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#FEE280' }}
    >
      <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
      <Image
        src="/images/tokeno2.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute top-0 z-5 max-w-full h-auto w-full"
      />
      <Image
        src="/images/tokeno1.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute top-0 z-3 max-w-full h-auto w-full"
      />
      <Image
        src="/images/tokeno3.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute top-16 left-2 z-3 max-w-full h-auto w-auto"
      />
      <div className="absolute bottom-5 right-0 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

        <div className="pl-50 grid grid-cols-1 items-center">
          <Card className="bg-yellow-400 bg-opacity-80 shadow-lg">

            <CardContent>
              <div className="w-full">

                <ul className="list-inside space-y-2 font-['Gagalin-Regular'] text-3xl" style={{ listStyleType: 'circle' }}>
                  <li><span style={{ fontWeight: '1000' }}>Fairlaunch (Pinksale): 70%</span> </li>
                  <li><span className="font-bold ">Marketing: 8%(vested) </span></li>
                  <li><span className="font-bold ">Community Rewards: 2% (airdrops, contests, raids)</span></li>
                  <li><span className="font-bold ">Team & Development: 10% (vested, 3-month cliff)</span></li>
                  <li><span className="font-bold ">CEX & Partnerships: 10% (time-locked)</span></li>
                </ul>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
    </section>
  )
}
