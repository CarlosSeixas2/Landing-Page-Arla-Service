import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { DynamicIcon } from "../components/DynamicIcon";
import { Container } from "../components/ui/Container";
import { SITE_CONFIG } from "../data/content";
import { requestWhatsAppTriage } from "../lib/whatsappTriageEvents";
import { RotatingText } from "../components/ui/react-bits/RotatingText";
import { Logo } from "../components/Logo";
import heroBg from "../assets/foto_perfil.jpg";

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    requestWhatsAppTriage();
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
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#090A0C]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Caminhão Scania e Oficina Diesel Especializada ARLA Service"
          className="w-full h-full object-cover object-[70%_center] lg:object-[82%_center] opacity-80 sm:opacity-85 filter brightness-[0.72] contrast-[1.12]"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-[#090A0C]/85 via-40% md:via-50% to-[#090A0C]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090A0C]/80 via-transparent via-25% to-[#090A0C]" />

        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#1473E6]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#1473E6]/20 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="flex justify-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex w-full max-w-4xl flex-col items-start text-left"
          >
            <motion.div
              variants={itemVariants}
              className="mb-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Logo size="sm" />
              <span className="h-px w-8 bg-[#1473E6]/70 sm:h-8 sm:w-px" />
              <span className="text-xs font-semibold tracking-wide text-[#CBD5E1] sm:text-sm">
                Tecnologia &amp; precisão diesel
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mb-6 flex h-[4.1rem] w-full items-center justify-start text-3xl font-extrabold leading-[1.08] text-[#93c5fd] drop-shadow-md sm:h-[6.5rem] sm:text-5xl md:h-[8.2rem] md:text-6xl lg:h-[9.1rem] lg:text-[4.2rem]"
            >
              <RotatingText
                items={[
                  { word: "DIAGNÓSTICO", highlight: "PRECISO." },
                  { word: "MANUTENÇÃO", highlight: "PREVENTIVA." },
                  { word: "REPARO", highlight: "ESPECIALIZADO." },
                ]}
                rotationInterval={5100}
                auto
                loop
              />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-2xl text-lg font-normal leading-relaxed text-[#CBD5E1] drop-shadow-sm sm:text-xl"
            >
              Tecnologia e precisão técnica para{" "}
              <strong className="text-white font-semibold">
                Pick-Ups, Caminhões e Máquinas
              </strong>
              . Especialistas em sistemas{" "}
              <strong className="text-[#93c5fd] font-semibold">
                Euro 5 e Euro 6
              </strong>
              , garantindo máxima disponibilidade e confiabilidade.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center"
            >
              <Button
                onPress={handleWhatsApp}
                className="bg-[#1473E6] hover:bg-[#2589FF] text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#1473E6]/30 transition-all duration-300 hover:shadow-[#1473E6]/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer border-none"
              >
                <DynamicIcon name="WhatsappIcon" size={22} />
                <span>Solicitar Avaliação Técnica</span>
              </Button>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#111316]/80 hover:bg-[#181B1F] text-white font-semibold text-base border border-[#292C31] hover:border-[#1473E6]/60 transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
              >
                <span>Nossos Serviços</span>
                <DynamicIcon
                  name="ArrowRight01Icon"
                  size={18}
                  className="text-[#A7A9AD] group-hover:text-white"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-col items-start gap-4 border-t border-[#292C31]/60 pt-6 text-left text-sm text-[#A7A9AD] sm:mt-18 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <DynamicIcon
                name="ShieldCheckIcon"
                size={18}
                className="text-[#1473E6]"
              />
              <span className="font-semibold text-white">
                Sistemas Euro 5 & Euro 6
              </span>
            </div>

            <div className="h-4 w-px bg-[#292C31] hidden sm:block" />

            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <DynamicIcon
                name="CpuIcon"
                size={18}
                className="text-[#1473E6]"
              />
              <span className="font-semibold text-white">
                Diagnóstico Eletrônico Dedicado
              </span>
            </div>

            <div className="h-4 w-px bg-[#292C31] hidden sm:block" />

            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <DynamicIcon
                name="Location01Icon"
                size={18}
                className="text-[#1473E6]"
              />
              <span className="font-medium text-white">{SITE_CONFIG.city}</span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-[#A7A9AD] flex items-center gap-2 italic">
            Eficiência e potência para sua jornada e frota.
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
