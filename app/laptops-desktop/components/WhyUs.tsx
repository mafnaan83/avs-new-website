import React from "react";
import {
  ShieldCheck,
  LaptopMinimalCheck,
  HandCoins,
  HeartHandshakeIcon,
} from "lucide-react";
import FeatureCard from "./Helpers/featured-card";
import WhiteButton from "@/components/ui/ButtonWhite";

const WhyUs = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Flowing lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M-100 400 Q300 200 600 400 T1300 400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M-100 500 Q400 300 700 500 T1300 500"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Main content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Why We’re the
                <br />
                <span className=""> Right Choice</span>
              </h2>

              <p className="text-xl lg:text-xl text-blue-100/80 leading-relaxed max-w-lg">
                Find the right products from the right people.
              </p>
            </div>

            <WhiteButton label={"Talk to us"} showArrow />
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={ShieldCheck}
              title="Authenticity"
              description="Genuine new & certified used laptops and desktops"
            />

            <FeatureCard
              icon={LaptopMinimalCheck}
              title="Readiness"
              description="Complete setups with accessories, ready to deploy"
            />

            <FeatureCard
              icon={HandCoins}
              title="Affordability"
              description="Bulk pricing for offices, schools & resellers"
            />

            <FeatureCard
              icon={HeartHandshakeIcon}
              title="Reliability"
              description="Fast delivery and local support you can count on"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
