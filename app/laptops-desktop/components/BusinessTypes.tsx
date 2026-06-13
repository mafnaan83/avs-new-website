import Image from "next/image";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fcorporate.jpeg?alt=media&token=1620bf98-9ab0-4910-98f5-786f13d168a3",
    label: "Corporate Offices",
    desc: "Productivity & management",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fpos.jpeg?alt=media&token=9fe3cb67-c458-4a23-813a-b97675014c30",
    label: "Retail & POS",
    desc: "Billing, stock, counters",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fschool.jpeg?alt=media&token=01e77832-1c1f-42c7-b311-2f24c515b732",
    label: "Education",
    desc: "Learning & labs",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Farchitect.jpeg?alt=media&token=20c2a60a-7c79-4b19-a480-c8ba9b60b149",
    label: "Architecture & Engineering",
    desc: "CAD & rendering",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fdoctors.jpeg?alt=media&token=fd08418f-e13e-445a-a79f-8fc56f5da465",
    label: "Healthcare",
    desc: "Reception & records",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Freception.jpeg?alt=media&token=09bde3d3-1ccc-447c-bf82-a4c09c56e315",
    label: "Hospitality",
    desc: "Front desk systems",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fbank.jpeg?alt=media&token=1ce32b05-0018-4ef7-a0a2-1ae318ade7a0",
    label: "Finance & Banking",
    desc: "Secure data handling",
  },
];

const BusinessTypes = () => {
  return (
    <div className="mx-auto my-20">
      <h2 className="text-5xl pl-18 font-semibold">
        Solutions by Business Type
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
