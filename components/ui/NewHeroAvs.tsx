"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn
import Image from "next/image";
import { useRouter } from "next/navigation";
import GradientButton from "./GradientButton";

// Props interface for the component
interface AnimatedMarqueeHeroProps {
  description: string;
  images: string[];
  className?: string;
}

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  description,
  images,
  className,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];
  const router = useRouter();
  return (
    <section
      className={cn(
        "relative w-full min-h-[80vh] overflow-hidden flex flex-col items-center justify-start text-center pt-10",
        className,
      )}
    >
      <div className="z-10 flex flex-col items-center">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-4xl font-bold text-black md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Keeping Dubai's Shelves Stocked, Every Day"
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

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          {description}
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
          <GradientButton
            onClick={() => router.push("/contact")}
            label={"Talk to Us"}
            showArrow
          />
        </motion.div>
      </div>

      {/* Animated Image Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 5}deg`,
              }}
            >
              <Image
                width={200}
                height={100}
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
