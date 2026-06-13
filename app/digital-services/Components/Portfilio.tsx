"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  category: string;
  color: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "supreme-group",
    title: "THE SUPREME GROUP",
    category: "Luxury Hospitality",
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fa-clean-workspace-with-a-lineup-of-premium-laptops%20Large.jpeg?alt=media&token=4b0bead5-daf5-4a5f-9b6c-34b869baf8b6",
    color: "from-amber-600 to-amber-800",
  },
  {
    id: "newfound-global",
    title: "Newfound Global",
    category: "Global Consulting",
    image: "/lovable-uploads/sample.png",
    color: "from-slate-700 to-slate-900",
  },
  {
    id: "the-chiller",
    title: "The Chiller",
    category: "Beverage Brand",
    image: "/lovable-uploads/sample.png",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "tech-startup",
    title: "TechFlow",
    category: "Technology",
    image: "/lovable-uploads/sample.png",
    color: "from-purple-600 to-purple-800",
  },
  {
    id: "finance-app",
    title: "FinanceHub",
    category: "Financial Services",
    image: "/lovable-uploads/sample.png",
    color: "from-green-600 to-green-800",
  },
  {
    id: "health-platform",
    title: "WellnessCore",
    category: "Healthcare",
    image: "/lovable-uploads/sample.png",
    color: "from-teal-600 to-teal-800",
  },
];

const PortfolioShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let timeout: ReturnType<typeof setTimeout> | null = null;
    const handleScroll = () => {
      if (timeout) return;
      timeout = setTimeout(() => {
        checkScrollPosition();
        timeout = null;
      }, 100);
    };

    checkScrollPosition();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollTo({
        left:
          direction === "left"
            ? container.scrollLeft - scrollAmount
            : container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 bg-background">
      <div className="pl-20 pr-0 mx-auto">
        <div className="flex items-center justify-between mb-12 pr-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wide uppercase">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Latest Work
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-accent bg-accent text-accent-foreground hover:scale-110 hover:shadow-lg"
                  : "border-muted bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-accent bg-accent text-accent-foreground hover:scale-110 hover:shadow-lg"
                  : "border-muted bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pr-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[400px] group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${item.color} transition-all duration-500 group-hover:shadow-2xl`}
                  style={{ minHeight: 450 }}
                >
                  <div className="absolute top-6 left-6 z-10">
                    <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
                      <span className="text-sm font-medium text-white">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="relative pt-20 p-8 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-lg text-white/90 leading-relaxed mb-6">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-lg mb-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20 pointer-events-none">
                        <div className="w-full h-full border border-white/30 rounded-full"></div>
                        <div className="absolute top-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
                        <div className="absolute top-8 left-8 w-16 h-16 border border-white/10 rounded-full"></div>
                      </div>

                      <div className="flex items-center gap-2 text-white group-hover:translate-x-1 transition-transform duration-300">
                        <span className="text-sm font-medium">
                          View Project
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More */}
        <div className="flex justify-end mt-8">
          <div className="flex items-center gap-2 text-foreground cursor-pointer group transition-transform duration-200 hover:translate-x-1">
            <span className="text-lg font-medium">See more work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PortfolioShowcase;
