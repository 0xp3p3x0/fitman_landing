import Image from "next/image";

const About = () => {
    return (
        <section
            className="relative flex flex-col sm:flex-row items-center justify-between overflow-hidden 
                       px-4 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16"
            style={{ backgroundColor: "#FEE280" }}
            id="about"
        >
            <div className="relative z-10 w-full sm:w-1/2 flex flex-col items-center lg:items-start space-y-2 sm:space-y-4">
                <Image
                    src="/images/about/heading.webp"
                    alt="About Heading"
                    width={957}
                    height={198}
                    loading="lazy"
                    className="w-2/3 sm:w-full h-auto"
                />

                <div className="relative z-10 font-['Gagalin-Regular'] text-left text-stroke
                                xl:text-3xl/12 lg:text-2xl/9 sm:text-lg/8 text-base/6 max-sm:mb-6">
                    FATMAN IS A FOOD-LOVING HERO BORN IN WEB3 AND RAISED BY THE
                    MEME CULTURE OF THE INTERNET. HE BECAME A SYMBOL OF
                    LAUGHTER AND COMMUNITY AFTER HIS LARGER-THAN-LIFE
                    APPETITE AND PERSONALITY CAPTURED ATTENTION ACROSS CRYPTO.
                    HE IS KNOWN FOR HIS LOVE OF SNACKS, HIS UNAPOLOGETIC HUMOR.
                    AND HIS MISSION TO TURN MEMES INTO LASTING VALUE FOR
                    EVERYONE.
                    HE NOW LIVES ON THE BNB CHAIN THROUGH $FAT, CREATING A
                    LEGACY THAT BLENDS FUN WITH REAL UTILITY.
                    JOIN HIM IN THE FATVERSE AND BE PART OF THE STORY.
                </div>
            </div>

            <div className="z-20 w-full sm:w-1/2 flex flex-col items-center justify-center -space-y-4 sm:-space-y-8">
                <Image
                    src={"/images/about/fat.webp"}
                    alt="Hero"
                    width={480}
                    height={480}
                    loading="lazy"
                    className="animate-bounce w-1/3 sm:w-1/2"
                />

                <Image
                    src={"/images/about/bumper.webp"}
                    alt="Bumper"
                    width={622}
                    height={250}
                    loading="lazy"
                    className="w-1/3 sm:w-1/2"
                />
            </div>

            <Image
                src={"/images/about/bg.webp"}
                alt="About BG"
                width={1920}
                height={429}
                loading="lazy"
                className="absolute bottom-0 left-0 w-full h-auto z-0"
            />
        </section>
    );
};

export default About;
