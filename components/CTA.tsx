import Image from "next/image";

const CTA = () => {
  return (
    <section
      className="overflow-hidden relative grid grid-cols-1 md:grid-cols-[1fr_1fr] px-8 md:py-8 md:px-12 gap-4 md:gap-8 items-center justify-center"
      style={{ backgroundColor: "#FEE280" }}
    >
      <div className="flex justify-center z-10">
        <Image
          src="/images/whitelist/fat.webp"
          alt="Whitelist FATMAN"
          width={800}
          height={1050}
          loading="lazy"
          className="w-1/2 md:w-3/4"
        />
      </div>

      <Image
        src="/images/whitelist/desc.webp"
        alt="Whitelist Desc"
        width={1024}
        height={1024}
        loading="lazy"
        className="z-10"
      />

      <Image
        src="/images/whitelist/button.webp"
        alt="Whitelist Button"
        width={480}
        height={480}
        loading="lazy"
        className="z-20 absolute max-md:translate-y-2/3 bottom-2/3 md:bottom-0 left-1/2 -translate-x-1/2 
        hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out
        w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64"
      />
    </section>
  );
};

export default CTA;
