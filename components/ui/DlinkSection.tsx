// components/sections/DlinkSection.tsx

"use client";

import Image from "next/image";
import WhiteButton from "./ButtonWhite";
import FadeInWhenVisible from "./FramerAnimation";

export default function DlinkSection() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Image 1 with overlay text and hover effect */}
      <div className="group relative w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
          <Image
            src="/dlink1.jpeg"
            alt="D-Link Networking Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50">
          <div className="absolute top-1/2 pl-15 text-white text-left max-w-xl">
            <FadeInWhenVisible>
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-2">
                Stay Connected with D-Link
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.5}>
              <p className="text-base sm:text-base mb-4">
                From routers and switches to wireless access points and security
                systems, we offer complete D-Link solutions for businesses of
                all sizes.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.6}>
              <WhiteButton label="Learn more" showArrow />
            </FadeInWhenVisible>
          </div>
        </div>
      </div>

      {/* Image 2 with overlay text and hover effect */}
      <div className="group relative w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
          <Image
            src="/dlink3.jpeg"
            alt="D-Link Product Range"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40">
          <div className="absolute top-1/2 text-left pl-15 text-white max-w-xl">
            <FadeInWhenVisible delay={0.5}>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-2">
                Smart Managed Switches
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.6}>
              <p className="text-base sm:text-base">
                Quality and reliability in every device – switches,
                surveillance, modems, and more tailored to your connectivity
                needs.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
