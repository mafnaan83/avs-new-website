import Image from "next/image";
import Link from "next/link";
import { brandsData } from "../data/brands";

// const brands = [
//   {
//     name: "Brand One",
//     image: "/kraft-avs-1.png",
//   },
//   {
//     name: "Brand Two",
//     image: "/lurpak-avs-1.png",
//   },
//   {
//     name: "Brand Three",
//     image: "/tang-avs-3.png",
//   },
//   {
//     name: "Brand Four",
//     image: "/halls-avs-1.png",
//   },
//   {
//     name: "Brand Five",
//     image: "/pepsi-avs-1.png",
//   },
//   {
//     name: "Brand Six",
//     image: "/barni-avs-1.png",
//   },
//   {
//     name: "Brand Seven",
//     image: "/lindt-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/milka-avs-1.jpg",
//   },
//   {
//     name: "Brand Eight",
//     image: "/puck-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/oreo-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/green-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/clorets-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/redbull-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/monster-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/phl-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/alchai-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/kingcoal-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/klassikos-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/maggie-avs-1.png",
//   },
//   {
//     name: "Brand Eight",
//     image: "/heinz-avs-1.png",
//   },
// ];

export default function BrandCards() {
  const brands = Object.values(brandsData);
  return (
    <section className=" px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold text-[#2E3626] md:text-5xl">
            Our Brands
          </h2>
          <p className="mt-4 text-gray-600">
            Explore our premium collection of trusted brands
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.slug}
              className="
                group
                relative
                h-[420px]
                overflow-hidden
                rounded-3xl
              "
            >
              {/* Image */}
              <Image
                src={brand.cardImage}
                alt={brand.name}
                fill
                className="
                  object-cover
                  transition duration-700
                  md:group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/40
                  md:bg-black/0
                  transition-all duration-500
                  md:group-hover:bg-black/40
                "
              />

              {/* Glass Button */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  opacity-100
                  translate-y-0
                  md:opacity-0
                  md:translate-y-8
                  transition-all duration-500
                  md:group-hover:translate-y-0
                  md:group-hover:opacity-100
                "
              >
                <Link
                  href={`/products/${brand.slug}`}
                  className="
                    rounded-l-sm
                    rounded-r-sm
                    border border-white/40
                    bg-white/20
                    px-4 py-1
                    text-white
                    backdrop-blur-xl
                    shadow-lg
                    text-sm
                    transition
                    hover:bg-white/30
                  "
                >
                  See Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
