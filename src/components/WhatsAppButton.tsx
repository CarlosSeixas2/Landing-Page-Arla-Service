import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../data/content';
import { DynamicIcon } from './DynamicIcon';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      SITE_CONFIG.whatsappMessage
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            transition={{ duration: 0.2 }}
            className="mr-3 hidden sm:block bg-[#111316] text-white border border-[#292C31] shadow-xl px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap"
          >
            <span>Fale conosco no WhatsApp</span>
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#111316]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Pulsing Aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        
        {/* Icon */}
        <DynamicIcon name="WhatsappIcon" size={30} color="#FFFFFF" />
      </motion.button>
    </div>
  );
};
