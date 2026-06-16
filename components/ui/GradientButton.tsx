"use client";

import { motion } from "framer-motion";

interface GradientButtonProps {
  label: string;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
  type?: string;
  disabled?: boolean;
}

export default function GradientButton({
  label,
  onClick,
  showArrow = false,
  className,
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.01,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
      }}
      whileTap={{ scale: 0.7 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2 text-white bg-gradient-to-r from-[#CBA65E] via-[#AF8B47] to-[#937230] rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-100 ${className}`}
    >
      {label}
      {showArrow && <span className="ml-1">→</span>}
    </motion.button>
  );
}
