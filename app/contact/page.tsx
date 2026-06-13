import ContactPage from "./contact-page";
import AddressesSection from "./ui/address-section";

export const metadata = {
  title:
    "JS Computer | Contact Us – IT Solutions, Refurbished Laptops & Networking Products in Dubai",
  description:
    "Get in touch with JS Computer – Dubai’s trusted IT company offering refurbished laptops, networking products, and custom software solutions across the UAE.",
  keywords: [
    "JS Computer Dubai",
    "Contact IT company Dubai",
    "IT support Dubai",
    "app and web development UAE",
    "hardware distributor UAE",
    "Dubai tech company",
    "second-hand laptops UAE",
    "refurbished laptops UAE",
  ],
  alternates: {
    canonical: "https://jscomputer.ae/contact",
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-contact-jscomputer.jpg",
        width: 1200,
        height: 630,
        alt: "Contact JS Computer - Leading IT Company in Dubai",
      },
    ],
  },
};

export default function Contact() {
  return (
    <div>
      <ContactPage />
      <AddressesSection />
    </div>
  );
}
