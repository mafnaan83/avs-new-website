// components/AppleMacSection.tsx
"use client";

import Image from "next/image";
import AppleMarquee from "./AppleMarquee";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeInWhenVisible from "./FramerAnimation";

const chips = [
  { src: "/m1.png", alt: "Apple M1", label: "M1" },
  { src: "/m2.png", alt: "Apple M2", label: "M2" },
  { src: "/m3.png", alt: "Apple M3", label: "M3" },
];

export default function AppleMacSection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = [
    "Quality",
    "Refurbished Mac",
    "at Affordable Prices",
    "across the UAE",
  ];
  return (
    <section className="lg:py-20 py-10 text-black">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible delay={0.5}>
          <h2 className="text-center font-bold text-2xl mb-8">
            Get the Mac you love for less
          </h2>
        </FadeInWhenVisible>
        {/* Chips */}
        <FadeInWhenVisible delay={0.6}>
          <div className="flex justify-center gap-8">
            {chips.map((chip, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-1 group-hover:inset-0.5 bg-gradient-to-r from-pink-600 to-purple-700 scale-110 group-hover:scale-110 transition duration-500"></div>
                <Image
                  src={chip.src}
                  alt={chip.alt}
                  width={80}
                  height={80}
                  className="relative object-contain group-hover:scale-100 scale-95 transition duration-500"
                />
              </div>
            ))}
          </div>
        </FadeInWhenVisible>

        <div className="flex flex-col items-center justify-center py-10">
          <h2
            ref={headingRef}
            className="text-3xl lg:max-w-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={
                  isHeadingInView
                    ? { opacity: 1, filter: "blur(0px)", y: 0 }
                    : {}
                }
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className={`mr-2 inline-block ${
                  word === "Refurbished Mac"
                    ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Horizontally scrollable laptops */}
        <FadeInWhenVisible delay={0.7}>
          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4">
              <AppleMarquee />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
