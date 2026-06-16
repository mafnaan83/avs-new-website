"use client";
import { Handshake, Package, Truck, Warehouse } from "lucide-react";
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
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-2 pt-5">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl">
            Why Businesses Work With AVS Trading
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="max-w-xl">
            <p className="text-base md:text-lg pb-5">
              Our operations are built around dependable supply, efficient
              distribution, and lasting partnerships that support retailers and
              businesses across the UAE.
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
            icon={<Package className="h-4 w-4 text-white" />}
            title="FMCG Distribution"
            content="Supplying food, beverage, and household products to retailers across Dubai and the UA"
            bgColor="bg-blue-700"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <InfoCard
            icon={<Warehouse className="h-4 w-4 text-white" />}
            title="Logistics & Warehousing"
            content="Storage and delivery infrastructure to keep products moving from warehouse to shelf."
            bgColor="bg-green-600"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.5}>
          <InfoCard
            icon={<Truck className="h-4 w-4 text-white" />}
            title="Supply Chain Expertise"
            content=" From sourcing and warehousing to last-mile delivery, we manage the complete supply chain efficiently."
            bgColor="bg-pink-400"
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.6}>
          <InfoCard
            icon={<Handshake className="h-4 w-4 text-white" />}
            title="Brand Partnerships"
            content="Representing and growing FMCG brands within the UAE retail market."
            bgColor="bg-yellow-400"
          />
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default WhyUs;
