"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Laptops & Servers",
    image: "/texture1.png",
    description:
      "The Seed Infrastructures team oversees the distributed training, reinforcement learning framework, high-performance inference, and heterogeneous hardware compilation technologies.",
  },
  {
    title: "Vision",
    image: "/texture2.png",
    description:
      "The Seed Infrastructures team oversees the distributed training, reinforcement learning framework, high-performance inference, and heterogeneous hardware compilation technologies.",
  },
  {
    title: "Speech",
    image: "/texture3.png",
    description:
      "The Seed Infrastructures team oversees the distributed training, reinforcement learning framework, high-performance inference, and heterogeneous hardware compilation technologies.",
  },
  {
    title: "Infrastructures",
    image: "/texture4.png",
    description:
      "The Seed Infrastructures team oversees the distributed training, reinforcement learning framework, high-performance inference, and heterogeneous hardware compilation technologies.",
    showMore: true,
  },
  {
    title: "Multimodal Interaction & World Model",
    image: "/texture5.png",
    description:
      "The Seed Infrastructures team oversees the distributed training, reinforcement learning framework, high-performance inference, and heterogeneous hardware compilation technologies.",
  },
];

const NewServices = () => {
  return (
    <main className="min-h-screen p-6 bg-white dark:bg-zinc-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:auto-rows-[15rem] gap-6 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className={`relative group rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-700 bg-white/10 backdrop-blur-md transition-all duration-300
              ${i === 0 ? "lg:row-span-2 h-[32rem]" : "h-64"}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />

            {/* Title */}
            <div className="absolute bottom-5 group-hover:bottom-44 left-6 right-6 z-50 text-xl font-semibold text-black dark:text-white transition-all">
              {item.title}
            </div>

            {/* Description Overlay */}
            <div className="absolute inset-0 z-20 bg-white/80 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end gap-4">
              <p className="text-sm text-black dark:text-white leading-relaxed">
                {item.description}
              </p>

              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-110 transition-transform">
                ↗
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default NewServices;
