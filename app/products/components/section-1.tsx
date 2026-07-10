import Image from "next/image";

export default function Section1() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-20 lg:flex-row lg:px-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-semibold text-[#2E3626] md:text-5xl lg:text-7xl">
            Connecting Global Brands with Markets Worldwide
          </h2>

          <p className="mt-10 max-w-lg text-lg leading-8 text-[#555]">
            AVS General Trading LLC works with a diverse portfolio of FMCG
            brands, connecting quality products with customers across
            international markets. Through our sourcing and distribution
            network, we support businesses across Saudi Arabia, Africa, the
            United Kingdom, the United States, and beyond.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="relative h-[350px] w-[320px] sm:h-[450px] sm:w-[430px] md:h-[550px] md:w-[520px] lg:h-[650px] lg:w-[650px]">
            <Image
              src="/tang-avs-2.png"
              alt="Product"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
