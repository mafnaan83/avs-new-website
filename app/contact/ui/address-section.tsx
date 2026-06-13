"use client";
// components/AddressesSection.jsx
import { motion, useInView } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

type FadeProps = {
  children: ReactNode;
  delay?: number;
};

const FadeInWhenVisible = ({ children, delay = 0 }: FadeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const addresses = [
  {
    country: "UAE",
    flag: "/ae.png", // Make sure flags are inside /public/flags/
    address: "Al Raffa Street, Bur Dubai, Dubai, UAE",
    phone: "+971 582800809",
    wa: "+971582800809",
  },
  {
    country: "CANADA",
    flag: "/ca.png",
    address: "177 Panton Way NW Calgary AB, Canada",
    phone: "+1 403-613-6175",
    wa: "+14036136175",
  },
  {
    country: "UAE",
    flag: "/ae.png",
    address: "Warehouse, Industrial Area 2, Sharjah, UAE",
    phone: "+971 582800809",
    wa: "+971582800809",
  },
];

export default function AddressesSection() {
  return (
    <section className="py-12 px-4">
      <FadeInWhenVisible delay={0.5}>
        <div className="mx-auto lg:max-w-6xl grid md:grid-cols-3 lg:gap-20 justify-start">
          {addresses.map((item, index) => (
            <div key={index} className="flex flex-col max-w-2xs p-6">
              <div className="relative w-12 h-8 mb-4">
                <Image
                  src={item.flag}
                  alt={`${item.country} flag`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <p className="text-lg font-semibold">{item.country}</p>
              <p className=" text-lg mb-2">{item.address}</p>
              <a
                href={`tel:${item.phone}`}
                className="text-m font-semibold flex items-center gap-2 select-text"
                style={{ userSelect: "text" }}
              >
                <Phone className="w-4 h-4" />
                {item.phone}
              </a>

              <a
                href={`https://wa.me/${item.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex  gap-2 mt-2 items-center text-m font-semibold rounded-full"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
