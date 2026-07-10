import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/p-hero-avs.png.png" // Place your image in /public/images/
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building The Future
            <br />
            <span className="text-[#C5A059]">One Solution at a Time</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
            Delivering innovative digital experiences with creativity,
            technology, and precision.
          </p>
        </div>
      </div>
    </section>
  );
}
