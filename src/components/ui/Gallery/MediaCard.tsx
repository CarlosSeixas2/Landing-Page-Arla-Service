import React, { useRef } from "react";
import { motion } from "framer-motion";
import type { InstagramMediaItem } from "../../../data/content";
import { DynamicIcon } from "../../DynamicIcon";

export interface MediaCardProps {
  item: InstagramMediaItem;
  index: number;
  onSelect: () => void;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  item,
  index,
  onSelect,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (item.type === "video" && !item.embedUrl && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (item.type === "video" && !item.embedUrl && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: index % 2 === 0 ? 24 : -24,
        scale: 0.86,
        rotate: index % 2 === 0 ? -3 : 3,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: index * 0.08,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className="group relative rounded-2xl overflow-hidden border border-[#292C31] hover:border-[#1473E6]/70 bg-[#111316] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1473E6]/15 flex flex-col cursor-pointer"
    >
      {/* Media Preview Box */}
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        {item.type === "video" && !item.embedUrl ? (
          <>
            <video
              ref={videoRef}
              src={item.mediaUrl}
              poster={item.thumbnailUrl}
              muted
              loop
              playsInline
              className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
            />
          </>
        ) : item.embedUrl ? (
          <>
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#1473E6]/90 text-white flex items-center justify-center shadow-xl shadow-[#1473E6]/30 group-hover:scale-110 transition-transform">
                <DynamicIcon name="ArrowRight01Icon" size={26} />
              </div>
            </div>
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#090A0C]/85 backdrop-blur-md border border-[#292C31] flex items-center gap-1.5 text-xs text-white">
              <span className="w-2 h-2 rounded-full bg-[#1473E6] animate-pulse" />
              <span className="font-semibold text-[11px]">Reel</span>
            </div>
          </>
        ) : (
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111316] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content & Instagram Metadata */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-[#111316]">
        <div>
          <h3 className="text-base font-bold text-white font-heading mb-2 group-hover:text-[#2589FF] transition-colors line-clamp-1">
            {item.title}
          </h3>

          <p className="text-[#A7A9AD] text-xs sm:text-sm leading-relaxed line-clamp-2">
            {item.caption}
          </p>
        </div>

        {/* Action Hint */}
        <div className="mt-4 pt-3 border-t border-[#292C31]/60 flex items-center justify-between text-xs text-[#A7A9AD] group-hover:text-white transition-colors">
          <span className="text-[11px] font-semibold text-[#1473E6]">
            {item.type === "video" ? "Assistir Reel" : "Visualizar Foto"}
          </span>
          <DynamicIcon
            name="ArrowRight01Icon"
            size={14}
            className="text-[#1473E6]"
          />
        </div>
      </div>
    </motion.div>
  );
};
