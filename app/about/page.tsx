import React from "react";
import AboutUsSection from "./ui/about-section";
import Testamonial from "./ui/Testamonial";
import WhyChooseUs from "./ui/WhyChooseUse";
import Industries from "./ui/Industries";

export const metadata = {
  title: "About JS Computer – IT Services, Laptops & Networking in Dubai",
  description:
    "Discover JS Computer – Dubai's trusted source for IT services, laptops, and networking solutions across the UAE.",
  keywords: [
    "About JS Computer Dubai",
    "IT company Dubai",
    "refurbished laptops Dubai",
    "networking solutions UAE",
    "IT services Dubai",
    "software development UAE",
    "hardware distributor Dubai",
    "trusted IT partner UAE",
  ],
  alternates: {
    canonical: "https://jscomputer.ae/about",
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-about-jscomputer.jpg",
        width: 1200,
        height: 630,
        alt: "About JS Computer - Leading IT Company in Dubai",
      },
    ],
  },
};

const About = () => {
  return (
    <div>
      <AboutUsSection
        title={
          "Empowering Your Business with Innovative IT & Digital Solutions"
        }
        paragraphs={[
          "At JS Computers, we help businesses across the UAE and wider GCC region thrive with innovative networking, web development, digital marketing, branding, and hardware solutions. Our mission is to bridge the gap between advanced technology and business success, delivering seamless IT services that drive growth and connectivity.",
          " Whether you’re a startup or an enterprise, JS Computers provides tailored solutions that enhance productivity and fuel digital transformation. Partner with us to experience technology that moves your business forward.",
        ]}
        imageSrc={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fpexels-pixabay-416405%20Large.jpeg?alt=media&token=44a7ae87-3e9e-4ed3-ae9e-856bc6503021"
        }
      />
      <Testamonial />
      <WhyChooseUs />
      <Industries />
    </div>
  );
};

export default About;
