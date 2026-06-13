"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLLIElement | null>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  const serviceLinks = [
    { name: "Digital Services", path: "/digital-services" },
    { name: "ELV", path: "/elv" },
    { name: "Surveillance", path: "/surveillance" },
    { name: "Structured Cabling", path: "/structured-cabling" },
  ];

  const productLinks = [
    { name: "Laptops & Desktops", path: "/laptops-desktop" },
    { name: "Servers & Storage", path: "/servers-storage" },
    { name: "Networking Products", path: "/networking" },
    { name: "Surveillance Products", path: "/surveillance-products" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ padding: "1.5rem 2rem" }}
        animate={{
          padding: scrolled ? "0.8rem 1.5rem" : "1.5rem 2rem",
          width: isMobile ? "100%" : scrolled ? "70%" : "80%",
        }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-2 left-0 translate-x-0 w-full px-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[80%] sm:px-0 z-50 transition-all bg-transparent"
      >
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: scrolled ? 0.95 : 1,
            scale: scrolled ? 0.98 : 1,
            backdropFilter: scrolled ? "blur(15px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(15px)" : "blur(0px)",
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 0.8)"
              : "transparent",
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className={`flex items-center justify-between px-6 py-2 transition-all ${
            scrolled ? "shadow-lg rounded-3xl" : "shadow-none rounded-none"
          }`}
        >
          {/* Logo */}
          <motion.div className="text-xl font-bold">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </motion.div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-base text-black">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`relative transition-all duration-300 ease-in-out ${
                    pathname === link.path
                      ? "text-blue-600 font-medium"
                      : "hover:text-blue-500"
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-1 h-1 bg-blue-600 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </li>
            ))}

            {/* Services Dropdown */}
            <li
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button
                className={`relative transition-all duration-300 ease-in-out ${
                  pathname.startsWith("/services")
                    ? "text-blue-600 font-medium"
                    : "hover:text-blue-500"
                }`}
              >
                Services
              </button>
              <AnimatePresence>
                {showServices && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-50"
                  >
                    {serviceLinks.map((service) => (
                      <li key={service.path}>
                        <Link
                          href={service.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 rounded-md"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Products Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button
                className={`relative transition-all duration-300 ease-in-out ${
                  pathname.startsWith("/products")
                    ? "text-blue-600 font-medium"
                    : "hover:text-blue-500"
                }`}
              >
                Products
              </button>
              <AnimatePresence>
                {showProducts && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg p-2 z-50"
                  >
                    {productLinks.map((product) => (
                      <li key={product.path}>
                        <Link
                          href={product.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 rounded-md"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Contact Button */}
          <motion.div
            animate={{ x: scrolled ? -20 : 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden md:block"
          >
            <Link href="/contact">
              <button className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                Contact Us
              </button>
            </Link>
          </motion.div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 right-0 w-64 h-full bg-white z-[999] p-6 shadow-lg md:hidden"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col gap-4 mt-12">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg ${
                  pathname === link.path
                    ? "text-blue-600 font-medium"
                    : "text-gray-800"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Mobile Services Dropdown */}
          <li>
            <button
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="text-lg text-gray-800 flex items-center justify-between w-full"
            >
              Services
              <span>
                {mobileServicesOpen ? <ChevronUp /> : <ChevronDown />}
              </span>
            </button>
            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 pl-4 flex flex-col gap-2"
                >
                  {serviceLinks.map((service) => (
                    <li key={service.path}>
                      <Link
                        href={service.path}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-gray-700 hover:text-blue-600"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Mobile Products Dropdown */}
          <li>
            <button
              onClick={() => setMobileProductsOpen((prev) => !prev)}
              className="text-lg text-gray-800 flex items-center justify-between w-full"
            >
              Products
              <span>
                {mobileProductsOpen ? <ChevronUp /> : <ChevronDown />}
              </span>
            </button>
            <AnimatePresence>
              {mobileProductsOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 pl-4 flex flex-col gap-2"
                >
                  {productLinks.map((product) => (
                    <li key={product.path}>
                      <Link
                        href={product.path}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-gray-700 hover:text-blue-600"
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="mt-4">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
