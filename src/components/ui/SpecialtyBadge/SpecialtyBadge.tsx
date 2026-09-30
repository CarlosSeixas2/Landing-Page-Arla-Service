import React from "react";
import { DynamicIcon } from "../../DynamicIcon";

export interface SpecialtyBadgeProps {
  label: string;
  desc: string;
  iconName: string;
}

export const SpecialtyBadge: React.FC<SpecialtyBadgeProps> = ({
  label,
  desc,
  iconName,
}) => {
  return (
    <div className="bg-[#090A0C] border border-[#292C31] hover:border-[#1473E6]/60 rounded-xl p-3.5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-0.5 group">
      <div className="w-9 h-9 rounded-lg bg-[#1473E6]/10 text-[#1473E6] group-hover:bg-[#1473E6] group-hover:text-white flex items-center justify-center mb-2.5 transition-all">
        <DynamicIcon name={iconName} size={18} />
      </div>
      <span className="text-sm font-bold text-white font-heading group-hover:text-[#2589FF] transition-colors">
        {label}
      </span>
      <span className="text-[11px] text-[#A7A9AD] mt-0.5">{desc}</span>
    </div>
  );
};
