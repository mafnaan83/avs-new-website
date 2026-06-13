"use client";
import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./Helpers/carousel";
import type { CarouselApi } from "./Helpers/carousel";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  features: string[]; // <-- made dynamic
}

interface ProductCarouselProps {
  products: ProductCardProps[];
}

const ProductCard = ({ image, name, features }: ProductCardProps) => {
  return (
    <div className="relative group cursor-pointer w-full bg-white rounded-xl">
      <div className="relative h-[550px] rounded-xl overflow-hidden transform transition-all duration-300 bg-gray-100">
        <div className="h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">
          {/* Text */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              {name}
            </h2>
            {features.map((feature, i) => (
              <p key={i} className="text-gray-700 mt-2 text-lg">
                {feature}
              </p>
            ))}
          </div>

          {/* Image */}
          <div className="w-[300px] md:w-[400px] lg:w-[500px] h-auto">
            <Image
              src={image}
              alt={name}
              width={800}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["Explore", "Our", "Products"];

  return (
    <div className="w-full max-w-none">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2
          ref={headingRef}
          className="text-3xl lg:max-w-3xl sm:text-4xl md:text-5xl font-semibold text-center mx-auto pb-3"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={
                isHeadingInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}
              }
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className={`mr-2 inline-block ${
                word === "Explore"
                  ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Browse through our latest laptops and configurations.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="pl-2">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 basis-4/5">
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-4 pt-6">
        <button
          onClick={scrollPrev}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:bg-gray-50"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:bg-gray-50"
        >
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
