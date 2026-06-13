"use client";
import ProfileCarousel from "./Carousal";
import { motion } from "framer-motion";
import WhiteButton from "../ui/ButtonWhite";
import { useRouter } from "next/navigation";


const NewHero = () => {
  const router = useRouter();
  return (
    <div className="relative mx-auto flex items-center justify-center px-4 py-12 sm:py-16 md:py-0">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-8">
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
              Cutting-Edge Solutions to Expert Support – We Deliver Excellence.
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
              <div className="relative">
                <div
                  className="bg-gradient-to-br from-blue-500 via-blue-800 to-blue-900  rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 relative"
                  style={{ overflow: "hidden" }}
                >
                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 md:mb-8 gap-3 sm:gap-0">
                    <WhiteButton label={"Explore Services"} showArrow />
                  </div>

                  {/* Carousel Content */}
                  <ProfileCarousel />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* NewHero Image Section */}
      </div>
    </div>
  );
};

export default NewHero;
