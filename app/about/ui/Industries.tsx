import Image from "next/image";

const images = [
  {
    src: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Healthcare",
  },
  {
    src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    label: "Finance",
  },
  {
    src: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Restaurants",
  },
  {
    src: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
    label: "Education",
  },
  {
    src: "https://images.pexels.com/photos/7642199/pexels-photo-7642199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    label: "Real Estate",
  },
];

const Industries = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-5xl pl-18 font-base">Industries we work with</h2>
      <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide py-6 pl-18">
        <div className="flex gap-6">
          {images.map(({ src, label }, index) => (
            <div
              key={index}
              className="group relative inline-block min-w-[300px] h-110 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
