"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useRouter } from "next/navigation";
import WhiteButton from "@/components/ui/ButtonWhite";
import Techmarquee from "./Helpers/TechMarquee";

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

const AboutDigital = () => {
  const router = useRouter();
  return (
    <div className="py-15 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-2 pt-5">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl">
            Technologies We Use to Build Powerful Digital Solutions
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="max-w-xl">
            <p className="text-base md:text-lg pb-5">
              We use modern frameworks and trusted platforms to build fast,
              secure, and scalable websites, apps, and digital systems. Our tech
              stack is designed to support businesses of all sizes across Dubai.
            </p>
            <WhiteButton
              onClick={() => router.push("/about")}
              label="Learn More"
              showArrow
            />
          </div>
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible delay={0.3}>
        <div className="w-full lg:max-w-5xl max-w-screen mx-auto flex items-cente">
          <Techmarquee />
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default AboutDigital;
