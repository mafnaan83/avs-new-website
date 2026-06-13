import React from "react";
import HeroSection from "../laptops-desktop/components/HeroSection";
import { LogosMarquee } from "./components/logo-marquee";
import AboutUsSection from "../about/ui/about-section";
import TrendnetFeatured from "./components/trendnet-featured";
import ProductCategoryCarousel from "./components/product-content";

export const metadata = {
  title: "Networking Solutions – Switches, Routers & IT Setup in Dubai",
  description:
    "Explore JS Computer’s networking services in Dubai – switches, routers, cabling, and end-to-end IT setup across UAE for homes and businesses.",
  keywords: [
    "Networking Dubai",
    "Network setup UAE",
    "IT networking solutions",
    "Switches and routers Dubai",
    "Office network setup UAE",
    "Wi-Fi solutions Dubai",
    "Cabling services UAE",
    "JS Computer networking",
  ],
  alternates: {
    canonical: "https://jscomputer.ae/networking",
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-services-networking.jpg",
        width: 1200,
        height: 630,
        alt: "Networking Services by JS Computer – Dubai IT Experts",
      },
    ],
  },
};

const Networking = () => {
  return (
    <div>
      <HeroSection
        heroImage={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2FnetHero.jpeg?alt=media&token=f483f142-4195-4d81-921e-3226cc27b295"
        }
      />
      <AboutUsSection
        heading="OVERVIEW"
        title={"Networking Devices & Structured Cabling Solutions in Dubai"}
        paragraphs={[
          "Build a faster, safer, and smarter network with professional-grade devices from TP-Link, TRENDnet, and other leading brands. From managed switches to PoE, we power seamless connectivity.",
          "Whether you're building a new office network or upgrading existing infrastructure, our expert team delivers fast, scalable, and affordable networking support across Dubai and the UAE.",
        ]}
        imageSrc={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fnetworking.jpeg?alt=media&token=35e4d2ce-1ffd-43b1-9d7f-24404053f8ac"
        }
      />
      <LogosMarquee />
      <div className="min-h-screen">
        <TrendnetFeatured />
      </div>
      <ProductCategoryCarousel />
    </div>
  );
};

export default Networking;
