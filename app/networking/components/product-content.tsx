"use client";

import React from "react";
import Image from "next/image";
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "./Helpers/reveal-on-hover";

interface ProductCategory {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const productCategories: ProductCategory[] = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fswitches.png?alt=media&token=d17d142e-03a3-4268-a141-934c8712977a",
    title: "Networking Switches",
    description: "PoE and Managed Switches ideal for SME setups.",
    tags: ["5-Port", "8-Port", "24-Port", "Gigabit", "PoE+"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Frouterss.png?alt=media&token=50434e6d-0a6e-40cf-a931-c2dde7e8af0f",
    title: "Wireless Routers",
    description: "High-speed wireless routers for home and office.",
    tags: ["Dual Band", "Wi-Fi 6", "Mesh", "Long Range"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fsuv.png?alt=media&token=2dbbfbd6-b978-4ae9-8ac3-2789fae4ac2b",
    title: "Surveillance Systems",
    description: "Reliable IP cameras and NVRs for security.",
    tags: ["Dome Camera", "Bullet Camera", "4MP", "NVR", "PoE"],
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fwired.png?alt=media&token=5dbf11d6-fc53-4ba4-b643-43f032b74fe7",
    title: "Wired",
    description:
      "Ideally suited for long-distance networking applications up to 62.1 miles or 100km.",
    tags: [
      "Fiber",
      "Patch Panels",
      "Network Adapters",
      "KVM",
      "Powerline & MoCA",
    ],
  },
];

const ProductCategoryCarousel = () => {
  return (
    <div className="py-12 lg:pl-18 pl-5">
      <h2 className="lg:text-5xl text-2xl font-bold text-center text-gray-800 mb-6">
        Explore Categories
      </h2>

      <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-2">
        {productCategories.map((cat, idx) => (
          <CardHoverReveal
            key={idx}
            className="h-[512px] w-[320px] sm:w-[360px] md:w-[385px] rounded-xl flex-shrink-0"
          >
            <CardHoverRevealMain>
              <Image
                width={1077}
                height={606}
                alt={cat.title}
                src={cat.image}
                className="object-cover w-full h-full"
              />
            </CardHoverRevealMain>

            <CardHoverRevealContent className="space-y-4 rounded-2xl bg-zinc-900/75 text-zinc-50">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{cat.title}</h3>
                <p className="text-sm text-zinc-300">{cat.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardHoverRevealContent>
          </CardHoverReveal>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryCarousel;
