"use client";

import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { title: "Laptops", image: "/laptop.jpg" },
  { title: "Monitors", image: "/lap1.png" },
  { title: "Servers", image: "/monitor.png" },
  { title: "Gaming Laptops", image: "/desktop.png" },
  { title: "WiFi Routers", image: "/laptop.jpg" },
  { title: "Accessories", image: "/laptop.jpg" },
  { title: "Printers", image: "/laptop.jpg" },
  { title: "Desktops", image: "/laptop.jpg" },
];

export default function ProductShowcase() {
  return (
    <section className="py-12 px-4 bg-blue-950 overflow-x-auto">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
        Our Best Sellers
      </h2>
      <div className="relative w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 animate-scrollX min-w-max">
          {[...products, ...products].map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
