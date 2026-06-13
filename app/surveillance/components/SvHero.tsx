"use client";
import { motion, useInView } from "framer-motion";
import { Check, TvMinimal, Camera, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const SvHero = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = [
    "Smart",
    "Surveillance",
    "Solutions for",
    "Homes & Businesses",
  ];
  const features = [
    "Engage your viewers with over 230 AI avatars",
    "Make your videos more inclusive and diverse",
    "Create your own AI avatar (your digital twin)",
  ];

  const specifications = [
    {
      icon: <TvMinimal className="w-6 h-6 text-white" />,
      label: "4K UHD",
    },
    {
      icon: <Camera className="w-6 h-6 text-white" />,
      label: "Night Vision",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      label: "Motion Detection",
    },
  ];

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            ref={headingRef}
            className="text-3xl font-semibold text-black md:text-5xl lg:text-5xl dark:text-slate-300 text-center px-5 max-w-4xl mx-auto"
          >
            <motion.div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
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
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-800 to-blue-900 rounded-3xl p-8 md:p-12 overflow-hidden min-h-110">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Features */}
            <div className="space-y-6 max-w-sm w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-2 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Center: Image */}
            <div className="flex-shrink-0 h-80 w-80">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2FCaeraaa.webp?alt=media&token=7fed2374-e3a2-4952-a8d1-a09f9d1e9760"
                alt="Security Camera"
                className="object-cover"
                width={1000}
                height={1000}
              />
            </div>

            {/* Right: Icon Cards */}
            <div className="flex flex-col gap-4 items-start">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-2 border border-white/20 text-center flex flex-col items-start justify-center min-w-[140px]"
                >
                  {spec.icon}
                  <div className="text-white text-sm mt-2">{spec.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SvHero;
