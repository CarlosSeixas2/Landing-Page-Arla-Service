import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { AccordionItem } from "../components/ui/Accordion";
import { DynamicIcon } from "../components/DynamicIcon";
import { FAQ_DATA } from "../data/content";
import { requestWhatsAppTriage } from "../lib/whatsappTriageEvents";

export const Faq: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const half = Math.ceil(FAQ_DATA.length / 2);
  const leftFaqs = FAQ_DATA.slice(0, half);
  const rightFaqs = FAQ_DATA.slice(half);

  const handleWhatsApp = () => {
    requestWhatsAppTriage();
  };

  const renderFaqColumn = (faqs: typeof FAQ_DATA) => (
    <div className="space-y-3.5">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIds.includes(faq.id)}
          onToggle={toggleFaq}
        />
      ))}
    </div>
  );

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40"
    >
      <Container className="relative z-10">
        {/* Header */}
        <SectionTitle
          badge="FAQ"
          title="Dúvidas frequentes"
          layout="split"
          description="Ainda tem alguma dúvida? Fale com a gente pelo WhatsApp. Será um prazer te atender!"
          actions={
            <button
              onClick={handleWhatsApp}
              className="text-xs font-bold uppercase tracking-wider text-[#1473E6] hover:text-[#2589FF] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Conversar com um especialista</span>
              <DynamicIcon name="ArrowRight01Icon" size={14} />
            </button>
          }
        />

        {/* 2-Column Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -55, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
          >
            {renderFaqColumn(leftFaqs)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: 0.12,
            }}
          >
            {renderFaqColumn(rightFaqs)}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
