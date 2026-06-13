"use client";

import { CircleCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import WhiteButton from "./ButtonWhite";
import TiltCard from "./DesktopCard";

type FadeProps = {
  children: ReactNode;
  delay?: number;
};

const FadeInWhenVisible = ({ children, delay = 0 }: FadeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

interface ProfessionalBadgeProps {
  text: string;
  heading: string;
}

export const ProfessionalBadge = ({
  text,
  heading,
}: ProfessionalBadgeProps) => (
  <div className="flex gap-2 items-start">
    <CircleCheck className="text-blue-600 mt-1" />
    <h2 className="text-base sm:text-lg font-medium">
      <span className="font-semibold">{heading}</span> {text}
    </h2>
  </div>
);

function Desktop() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["Computers", "Built", "How You Want Them"];

  return (
    <div className="w-full bg-[url('/bg-image.png')] bg-cover bg-no-repeat bg-center pt-10 sm:py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text Block */}
          <div className="flex flex-col gap-6">
            <FadeInWhenVisible>
              <h2 className="rounded-md bg-blue-50 text-blue-700 py-1 px-4 text-sm font-medium w-fit">
                SETUP
              </h2>
            </FadeInWhenVisible>
            <div className="flex flex-col gap-4">
              <h2
                ref={headingRef}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
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
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className={`mr-2 inline-block ${
                      word === "Computers"
                        ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md text-left">
                  Tell us what you need it for, and we`ll put together the right
                  combination of:
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <div className="flex flex-col gap-2">
                  <ProfessionalBadge
                    heading="Processor"
                    text="Intel or AMD - matched to your software"
                  />
                  <ProfessionalBadge
                    heading="Graphics"
                    text="From basic office use to hardcore gaming/rendering"
                  />
                  <ProfessionalBadge
                    heading="Cooling"
                    text="Smart thermal designs that prevent throttling"
                  />
                </div>
              </FadeInWhenVisible>
            </div>
            <FadeInWhenVisible delay={0.5}>
              <div className="md:pt-5">
                <WhiteButton label="Get a Quote" showArrow />
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right Tilt Card */}
          <FadeInWhenVisible delay={0.6}>
            <div className="max-w-[400px] mx-auto w-full">
              <TiltCard />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
}

export { Desktop };
