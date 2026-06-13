"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Image from "next/image";
import { type FC, useMemo, useRef } from "react";
import { twJoin, twMerge } from "tailwind-merge";

gsap.registerPlugin(CSSPlugin);

type Props = {
  isReversed?: boolean;
  className?: string;
  logos?: { src: string; alt: string }[];
  size?: number; // height/width for each logo
};

const defaultLogos = [
  {
    src: "/logo1.png",
    alt: "HP Platinum Partner | Business Laptops & Printers Provider",
  },
  {
    src: "/logo2.png",
    alt: "Lenovo Solutions Partner | Laptops & Data Center Systems",
  },
  {
    src: "/logo3.png",
    alt: "Microsoft Certified Partner | Cloud & Software Solutions",
  },
  {
    src: "/logo4.png",
    alt: "Dell Authorized Reseller | Enterprise Hardware & Servers",
  },
  {
    src: "/logo5.png",
    alt: "Huawei Networking Partner | Enterprise Routers & Storage",
  },
  {
    src: "/logo6.png",
    alt: "TRENDnet Networking Solutions | Switches & Surveillance Systems",
  },
  {
    src: "/logo7.png",
    alt: "Hikvision Authorized Partner | CCTV Cameras & Security Solutions Provider",
  },
  {
    src: "/logo8.png",
    alt: "D-Link Authorized Partner | Networking Devices & Wi-Fi Solutions Provider",
  },
  {
    src: "/logo9.png",
    alt: "Intel Technology Provider | Processors, Chipsets & Computing Solutions",
  },
  {
    src: "/logo10.png",
    alt: "Cisco Certified Partner | Networking, Security & Collaboration Solutions Provider",
  },
  {
    src: "/logo11.png",
    alt: "TP-Link Authorized Partner | Wi-Fi Routers, Switches & Smart Networking Solutions",
  },
];

const TestimonialsMarquee: FC<Props> = ({
  isReversed = false,
  className,
  logos = defaultLogos,
  size = 100,
}) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timelineTimeScaleTween = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
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
    },
    { dependencies: [isReversed] }
  );

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

  const elements = useMemo(() => [...logos, ...logos], [logos]);

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-10">
        {elements.map((logo, index) => {
          const isLast = index === elements.length - 1;
          return (
            <div
              key={index}
              className={twJoin(
                "relative flex shrink-0 items-center justify-center",
                isLast && "mr-10"
              )}
              style={{ height: size, width: size }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={size * 0.9}
                height={size * 0.9}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    ),
    [elements, size]
  );

  return (
    <div
      className={twMerge("max-w-full select-none overflow-hidden", className)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
      }}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
      </div>
    </div>
  );
};

export default TestimonialsMarquee;
