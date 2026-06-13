"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { type FC, useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

gsap.registerPlugin(CSSPlugin);

const SERVICES = [
  "Web Development",
  "App Development",
  "Social Media Marketing",
  "Branding & Design",
  "SEO Optimization",
  "Paid Advertising",
];

const ELEMENTS = [...SERVICES, ...SERVICES];

const ICON_PATH = "/seperator.png"; // Your single icon image

type Props = {
  isReversed?: boolean;
  className?: string;
};

const ServiceMarquee: FC<Props> = ({ isReversed = false, className }) => {
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

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-28">
        {ELEMENTS.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <p className="text-4xl font-semibold text-black tracking-wide whitespace-nowrap">
              {item}
            </p>
            <Image
              src={ICON_PATH}
              alt="Service Icon"
              width={40}
              height={40}
              className="w-16 h-16 object-contain ml-10"
            />
          </div>
        ))}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge(
        "max-w-full select-none overflow-hidden py-10 bg-lime-300",
        className
      )}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
      </div>
    </div>
  );
};

export default ServiceMarquee;
