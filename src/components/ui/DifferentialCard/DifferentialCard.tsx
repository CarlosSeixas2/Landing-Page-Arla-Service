import React from "react";
import { motion } from "framer-motion";
import type { DifferentialItem } from "../../../data/content";
import { DynamicIcon } from "../../DynamicIcon";
import { Spotlight } from "../react-bits/Spotlight";

export interface DifferentialCardProps {
  item: DifferentialItem;
  index: number;
}

export const DifferentialCard: React.FC<DifferentialCardProps> = ({
  item,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Spotlight className="h-full rounded-2xl">
        <div className="relative h-full bg-[#111316] border border-[#292C31] hover:border-[#1473E6]/60 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
          {/* Giant Watermark Number */}
          <span className="absolute -bottom-4 -right-2 text-7xl sm:text-8xl font-black font-heading text-white/[0.03] select-none pointer-events-none transition-colors group-hover:text-[#1473E6]/[0.08]">
            {item.number}
          </span>

          {/* Top row: Icon + Number badge */}
          <div className="flex items-center justify-between mb-5 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-[#1473E6]/10 border border-[#1473E6]/25 flex items-center justify-center text-[#1473E6] group-hover:bg-[#1473E6] group-hover:text-white transition-all duration-300">
              <DynamicIcon name={item.iconName} size={24} />
            </div>
            <span className="text-xs font-bold font-heading text-[#1473E6] bg-[#1473E6]/10 px-2.5 py-1 rounded-full border border-[#1473E6]/20">
              {item.number}
            </span>
          </div>

          {/* Title & Description */}
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading group-hover:text-[#2589FF] transition-colors">
              {item.title}
            </h3>
            <p className="text-[#A7A9AD] text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </Spotlight>
    </motion.div>
  );
};
