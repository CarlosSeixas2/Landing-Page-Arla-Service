import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { SITE_CONFIG } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";

export const Location: React.FC = () => {
  const handleOpenMaps = () => {
    window.open(SITE_CONFIG.googleMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="localizacao"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Address Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
              NOSSO ENDEREÇO
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.15] mb-6">
              Onde estamos
            </h2>

            <div className="bg-[#111316] border border-[#292C31] p-6 rounded-2xl w-full mb-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1473E6]/10 border border-[#1473E6]/25 flex items-center justify-center text-[#1473E6] shrink-0 mt-0.5">
                  <DynamicIcon name="Location01Icon" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">
                    {SITE_CONFIG.name}
                  </h4>
                  <p className="text-[#A7A9AD] text-sm leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                  <p className="text-[#2589FF] text-xs font-semibold mt-1">
                    {SITE_CONFIG.city}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#292C31] flex items-center justify-between text-xs text-[#A7A9AD]">
                <div className="flex items-center gap-2">
                  <DynamicIcon
                    name="Clock01Icon"
                    size={16}
                    className="text-[#1473E6]"
                  />
                  <span>Segunda a Sexta: 08h às 18h</span>
                </div>
                <span>Sábado: 08h às 12h</span>
              </div>
            </div>

            {/* Google Maps Button */}
            <Button
              onPress={handleOpenMaps}
              className="bg-[#1473E6] hover:bg-[#2589FF] text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-[#1473E6]/25 transition-all duration-300 hover:shadow-[#1473E6]/40 hover:scale-[1.02] flex items-center gap-2.5 cursor-pointer border-none"
            >
              <DynamicIcon name="MapsIcon" size={20} />
              <span>Abrir no Google Maps</span>
            </Button>
          </motion.div>

          {/* Right Column: Interactive Styled Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div
              onClick={handleOpenMaps}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#292C31] hover:border-[#1473E6]/70 bg-[#111316] h-[340px] sm:h-[400px] cursor-pointer shadow-2xl transition-all duration-300"
            >
              <iframe
                title="Mapa da região da ARLA Service em Parnaíba"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-41.82%2C-2.94%2C-41.73%2C-2.86&layer=mapnik&marker=-2.904%2C-41.776"
                className="w-full h-full border-0"
                loading="lazy"
              />

              <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1.5 rounded-md text-[10px] font-semibold text-slate-700 shadow-md">
                © OpenStreetMap contributors
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
