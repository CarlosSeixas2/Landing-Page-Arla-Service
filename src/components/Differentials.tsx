import React from "react";
import { motion } from "framer-motion";
import { DIFFERENTIALS_DATA } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";
import { Spotlight } from "./react-bits/Spotlight";

export const Differentials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40">
      {/* Subtle blue accent glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#1473E6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Dark Automotive Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div>
              <span className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
                DIFERENCIAIS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.15] mb-6">
                Por que escolher a ARLA Service?
              </h2>
              <p className="text-[#A7A9AD] text-base leading-relaxed mb-8">
                Combinamos tradição técnica automotiva com equipamentos de
                última geração para entregar a máxima confiabilidade ao seu
                veículo.
              </p>
            </div>

            {/* Dark Atmospheric Automotive Box */}
            <div className="relative rounded-2xl overflow-hidden border border-[#292C31] h-64 sm:h-72 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80"
                alt="Diferenciais ARLA Service"
                className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.2] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Column: 4 Diferenciais in 2x2 Grid with Watermark Numbers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIALS_DATA.map((diff, index) => (
              <motion.div
                key={diff.number}
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
                      {diff.number}
                    </span>

                    {/* Top row: Icon + Number badge */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-[#1473E6]/10 border border-[#1473E6]/25 flex items-center justify-center text-[#1473E6] group-hover:bg-[#1473E6] group-hover:text-white transition-all duration-300">
                        <DynamicIcon name={diff.iconName} size={24} />
                      </div>
                      <span className="text-xs font-bold font-heading text-[#1473E6] bg-[#1473E6]/10 px-2.5 py-1 rounded-full border border-[#1473E6]/20">
                        {diff.number}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading group-hover:text-[#2589FF] transition-colors">
                        {diff.title}
                      </h3>
                      <p className="text-[#A7A9AD] text-sm leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </Spotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
