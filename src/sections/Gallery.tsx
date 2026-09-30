import React, { useState, useRef, useEffect } from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { DynamicIcon } from "../components/DynamicIcon";
import {
  MediaCard,
  MediaLightbox,
  InstagramBadge,
} from "../components/ui/Gallery";
import { INSTAGRAM_MEDIA_DATA, SITE_CONFIG } from "../data/content";
import type { InstagramMediaItem } from "../data/content";

const GALLERY_TABS = [
  { id: "all", label: "Todos os Conteúdos" },
  { id: "video", label: "Reels / Vídeos 🎬" },
  { id: "image", label: "Fotos / Serviços 📸" },
] as const;

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

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <SectionTitle
            badge="MÍDIAS & ESTRUTURA OFICIAL"
            title="Fotos e Vídeos da Oficina"
            description="Acompanhe o dia a dia, serviços concluídos e bastidores da nossa equipe direto do Instagram oficial da ARLA Service."
            className="mb-0 max-w-2xl"
          />

          {/* Instagram Follow Badge */}
          <InstagramBadge onFollowClick={(e) => handleOpenInstagram(e)} />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {GALLERY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
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
      </Container>

      {/* Media Lightbox Modal */}
      <MediaLightbox
        selectedMedia={selectedMedia}
        onClose={() => setSelectedMedia(null)}
        onOpenInstagram={(url) => handleOpenInstagram(undefined, url)}
      />
    </section>
  );
};
