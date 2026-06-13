"use client";
import { BadgeCheck } from "lucide-react";
import WhiteButton from "./ButtonWhite";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const Refurbished = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-18 lg:py-20 py-10 gap-10">
      <div className="lg:w-[50%] max-w-xl">
        <FadeInWhenVisible>
          <h2 className="lg:text-5xl text-3xl font-semibold">
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              Certified
            </span>{" "}
            Refurbished
            <br /> Laptops in Dubai
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <p className="lg:text-lg pt-5 text-gray-500 text-justify">
            Why pay more when you can own top brands like Dell, HP, and Lenovo
            for less? Our refurbished and used laptops are professionally
            tested, cleaned, and certified to deliver reliable performance for
            work, study, or everyday use. Whether you`re buying one or many, we
            offer the best value in the UAE.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <div className="flex gap-2 items-center pt-3">
            <BadgeCheck className="text-green-700" />{" "}
            <h2 className="text-lg font-semibold text-green-700">Top Brands</h2>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="flex gap-2 items-center pt-2">
            <BadgeCheck className="text-green-700" />{" "}
            <h2 className="text-lg font-semibold text-green-700">
              Tested quality
            </h2>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="flex gap-2 items-center pt-2">
            <BadgeCheck className="text-green-700" />{" "}
            <h2 className="text-lg font-semibold text-green-700">
              Professionally refurbished
            </h2>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="flex gap-2 items-center pt-2 pb-5">
            <BadgeCheck className="text-green-700" />{" "}
            <h2 className="text-lg font-semibold text-green-700">
              With warrenty
            </h2>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <WhiteButton label={"Get Price"} showArrow />{" "}
        </FadeInWhenVisible>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
          {[
            {
              title: "Fast Delivery",
              description:
                "Get your products quickly with our fast and reliable delivery service.",
              bgColor: "bg-blue-100",
              img: "/devlivery.png",
            },
            {
              title: "Trusted Brands",
              description:
                "We only offer products from reputable, top-tier brands.",
              bgColor: "bg-green-100",
              img: "/trust.png",
            },
            {
              title: "Best Price",
              description:
                "Get same specs, better price with our refurbished laptops",
              bgColor: "bg-yellow-100",
              img: "/price.png",
            },
            {
              title: "Warrenty",
              description: "Up to 6 months warranty on all devices.",
              bgColor: "bg-pink-100",
              img: "/warrenty.png",
            },
          ].map((card, index) => (    
            <FadeInWhenVisible key={index} >
            <div
              key={index}
              className="relative p-6 rounded-xl shadow-md bg-blue-50 overflow-hidden min-h-[200px] group hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2 relative z-10">
                {card.title}
              </h3>
              <p className="text-gray-700 relative z-10">{card.description}</p>
              <Image
                width={100}
                height={100}
                src={card.img}
                alt={card.title}
                className="absolute bottom-2 right-2 w-20 h-20 object-contain opacity-80 z-10 mix-blend-multiply text-blue-500"
              />

              {/* Diagonal shimmer */}
              <div className="absolute inset-0 z-0 pointer-events-none group-hover:animate-glass-shimmer bg-[linear-gradient(120deg,_rgba(255,255,255,0.3)_0%,_rgba(200,200,200,0.15)_50%,_rgba(255,255,255,0.3)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
            </FadeInWhenVisible >   ))}
        </div>
      </div>
    </div>
  );
};

export default Refurbished;
