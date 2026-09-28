import React from "react";
import { motion } from "framer-motion";
import { HOW_WE_WORK_DATA } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";
const stepIcons = [
  "Clock01Icon",
  "ShieldCheckIcon",
  "CpuIcon",
  "Wrench01Icon",
  "CheckmarkBadge01Icon",
];

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40">
      {/* Subtle background ambient light */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#1473E6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans"
          >
            PROCESSO TRANSPARENTE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight"
          >
            Como trabalhamos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-[#A7A9AD] text-sm sm:text-base mt-4"
          >
            Um fluxo de atendimento ágil, claro e sem termos complicados do
            início à entrega.
          </motion.p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1473E6]/20 via-[#1473E6]/60 to-[#1473E6]/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {HOW_WE_WORK_DATA.map((step, index) => (
              <motion.div
                key={step.number}
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
                {/* Step Circle with Number */}
                {/* Step Circle with Icon */}
                <div className="w-20 h-20 rounded-2xl bg-[#111316] border-2 border-[#292C31] group-hover:border-[#1473E6] flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#1473E6]/20 relative">
                  <DynamicIcon
                    name={stepIcons[index]}
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
            ))}
          </div>
        </div>

        {/* Bottom Guarantee Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111316] border border-[#292C31] text-xs sm:text-sm text-[#A7A9AD]">
            <DynamicIcon
              name="ShieldCheckIcon"
              size={18}
              className="text-[#1473E6]"
            />
            <span>
              Todos os nossos serviços contam com garantia formal de peças e mão
              de obra.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
