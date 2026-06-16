import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AVS Trading Dubai | FMCG Distribution & Supply Company in UAE",
  description: "AVS Trading supplies food, beverage, dairy, and household FMCG products to retailers and supermarkets across Dubai and the UAE. Get in touch for distribution and supply inquiries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="2Ss1nIi-Yz_tb1MagWUN-YKrDxWkOrTmSUK3v7OBl0I"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <header className="bg-black py-3 text-white text-center text-lg">
          <Navigation />
        </header> */}
        <Navbar />
        <div className="pt-[100px]">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
