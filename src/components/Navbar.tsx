import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { DynamicIcon } from "./DynamicIcon";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["servicos", "sobre", "estrutura", "localizacao"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Serviços",
      href: "#servicos",
      id: "servicos",
      iconName: "Wrench01Icon",
    },
    { name: "Sobre", href: "#sobre", id: "sobre", iconName: "UserCheck01Icon" },
    {
      name: "Mídia",
      href: "#estrutura",
      id: "estrutura",
      iconName: "InstagramIcon",
    },
    {
      name: "Contato",
      href: "#localizacao",
      id: "localizacao",
      iconName: "Location01Icon",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090A0C]/90 backdrop-blur-xl border-b border-[#292C31] shadow-2xl shadow-black/60 py-3"
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111316]/80 p-1.5 rounded-full border border-[#292C31]/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative flex items-center gap-2 ${
                    isActive
                      ? "text-white"
                      : "text-[#A7A9AD] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#1473E6]/20 border border-[#1473E6]/50 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <DynamicIcon name={link.iconName} size={16} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#111316] border border-[#292C31] text-[#F5F5F5] hover:border-[#1473E6] transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <DynamicIcon
                name={mobileMenuOpen ? "Cancel01Icon" : "Menu01Icon"}
                size={22}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-[#292C31] bg-[#090A0C]/98 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? "bg-[#1473E6]/15 text-[#2589FF] border border-[#1473E6]/30"
                      : "text-[#A7A9AD] hover:text-white hover:bg-[#111316]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <DynamicIcon name={link.iconName} size={18} />
                    <span>{link.name}</span>
                  </span>
                  <DynamicIcon
                    name="ArrowRight01Icon"
                    size={16}
                    className="opacity-50"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
