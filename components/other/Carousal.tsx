"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Profile {
  id: number;
  name: string;
  service: string;
  image: string;
  subheading: string;
  description: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    subheading: "Digital Solutions That Drive Business Growth",
    service: "Digital Solutions",
    description:
      "From websites and mobile apps to branding and digital marketing, we create tailored strategies to boost your online presence and connect with your audience.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fyoung-man-coding-at-a-modern-desk-setup-with-dual-%20Large.jpeg?alt=media&token=bec17798-2f23-4234-949d-2c30df8bd9ca",
  },
  {
    id: 2,
    description:
      "Stay protected with advanced CCTV, IP cameras, and remote monitoring systems tailored for homes and businesses. Reliable, scalable, and built for 24/7 security.",
    name: "Eleanor Pena",
    service: "Surveillance Solutions",
    subheading: "Secure Every Corner with Smart Surveillance",
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fa-professionally-installed-security-camera-system-%20Large.jpeg?alt=media&token=2c869be8-2932-41d4-9e1a-113da0b3fa35",
  },
  {
    id: 3,
    description:
      "Explore a wide range of laptops, desktops, and accessories from leading brands. Perfect for work, gaming, and enterprise IT environments.",
    name: "Savannah Nguyen",
    service: "Laptops and IT Hardware",
    subheading: "Top-Quality Laptops and IT Gear for Every Need",
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fa-clean-workspace-with-a-lineup-of-premium-laptops%20Large.jpeg?alt=media&token=4b0bead5-daf5-4a5f-9b6c-34b869baf8b6",
  },
  {
    id: 4,
    description:
      "From structured cabling to enterprise networking and server setup, we build secure and scalable IT infrastructures for smooth business operations.",
    name: "Kristin Watson",
    subheading: "Robust Networking Solutions for Seamless Connectivity",
    service: "Networking & IT Infrastructure",
    image:
      "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fa-real-life-office-server-room-with-an-it-technici%20(2)%20Large.jpeg?alt=media&token=924ca90c-8657-4c49-b4fb-221fbd68c03a",
  },
];

const ProfileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
      {/* Sliding Content Container */}
      <div className="relative h-full">
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            className={`
              absolute inset-0 transition-transform duration-700 ease-in-out
              ${
                index === currentIndex
                  ? "translate-x-0"
                  : index < currentIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
              }
            `}
            style={{
              boxShadow: "none",
              filter: "none",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center h-full px-2 sm:px-4">
              {/* Left Content */}
              <div className="text-left order-2 lg:order-1">
                <span className="text-xs sm:text-sm text-white uppercase tracking-wider mb-2 sm:mb-4 block">
                  {profile.service}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                  {profile.subheading}
                </h2>
                <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              {/* Right Image */}
              <div className="relative order-1 lg:order-2">
                <div className="relative">
                  <Image
                    height={200}
                    width={200}
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                  />
                  {/* Gradient overlay for better text visibility if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {profiles.map((_, index) => (
          <div
            key={index}
            className={`
              w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 cursor-pointer
              ${
                index === currentIndex
                  ? "bg-gray-900 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }
            `}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCarousel;
