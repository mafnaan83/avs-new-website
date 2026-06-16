import AboutUs from "@/components/ui/AboutUs";
import ContactSection from "@/components/ui/Contact";
import { AnimatedMarqueeHero } from "@/components/ui/NewHeroAvs";
import WhyUsAVS from "./laptops-desktop/components/WhyUs";
import { LogosMarquee } from "./networking/components/logo-marquee";
import WhyUs from "@/components/ui/WhyUs";
import BusinessTypes from "./laptops-desktop/components/BusinessTypes";

export const metadata = {
  title: "AVS Trading Dubai | FMCG Distribution & Supply Company in UAE",
  description:
    "AVS Trading supplies food, beverage, dairy, and household FMCG products to retailers and supermarkets across Dubai and the UAE. Get in touch for distribution and supply inquiries",
  keywords: [
    "FMCG company Dubai",
    "wholesale FMCG Dubai",
    "AVS Gulf",
    "goods trading company UAE",
    "Tang supplier Dubai",
  ],
  alternates: {
    canonical: "https://avsgulf.ae",
  },
};

export default function Home() {
  return (
    <div>
      {/* <NewHero /> */}
      <AnimatedMarqueeHero
        description={
          "AVS Trading supplies a growing range of food, beverage, and household products to retailers across Dubai, built on reliable sourcing and on-time delivery."
        }
        images={[
          "/hero-1.png",
          "/hero-2.png",
          "/hero-3.png",
          "/hero-4.png",
          "/hero-5.png",
          "/hero-6.png",
          "/hero-7.png",
        ]}
      />
      {/* <HeroSectionOne /> */}
      <AboutUs />
      <WhyUsAVS />
      <LogosMarquee />
      <WhyUs />
      <BusinessTypes />
      {/* <Services /> */}
      {/* <NewServices /> */}
      {/* <Trendnet />
      <AppleCardsCarouselDemo />
      <ParallaxHome /> */}
      {/* <Refurbished /> indside */}
      {/* <Blogs /> */}
      <ContactSection />
      {/* <AppleMacSection />
      <DlinkSection />
      <Desktop /> */}
      {/* <ProductShowcase /> */}
    </div>
  );
}
