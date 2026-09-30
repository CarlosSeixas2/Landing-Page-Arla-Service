import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "../../../data/content";
import { DynamicIcon } from "../../DynamicIcon";
import ArlaServiceImage from "../../../assets/foto_perfil.jpg";

export interface InstagramBadgeProps {
  onFollowClick: (e: React.MouseEvent) => void;
}

export const InstagramBadge: React.FC<InstagramBadgeProps> = ({
  onFollowClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#111316] border border-[#292C31] p-4 sm:p-5 rounded-2xl"
    >
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px]">
          <div className="w-full h-full bg-[#090A0C] rounded-full flex items-center justify-center text-white overflow-hidden">
            <img
              src={ArlaServiceImage}
              alt="Perfil da ARLA Service"
              className="w-full h-full rounded-full object-cover object-center"
            />
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold font-heading text-base leading-none mb-1">
            {SITE_CONFIG.instagramHandle}
          </h4>
          <span className="text-xs text-[#A7A9AD]">
            Oficina Mecânica • Parnaíba
          </span>
        </div>
      </div>

      <button
        onClick={onFollowClick}
        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1473E6] hover:bg-[#2589FF] text-white text-xs font-bold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer border-none shadow-md shadow-[#1473E6]/20"
      >
        <span>Seguir no Instagram</span>
        <DynamicIcon name="ArrowUpRight01Icon" size={14} />
      </button>
    </motion.div>
  );
};
