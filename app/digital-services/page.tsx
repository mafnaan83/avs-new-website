import React from "react";
import HeroSection01 from "./Components/DigitalHero";
import { TextParallaxContentExample } from "./Components/ScrollTrigger";
import PracticeAreas from "./Components/TechServices";
import PortfolioShowcase from "./Components/Portfilio";

export const metadata = {
  title:
    "Digital Services in Dubai – Website, App & Social Media Management | JS Computer",
  description:
    "JS Computer provides professional digital services in Dubai and across the UAE, including website development, mobile app development, social media management, SEO, digital branding, and marketing solutions.",
  keywords: [
    "digital services Dubai",
    "website development Dubai",
    "mobile app development UAE",
    "social media management Dubai",
    "digital marketing company UAE",
    "SEO services Dubai",
    "branding solutions UAE",
    "content creation Dubai",
    "JS Computer digital solutions",
    "ecommerce website Dubai",
  ],
  alternates: {
    canonical: "https://jscomputer.ae/digital-services",
  },
  openGraph: {
    title:
      "Digital Services in Dubai – Website, App & Social Media | JS Computer",
    description:
      "Explore premium digital services in Dubai: Website & app development, social media management, SEO, branding, and digital marketing — powered by JS Computer UAE.",
    images: [
      {
        url: "/opengraph-digital-services-jscomputer.jpg",
        width: 1200,
        height: 630,
        alt: "JS Computer – Digital Services in Dubai, UAE",
      },
    ],
  },
};

const DigitalService = () => {
  return (
    <div>
      <TextParallaxContentExample />
      <HeroSection01 />
      <PracticeAreas />
      <PortfolioShowcase />
    </div>
  );
};

export default DigitalService;
