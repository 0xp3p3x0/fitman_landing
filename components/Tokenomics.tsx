import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Tokenomics = () => {
  const allocations = [
    { label: "Fairlaunch (Pinksale)", value: "70%" },
    { label: "Marketing", value: "8% (vested)" },
    { label: "Community Rewards", value: "2% (airdrops, contests, raids)" },
    { label: "Team & Development", value: "10% (vested, 3-month cliff)" },
    { label: "CEX & Partnerships", value: "10% (time-locked)" },
  ];

  return (
    <section
      className="relative flex flex-col px-4 sm:px-8 xl:px-12 py-6 items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#FEE280" }}
    >
      <Image
        src="/images/tokenomics/fat.webp"
        alt="Tokenomcis FATMAN"
        width={1920}
        height={396}
        loading="lazy"
        className="w-full absolute top-0 z-0"
      />

      <Image
        src="/images/tokenomics/heading.webp"
        alt="Tokenomcis Heading"
        width={752}
        height={191}
        loading="lazy"
        className="w-1/2 md:w-1/3 mb-4 sm:mb-8 xl:mb-12 z-10"
      />

      <div className="z-10 w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] justify-center items-center">
        <div className="flex justify-center max-md:mb-4">
          <Image
            src="/images/tokenomics/doughnut.webp"
            alt="Tokenomics"
            width={1034}
            height={824}
            loading="lazy"
            className="w-2/3 md:w-full"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center px-4 lg:px-8 xl:px-12">
          <Card className="bg-yellow-400 bg-opacity-80 rounded-3xl md:rounded-4xl border-yellow-500 border-12 shadow-lg w-full mx-auto mb-4 xl:mb-8">
            <CardContent className="w-full items-center justify-center font-['Gagalin-Regular'] text-xs sm:text-base lg:text-lg xl:text-2xl text-center px-4 xl:px-8">
              <p className="text-white">Contract Address</p>
              <p>{process.env.NEXT_FAT_TOKEN}</p>
            </CardContent>
          </Card>

          <Card className="w-full bg-yellow-400 bg-opacity-80 shadow-lg rounded-3xl md:rounded-4xl">
            <CardContent>
              <ul className="w-full space-y-1 sm:space-y-2 font-['Gagalin-Regular'] list-disc text-[10px] sm:text-xs lg:text-sm xl:text-xl px-4 xl:px-8">
                {allocations.map((item, index) => (
                  <li key={index}>{item.label}: {item.value}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Image
        src="/images/about/bg.webp"
        alt="Tokenomics BG"
        width={1920}
        height={429}
        loading="lazy"
        className="absolute max-w-full left-0 bottom-0 z-0"
      />

      <div className="absolute bottom-0 left-0 w-full h-4 bg-yellow-400"></div>
    </section>
  );
}

export default Tokenomics;