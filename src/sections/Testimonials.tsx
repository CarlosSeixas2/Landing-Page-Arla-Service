import React from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { TestimonialCard } from "../components/ui/TestimonialCard";
import { TESTIMONIALS_DATA } from "../data/content";

export const Testimonials: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40"
    >
      <Container className="relative z-10">
        {/* Header */}
        <SectionTitle
          badge="DEPOIMENTOS"
          title="Quem conhece, recomenda."
          description="A confiança dos nossos clientes é o que nos motiva a melhorar sempre e manter o mais alto padrão técnico."
          layout="split"
        />

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => (
            <TestimonialCard key={item.id} testimonial={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
