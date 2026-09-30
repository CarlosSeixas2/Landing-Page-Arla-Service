import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ProcessStepCard } from "../components/ui/ProcessStepCard";
import { DynamicIcon } from "../components/DynamicIcon";
import { HOW_WE_WORK_DATA } from "../data/content";

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40">
      {/* Subtle background ambient light */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#1473E6]/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <SectionTitle
          badge="PROCESSO TRANSPARENTE"
          title="Como trabalhamos"
          description="Fluxo estruturado e transparente para diagnóstico e manutenção do seu veículo diesel, frota ou maquinário."
          align="center"
        />

        {/* Steps Grid / Timeline */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1473E6]/20 via-[#1473E6]/60 to-[#1473E6]/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {HOW_WE_WORK_DATA.map((step, index) => (
              <ProcessStepCard key={step.number} step={step} index={index} />
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
              de obra técnica especializada.
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
