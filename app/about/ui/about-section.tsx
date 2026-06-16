"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeadingComponent from "@/components/ui/Heading";
import { useRouter } from "next/navigation";
import GradientButton from "@/components/ui/GradientButton";

interface AboutUsSectionProps {
  heading?: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right"; // image on left or right
}

export default function AboutUsSection({
  heading = "ABOUT US",
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt = "Section Image",
  imagePosition = "right",
}: AboutUsSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const isImageLeft = imagePosition === "left";
  const router = useRouter();

  return (
    <section ref={ref} className="w-full lg:py-16 bg-white">
      <div
        className={`container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
          isImageLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <HeadingComponent text={heading} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-600 text-base sm:text-lg mb-4">
              {subtitle}
            </p>
          )}
          {paragraphs.map((para, index) => (
            <p
              key={index}
              className="text-gray-600 text-base text-justify sm:text-lg mb-4"
            >
              {para}
            </p>
          ))}
          <GradientButton
            onClick={() => router.push("/contact")}
            label="Talk to us"
            showArrow
          />
        </div>

        {/* Image Section */}
        <motion.div
          style={{ y }}
          className="w-full md:w-1/2 relative h-64 sm:h-120"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg shadow-md"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
