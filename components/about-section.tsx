import Image from "next/image"

export function AboutSection() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: '#FEE280' }}
        >
            <Image
                src="/images/about-section.png"
                alt="About Image"
                loading="lazy"
                width={800}
                height={800}
                className="absolute top-20 z-4 max-w-full h-auto w-fit"
            />
            <Image
                src={"/images/about-bottom.png"}
                alt="About Image"
                loading="lazy"
                width={800}
                height={800}
                className="absolute bottom-0 left-0 z-3 max-w-full h-auto w-fit"
            />
            <Image
                src={"/images/about_fatman.gif"}
                alt="About Image"
                loading="lazy"
                width={800}
                height={800}
                className="absolute bottom-0 right-0 z-5 max-w-full h-auto w-fit"
            />

        </section>
    )
}