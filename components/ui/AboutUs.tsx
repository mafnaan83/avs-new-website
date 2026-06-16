"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import GradientButton from "./GradientButton";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="lg:pb-20 pt-20 px-4 sm:px-6 lg:px-2 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-md bg-[#FFEFD7]/50 text-[#C5A059] py-1 px-4 text-sm font-medium w-fit"
          >
            ABOUT US
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:text-5xl text-3xl font-semibold"
          >
            Moving Everyday Products Across the
            <span className="bg-gradient-to-r from-[#C5A059] to-[#E9C176] bg-clip-text text-transparent pl-2">
              UAE
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:max-w-lg text-gray-500 text-justify md:text-center lg:text-justify lg:text-lg font-normal"
          >
            AVS Trading is a Dubai-based FMCG trading and distribution company
            serving businesses across the UAE. We source, store, and distribute
            food, beverages, dairy, frozen foods, personal care, and household
            products to supermarkets, grocery stores, and HoReCa customers. With
            reliable delivery and cold chain capabilities, we help retailers
            keep their shelves stocked across all seven Emirates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <GradientButton
              onClick={() => router.push("/about")}
              label={"Read more"}
              showArrow
            />
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative w-full aspect-[16/10] sm:aspect-[5/3] lg:aspect-[16/10] flex items-center justify-center"
        >
          <div className="relative w-full h-full  bg-cover bg-center drop-shadow-xl rounded-[10px] rounded-br-[80px] sm:rounded-br-[100px] lg:rounded-br-[120px] flex items-center justify-center p-4 sm:p-8">
            <Image
              src="/aboutus-avs.png"
              alt="Foreground"
              width={1200}
              height={1200}
              className="object-contain drop-shadow-xl rounded-[10px] rounded-br-[60px] sm:rounded-br-[80px] hover:scale-102 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
