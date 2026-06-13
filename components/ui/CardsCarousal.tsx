"use client";

import React, { ReactNode, useRef } from "react";
import { Card, Carousel } from "./CardCarWidget";
import { motion, useInView } from "framer-motion";

type FadeProps = {
  children: ReactNode;
  delay?: number;
};

const FadeInWhenVisible = ({ children, delay = 0 }: FadeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

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

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full lg:py-10 pb-10 bg-gradient-to-t from-blue-200 to-blue ">
      <FadeInWhenVisible>
        <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 font-sans">
          Top{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
            Categories
          </span>{" "}
        </h2>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Carousel items={cards} />
      </FadeInWhenVisible>
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

const data = [
  {
    category: "Laptops",
    title: "New and Refurbished laptops",
    src: "https://images.pexels.com/photos/3550484/pexels-photo-3550484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    category: "Servers",
    title: "Servers & Workstations",
    src: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    category: "Networking",
    title: "Networking Products",
    src: "https://images.pexels.com/photos/2881227/pexels-photo-2881227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    category: "Gaming Pc",
    title: "Powerful rigs for gamers",
    src: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    category: "Computer Accessories",
    title: "Essential daily tech gear",
    src: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
