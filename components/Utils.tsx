import Image from "next/image";
import Sections from "./ui/sections"

const Utils = () => {
  const utils = [
    {
      text: "Charity fighting hunger! Because even heroes need to eat well, and so should everyone else. Making the world fatter... with kindness!",
      imageSrc: "/images/util/1.webp",
      imageAlt: "Utility 1",
      title: "FATFOOD"
    },

    {
      text: "Community governance where every vote counts! Shape the future while FATMAN munches on governance proposals. Democracy never tasted SO GOOD!",
      imageSrc: "/images/util/2.webp",
      imageAlt: "Utility 2",
      title: "FATDAO"
    },

    {
      text: "Our chunky DEX with 0.25% trading fees! Swap tokens while FATMAN gets fatter from the fees! Every trade makes our hero more powerful!",
      imageSrc: "/images/util/3.webp",
      imageAlt: "Utility 3",
      title: "FATSWAP"
    },

    {
      text: "Launch projects with FATMAN's backing! We help good projects get fat returns while our hero provides the muscle (and belly)!",
      imageSrc: "/images/util/4.webp",
      imageAlt: "Utility 4",
      title: "SNACK PAD"
    },

    {
      text: "Usage creates fees, fees fuel buybacks, buybacks burn supply, supply reduction drives value.",
      imageSrc: "/images/util/5.webp",
      imageAlt: "Utility 5",
      title: "FATBURN"
    },

    {
      text: "Official FATMAN merchandise store! Rep the brand in XXXL sizes while supporting our chunky ecosystem. Fashion meets function!",
      imageSrc: "/images/util/6.webp",
      imageAlt: "Utility 6",
      title: "FATMERCH"
    },

    {
      text: "Play-to-earn games in the FATMAN universe! Battle villains, save Gotham, and earn $FAT rewards. Gaming has never been this chunky!",
      imageSrc: "/images/util/7.webp",
      imageAlt: "Utility 7",
      title: "FATVERSE GAMES"
    },

    {
      text: "Official FATMAN merchandise store! Rep the brand in XXXL sizes while supporting our chunky ecosystem. Fashion meets function!",
      imageSrc: "/images/util/8.webp",
      imageAlt: "Utility 8",
      title: "FAT NFTS"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-yellow-200 border-b-16 border-yellow-400 py-6">
      <Image
        src="/images/util/heading.webp"
        alt="Utility Heading"
        width={468}
        height={152}
        loading="lazy"
        className="w-1/3 md:w-1/4 mb-4 sm:mb-8 xl:mb-12 z-10"
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-20">
        {utils.map((util, index) => (
          <Sections
            key={index}
            text={util.text}
            imageSrc={util.imageSrc}
            imageAlt={util.imageAlt}
            title={util.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Utils;