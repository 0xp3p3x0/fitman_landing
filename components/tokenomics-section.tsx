import { Card, CardContent } from "@/components/ui/card";

export function TokenomicsSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pb-60"
      style={{ backgroundColor: '#FEE280' }}
    >
      {/* Background Yellow Line */}
      <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
      
      {/* Background Images */}
      <img
        src="/images/tokeno2.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute top-0 z-5 max-w-full h-auto w-full"
      />
      <img
        src="/images/tokeno1.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute top-0 z-4 max-w-full h-auto w-full"
      />
      <img
        src="/images/tokeno3.png"
        alt="Hero Image"
        loading="lazy"
        width={1000}
        height={1000}
        className="absolute top-16 left-2 z-3 max-w-full h-auto w-auto"
      />
      
      {/* Card Section */}
      <div className="relative w-full px-8 z-10 mt-150 bottom-0 flex justify-end">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8 py-20 w-full bottom-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 z-10">
            {/* Contract Address Card */}
            <Card className="bg-yellow-400 bg-opacity-80 shadow-lg rounded-4xl w-full border-yellow-500 border-12 mx-auto mb-10">
              <CardContent>
                <div className="w-full px-8">
                  <p className="space-y-2 font-['Gagalin-Regular'] text-6xl text-center text-white">
                    Contract Address
                  </p>
                  <p className="space-y-2 font-['Gagalin-Regular'] text-4xl text-center text-white">
                    <span style={{ fontWeight: '1000' }}>
                      0x1234567890abcdef1234567890abcdef1234567890
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tokenomics List Card */}
            <Card className="bg-yellow-400 bg-opacity-80 shadow-lg rounded-4xl">
              <CardContent>
                <div className="w-full px-8">
                  <ul className="space-y-2 font-['Gagalin-Regular'] text-4xl list-disc pl-6">
                    <li><span>Fairlaunch (Pinksale): 70%</span></li>
                    <li><span>Marketing: 8% (vested)</span></li>
                    <li><span>Community Rewards: 2% (airdrops, contests, raids)</span></li>
                    <li><span>Team & Development: 10% (vested, 3-month cliff)</span></li>
                    <li><span>CEX & Partnerships: 10% (time-locked)</span></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src="/images/about-bottom.png"
        alt="About Image"
        loading="lazy"
        className="absolute bottom-0 left-0 z-0 max-w-full h-auto w-fit"
      />

      {/* Footer Yellow Line */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
    </section>
  );
}
