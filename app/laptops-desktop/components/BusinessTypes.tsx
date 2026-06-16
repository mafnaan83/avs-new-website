import Image from "next/image";

const images = [
  {
    src: "/food-avs.png",
    label: "Food & Beverage",
    desc: "",
  },
  {
    src: "/personal-avs.png",
    label: "Personal Care",
    desc: "",
  },
  {
    src: "/house-avs.png",
    label: "Household Essentials ",
    desc: "",
  },
  {
    src: "/snacks-avs.png",
    label: "Snacks & Confectionery",
    desc: "",
  },
  {
    src: "/baby-avs.png",
    label: "Baby Care",
    desc: "",
  },
];

const BusinessTypes = () => {
  return (
    <div className="mx-auto my-20">
      <h2 className="text-5xl pl-18 font-semibold">
        Featured Product Categories
      </h2>

      <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide py-6 pl-18">
        <div className="flex gap-6">
          {images.map(({ src, label, desc }, index) => (
            <div
              key={index}
              className="group relative inline-block min-w-[300px] h-110 rounded-xl overflow-hidden shadow-md"
            >
              {/* Background Image */}
              <Image
                src={src}
                alt={label}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />

              {/* Top or bottom label depending on index */}
              {index % 2 === 0 ? (
                // Top label for even index (0, 2, 4...)
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-6">
                  <h4 className="text-white font-semibold text-2xl">{label}</h4>
                  <p className="text-white">{desc}</p>
                </div>
              ) : (
                // Bottom label for odd index (1, 3, 5...)
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-white font-semibold text-2xl">{label}</h4>
                  <p className="text-white">{desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessTypes;
