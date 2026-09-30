import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { DynamicIcon } from "./DynamicIcon";

type NavLink = {
  name: string;
  href: string;
  id: string;
  iconName: string;
};

const navLinks: NavLink[] = [
  {
    name: "Serviços",
    href: "#servicos",
    id: "servicos",
    iconName: "Wrench01Icon",
  },
  {
    name: "Sobre",
    href: "#sobre",
    id: "sobre",
    iconName: "UserCheck01Icon",
  },
  {
    name: "Mídia",
    href: "#estrutura",
    id: "estrutura",
    iconName: "InstagramIcon",
  },
  {
    name: "Local",
    href: "#localizacao",
    id: "localizacao",
    iconName: "Location01Icon",
  },
];

const sectionIds = navLinks.map((link) => link.id);

interface NavLinkItemProps {
  link: NavLink;
  active: boolean;
  mobile?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({
  link,
  active,
  mobile = false,
  onClick,
}) => {
  if (mobile) {
    return (
      <a
        href={link.href}
        onClick={onClick}
        className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-base font-medium transition-colors ${
          active
            ? "border border-[#1473E6]/30 bg-[#1473E6]/15 text-[#2589FF]"
            : "text-[#A7A9AD] hover:bg-[#111316] hover:text-white"
        }`}
      >
        <span className="flex items-center gap-3">
          <DynamicIcon name={link.iconName} size={18} />
          <span>{link.name}</span>
        </span>

        <DynamicIcon name="ArrowRight01Icon" size={16} className="opacity-50" />
      </a>
    );
  }

  return (
    <a
      href={link.href}
      className={`relative flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
        active
          ? "text-white"
          : "text-[#A7A9AD] hover:bg-white/5 hover:text-white"
      }`}
    >
      {active && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute inset-0 -z-10 rounded-full border border-[#1473E6]/50 bg-[#1473E6]/20"
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
};

interface DesktopNavigationProps {
  activeSection: string;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  activeSection,
}) => {
  return (
    <nav className="hidden items-center gap-1 rounded-full border border-[#292C31]/80 bg-[#111316]/80 p-1.5 backdrop-blur-md lg:flex">
      {navLinks.map((link) => (
        <NavLinkItem
          key={link.id}
          link={link}
          active={activeSection === link.id}
        />
      ))}
    </nav>
  );
};

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <div className="flex lg:hidden shrink-0 items-center justify-center">
      <button
        type="button"
        onClick={onClick}
        className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#292C31] bg-[#111316] text-[#F5F5F5] transition-colors hover:border-[#1473E6]"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        <DynamicIcon name={isOpen ? "Cancel01Icon" : "Menu01Icon"} size={20} />
      </button>
    </div>
  );
};

interface MobileDrawerProps {
  isOpen: boolean;
  activeSection: string;
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  activeSection,
  onNavigate,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="overflow-hidden border-b border-[#292C31] bg-[#090A0C]/98 backdrop-blur-2xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-6 pt-3">
            {navLinks.map((link) => (
              <NavLinkItem
                key={link.id}
                link={link}
                active={activeSection === link.id}
                mobile
                onClick={(event) => onNavigate(event, link.id)}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (!element) continue;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    setMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (!element) return;

    setTimeout(() => {
      const headerOffset = 90;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
    }, 250);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#292C31] bg-[#090A0C]/90 py-3 shadow-2xl shadow-black/60 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo size="md" />

          <DesktopNavigation activeSection={activeSection} />

          <MobileMenuButton
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
          />
        </div>
      </div>

      <MobileDrawer
        isOpen={mobileMenuOpen}
        activeSection={activeSection}
        onNavigate={handleMobileNavigation}
      />
    </header>
  );
};
