import React from "react";
import { motion } from "framer-motion";

export interface SectionTitleProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  layout?: "stacked" | "split";
  actions?: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  description,
  align = "left",
  layout = "stacked",
  actions,
  className = "",
}) => {
  if (layout === "split") {
    return (
      <div
        className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 ${className}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl text-left"
        >
          {badge && (
            <span className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
              {badge}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            {title}
          </h2>
        </motion.div>

        {(description || actions) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md text-left"
          >
            {description && (
              <div className="text-[#A7A9AD] text-sm sm:text-base leading-relaxed mb-3">
                {description}
              </div>
            )}
            {actions}
          </motion.div>
        )}
      </div>
    );
  }

  const isCenter = align === "center";

  return (
    <div
      className={`mb-16 sm:mb-20 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "text-left max-w-xl"
      } ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="text-[#A7A9AD] text-sm sm:text-base mt-4 leading-relaxed"
        >
          {description}
        </motion.div>
      )}

      {actions && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.25 }}
          className="mt-6"
        >
          {actions}
        </motion.div>
      )}
    </div>
  );
};
