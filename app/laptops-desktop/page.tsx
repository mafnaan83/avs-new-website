import React from "react";
import HeroSection from "./components/HeroSection";

import AboutUsSection from "../about/ui/about-section";
import Brands from "./components/ServicesBrands";
import AppleMacSection from "@/components/ui/AppleMacSection";
import BusinessTypes from "./components/BusinessTypes";
import ProductCarousel from "./components/HorizontalProductScroll";
import { Desktop } from "@/components/ui/Desktop";
import WhyUsAVS from "./components/WhyUs";

export const metadata = {
  title: "Laptops & Desktops Services – New & Refurbished Laptops Dubai",

  description:
    "Shop new and refurbished laptops and desktops in Dubai with expert support and affordable IT hardware solutions.",
  keywords: [
    "Laptops Dubai",
    "Desktops Dubai",
    "refurbished laptops Dubai Sharjah",
    "computer repair Dubai",
    "IT hardware provider UAE",
    "new laptops Dubai",
    "custom desktops UAE",
    "JS Computer services",
  ],
  alternates: {
    canonical: "https://jscomputer.ae/laptops-desktop",
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-services-laptops-desktops.jpg",
        width: 1200,
        height: 630,
        alt: "Laptops & Desktops Services at JS Computer Dubai",
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <HeroSection
        heroImage={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Flaptops%20and%20storage.jpeg?alt=media&token=126cf7fb-72f6-4491-b844-80e642dd6538"
        }
      />
      <Brands />
      <AboutUsSection
        heading="OVERVIEW"
        title={"Your Trusted Laptop & Desktop Supplier in Dubai"}
        paragraphs={[
          "At JS Computers, we specialize in supplying new and certified used laptops and desktops to businesses and individuals across Dubai, Sharjah, and the UAE. Whether you’re setting up a new office or upgrading existing systems, we offer genuine, warranty-backed devices from top global brands like HP, Dell, and Lenovo.",
          "✅ Business-grade laptops and desktops at competitive prices",
          "✅ Full computer setups with monitors, keyboards, and accessories",
          "✅ Fast delivery and after-sales support for B2B and retail clients",
        ]}
        imageSrc={
          "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg"
        }
        imagePosition="left"
      />
      <AppleMacSection />
      <WhyUsAVS />
      <BusinessTypes />
      <ProductCarousel
        products={[
          {
            name: "Lenovo IdeaPad Slim",
            image:
              "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Flaptop.png?alt=media&token=55f0a600-a3ae-4579-a9c5-445b5cf1b7b3",
            features: ["8 GB DDR4", "512 GB SSD", "Intel i5", "UHD Graphics"],
          },
          {
            name: "Dell Latitude 7420",
            image:
              "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Flaptop.png?alt=media&token=55f0a600-a3ae-4579-a9c5-445b5cf1b7b3",
            features: [
              "16 GB DDR4",
              "256 GB SSD",
              "Intel i7",
              "Backlit Keyboard",
            ],
          },
          {
            name: "HP EliteBook 840 G8",
            image:
              "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Flaptop.png?alt=media&token=55f0a600-a3ae-4579-a9c5-445b5cf1b7b3",
            features: [
              "Intel Core i7 11th Gen",
              "16 GB DDR4 RAM",
              "512 GB NVMe SSD",
              "14-inch FHD Display",
              "Fingerprint Sensor",
            ],
          },
          {
            name: "Dell XPS 13 Plus",
            image:
              "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Flaptop.png?alt=media&token=55f0a600-a3ae-4579-a9c5-445b5cf1b7b3",
            features: [
              "Intel Core i5 13th Gen",
              "8 GB LPDDR5 RAM",
              "256 GB SSD",
              "13.4-inch OLED Touch",
              "Intel Iris Xe Graphics",
            ],
          },
        ]}
      />
      <Desktop />
    </div>
  );
};

export default page;
