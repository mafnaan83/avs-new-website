"use client";

import type React from "react";
import { Handshake, HardDrive, Laptop, Router, Video } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./services.module.scss";
import { useRouter } from "next/navigation";

export default function Services() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const words = ["Your", "Technology", "Growth", "Partner"];

  return (
    <div className="lg:pb-20 pb-10">
      <h2
        ref={headingRef}
        className="text-3xl lg:mb-5 font-semibold text-black-700 md:text-5xl lg:text-5xl dark:text-slate-300 pt-12 pb-3 lg:pl-18 px-5"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={
              isHeadingInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}
            }
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className={`mr-2 inline-block ${
              word === "Partner"
                ? "bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2 px-5 lg:px-18">
        <GridItem
          link="laptops-desktop"
          area="md:[grid-area:1/1/3/4]" // First card spans 2 rows and 5 columns
          icon={<Video className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Laptops & Desktops"
          description="Supply and support for business-grade laptops and desktops from top brands like HP, Dell, and Lenovo, ideal for offices, retail, and enterprises across the UAE."
        />
        <GridItem
          link="networking"
          area="md:[grid-area:1/4/2/8]"
          icon={
            <HardDrive className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Networking Solutions"
          description="End-to-end wired and wireless network setup, including routers, switches, firewalls, and structured cabling to ensure seamless connectivity."
        />
        <GridItem
          link="surveillance"
          area="md:[grid-area:1/8/2/13]"
          icon={<Laptop className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Surveillance Systems"
          description="SIRA-compliant CCTV and access control systems for office, warehouse, or retail surveillance with installation and remote monitoring setup."
        />
        <GridItem
          link="digital-services"
          area="md:[grid-area:2/4/3/9]"
          icon={
            <Handshake className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Digital Services"
          description="From custom websites and web apps to SEO, Google Ads, and social media marketing — we help your brand go digital and grow fast.  "
        />
        <GridItem
          link="servers-storage"
          area="md:[grid-area:2/9/3/13]"
          icon={<Router className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Servers & Storage Solutions"
          description="Enterprise server systems, NAS/SAN storage, and data center hardware, designed for performance, scalability, and business continuity."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  link: string;
}

const GridItem = ({ area, title, description, link }: GridItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const router = useRouter();

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-[14rem] list-none ${area}`}
    >
      <div className="relative h-full rounded-2.5xl border group p-2 md:rounded-3xl md:p-3 overflow-hidden">
        <div className="relative flex h-full flex-col justify-end gap-6 rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6 z-10">
          <div className="relative flex flex-1 flex-col justify-end gap-3">
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold group-hover:text-white font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold group-hover:text-white font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {description}
              </h2>
              <button
                onClick={() => router.push(link)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-110 transition-transform"
              >
                ↗
              </button>
            </div>
          </div>
        </div>
        {/* <div
          className="absolute inset-0 z-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/texture3.png")' }}
        /> */}
        {/* Gradient background on hover */}
        <div
          className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2.5xl ${styles["animated-gradient"]}`}
        />
      </div>
    </motion.li>
  );
};
