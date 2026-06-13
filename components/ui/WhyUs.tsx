"use client";
import { HardDrive, Laptop, Router, Video } from "lucide-react";
import WhiteButton from "./ButtonWhite";
import InfoCard from "./InfoCard";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useRouter } from "next/navigation";

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

const WhyUs = () => {
  const router = useRouter();
  return (
    <div className="py-15 px-5 md:px-10 lg:px-20">
      <FadeInWhenVisible>
        <h2 className="rounded-md bg-blue-50 text-blue-700 py-1 px-4 text-sm font-medium w-fit">
          WHY US
        </h2>
      </FadeInWhenVisible>

      <div className="flex flex-col lg:flex-row lg:gap-8 gap-2 pt-5">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl">
            What Makes Us Different From Others
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="max-w-xl">
            <p className="text-base md:text-lg pb-5">
              Where quality refurbished tech meets metro-grade reliability – all
              backed by local warranties.
            </p>
            <WhiteButton
              onClick={() => router.push("/about")}
              label="Learn More"
              showArrow
            />
          </div>
        </FadeInWhenVisible>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:pt-10 pt-8">
        <FadeInWhenVisible delay={0.3}>
          <InfoCard
            icon={<HardDrive className="h-4 w-4 text-white" />}
            title="Trunkey Solutions"
            content="We deliver complete IT and digital solutions, managing everything from setup to execution."
            bgColor="bg-blue-700"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <InfoCard
            icon={<Laptop className="h-4 w-4 text-white" />}
            title="UAE’s Best Prices"
            content="Guaranteed lowest prices on genuine IT hardware, with bulk discounts for businesses."
            bgColor="bg-green-600"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.5}>
          <InfoCard
            icon={<Video className="h-4 w-4 text-white" />}
            title="Hassle-Free Warranty"
            content="1 year coverage with local service centers and fast Arabic/English support."
            bgColor="bg-pink-400"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.6}>
          <InfoCard
            icon={<Router className="h-4 w-4 text-white" />}
            title="Proven Network Performance"
            content="The same enterprise switches and routers trusted by Dubai Metro - built for reliability."
            bgColor="bg-yellow-400"
          />
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default WhyUs;
