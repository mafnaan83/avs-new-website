import React from "react";
import AboutUsSection from "./ui/about-section";
import WhyChooseUs from "./ui/WhyChooseUse";

export const metadata = {
  title: "About AVS Trading | FMCG Distributor & Supplier in Dubai, UAE",
  description:
    "Learn about AVS Trading, a Dubai-based FMCG distributor serving retailers across the UAE with food, beverages, dairy, frozen foods, personal care, and household products.",
  keywords: [
    "About AVS Trading Dubai",
    "FMCG distributor Dubai",
    "food products UAE",
    "beverages UAE",
    "dairy products UAE",
    "frozen foods UAE",
    "personal care UAE",
    "household essentials UAE",
  ],
  alternates: {
    canonical: "https://avsgulf.ae/about",
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-about-avstrading.jpg",
        width: 1200,
        height: 630,
        alt: "About AVS Trading - Leading FMCG Distributor in Dubai",
      },
    ],
  },
};

const About = () => {
  return (
    <div>
      <AboutUsSection
        title={"Supporting Retail with Reliable FMCG Supply Solutions"}
        paragraphs={[
          "AVS Trading is a Dubai-based FMCG trading and distribution company serving retailers and businesses across the UAE. We specialize in sourcing, warehousing, and distributing a diverse range of products, including food and beverages, dairy and chilled goods, frozen foods, personal care items, household essentials, and snacks.",
          "With an efficient supply chain network and cold chain capabilities, we ensure products are handled with care and delivered on time. Our operations span all seven Emirates, supporting supermarkets, grocery stores, convenience stores, and HoReCa businesses with consistent supply and dependable service.",
        ]}
        imageSrc={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/images%2Fpexels-pixabay-416405%20Large.jpeg?alt=media&token=44a7ae87-3e9e-4ed3-ae9e-856bc6503021"
        }
      />
      {/* <Testamonial /> */}
      <WhyChooseUs />
    </div>
  );
};

export default About;
