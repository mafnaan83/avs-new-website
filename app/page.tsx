import AboutUs from "@/components/ui/AboutUs";
import Blogs from "@/components/ui/Blogs";
import AppleCardsCarouselDemo from "@/components/ui/CardsCarousal";
import ParallaxHome from "@/components/ui/parallax";
import Services from "@/components/ui/Services";
import Trendnet from "@/components/ui/Trendnet";
import WhyUs from "@/components/ui/WhyUs";
import ContactSection from "@/components/ui/Contact";
import NewHero from "@/components/other/NewHero";

export const metadata = {
  title:
    "Top IT Solutions Company in Dubai | Hardware & Software Development UAE",
  description:
    "Authorized distributor of HP, Dell & Lenovo in Dubai. Custom software, app, and web development for UAE businesses. Local IT support since 2010.",
  keywords: [
    "Web Development Company Dubai",
    "IT company Dubai",
    "software development UAE",
    "HP distributor Dubai",
    "Dell servers UAE",
  ],
  alternates: {
    canonical: "https://jscomputers.ae",
  },
};

export default function Home() {
  return (
    <div>
      <NewHero />
      {/* <HeroSectionOne /> */}
      <AboutUs />
      <Services />
      {/* <NewServices /> */}
      <Trendnet />
      <WhyUs />
      <AppleCardsCarouselDemo />
      <ParallaxHome />
      {/* <Refurbished /> indside */}
      <Blogs />
      <ContactSection />
      {/* <AppleMacSection />
      <DlinkSection />
      <Desktop /> */}
      {/* <ProductShowcase /> */}
    </div>
  );
}
