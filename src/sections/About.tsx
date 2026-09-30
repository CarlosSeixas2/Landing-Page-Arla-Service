import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { DynamicIcon } from "../components/DynamicIcon";
import ArlaServiceImage from "../assets/foto_perfil.jpg";

const ABOUT_CHECKLIST = [
  "Diagnóstico computadorizado para linha diesel",
  "Especialização em sistemas Euro 5 e Euro 6",
  "Reparação de Pick-Ups, Caminhões e Máquinas",
  "Orçamento detalhado, claro e com garantia",
];

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Workshop & Diagnostic Precision Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#292C31] shadow-2xl group bg-[#111316]">
              <img
                src={ArlaServiceImage}
                alt="Técnico Especialista em Motores Diesel na ARLA Service"
                className="w-full h-[380px] sm:h-[560px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent opacity-80" />
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
              SOBRE A ARLA SERVICE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.18] mb-6">
              Foco técnico e alta tecnologia em sistemas e motores diesel.
            </h2>

            <div className="space-y-4 text-[#A7A9AD] text-base sm:text-lg leading-relaxed mb-8">
              <p>
                A{" "}
                <strong className="text-white font-semibold">
                  ARLA Service
                </strong>{" "}
                nasceu com o propósito de oferecer serviços de alta complexidade
                e precisão técnica para veículos e máquinas a diesel.
              </p>
              <p>
                Com profundo domínio em motores diesel modernos, injeção common
                rail e sistemas de pós-tratamento de emissões{" "}
                <strong className="text-white font-semibold">
                  Euro 5 e Euro 6
                </strong>
                , nossa oficina combina diagnóstico computadorizado de última
                geração com rigor mecânico para entregar a máxima confiabilidade
                ao seu veículo ou frota.
              </p>
            </div>

            {/* Feature checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full">
              {ABOUT_CHECKLIST.map((item, idx) => (
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
              href="#servicos"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111316] hover:bg-[#181B1F] text-white font-semibold text-base border border-[#292C31] hover:border-[#1473E6] transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Conheça Nossas Soluções</span>
              <DynamicIcon
                name="ArrowRight01Icon"
                size={18}
                className="text-[#1473E6]"
              />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
