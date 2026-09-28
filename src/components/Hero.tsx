import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { DynamicIcon } from "./DynamicIcon";
import { SITE_CONFIG } from "../data/content";
import profileImage from "../assets/foto_perfil.jpg";

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      SITE_CONFIG.whatsappMessage,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090A0C]"
    >
      {/* Background Graphic & High-Res Automotive Imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src={profileImage}
          alt="Fachada da ARLA Service"
          className="w-full h-full object-cover object-center scale-105 opacity-80 filter brightness-[0.62] contrast-[1.08]"
          loading="eager"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/55 to-[#090A0C]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C]/90 via-[#090A0C]/55 to-transparent lg:w-4/5" />

        {/* Subtle Blue Glow Flare */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-[#1473E6]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#2589FF]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col items-start text-left"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 font-heading"
            >
              SEU CARRO EM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e2e8f0] to-[#93c5fd]">
                BOAS MÃOS.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#A7A9AD] max-w-2xl leading-relaxed mb-8 font-sans font-normal"
            >
              Manutenção e serviços automotivos com qualidade, confiança e
              agilidade para você seguir em frente.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button
                onPress={handleWhatsApp}
                className="bg-[#1473E6] hover:bg-[#2589FF] text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#1473E6]/30 transition-all duration-300 hover:shadow-[#1473E6]/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer border-none"
              >
                <DynamicIcon name="WhatsappIcon" size={22} />
                <span>Falar pelo WhatsApp</span>
              </Button>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#111316]/80 hover:bg-[#181B1F] text-white font-semibold text-base border border-[#292C31] hover:border-[#1473E6]/60 transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
              >
                <span>Conhecer a oficina</span>
                <DynamicIcon
                  name="ArrowRight01Icon"
                  size={18}
                  className="text-[#A7A9AD] group-hover:text-white"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Hero Trust & Meta Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 pt-6 border-t border-[#292C31]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-[#A7A9AD]"
        >
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {/* <div className="flex items-center gap-2">
              <span className="flex text-[#FFB800]">
                <DynamicIcon name="StarIcon" size={18} />
              </span>
              <span className="font-semibold text-white">
                {SITE_CONFIG.stats.satisfiedClients}
              </span>
              <span>clientes satisfeitos</span>
            </div> */}

            {/* <div className="h-4 w-px bg-[#292C31] hidden sm:block" /> */}

            <div className="flex items-center gap-2">
              <DynamicIcon
                name="Location01Icon"
                size={18}
                className="text-[#1473E6]"
              />
              <span className="font-medium text-white">{SITE_CONFIG.city}</span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-[#A7A9AD] flex items-center gap-2 italic">
            Seu carro seguro em todas as jornadas.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
