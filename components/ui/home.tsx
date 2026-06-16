"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialsMarquee from "./Marquee";
import WhiteButton from "./ButtonWhite";
import { useRouter } from "next/navigation";

export function HeroSectionOne() {
  const router = useRouter();
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center">
      {/* <Navbar /> */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-3 md:py-10">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Dubai's trusted IT products and services"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Your Trusted Partner for Seamless IT Services in Dubai. From
          Cutting-Edge Solutions to Expert Support – Weeee Deliver Excellence.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-4"
        >
          <WhiteButton
            onClick={() => router.push("/contact")}
            label={"Talk to Us"}
            showArrow
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-10 w-full mx-auto rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <Image
              src="/imahee.png"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 2 }}
        className="flex flex-col lg:flex-row items-center pt-5 lg:pt-0 justify-between lg:pl-10 pb-10 gap-5"
      >
        <h2 className="font-bold text-lg">
          Proudly Partnered with Global Innovators
        </h2>
        <div className="w-full lg:max-w-5xl max-w-screen mx-auto flex items-cente">
          <TestimonialsMarquee />
        </div>
      </motion.div>
    </div>
  );
}

// const Navbar = () => {
//   return (
//     <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
//       <div className="flex items-center gap-2">
//         <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
//         <h1 className="text-base font-bold md:text-2xl">Aceternity UI</h1>
//       </div>
//       <button className="w-32 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
//         Login
//       </button>
//     </nav>
//   );
// };
