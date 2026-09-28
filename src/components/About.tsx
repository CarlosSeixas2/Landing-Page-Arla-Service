import React from "react";
import { motion } from "framer-motion";
import { DynamicIcon } from "./DynamicIcon";
import arlaServiceImage from "../assets/foto_perfil.jpg";

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Workshop Facade & Building Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#292C31] shadow-2xl group bg-[#111316]">
              {/* Facade Image */}
              <img
                src={arlaServiceImage}
                alt="Fachada e Instalações da ARLA Service"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center filter brightness-[0.75] contrast-[1.15] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Glowing Backdrop Element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#1473E6]/10 to-transparent rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
              SOBRE NÓS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.18] mb-6">
              Mais do que uma oficina, um lugar onde seu carro recebe a atenção
              que merece.
            </h2>

            <div className="space-y-4 text-[#A7A9AD] text-base sm:text-lg leading-relaxed mb-8">
              <p>
                A nasceu com o propósito de oferecer um serviço automotivo de
                qualidade, unindo{" "}
                <strong className="text-white font-semibold">
                  experiência
                </strong>
                ,{" "}
                <strong className="text-white font-semibold">tecnologia</strong>{" "}
                e um atendimento de confiança.
              </p>
              <p>
                Nossa equipe é formada por profissionais altamente qualificados,
                prontos para cuidar do seu veículo com máxima dedicação e
                respeito, como se fosse o nosso.
              </p>
            </div>

            {/* Feature checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full">
              {[
                "Equipamentos de diagnóstico digital",
                "Peças com procedência e garantia",
                "Orçamento detalhado e sem surpresas",
                "Atendimento ágil e personalizado",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-sm text-white"
                >
                  <DynamicIcon
                    name="CheckmarkCircle01Icon"
                    size={18}
                    className="text-[#1473E6]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#estrutura"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111316] hover:bg-[#181B1F] text-white font-semibold text-base border border-[#292C31] hover:border-[#1473E6] transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Conheça nosso espaço</span>
              <DynamicIcon
                name="ArrowRight01Icon"
                size={18}
                className="text-[#1473E6]"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
