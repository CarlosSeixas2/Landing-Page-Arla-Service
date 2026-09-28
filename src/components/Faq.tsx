import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";
import { requestWhatsAppTriage } from "./whatsappTriageEvents";

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
      {faqs.map((faq) => {
        const isOpen = openIds.includes(faq.id);
        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-[#111316] border-[#1473E6]/60 shadow-lg shadow-[#1473E6]/5"
                : "bg-[#111316]/70 border-[#292C31] hover:border-[#1473E6]/40"
            }`}
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-white text-base sm:text-lg">
                {faq.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-[#1473E6] text-white rotate-180"
                    : "bg-[#181B1F] text-[#A7A9AD]"
                }`}
              >
                <DynamicIcon name="ChevronDownIcon" size={18} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 text-[#A7A9AD] text-sm sm:text-base leading-relaxed border-t border-[#292C31]/40 pt-3">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Dúvidas frequentes
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md"
          >
            <p className="text-[#A7A9AD] text-sm sm:text-base leading-relaxed mb-3">
              Ainda tem alguma dúvida? Fale com a gente pelo WhatsApp. Será um
              prazer te atender!
            </p>
            <button
              onClick={handleWhatsApp}
              className="text-xs font-bold uppercase tracking-wider text-[#1473E6] hover:text-[#2589FF] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Conversar com um especialista</span>
              <DynamicIcon name="ArrowRight01Icon" size={14} />
            </button>
          </motion.div>
        </div>

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
      </div>
    </section>
  );
};
