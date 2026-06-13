"use client";
import { motion, useInView } from "framer-motion";
import { HardDrive } from "lucide-react";
import { useRef } from "react";

interface NetworkWidgetProps {
  text: string;
}

export default function NetworkWidget({ text }: NetworkWidgetProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      className="flex gap-3 align-center"
    >
      <div className="w-8 h-6 flex items-center justify-center rounded-sm bg-blue-600">
        <HardDrive className="h-4 w-4 text-white" />
      </div>
      <h2 className="text-lg font-medium">{text}</h2>
    </motion.div>
  );
}
