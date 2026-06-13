"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ArrowRight as NextArrow } from "lucide-react";
import Image from "next/image";

const WhyBetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["Protecting", "Your Home", "Securing Your", "Peace"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2
              ref={headingRef}
              className="text-3xl font-semibold text-black md:text-5xl lg:text-5xl dark:text-slate-300 px-5 max-w-4xl mx-auto"
            >
              <motion.div className="flex flex-wrap gap-x-2 gap-y-1 text-left">
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
                    className={`${
                      ["Surveillance", "transformation"].includes(word)
                        ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 max-w-md leading-relaxed"
            >
              Data-driven insights for wealth management advisors and
              executives.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-16"
            >
              <Button className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                Reinforce your team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  $150.00
                </div>
                <div className="text-sm text-gray-500">per month</div>
              </div>
            </motion.div>

            {/* Divider Line */}
            <motion.div
              variants={itemVariants}
              className="w-full h-px bg-gray-200 mb-8 sm:mb-12"
            ></motion.div>

            {/* Client Logos Section */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-600 text-sm mb-6">
                We provide our services to many worldwide leading companies.
              </p>

              <div className="flex items-center justify-between max-w-md">
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                  <ArrowLeft className="w-4 h-4 text-gray-600" />
                </button>

                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-black rounded-sm"></div>
                    <span className="font-semibold text-gray-900">Headway</span>
                  </div>
                  <span className="font-bold text-gray-900 text-lg">G&STC</span>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">$</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      SteadyMD
                    </span>
                  </div>
                </div>

                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                  <NextArrow className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats and Image */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-8 md:p-12">
              {/* Stats Cards */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {/* Efficiency Increase Card */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      +25.5%
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    Increase of the company`s efficiency
                  </h3>
                  <p className="text-xs text-gray-500">(+2.0%) Month</p>
                </div>

                {/* Client Rating Card */}
                <div className="bg-black rounded-2xl p-4 sm:p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">9.8</span>
                    </div>
                    <span className="font-medium">Overall clients rate</span>
                  </div>
                  <p className="text-xs text-gray-400">More than 10K reviews</p>
                </div>
              </div>

              {/* Professional Image */}
              <div className="relative">
                <Image
                  height={200}
                  width={200}
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=face"
                  alt="Professional consultant"
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl"
                />
                {/* Laptop overlay illustration */}
                <div className="absolute top-4 right-4 w-16 h-12 sm:w-20 sm:h-16 bg-gray-800 rounded-lg opacity-90">
                  <div className="w-full h-3/4 bg-white rounded-t-lg mt-1 mx-1"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBetter;
