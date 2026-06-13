"use client";
import { motion, useInView } from "framer-motion";
import WhiteButton from "./ButtonWhite";
import NetworkWidget from "./NetworkWidget";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Trendnet = () => {
  const router = useRouter();
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const words = ["Networking", "products", "trusted by GCC Metro"];
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-4 sm:px-8 md:px-12 lg:px-18 py-15 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50 to-blue-200">
      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/2">
        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={
                isHeadingInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}
              }
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className={`mr-2 inline-block ${
                word === "Networking"
                  ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl pt-5 text-gray-700"
        >
          As authorized TrendNet partners. We supply the same enterprise-grade
          networking products trusted by GCC Metro.
        </motion.h2>

        <div className="flex flex-col sm:flex-row lg:gap-10 gap-5 pt-10">
          <div className="flex flex-col gap-6">
            <NetworkWidget text={"Carrier-Grade Reliability"} />
            <NetworkWidget text={"Scalable Performance"} />
          </div>
          <div className="flex flex-col gap-6">
            <NetworkWidget text={"Advanced Security Architecture"} />
            <NetworkWidget text={"Intelligent Traffic Management"} />
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="pt-10"
        >
          <WhiteButton
            label={"Read More"}
            onClick={() => router.push("/networking")}
            showArrow
          />
        </motion.div>
      </div>

      {/* RIGHT SECTION (IMAGE) */}
      <div className="w-full lg:px-0 px-5 lg:w-1/2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { scale: 1.1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full sm:w-[400px] md:w-[500px] h-[300px] sm:h-[350px] md:h-[400px] shadow-xl rounded-xl overflow-hidden"
        >
          <Image
            src="/network.png"
            alt="Trendnet Networking Solution"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Trendnet;
