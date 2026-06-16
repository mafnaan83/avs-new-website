"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const LogosMarquee = () => {
  // Images for the infinite scroll - using Unsplash URLs
  const images = [
    "/avs-brand-1.png",
    "/avs-brand-2.png",
    "/avs-brand-3.png",
    "/avs-brand-4.png",
    "/avs-brand-5.png",
    "/avs-brand-6.png",
    "/avs-brand-7.png",
    "/avs-brand-8.png",
    "/avs-brand-9.png",
    "/avs-brand-10.png",
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["Brands", "We", "Deal", "With"];

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 20s linear infinite;
        }
          
        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

      <div className="w-full relative overflow-hidden py-20 flex flex-col items-center justify-center">
        <h2
          ref={headingRef}
          className="text-3xl max-w-4xl font-semibold text-black-700 md:text-5xl lg:text-6xl dark:text-slate-300"
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
                  ? "bg-gradient-to-r from-[#C5A059] to-[#E9C176] bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <p className="max-w-2xl text-center text-lg text-gray-500 py-8">
          We work with a wide range of local and international FMCG brands,
          supplying quality products to retailers and businesses across the UAE.
        </p>
        {/* Background gradient */}
        <div className="absolute inset-0 z-0" />

        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center py-0">
          <div className="scroll-container w-full max-w-6xl">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-40 h-40 md:w-64 md:h-64 lg:w-50 lg:h-50 rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
      </div>
    </>
  );
};
