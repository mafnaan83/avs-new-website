import React from "react";
import Image from "next/image";

const systems = ["Wireless", "Switches", "Wired", "Industrial", "Surveillance"];
const standards = [
  {
    name: "Switch",
    icon: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fswitch.jpeg?alt=media&token=598ff268-8036-4dd9-800c-8c09879d66a5",
  },
  {
    name: "Router",
    icon: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Frouter.webp?alt=media&token=9a95e9db-568d-4851-b939-a911ba1f33bb",
  },
  {
    name: "Access point",
    icon: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Faccess.webp?alt=media&token=33f75096-2135-4d5f-92b5-bdfc2dc354a4",
  },
];

const FabricIntegration = () => {
  return (
    <section className="flex items-center justify-center px-4">
      <div className="relative max-w-4xl w-full flex flex-col items-center">
        {/* Fabric Logo */}
        <div className="bg-white rounded-sm px-6 py-2 shadow-md mb-6">
          <h2 className="text-xl font-bold text-black">TRENDnet</h2>
        </div>

        {/* Middle Stack */}
        <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl px-6 py-8 w-full max-w-[250px]">
          <div className="flex flex-col gap-2">
            {systems.map((name, idx) => (
              <div
                key={idx}
                className="bg-white text-sm text-center rounded-lg py-2 px-4 text-gray-800 font-medium shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Side Icons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-2 items-center">
            <StandardBox {...standards[0]} />
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 items-center">
            <StandardBox {...standards[1]} />
          </div>
        </div>
        <div className="absolute bottom-0 translate-y-full mt-8">
          <StandardBox {...standards[2]} />
        </div>
      </div>
    </section>
  );
};

const StandardBox = ({ name, icon }: { name: string; icon: string }) => (
  <div className="bg-white rounded-lg shadow-md py-2 flex flex-col items-center justify-center w-24 h-24 transition-transform duration-300 transform hover:scale-105">
    <Image
      src={icon}
      alt={name}
      width={60}
      height={60}
      className="mb-2 object-contain"
    />
    <p className="text-sm font-semibold text-gray-700">{name}</p>
  </div>
);

export default FabricIntegration;
