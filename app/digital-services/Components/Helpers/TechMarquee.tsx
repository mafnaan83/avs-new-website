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
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fadobe.png?alt=media&token=0f58d455-2aaa-445f-a41b-312037a7497f",
    alt: "HP Partner",
    name: "Adobe",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fai.svg?alt=media&token=6a58d2ce-6c0c-44d0-9a2f-fefbfb2a0496",
    alt: "Lenovo Partner",
    name: "Adobe Illustartor",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fangiu.png?alt=media&token=e8037f75-f5a8-475e-bc65-308ee2fddb48",
    alt: "Microsoft Partner",
    name: "Angular",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Faws.png?alt=media&token=59997a25-a688-4c2a-9e5a-94f0457fb59d",
    alt: "Dell Reseller",
    name: "AWS",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fcss.svg?alt=media&token=4263dbbb-4825-4f28-80e8-7474c3552960",
    alt: "CSS",
    name: "CSS",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Ffigma.svg?alt=media&token=f5c8f6a4-9eed-4b2e-8d66-67fa173768cb",
    alt: "Figma",
    name: "Figma",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Ffirebase.png?alt=media&token=41a33efa-418f-46ac-b366-811be49617b0",
    alt: "Firebase",
    name: "Firebase",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fflutter.png?alt=media&token=49cd24cc-c14a-4669-b627-9a4a52c89607",
    alt: "Flutter",
    name: "Flutter",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fgit.png?alt=media&token=8acd9100-7a16-4a73-8291-6d62903d74f7",
    alt: "Git Hub",
    name: "Git Hub",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fhtml.svg?alt=media&token=081e5e0f-45f5-45e0-b01e-8cc26ce5b9ab",
    alt: "HTML",
    name: "HTML",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fjs.svg?alt=media&token=322494c0-1a6d-4939-93c7-9ed15ab989e9",
    alt: "Javascript",
    name: "Javascript",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fmongo.png?alt=media&token=68fa5d55-2cf1-4fce-ba2e-c6effdcaa617",
    alt: "Mongodb",
    name: "Mongodb",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fnext.svg?alt=media&token=47d58f78-3f1c-4510-b68f-a248eac90796",
    alt: "Next Js",
    name: "Next Js",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fps.svg?alt=media&token=0f885dbe-3145-4d2f-bae1-24285cc2fa90",
    alt: "Photoshop",
    name: "Photoshop",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Freact.svg?alt=media&token=472f67e3-a454-4287-995b-7574efd4b3c2",
    alt: "React Js",
    name: "React Js",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fsveite.png?alt=media&token=6248eaf8-971d-4fe1-ab51-d7de6bf96ca9",
    alt: "Svelte",
    name: "Svelte",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Ftailwiond.png?alt=media&token=65be5a52-84d7-435c-babd-3a1ba935e250",
    alt: "Tailwind CSS",
    name: "Tailwind CSS",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fshopify.png?alt=media&token=dc643cad-b539-4ad5-a784-f3c904dff845",
    alt: "Shopify",
    name: "Shopify",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Ftysc.png?alt=media&token=17bf2240-88bb-44c7-aec6-632374d14340",
    alt: "TypeScript",
    name: "TypeScript",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fvite.png?alt=media&token=17866134-341f-41ba-901b-3e95c8c4dbc6",
    alt: "Vite",
    name: "Vite",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fvs.svg?alt=media&token=039cdd9f-7938-47d7-8189-d0f86b62a5e8",
    alt: "VsCode",
    name: "VsCode",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/techmarquee%2Fword.png?alt=media&token=78cf8edf-5322-499e-a3f3-a2e42fd5cfff",
    alt: "Wordpress",
    name: "Wordpress",
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
                "flex items-center gap-2 px-2 py-1 border border-gray-200 rounded-full whitespace-nowrap",
                isLast && "mr-4"
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

              {/* Text */}
              <span className="text-xs">{logo.name}</span>
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
