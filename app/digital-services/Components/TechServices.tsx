"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import {
  HardDrive,
  Laptop,
  Router,
  Video,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Laptops & Desktops",
    description:
      "Business-grade laptops and desktops from top brands like HP, Dell, and Lenovo. Ideal for offices, retail, and enterprises across the UAE.",
    icon: <Laptop className="w-5 h-5 text-black dark:text-neutral-400" />,
    link: "/laptops-desktop",
  },
  {
    title: "Networking Solutions",
    description:
      "End-to-end wired and wireless network setup, routers, switches, firewalls & structured cabling.",
    icon: <HardDrive className="w-5 h-5 text-black dark:text-neutral-400" />,
    link: "/networking",
  },
  {
    title: "Surveillance Systems",
    description:
      "SIRA-compliant CCTV and access control systems with installation and remote monitoring setup.",
    icon: <Video className="w-5 h-5 text-black dark:text-neutral-400" />,
    link: "/surveillance",
  },
  {
    title: "Digital Services",
    description:
      "From websites to SEO, Google Ads, and social media marketing — we help your brand grow fast online.",
    icon: <Handshake className="w-5 h-5 text-black dark:text-neutral-400" />,
    link: "/digital-services",
  },
  {
    title: "Servers & Storage",
    description:
      "Enterprise server systems, NAS/SAN storage, and data center hardware, built for scale and speed.",
    icon: <Router className="w-5 h-5 text-black dark:text-neutral-400" />,
    link: "/servers-storage",
  },
  {
    title: "IT Support & Security",
    description:
      "Complete IT setup, maintenance, and cybersecurity solutions to keep your systems protected and running.",
    icon: <ShieldCheck className="w-5 h-5 text-black dark:text-neutral-400" />,
    link: "/it-support-security",
  },
];

export default function ServicesSection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.4 });
  const words = ["Your", "Technology", "Growth", "Partner"];

  return (
    <section className="px-5 lg:px-20 py-16 bg-white dark:bg-black">
      <h2
        ref={headingRef}
        className="text-3xl md:text-5xl font-bold mb-10 text-black dark:text-white"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={
              isHeadingInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}
            }
            transition={{ duration: 0.3, delay: index * 0.1 }}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const router = useRouter();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-2xl border p-6 h-full overflow-hidden bg-white dark:bg-neutral-900 transition-all hover:cursor-pointer hover:shadow-md"
      onClick={() => router.push(link)}
    >
      <div className="z-10 relative space-y-3">
        <div className="w-10 h-10 bg-white dark:bg-neutral-800 flex items-center justify-center rounded-full border">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm text-black dark:text-neutral-400 group-hover:text-white transition-colors">
          {description}
        </p>
      </div>

      <div className="z-10 relative mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(link);
          }}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform shadow-sm"
        >
          ↗
        </button>
      </div>

      {/* Gradient hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0" />
    </motion.div>
  );
}
