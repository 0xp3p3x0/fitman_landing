import Image from "next/image"

export function AboutSection() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: '#FEE280' }}
        >

            <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400 z-20"></div>
            <div>
                <Image
                    src="/images/about-section.png"
                    alt="About Top Image"
                    loading="lazy"
                    width={800}
                    height={800}
                    className="absolute top-10 left-0 z-3 max-w-full h-auto w-fit"
                />
                <div className="relative top-4 z-10 text-center px-20 w-1/2">
                    <p className="font-['Gagalin-Regular'] text-left leading-12 text-with-stroke">FATMAN IS A FOOD-LOVING HERO BORN IN WEB3 AND RAISED BY THE
                        MEME CULTURE OF THE INTERNET. HE BECAME A SYMBOL OF
                        LAUGHTER AND COMMUNITY AFTER HIS LARGER-THAN-LIFE
                        APPETITE AND PERSONALITY CAPTURED ATTENTION ACROSS CRYPTO.
                        HE IS KNOWN FOR HIS LOVE OF SNACKS, HIS UNAPOLOGETIC HUMOR.
                        AND HIS MISSION TO TURN MEMES INTO LASTING VALUE FOR
                        EVERYONE.
                        HE NOW LIVES ON THE BNB CHAIN THROUGH $FAT, CREATING A
                        LEGACY THAT BLENDS FUN WITH REAL UTILITY.
                        JON HIM THE FATVERSE AND BE PART OF STORY.</p>
                </div>
            </div>
            <Image
                src={"/images/about-bottom.png"}
                alt="About Image"
                loading="lazy"
                width={800}
                height={800}
                className="absolute bottom-0 left-0 z-3 max-w-full h-auto w-fit"
            />
            <div className="absolute bottom-0 right-40 z-10 text-center px-6 flex flex-col space-y-4 justify-centers items-center">
                <Image
                    src={"/images/hero.png"}
                    alt="About Image"
                    loading="lazy"
                    width={800}
                    height={800}
                    className=" relative bottom-30 right-5 z-6 max-w-full h-fit w-fit animate-bounce"
                />
                <Image
                    src={"/images/bumper.png"}
                    alt="About Image"
                    loading="lazy"
                    width={800}
                    height={800}
                    className="absolute bottom-2 right-5 z-5 max-w-full h-auto w-fit"
                />
            </div>
        </section>
    )
}