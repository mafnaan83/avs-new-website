"use client";
import { ReactNode, useRef } from "react";
import WhiteButton from "./ButtonWhite";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

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

const blogs = [
  {
    title:
      "'Why to buy new laptops if you get with same specs for great price' ",
  },
  { title: "Why did Dubai Metro used netwroking products from Trendnet" },
  { title: "Blog Three" },
  { title: "Blog Four" },
  { title: "Blog Five" },
];

const Blogs = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="relative lg:my-10 lg:px-10 px-5">
      <FadeInWhenVisible>
        <div className="bg-[url('/bg.png')] bg-cover lg:rounded-br-[120px] rounded-br-[80px] lg:h-screen rounded-2xl py-10">
          <FadeInWhenVisible delay={0.3}>
            <h2 className="rounded-md bg-blue-50 text-blue-700 py-1 px-4 text-sm font-medium w-fit p-10 ml-8">
              BLOGS
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.4}>
            <h2 className="lg:text-4xl text-2xl font-medium text-white py-5 ml-8">
              Stay ahead with the latest in enterprise networking, <br />{" "}
              hardware trends, and Dubai’s tech landscape
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
            <div className="flex items-center justify-between ml-8 mr-8">
              <WhiteButton
                label={"Explore more"}
                onClick={() => router.push("/blog")}
                showArrow
              />
              <div className="flex gap-5">
                <button
                  onClick={() => scroll("left")}
                  className="bg-white shadow p-2 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="bg-white shadow p-2 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </FadeInWhenVisible>
          <div
            ref={scrollRef}
            className="flex gap-4 pt-10 px-8 overflow-x-auto scroll-smooth hide-scrollbar"
          >
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="relative h-90 lg:h-100 min-w-[300px] md:min-w-[25%] bg-white rounded-xl shadow-md group  flex-shrink-0 "
              >
                <Image
                  src={"/network.png"}
                  fill
                  alt="Gey"
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
                <button className="absolute top-4 right-4 z-20 bg-white rounded-full shadow-md px-3 py-2 flex items-center text-sm font-medium overflow-hidden transition-all duration-1000 group hover:pl-3 hover:pr-4">
                  <span className="max-w-0 font-semibold opacity-0 overflow-hidden transition-all duration-1000 group-hover:max-w-[60px] group-hover:opacity-100 group-hover:px-5 group-hover:mr-1">
                    Read
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-black shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="absolute bottom-0 left-0 right-0  bg-black/40 backdrop-blur-md border-t border-white/20 h-30 z-10  p-4 rounded-br-xl rounded-bl-xl">
                  <h3 className="lg:text-2xl text-xl font-semibold text-white mb-1 line-clamp-3 overflow-hidden text-ellipsis">
                    {blog.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default Blogs;
