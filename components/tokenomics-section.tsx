import { Card, CardContent } from "@/components/ui/card";

export function TokenomicsSection() {
  return (
    <section
      className="relative items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#FEE280" }}
    >
      <div className="relative flex-col">
        {/* Top Image Section */}
        <div className="relative w-full z-20 border-t-8 border-yellow-400">
          <div className="flex items-center justify-center w-full">
            <img
              src="/images/tokeno2.png"
              alt="Hero Image"
              loading="lazy"
              className="w-1/3 h-auto py-10"
            />
            <img
              src="/images/tokeno1.png"
              alt="Hero Image"
              loading="lazy"
              className="absolute w-1/3 h-auto right-0 top-0"
            />
          </div>
        </div>


        {/* Main Content Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between lg:space-x-8 space-y-8 lg:space-y-0 ">
          {/* Left Side (Images) */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/tokeno3.png"
              alt="Hero Image"
              loading="lazy"
              className=""
            />
          </div>

          {/* Right Side (Cards) */}
          <div className="w-full px-1 lg:px-16 z-10 lg:mt-0 flex justify-center lg:justify-end">
            <div className="max-w-3xl px-4 sm:px-6 lg:px-8 py-2 sm:py-20 w-full">
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 sm:gap-10 z-10">
                {/* Contract Address Card */}
                <Card className="bg-yellow-400 bg-opacity-80 shadow-lg rounded-4xl w-full border-yellow-500 border-12 mx-auto mb-10">
                  <CardContent>
                    <div className="w-full px-8 items-center justify-items-center">
                      <p className="space-y-2 font-['Gagalin-Regular'] text-xl text-center text-white">
                        Contract Address
                      </p>
                      <p className="space-y-2 font-['Gagalin-Regular'] text-xs text-center">
                        <span style={{ fontWeight: "1000" }}>
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
                      <ul className="space-y-2 font-['Gagalin-Regular'] text-xs list-disc sm:pl-6 md:pl-8 lg:pl-10">
                        <li>
                          <span>Fairlaunch (Pinksale): 70%</span>
                        </li>
                        <li>
                          <span>Marketing: 8% (vested)</span>
                        </li>
                        <li>
                          <span>Community Rewards: 2% (airdrops, contests, raids)</span>
                        </li>
                        <li>
                          <span>Team & Development: 10% (vested, 3-month cliff)</span>
                        </li>
                        <li>
                          <span>CEX & Partnerships: 10% (time-locked)</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="w-full flex justify-center">
          <img
            src="/images/about-bottom.png"
            alt="About Image"
            loading="lazy"
            className="absolute max-w-full left-0 bottom-0 "
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
    </section>
  );
}
