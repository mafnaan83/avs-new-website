"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const LogosMarquee = () => {
  // Images for the infinite scroll - using Unsplash URLs
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/networking-logos%2FDocument%20Attestaion%20services%20(2).png?alt=media&token=211d8347-f2cf-4b79-9720-f21ed519f65f",
    "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/networking-logos%2FDocument%20Attestaion%20services%20(3).png?alt=media&token=9ef1aa30-00e0-40d2-a026-7725095ba9f4",
    "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/networking-logos%2FDocument%20Attestaion%20services%20(4).png?alt=media&token=5edd82f3-078b-4d99-ba91-7d1db78cb010",
    "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/networking-logos%2FDocument%20Attestaion%20services%20(5).png?alt=media&token=682809d2-a04d-4db6-aaf7-d91478f20c23",
    "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/networking-logos%2FDocument%20Attestaion%20services%20(6).png?alt=media&token=34fb6110-2ccf-4c0b-bcd6-9a2753b642fa",
    "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/networking-logos%2FDocument%20Attestaion%20services%20(7).png?alt=media&token=316c8c77-d126-4d70-a015-04b69a44121f",
    "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/networking-logos%2FDocument%20Attestaion%20services.png?alt=media&token=74c77fbd-ea1d-4f1a-a58c-3dc56e87ac69",
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
                  ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <p className="max-w-2xl text-center text-lg text-gray-500 py-8">
          We supply a wide range of new and certified used laptops, desktops,
          and accessories from trusted global manufacturers.
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
