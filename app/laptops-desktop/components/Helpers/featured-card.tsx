import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#9F7E3A]/30 backdrop-blur-sm border border-[#BD9953]/30 rounded-2xl p-6 hover:bg-[#[#9F7E3A]]/40 transition-all duration-300 hover:transform hover:scale-105 ${className}`}
    >
      <div className="mb-4">
        <Icon className="w-8 h-8 text-[#5B3E01]" />
      </div>
      <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
      <p className="text-[#9F7E3A]/100/80 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
