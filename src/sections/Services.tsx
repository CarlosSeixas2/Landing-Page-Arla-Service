import React from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ServiceCard } from "../components/ui/ServiceCard";
import { SERVICES_DATA } from "../data/content";
import { requestWhatsAppTriage } from "../lib/whatsappTriageEvents";

export const Services: React.FC = () => {
  const handleServiceClick = (serviceTitle: string) => {
    requestWhatsAppTriage(serviceTitle);
  };

  return (
    <section
      id="servicos"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1473E6]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <SectionTitle
          badge="NOSSOS SERVIÇOS"
          title="Soluções Técnicas em Diesel."
          description="Manutenção, reparação mecânica e diagnóstico eletrônico avançado para pick-ups, caminhões, máquinas e sistemas Euro 5 e Euro 6."
          layout="split"
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={handleServiceClick}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
