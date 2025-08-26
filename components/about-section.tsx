import Image from "next/image";

export function AboutSection() {
    return (
        <section
            className="relative flex flex-row items-start justify-between overflow-hidden px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-20"
            style={{ backgroundColor: "#FEE280" }}
        >
            {/* Left (image + text) */}
            <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
                <Image
                    src="/images/about-section.png"
                    alt="About Top Image"
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full md:max-w-full h-auto"
                />
                <div className="font-['Gagalin-Regular'] text-left max-[425px]:text-[8px] max-md:text-xs md:text-base lg:text-2xl xl:text-3xl [text-stroke:1px_white] [text-fill-color:black] leading-relaxed md:leading-relaxed lg:leading-10 xl:leading-12">
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

            {/* Right (hero + bumper) */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative z-10 mt-8 lg:mt-0">
                <Image
                    src={"/images/hero.png"}
                    alt="Hero"
                    loading="lazy"
                    width={500}
                    height={500}
                    className="relative max-w-[50%] md:max-w-[60%] -bottom-12 md:-bottom-18 lg:-bottom-22 xl:-bottom-26 z-20 animate-bounce"
                />
                <Image
                    src={"/images/bumper.png"}
                    alt="Bumper"
                    loading="lazy"
                    width={500}
                    height={500}
                    className="relative max-w-[50%] md:max-w-[60%] -bottom-8 lg:-bottom-12 xl:-bottom-16 z-10"
                />
            </div>

            {/* Bottom background image */}
            <Image
                src={"/images/about-bottom.png"}
                alt="About Bottom"
                loading="lazy"
                width={1600}
                height={400}
                className="absolute bottom-0 left-0 w-full h-auto z-0"
            />
        </section>
    );
}
