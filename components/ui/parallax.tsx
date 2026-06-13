"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./parallax.module.scss";
import Lenis from "@studio-freight/lenis";
import {
  useTransform,
  useScroll,
  MotionValue,
  motion,
  useInView,
} from "framer-motion";

import ServiceMarquee from "./services-marquee";
import AboutUsSection from "@/app/about/ui/about-section";

const images = [
  "/9.png",
  "/12.png",
  "/1.png",
  "/10.png",
  "/11.png",
  "/9.png",
  "/11.png",
  "/3.png",
  "/13.png",
  "/7.png",
  "/8.png",
  "/9.png",
];

export default function ParallaxHome() {
  const gallery = useRef<HTMLDivElement | null>(null);
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    {
      width: 0,
      height: 0,
    }
  );

  type FadeProps = {
    children: ReactNode;
    delay?: number;
  };

  const FadeInWhenVisible = ({ children, delay = 0 }: FadeProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "0px 0px -50px 0px",
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  };

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = [
    "With",
    "strong",
    "focus on",
    "technology",
    "excellence",
    "and",
    "business",
    "transformation",
  ];

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="rounded-md bg-blue-50 text-blue-700 py-1 px-4 text-sm font-medium w-fit mb-4 ">
          IT Solutions
        </h2>

        <h2
          ref={headingRef}
          className="text-3xl max-w-4xl font-semibold text-black-700 md:text-5xl lg:text-6xl dark:text-slate-300 py-0 lg:pl-18 px-5"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={
                isHeadingInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}
              }
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className={`mr-2 inline-block ${
                ["technology", "transformation"].includes(word)
                  ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <FadeInWhenVisible delay={0.5}>
          <p className="py-10 lg:max-w-lg max-w-sm lg:text-xl font-semibold">
            We help businesses accelerate growth through High-conversion digital
            strategies that generate provable business value.
          </p>
        </FadeInWhenVisible>
      </div>

      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <ServiceMarquee />
      <div className="">
          <AboutUsSection
        heading="DIGITAL SOLUTION"
        title={"Digital Services That Drive Business Growth"}
        paragraphs={[
          "At JS Computers, we offer complete digital solutions tailored to modern business needs — from elegant websites to custom web applications that streamline operations and enhance customer experience. Whether you're a startup looking to launch your online presence or an established company automating internal workflows, we deliver scalable, secure, and high-performing solutions.",
          "Our Dubai-based team specializes in building responsive websites, e-commerce platforms, and business web apps designed to fit your goals. From design and development to SEO and performance optimization, we ensure every digital product we build works beautifully — and works for you.",
        ]}
        imageSrc={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fdigital.jpeg?alt=media&token=095a22ca-735b-4102-8832-4644fdb8d2f3"
        }
      />
      </div>
    </main>
  );
}

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
}

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image src={src} alt="image" layout="fill" />
        </div>
      ))}
    </motion.div>
  );
};
