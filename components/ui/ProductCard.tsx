"use client";

import Image from "next/image";
import React from "react";

interface ProductCardProps {
  title: string;
  image: string;
}

export default function ProductCard({ title, image }: ProductCardProps) {
  return (
    <div className="w-40 sm:w-48 h-48 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md p-4 flex flex-col items-center justify-center text-white text-center">
      <div className="w-20 h-20 relative mb-3">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-sm font-semibold">{title}</h3>
    </div>
  );
}
