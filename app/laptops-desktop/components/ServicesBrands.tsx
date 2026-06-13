"use client";

import {} from "lucide-react";
import { LogoCarousel } from "./Helpers/logo-carosul";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos1 = [
  { id: 1, name: "HP", img: "/logo1.png" },
  { id: 2, name: "LENOVO", img: "/logo2.png" },
  { id: 3, name: "DELL", img: "/logo4.png" },
  { id: 4, name: "Apple", img: "/apple.png" },
];

const logos2 = [
  { id: 5, name: "ACER", img: "/acer.png" },
  { id: 6, name: "ASUS", img: "/asus.png" },
  { id: 6, name: "CORSAIR", img: "/corsair.png" },
];

export default function Brands() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["Brands", "We", "Deal", "With"];
  return (
    <div className="lg:py-12 flex flex-col items-center justify-center">
      <h2
        ref={headingRef}
        className="text-3xl max-w-4xl font-semibold text-black-700 md:text-5xl lg:text-6xl dark:text-slate-300 px-5"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={
              isHeadingInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}
            }
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className={`mr-2 inline-block ${
              ["Brands", "transformation"].includes(word)
                ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </h2>
      <p className="max-w-2xl text-center text-lg text-gray-500 py-8">
        We supply a wide range of new and certified used laptops, desktops, and
        accessories from trusted global manufacturers.
      </p>
      <LogoCarousel logos={logos1} columnCount={3} />
      <LogoCarousel logos={logos2} columnCount={3} />
    </div>
  );
}
