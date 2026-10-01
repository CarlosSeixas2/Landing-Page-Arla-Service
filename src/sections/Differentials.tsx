import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { DifferentialCard } from "../components/ui/DifferentialCard";
import { SpecialtyBadge } from "../components/ui/SpecialtyBadge";
import { DIFFERENTIALS_DATA, DIESEL_SPECIALTIES } from "../data/content";
import differentialsBg from "../assets/hilux-ilustrativa.jpg";

export const Differentials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40">
      {/* Subtle blue accent glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#1473E6]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Visual Specialties Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#111316]/90 border border-[#292C31] backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-[#292C31]">
            <div>
              <span className="text-[#1473E6] text-xs font-bold uppercase tracking-widest block font-sans">
                ESPECIALIDADES ATENDIDAS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                Domínio técnico de ponta a ponta na linha diesel
              </h3>
            </div>
            <span className="text-xs text-[#A7A9AD]">
              Manutenção • Reparação • Diagnóstico
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {DIESEL_SPECIALTIES.map((item) => (
              <SpecialtyBadge
                key={item.id}
                label={item.label}
                desc={item.desc}
                iconName={item.iconName}
              />
            ))}
          </div>
        </motion.div>

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
                DIFERENCIAIS TÉCNICOS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.15] mb-6">
                Por que confiar na ARLA Service?
              </h2>
              <p className="text-[#A7A9AD] text-base leading-relaxed mb-8">
                Unimos conhecimento especializado em engenharia diesel a
                scanners e ferramentas de precisão, oferecendo diagnósticos
                exatos e soluções definitivas para o seu veículo ou operação.
              </p>
            </div>

            {/* Dark Atmospheric Automotive Box */}
            <div className="relative rounded-2xl overflow-hidden border border-[#292C31] h-64 sm:h-72 group shadow-2xl">
              <img
                src={differentialsBg}
                alt="Engenharia e Motores Diesel ARLA Service"
                className="w-full h-full object-cover object-[center_80%] filter brightness-[0.5] contrast-[1.2] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Column: 4 Diferenciais in 2x2 Grid with Watermark Numbers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIALS_DATA.map((diff, index) => (
              <DifferentialCard key={diff.number} item={diff} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
