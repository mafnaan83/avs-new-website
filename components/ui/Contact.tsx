"use client";
import { useRouter } from "next/navigation";
import WhiteButton from "./ButtonWhite";
import { DotPattern } from "./dot-patterns";

export default function ContactSection() {
  const router = useRouter();
  const handelClick = () => {
    router.push("/contact");
  };
  return (
    <main className="relative flex h-[80vh] w-full items-center bg-[url('/bg-image.png')] justify-center overflow-hidden bg-white">
      {/* Dot pattern background */}
      <DotPattern
        className="absolute inset-0 h-full w-full"
        dotSize={1.5}
        spacing={24}
        dotColor="#94a3b8"
        offset={true}
      />

      {/* Foreground content */}
      <div className="relative z-10 text-center space-y-6 px-4 items-center">
        <h3 className="lg:text-5xl text-3xl font-bold text-gray-800">
          Get in Touch
        </h3>
        <p className="text-gray-600 max-w-md mx-auto text-xl">
          We`d love to hear from you! Reach out to us for inquiries, support, or
          just to say hello.
        </p>
        <WhiteButton
          label={"Contact Us"}
          showArrow
          className="mx-auto"
          onClick={handelClick}
        />
      </div>
    </main>
  );
}
