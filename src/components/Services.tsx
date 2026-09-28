import React from "react";
import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import { SERVICES_DATA, SITE_CONFIG } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";
import { Spotlight } from "./react-bits/Spotlight";

const entranceDirections = [
  { x: -90, y: 24, rotate: -6 },
  { x: 90, y: 24, rotate: 6 },
  { x: -70, y: -46, rotate: -4 },
  { x: 70, y: -46, rotate: 4 },
  { x: -90, y: 34, rotate: -6 },
  { x: 90, y: 34, rotate: 6 },
];

export const Services: React.FC = () => {
  const handleServiceClick = (serviceTitle: string) => {
    const message = `Olá! Gostaria de saber mais e agendar o serviço de ${serviceTitle} na ARLA Service.`;
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="servicos"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1473E6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
              NOSSOS SERVIÇOS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Tudo que seu carro precisa.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#A7A9AD] max-w-md text-sm sm:text-base leading-relaxed"
          >
            Oferecemos uma gama completa de serviços para manter seu veículo em
            perfeito funcionamento, com segurança e desempenho.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                x: entranceDirections[index].x,
                y: entranceDirections[index].y,
                rotate: entranceDirections[index].rotate,
                scale: 0.94,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 115,
                damping: 17,
                mass: 0.8,
                delay: (index % 3) * 0.1,
              }}
            >
              <Spotlight className="h-full rounded-2xl">
                <Card
                  onClick={() => handleServiceClick(service.title)}
                  className="relative w-full h-full bg-[#111316] border border-[#292C31] hover:border-[#1473E6]/70 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1473E6]/10 group text-left flex flex-col justify-between cursor-pointer"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Icon container */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-13 h-13 rounded-xl bg-[#1473E6]/10 border border-[#1473E6]/25 flex items-center justify-center text-[#1473E6] group-hover:bg-[#1473E6] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                          <DynamicIcon name={service.iconName} size={28} />
                        </div>

                        {service.tag && (
                          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#A7A9AD] bg-[#181B1F] px-2.5 py-1 rounded-md border border-[#292C31]">
                            {service.tag}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading group-hover:text-[#2589FF] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#A7A9AD] text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Action Hint */}
                    <div className="mt-8 pt-4 border-t border-[#292C31]/60 flex items-center justify-between text-xs font-semibold text-[#A7A9AD] group-hover:text-white transition-colors">
                      <span className="group-hover:text-[#2589FF] transition-colors">
                        Solicitar orçamento
                      </span>
                      <DynamicIcon
                        name="ArrowRight01Icon"
                        size={16}
                        className="text-[#1473E6] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Card>
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
