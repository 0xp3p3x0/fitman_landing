import Sections from "./ui/sections"


export function UtilitiesSection() {
  const sectionsData = [
    {
      text: "Charity fighting hunger! Because even heroes need to eat well, and so should everyone else. Making the world fatter... with kindness!",
      imageSrc: "/images/graphics/16.png",
      imageAlt: "About Bottom Image",
      title: "FATFOOD"
    },
    {
      text: "Community governance where every vote counts! Shape the future while FATMAN munches on governance proposals. Democracy never tasted SO GOOD!",
      imageSrc: "/images/graphics/17.png",
      imageAlt: "About Bottom Image",
      title: "FATDAO"
    },
    {
      text: "Our chunky DEX with 0.25% trading fees! Swap tokens while FATMAN gets fatter from the fees! Every trade makes our hero more powerful!",
      imageSrc: "/images/graphics/15.png",
      imageAlt: "About Bottom Image",
      title: "FATSWAP"
    },
    {
      text: "Launch projects with FATMAN's backing! We help good projects get fat returns while our hero provides the muscle (and belly)!",
      imageSrc: "/images/graphics/18.png",
      imageAlt: "About Bottom Image",
      title: "SNACK PAD"
    },
    {
      text: "Usage creates fees, fees fuel buybacks, buybacks burn supply, supply reduction drives value.",
      imageSrc: "/images/graphics/11.png",
      imageAlt: "About Bottom Image",
      title: "FATBURN"
    },
    {
      text: "Official FATMAN merchandise store! Rep the brand in XXXL sizes while supporting our chunky ecosystem. Fashion meets function!",
      imageSrc: "/images/graphics/12.png",
      imageAlt: "About Bottom Image",
      title: "FATMERCH"
    },
    {
      text: "Play-to-earn games in the FATMAN universe! Battle villains, save Gotham, and earn $FAT rewards. Gaming has never been this chunky!",
      imageSrc: "/images/graphics/13.png",
      imageAlt: "About Bottom Image",
      title: "FATVERSE GAMES"
    },
    {
      text: "Official FATMAN merchandise store! Rep the brand in XXXL sizes while supporting our chunky ecosystem. Fashion meets function!",
      imageSrc: "/images/graphics/14.png",
      imageAlt: "About Bottom Image",
      title: "FAT NFTS"
    }
  ];

  return (
    <section
      className="relative items-center justify-center overflow-hidden bg-yellow-100 py-12 lg:py-24"
    >
      <div className="w-full h-auto text-center mb-20 px-4">
        <img
          src="/images/utility_title.png"
          alt="Utilities Section"
          className="mx-auto w-72 md:w-96"
          />
        </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-20">
        {/* Map through the sectionsData array to render each section */}
        {sectionsData.map((section, index) => (
          <Sections
            key={index}
            text={section.text}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
            title={section.title}
          />
        ))}
      </div>
    </section>
  );
}
