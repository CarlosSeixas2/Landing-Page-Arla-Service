import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "../../DynamicIcon";

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-[#111316] border-[#1473E6]/60 shadow-lg shadow-[#1473E6]/5"
          : "bg-[#111316]/70 border-[#292C31] hover:border-[#1473E6]/40"
      }`}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-white text-base sm:text-lg">
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-[#1473E6] text-white rotate-180"
              : "bg-[#181B1F] text-[#A7A9AD]"
          }`}
        >
          <DynamicIcon name="ChevronDownIcon" size={18} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-[#A7A9AD] text-sm sm:text-base leading-relaxed border-t border-[#292C31]/40 pt-3">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
