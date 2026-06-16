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
  logos?: { src: string; alt: string; name: string }[];
  size?: number; // base height for each item
};

const defaultLogos = [
  {
    src: "/avs-brand-1.png",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "/avs-brand-2.png",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "/avs-brand-3.png",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "/avs-brand-4.png",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "/avs-brand-5.png",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "/avs-brand-6.png",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "/avs-brand-7.png",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "/avs-brand-8.png",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "/avs-brand-9.png",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "/avs-brand-10.png",
    alt: "HP Partner",
    name: "Adobe",
  },
];

const Techmarquee: FC<Props> = ({
  isReversed = false,
  className,
  logos = defaultLogos,
  size = 40, // reduced from 60
}) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timelineTimeScaleTween = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const setupInfiniteMarqueeTimeline = () => {
      gsap.set(movingContainer.current, {
        xPercent: isReversed ? -50 : 0,
      });
      timeline.current = gsap
        .timeline({ defaults: { ease: "none", repeat: -1 } })
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

  const elements = useMemo(() => [...logos, ...logos], [logos]);

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-6 pt-10">
        {elements.map((logo, index) => {
          const isLast = index === elements.length - 1;
          return (
            <div
              key={index}
              className={twJoin(
                "flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-full whitespace-nowrap",
                isLast && "mr-4",
              )}
              style={{ height: size }}
            >
              {/* Logo */}
              <div
                className="relative"
                style={{
                  height: size * 0.9,
                  width: size * 0.9,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    ),
    [elements, size],
  );

  return (
    <div
      className={twMerge("max-w-full select-none overflow-hidden", className)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
      </div>
    </div>
  );
};

export default Techmarquee;
