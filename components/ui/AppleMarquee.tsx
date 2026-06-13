"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Image from "next/image";
import { type FC, useMemo, useRef } from "react";
import { twJoin, twMerge } from "tailwind-merge";

gsap.registerPlugin(CSSPlugin);

const ICON_PATHS = [
  "/mac1.png",
  "/mac2.png",
  "/mac3.png",
  "/mac4.png",
  "/mac5.png",
];

const alt = [
  "HP Platinum Partner | Business Laptops & Printers Provider",
  "Lenovo Solutions Partner | Laptops & Data Center Systems",
  "Microsoft Certified Partner | Cloud & Software Solutions",
  "Dell Authorized Reseller | Enterprise Hardware & Servers",
  "Huawei Networking Partner | Enterprise Routers & Storage",
];

const configs = [
  "Apple M1 • 8GB RAM • 256GB SSD",
  "Apple M2 • 16GB RAM • 512GB SSD",
  "Apple M3 • 16GB RAM • 1TB SSD",
  "Apple M1 • 8GB RAM • 512GB SSD",
  "Apple M2 • 16GB RAM • 256GB SSD",
];

type Props = {
  isReversed?: boolean;
  className?: string;
};

const ELEMENTS = [...ICON_PATHS, ...ICON_PATHS];

const AppleMarquee: FC<Props> = ({ isReversed = false, className }) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timelineTimeScaleTween = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const setupInfiniteMarqueeTimeline = () => {
      gsap.set(movingContainer.current, {
        xPercent: isReversed ? -50 : 0,
      });
      timeline.current = gsap
        .timeline({
          defaults: { ease: "none", repeat: -1 },
        })
        .to(movingContainer.current, {
          xPercent: isReversed ? 0 : -50,
          duration: 50,
        })
        .set(movingContainer.current, { xPercent: 0 });
    };

    setupInfiniteMarqueeTimeline();

    return () => {
      timeline.current?.kill();
      timelineTimeScaleTween.current?.kill();
    };
  }, [isReversed]);

  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.25,
      duration: 0.4,
    });
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 1,
      duration: 0.2,
    });
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-10">
        {ELEMENTS.map((src, index) => {
          const altIndex = index % ICON_PATHS.length;
          const configText = configs[altIndex];
          const isLast = index === ELEMENTS.length - 1;

          return (
            <div
              key={index}
              className={twJoin(
                "group flex flex-col items-center justify-start shrink-0 transition-all",
                isLast && "mr-10"
              )}
              style={{ width: 300 }}
            >
              <div className="relative w-[300px] h-[300px] rounded-md overflow-hidden">
                <Image
                  src={src}
                  alt={alt[altIndex]}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-center text-sm text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {configText}
              </p>
            </div>
          );
        })}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge("max-w-full select-none overflow-hidden", className)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
      </div>
    </div>
  );
};

export default AppleMarquee;
