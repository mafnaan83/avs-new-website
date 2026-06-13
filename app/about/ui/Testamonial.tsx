"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Testamonialarquee from "./TestamonialMarquee";

const Testamonial = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["We", "Deliver", "What We", "Promise"];

  return (
    <div className="flex flex-col items-center text-center py-20">
      <h2 className="rounded-md bg-blue-50 text-blue-700 py-1 px-4 text-sm font-medium w-fit mb-4">
        TESTIMONIALS
      </h2>

      <h2
        ref={headingRef}
        className="text-3xl max-w-4xl font-semibold text-black-700 md:text-5xl lg:text-6xl dark:text-slate-300 px-5"
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
              ["Promise", "transformation"].includes(word)
                ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <div className="w-full">
        <Testamonialarquee />
      </div>
    </div>
  );
};

export default Testamonial;
