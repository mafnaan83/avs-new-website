"use client";

import WhiteButton from "@/components/ui/ButtonWhite";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const WhyChooseUs = () => {
  const content = [
    "Authentic Products with Real Cost Savings",
    "You'll pay less than gray market prices",
    "One Stop for best FMCG brands in UAE",
  ];

  const stats = [
    { value: "10+", label: "Years in market" },
    { value: "500+", label: "Retail Partners" },
    { value: "1000+", label: "SKUs Available" },
    { value: "7", label: "Emirates Covered" },
    { value: "24/7", label: "Support availability" },
  ];

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["Why", "Choose", "AVS Trading"];
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Top: Left and Right Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Left Side */}
        <div className="md:col-span-2">
          <p className="text-gray-700 text-base mb-6 text-justify">
            Businesses across the UAE rely on AVS Trading for consistent supply,
            efficient distribution, and dependable service. With a wide FMCG
            portfolio, warehousing and cold chain capabilities, and delivery
            coverage across all seven Emirates, we help retailers and HoReCa
            businesses keep products moving from supplier to shelf. Our focus is
            on building long-term partnerships and supporting customers with
            solutions that match the pace of the UAE market.
          </p>
          <WhiteButton label="Talk to us" showArrow />
        </div>

        {/* Right Side */}
        <div className="text-right md:col-span-3 md:text-left">
          <h2 className="rounded-md bg-[#FFEFD7]/60 text-[#C5A059] py-1 px-4 text-sm font-medium w-fit mb-4">
            YOUR PARTNER
          </h2>
          <h2
            ref={headingRef}
            className="text-3xl font-semibold text-black-700 md:text-6xl lg:text-8xl dark:text-slate-300 px-5"
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
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className={`mr-2 inline-block ${
                  ["JS Computers", "transformation"].includes(word)
                    ? "bg-gradient-to-r from-[#C5A059] to-[#FFEFD7] bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>

      {/* Bottom: 3 Big Cards */}
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.map((item, index) => (
          <div
            key={index}
            className="shadow-lg bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition flex flex-col justify-evenly"
          >
            {index === 1 ? (
              <>
                <h3 className="text-4xl font-base text-zinc-800">{item}</h3>
                <Image
                  src={"/money.png"}
                  height={200}
                  width={200}
                  alt="They"
                  className="py-15 mx-auto"
                />
                <h3 className="flex text-xl font-medium items-center justify-center w-18 h-18 rounded-full border-2 border-blue-100">
                  0{index + 1}
                </h3>
              </>
            ) : (
              <>
                <h3 className="flex text-xl font-medium items-center justify-center w-18 h-18 rounded-full border-2 border-blue-100">
                  0{index + 1}
                </h3>
                <Image
                  src={"/money.png"}
                  height={200}
                  width={200}
                  alt="They"
                  className="py-15 mx-auto"
                />
                <h3 className="text-4xl font-base text-zinc-800 mt-3">
                  {item}
                </h3>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Numbers */}
      <div className="flex flex-col md:flex-row mt-10 items-center md:items-start gap-10">
        <h2 className="text-2xl font-medium md:self-center text-center md:text-left min-w-[200px]">
          AVS Trading by <br /> the numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-px h-26 bg-black"></div>
              <div className="flex flex-col gap-3">
                <h3 className="text-6xl font-light text-zinc-800">
                  {stat.value}
                </h3>
                <h3 className="text-base text-zinc-600">{stat.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
