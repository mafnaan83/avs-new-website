"use client";

import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  bgColor: string;
}

export default function InfoCard({
  icon,
  title,
  content,
  bgColor,
}: InfoCardProps) {
  return (
    <div className="px-5 py-6 bg-blue-50 rounded-xl flex gap-4">
      <div
        className={`w-14 h-6 flex items-center justify-center rounded-sm ${bgColor}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
}
