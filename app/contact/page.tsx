import ContactPage from "./contact-page";

export const metadata = {
  title: "Contact AVS Trading | FMCG Supplier in Dubai, UAE",
  description:
    "Get in touch with AVS Trading for FMCG supply and distribution inquiries in Dubai and across the UAE. Reach out for product orders, partnerships, or general questions.",
  keywords: [
    "AVS Trading Dubai",
    "FMCG supplier Dubai",
    "Distribution company UAE",
    "Food & Beverage supplier UAE",
  ],
  alternates: {
    canonical: "https://avsgulf.ae/contact",
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-contact-avsgulf.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AVS Trading - FMCG Supplier in Dubai",
      },
    ],
  },
};

export default function Contact() {
  return (
    <div>
      <ContactPage />
    </div>
  );
}
