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

        <div className="items-center justify-center">
          <Card className="bg-yellow-400 bg-opacity-80 shadow-lg rounded-4xl w-fit border-yellow-500 border-12 mx-auto mb-10">
            <CardContent>
              <div className="w-full px-8">
                <p className="space-y-2 font-['Gagalin-Regular'] text-6xl items-center text-center">
                  <span className="text-white">Contract Address</span>
                </p>
                <p className="space-y-2 font-['Gagalin-Regular'] text-4xl items-center text-center">
                  <span style={{ fontWeight: '1000' }}>
                    0x1234567890abcdef1234567890abcdef1234567890
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-400 bg-opacity-80 shadow-lg">

            <CardContent>
              <div className="w-full px-8">

                <ul className="space-y-2 font-['Gagalin-Regular'] text-4xl list-disc">
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
      <Image
        src={"/images/about-bottom.png"}
        alt="About Image"
        loading="lazy"
        width={800}
        height={800}
        className="absolute bottom-0 left-0 z-0 max-w-full h-auto w-fit"
      />
      <div className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
    </section>
  )
}
