import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_CONFIG } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";
import { WHATSAPP_TRIAGE_EVENT } from "../lib/whatsappTriageEvents";

interface TriageDetail {
  service?: string;
}

const reasons = [
  { label: "Manutenção preventiva / revisão", icon: "Wrench01Icon" },
  { label: "Diagnóstico eletrônico / Scanner", icon: "CpuIcon" },
  { label: "Falha mecânica / Injeção diesel", icon: "FlashIcon" },
  { label: "Sistema Euro 5 / Euro 6 / ARLA 32", icon: "ShieldCheckIcon" },
  { label: "Pick-Up, Caminhão ou Máquina", icon: "Car01Icon" },
  { label: "Orçamento para Frota / Empresa", icon: "CustomerSupportIcon" },
];

const urgencyOptions = [
  { label: "Posso agendar", icon: "Clock01Icon" },
  { label: "Preciso de prioridade", icon: "FlashIcon" },
];

export const WhatsAppTriage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState<string | undefined>();
  const [reason, setReason] = useState("");
  const [urgency, setUrgency] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const open = (event: Event) => {
      const detail = (event as CustomEvent<TriageDetail>).detail;
      setService(detail?.service);
      setReason("");
      setUrgency("");
      setDescription("");
      setIsOpen(true);
    };

    window.addEventListener(WHATSAPP_TRIAGE_EVENT, open);
    return () => window.removeEventListener(WHATSAPP_TRIAGE_EVENT, open);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const documentElement = document.documentElement;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousHtmlOverflowX = documentElement.style.overflowX;
    const previousHtmlOverflowY = documentElement.style.overflowY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyOverflowX = document.body.style.overflowX;
    const previousBodyOverflowY = document.body.style.overflowY;

    document.addEventListener("keydown", closeOnEscape);
    documentElement.style.overflow = "hidden";
    documentElement.style.overflowX = "hidden";
    documentElement.style.overflowY = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      documentElement.style.overflow = previousHtmlOverflow;
      documentElement.style.overflowX = previousHtmlOverflowX;
      documentElement.style.overflowY = previousHtmlOverflowY;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overflowX = previousBodyOverflowX;
      document.body.style.overflowY = previousBodyOverflowY;
    };
  }, [isOpen]);

  const handleSubmit = () => {
    const message = [
      "Olá! Gostaria de falar com a ARLA Service.",
      service && `Serviço de interesse: ${service}`,
      reason && `Motivo: ${reason}`,
      urgency && `Quando preciso: ${urgency}`,
      description && `Descrição: ${description}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="triage-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative max-h-[92vh] w-full min-w-0 max-w-xl overflow-x-hidden overflow-y-auto rounded-t-[2rem] border border-[#292C31] bg-[#0D1014] p-6 shadow-2xl shadow-black/50 sm:rounded-[2rem] sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#1473E6]/20 blur-3xl" />
            <button
              type="button"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#292C31] bg-[#181B1F] text-[#A7A9AD] transition hover:border-white hover:text-white cursor-pointer"
              aria-label="Fechar triagem"
              onClick={() => setIsOpen(false)}
            >
              <DynamicIcon name="Cancel01Icon" size={18} />
            </button>

            <div className="relative mb-7 pr-10">
              <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2589FF]">
                <DynamicIcon name="CustomerSupportIcon" size={16} />
                Atendimento Técnico Especializado
              </span>
              <h2
                id="triage-title"
                className="font-heading text-2xl font-extrabold text-white sm:text-3xl"
              >
                Como podemos ajudar seu veículo?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#A7A9AD]">
                Selecione as informações abaixo para direcionarmos seu
                atendimento ao especialista certo na ARLA Service.
              </p>
              {service && (
                <span className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[#1473E6]/30 bg-[#1473E6]/10 px-3 py-2 text-xs font-semibold text-[#A7A9AD]">
                  <DynamicIcon
                    name="Wrench01Icon"
                    size={15}
                    className="text-[#2589FF]"
                  />
                  Serviço selecionado:{" "}
                  <strong className="text-white">{service}</strong>
                </span>
              )}
            </div>

            <div className="relative space-y-6">
              <fieldset>
                <legend className="mb-3 text-sm font-bold text-white">
                  O que você precisa?
                </legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {reasons.map((option) => (
                    <button
                      type="button"
                      key={option.label}
                      onClick={() => setReason(option.label)}
                      className={`flex min-h-14 items-center gap-3 rounded-xl border px-3 text-left text-sm font-semibold transition-all duration-200 ${reason === option.label ? "border-[#1473E6] bg-[#1473E6]/15 text-white shadow-lg shadow-[#1473E6]/10" : "border-[#292C31] bg-[#111316] text-[#A7A9AD] hover:border-[#1473E6]/60 hover:text-white"}`}
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${reason === option.label ? "bg-[#1473E6] text-white" : "bg-[#181B1F] text-[#2589FF]"}`}
                      >
                        <DynamicIcon name={option.icon} size={18} />
                      </span>
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-sm font-bold text-white">
                  Qual a urgência?
                </legend>
                <div className="grid grid-cols-2 gap-2">
                  {urgencyOptions.map((option) => (
                    <button
                      type="button"
                      key={option.label}
                      onClick={() => setUrgency(option.label)}
                      className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-3 text-center text-sm font-semibold transition-all duration-200 ${urgency === option.label ? "border-[#25D366] bg-[#25D366]/10 text-white" : "border-[#292C31] bg-[#111316] text-[#A7A9AD] hover:border-[#25D366]/60 hover:text-white"}`}
                    >
                      <DynamicIcon name={option.icon} size={17} />
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <span className="mb-3 block text-sm font-bold text-white">
                  Conte rapidamente o que aconteceu{" "}
                  <span className="font-normal text-[#6B7280]">(opcional)</span>
                </span>
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  rows={3}
                  maxLength={280}
                  placeholder="Ex.: Pick-up/caminhão com perda de potência ou luz da injeção / ARLA 32 acesa..."
                  className="w-full resize-none rounded-xl border border-[#292C31] bg-[#111316] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#6B7280] focus:border-[#1473E6] focus:ring-2 focus:ring-[#1473E6]/20"
                />
                <span className="mt-1 block text-right text-xs text-[#6B7280]">
                  {description.length}/280
                </span>
              </label>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!reason || !urgency}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 font-extrabold text-black shadow-xl shadow-[#25D366]/20 transition duration-200 hover:scale-[1.01] hover:bg-[#20BD5A] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
              >
                <DynamicIcon name="WhatsappIcon" size={21} color="#000000" />
                Continuar para o WhatsApp
                <DynamicIcon
                  name="ArrowRight01Icon"
                  size={18}
                  color="#000000"
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
