import Image from "next/image";

interface HeroProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroProps) => {
  return (
    <section className="max-w-7xl mx-auto mb-10">
      <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
        <Image
          src={heroImage}
          alt="Laptops and storage solutions"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
