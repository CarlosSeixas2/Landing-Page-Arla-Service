import React from "react";
import { Button } from "@heroui/react";
import { SITE_CONFIG } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";
import { Spotlight } from "./react-bits/Spotlight";

export const CtaFinal: React.FC = () => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      SITE_CONFIG.whatsappMessage,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 sm:py-28 bg-[#090A0C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Spotlight className="rounded-3xl border border-[#292C31] shadow-2xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B1A2B] via-[#111316] to-[#090A0C] border border-[#1473E6]/30 p-8 sm:p-12 lg:p-16">
            {/* Background Automotive Visual & Light Effects */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80"
                alt="Automotive background"
                className="w-full h-full object-cover object-center opacity-15 filter brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-[#090A0C]/90 to-transparent" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1473E6]/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Text side */}
              <div className="lg:col-span-8 text-left">
                <span className="text-[#2589FF] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
                  PRECISA DE UM SERVIÇO AUTOMOTIVO?
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.12] mb-4">
                  Seu carro precisa de atenção?
                </h2>

                <p className="text-[#A7A9AD] text-base sm:text-lg max-w-xl">
                  Fale com nossa equipe e agende seu atendimento com comodidade,
                  transparência e rapidez.
                </p>
              </div>

              {/* Action Button */}
              <div className="lg:col-span-4 flex lg:justify-end">
                <Button
                  onPress={handleWhatsApp}
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-base px-8 py-5 rounded-full shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:shadow-[#25D366]/50 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer border-none"
                >
                  <DynamicIcon name="WhatsappIcon" size={24} color="#000000" />
                  <span>Falar pelo WhatsApp</span>
                  <DynamicIcon
                    name="ArrowRight01Icon"
                    size={18}
                    color="#000000"
                  />
                </Button>
              </div>
            </div>
          </div>
        </Spotlight>
      </div>
    </section>
  );
};
