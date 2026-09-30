import React from "react";
import { motion } from "framer-motion";
import type { StepItem } from "../../../data/content";
import { DynamicIcon } from "../../DynamicIcon";

export interface ProcessStepCardProps {
  step: StepItem;
  index: number;
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  step,
  index,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -45 : 45,
        y: 16,
        rotate: index % 2 === 0 ? -2 : 2,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: false, margin: "-30px" }}
      transition={{
        type: "spring",
        stiffness: 105,
        damping: 18,
        delay: index * 0.1,
      }}
      className="flex flex-col items-center text-center group"
    >
      {/* Step Circle with Icon */}
      <div className="w-20 h-20 rounded-2xl bg-[#111316] border-2 border-[#292C31] group-hover:border-[#1473E6] flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#1473E6]/20 relative">
        <DynamicIcon
          name={step.iconName}
          size={30}
          className="text-white group-hover:text-[#2589FF] transition-colors"
        />

        {/* Miniature pulse indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#1473E6] border-2 border-[#090A0C] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-[#2589FF] transition-colors">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-[#A7A9AD] text-xs sm:text-sm leading-relaxed max-w-[200px]">
        {step.description}
      </p>
    </motion.div>
  );
};
