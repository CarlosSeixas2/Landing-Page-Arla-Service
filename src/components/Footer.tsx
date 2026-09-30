import React from "react";
import { Logo } from "./Logo";
import { SITE_CONFIG } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";
import { requestWhatsAppTriage } from "../lib/whatsappTriageEvents";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Estrutura", href: "#estrutura" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#localizacao" },
  ];

  const handleWhatsApp = () => {
    requestWhatsAppTriage();
  };

  return (
    <footer className="bg-[#090A0C] border-t border-[#292C31] pt-16 pb-12 text-[#A7A9AD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-[#292C31]/60">
          {/* Logo & Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Logo size="md" />
            <span className="text-xs text-[#A7A9AD] mt-2 font-medium tracking-wide">
              Oficina especializada em linha diesel • Euro 5 & Euro 6
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#A7A9AD] hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Location */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-[#A7A9AD]">
              <DynamicIcon
                name="Location01Icon"
                size={16}
                className="text-[#1473E6]"
              />
              <span>{SITE_CONFIG.city}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#111316] border border-[#292C31] hover:border-[#1473E6] flex items-center justify-center text-[#A7A9AD] hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <DynamicIcon name="InstagramIcon" size={18} />
              </a>

              <button
                onClick={handleWhatsApp}
                className="w-9 h-9 rounded-full bg-[#111316] border border-[#292C31] hover:border-[#25D366] flex items-center justify-center text-[#A7A9AD] hover:text-[#25D366] transition-all duration-200 cursor-pointer"
                aria-label="WhatsApp"
              >
                <DynamicIcon name="WhatsappIcon" size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© {currentYear} ARLA Service. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com padrão automotivo de alta precisão.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
