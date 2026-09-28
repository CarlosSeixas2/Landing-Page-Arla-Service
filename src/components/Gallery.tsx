import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INSTAGRAM_MEDIA_DATA, SITE_CONFIG } from "../data/content";
import type { InstagramMediaItem } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";
import ArlaSeriveImage from "../assets/foto_perfil.jpg";

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "video" | "image">(
    "all",
  );
  const [selectedMedia, setSelectedMedia] = useState<InstagramMediaItem | null>(
    null,
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle(
      "media-lightbox-open",
      Boolean(selectedMedia),
    );

    return () => {
      document.body.classList.remove("media-lightbox-open");
    };
  }, [selectedMedia]);

  const filteredItems = INSTAGRAM_MEDIA_DATA.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  const mediaBatches = filteredItems.reduce<InstagramMediaItem[][]>(
    (batches, item, index) => {
      const batchIndex = Math.floor(index / 4);
      if (!batches[batchIndex]) batches[batchIndex] = [];
      batches[batchIndex].push(item);
      return batches;
    },
    [],
  );

  const scrollCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({
      left: direction * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleOpenInstagram = (e?: React.MouseEvent, url?: string) => {
    if (e) e.stopPropagation();
    window.open(
      url || SITE_CONFIG.instagramUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="estrutura"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40"
    >
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#1473E6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
              MÍDIAS & ESTRUTURA OFICIAL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Fotos e Vídeos da Oficina
            </h2>
            <p className="text-[#A7A9AD] text-base leading-relaxed mt-4">
              Acompanhe o dia a dia, serviços concluídos e bastidores da nossa
              equipe direto do Instagram oficial da ARLA Service.
            </p>
          </motion.div>

          {/* Instagram Follow Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#111316] border border-[#292C31] p-4 sm:p-5 rounded-2xl"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px]">
                <div className="w-full h-full bg-[#090A0C] rounded-full flex items-center justify-center text-white">
                  <img
                    src={ArlaSeriveImage}
                    alt="Perfil da ARLA Service"
                    className="rounded-full object-cover object-center"
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
              onClick={(e) => handleOpenInstagram(e)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1473E6] hover:bg-[#2589FF] text-white text-xs font-bold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer border-none shadow-md shadow-[#1473E6]/20"
            >
              <span>Seguir no Instagram</span>
              <DynamicIcon name="ArrowUpRight01Icon" size={14} />
            </button>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: "all", label: "Todos os Conteúdos" },
            { id: "video", label: "Reels / Vídeos 🎬" },
            { id: "image", label: "Fotos / Serviços 📸" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === tab.id
                  ? "bg-[#1473E6] text-white shadow-lg shadow-[#1473E6]/25"
                  : "bg-[#111316] text-[#A7A9AD] hover:text-white border border-[#292C31]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Horizontal batches of four media cards */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {mediaBatches.map((batch, batchIndex) => (
              <div
                key={`batch-${batchIndex}`}
                className="min-w-full snap-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-0.5"
              >
                {batch.map((item, index) => (
                  <MediaCard
                    key={item.id}
                    item={item}
                    index={index}
                    onSelect={() => setSelectedMedia(item)}
                    onOpenInstagram={(e) =>
                      handleOpenInstagram(e, item.postUrl)
                    }
                  />
                ))}
              </div>
            ))}
          </div>

          {mediaBatches.length > 1 && (
            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                className="w-11 h-11 rounded-full border border-[#292C31] bg-[#111316] text-white flex items-center justify-center hover:border-[#1473E6] hover:text-[#2589FF] transition-colors"
                aria-label="Lote anterior de vídeos"
              >
                <DynamicIcon name="ArrowLeft01Icon" size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                className="w-11 h-11 rounded-full border border-[#292C31] bg-[#111316] text-white flex items-center justify-center hover:border-[#1473E6] hover:text-[#2589FF] transition-colors"
                aria-label="Próximo lote de vídeos"
              >
                <DynamicIcon name="ArrowRight01Icon" size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Media Lightbox / Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-x-hidden overflow-y-auto bg-black/85 p-4 backdrop-blur-xl sm:items-center sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="my-auto flex w-full min-w-0 max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-[#292C31] bg-[#111316] shadow-2xl sm:max-w-5xl lg:max-h-[92vh] lg:flex-row"
            >
              {/* Modal Media Container */}
              <div className="relative mx-auto aspect-[9/16] max-h-[62dvh] w-full max-w-full min-w-0 shrink-0 overflow-hidden bg-black lg:mx-0 lg:max-h-[78vh] lg:w-[42%] lg:max-w-[390px]">
                {selectedMedia.embedUrl ? (
                  <iframe
                    title={selectedMedia.title}
                    src={selectedMedia.embedUrl}
                    className="block h-full w-full max-w-full border-0"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.mediaUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedMedia.mediaUrl}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain"
                  />
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#090A0C]/80 backdrop-blur-md border border-[#292C31] text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  <DynamicIcon name="Cancel01Icon" size={18} />
                </button>
              </div>

              {/* Modal Info & Caption */}
              <div className="flex min-w-0 flex-1 flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3">
                    {selectedMedia.title}
                  </h3>

                  <p className="text-[#A7A9AD] text-sm sm:text-base leading-relaxed mb-6">
                    {selectedMedia.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#292C31] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#A7A9AD]">
                    <img
                      src={ArlaSeriveImage}
                      alt="Perfil da ARLA Service"
                      className="w-6 h-6 rounded-full object-cover object-center"
                    />
                    <span>Publicado em {SITE_CONFIG.instagramHandle}</span>
                  </div>

                  <button
                    onClick={() =>
                      handleOpenInstagram(undefined, selectedMedia.postUrl)
                    }
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1473E6] hover:bg-[#2589FF] text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Ver post completo no Instagram</span>
                    <DynamicIcon name="ArrowUpRight01Icon" size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface MediaCardProps {
  item: InstagramMediaItem;
  index: number;
  onSelect: () => void;
  onOpenInstagram: (e: React.MouseEvent) => void;
}

const MediaCard: React.FC<MediaCardProps> = ({
  item,
  index,
  onSelect,
  onOpenInstagram,
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
            {/* Reels Play Indicator */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#090A0C]/85 backdrop-blur-md border border-[#292C31] flex items-center gap-1.5 text-xs text-white">
              <span className="w-2 h-2 rounded-full bg-[#1473E6] animate-pulse" />
              <span className="font-semibold text-[11px]">Reel</span>
              {item.views && (
                <span className="text-[#A7A9AD] text-[10px]">
                  ({item.views})
                </span>
              )}
            </div>
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

        {/* Top Right Instagram Icon */}
        <div
          onClick={onOpenInstagram}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#090A0C]/80 backdrop-blur-md border border-[#292C31] text-[#1473E6] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          title="Ver no Instagram"
        >
          <DynamicIcon name="InstagramIcon" size={16} />
        </div>
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
