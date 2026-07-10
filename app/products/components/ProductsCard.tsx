"use client";

import Image from "next/image";

interface ProductCardProps {
  name: string;
  image: string;
  slug?: string;
}

const WHATSAPP_NUMBER = "+971506501756"; // 👈 replace with your number

export default function ProductCard({ name, image, slug }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const productUrl = slug
      ? `${window.location.origin}/products/${slug}`
      : window.location.href;

    const message = encodeURIComponent(
      `Hi! I'm interested in ${name}. Here's the link: ${productUrl}`,
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-[#F0F0EE] p-4 transition-shadow duration-300 hover:shadow-md">
      {/* Image area */}
      <div className="relative flex h-[160px] items-center justify-center">
        <div className="absolute bottom-4 h-3 w-3/5 rounded-full bg-black/10 blur-md" />
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="relative z-10 object-contain"
        />
      </div>

      {/* Name — wraps to 2 lines instead of truncating */}
      <h3 className="mt-3 text-lg font-semibold text-[#2E3626] line-clamp-2 leading-snug min-h-[2.5rem]">
        {name}
      </h3>

      {/* WhatsApp button — always visible on mobile, hover-reveal on desktop */}
      <button
        onClick={handleWhatsAppClick}
        aria-label={`Chat on WhatsApp about ${name}`}
        className="
          absolute bottom-3 right-3
          flex h-9 w-9 items-center justify-center
          rounded-full bg-[#25D366] text-white shadow-lg
          opacity-100 translate-y-0
          md:opacity-0 md:translate-y-2
          transition-all duration-300
          md:group-hover:opacity-100 md:group-hover:translate-y-0
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.06h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.19 8.19 0 0 1-1.26-4.31c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.25-8.27 8.25zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.01-.47-.01-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
        </svg>
      </button>
    </div>
  );
}
