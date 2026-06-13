"use client";
import WhiteButton from "@/components/ui/ButtonWhite";
import { useEffect, useState } from "react";
import FabricIntegration from "./Helpers/image-card";

const TrendnetFeatured = () => {
  const [, setScrollProgress] = useState(0);
  const [widthPercentage, setWidthPercentage] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("expanding-section");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate the center of the element relative to viewport
      const elementCenter = rect.top + elementHeight / 2;
      const viewportCenter = windowHeight / 2;

      // Calculate distance from element center to viewport center
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const maxDistance = windowHeight / 2 + elementHeight / 2;

      // Calculate progress (0 when at center, 1 when completely out of view)
      const centerProgress = Math.min(distanceFromCenter / maxDistance, 1);

      // Calculate width: 100% at center (progress 0), 80% when out of view (progress 1)
      const calculatedWidth = 100 - centerProgress * 20;
      setWidthPercentage(Math.max(80, calculatedWidth));

      // Calculate scroll progress for the progress bar
      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibleProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - rect.top) / (windowHeight + elementHeight)
          )
        );
        setScrollProgress(visibleProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="expanding-section"
      className="py-30 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden transition-all duration-300 ease-out mx-auto"
      style={{ width: `${widthPercentage}%` }}
    >
      <div className="text-left mx-auto mb-12 max-w-5xl px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Official TRENDnet <br /> Distributor in Dubai
        </h2>
      </div>

      <hr className="my-6 border-t border-gray-500 max-w-5xl mx-auto" />

      <div className="text-white max-w-5xl mx-auto justify-between px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Text Block */}
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As an official TRENDnet distributor in the UAE, JS Computers
              delivers cutting-edge networking hardware designed for
              performance, reliability, and scalability. From PoE switches and
              routers to industrial-grade solutions and structured cabling,
              TRENDnet empowers businesses with the tools to build smarter,
              future-ready networks.
            </p>
            <WhiteButton label={"Read more"} showArrow />
          </div>

          {/* Right: Images */}
          <FabricIntegration />
        </div>
      </div>
    </section>
  );
};

export default TrendnetFeatured;
