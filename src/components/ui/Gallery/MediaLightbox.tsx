import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FullScreenIcon,
  MinimizeScreenIcon,
  PauseIcon,
  PlayIcon,
  VolumeHighIcon,
  VolumeMute01Icon,
} from "@hugeicons/core-free-icons";
import type { InstagramMediaItem } from "../../../data/content";
import { SITE_CONFIG } from "../../../data/content";
import { DynamicIcon } from "../../DynamicIcon";
import ArlaServiceImage from "../../../assets/foto_perfil.jpg";

interface VideoPlayerProps {
  src: string;
  title: string;
}

const formatTime = (time: number) => {
  if (!Number.isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const updateFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === playerRef.current);
    };

    document.addEventListener("fullscreenchange", updateFullscreen);
    return () =>
      document.removeEventListener("fullscreenchange", updateFullscreen);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      playerRef.current?.requestFullscreen().catch(() => {});
    }
  };

  const seekTo = (value: number) => {
    const nextTime = (duration * value) / 100;
    if (videoRef.current) videoRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={playerRef}
      className="group/video relative h-full w-full bg-black"
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        playsInline
        onClick={togglePlayback}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
        aria-label={title}
        className="h-full w-full object-contain"
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label="Reproduzir vídeo"
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#1473E6]/90 text-white shadow-xl shadow-black/40 backdrop-blur-sm transition hover:scale-105 hover:bg-[#2589FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <HugeiconsIcon icon={PlayIcon} size={26} />
        </button>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent px-4 pb-4 pt-16 sm:px-5 sm:pb-5">
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={(event) => seekTo(Number(event.currentTarget.value))}
          aria-label="Progresso do vídeo"
          className="video-progress pointer-events-auto mb-2 h-1.5 w-full cursor-pointer appearance-none rounded-full accent-[#2589FF]"
          style={{
            background: `linear-gradient(to right, #2589FF ${progress}%, rgba(255,255,255,.4) ${progress}%)`,
          }}
        />

        <div className="pointer-events-auto flex items-center gap-3 text-white">
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <HugeiconsIcon icon={isPlaying ? PauseIcon : PlayIcon} size={20} />
          </button>

          <span className="min-w-0 flex-1 font-mono text-xs tabular-nums text-white/90">
            {formatTime(currentTime)} <span className="text-white/45">/</span>{" "}
            {formatTime(duration)}
          </span>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Ativar áudio" : "Silenciar vídeo"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <HugeiconsIcon
              icon={isMuted ? VolumeMute01Icon : VolumeHighIcon}
              size={20}
            />
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <HugeiconsIcon
              icon={isFullscreen ? MinimizeScreenIcon : FullScreenIcon}
              size={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export interface MediaLightboxProps {
  selectedMedia: InstagramMediaItem | null;
  onClose: () => void;
  onOpenInstagram: (url?: string) => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({
  selectedMedia,
  onClose,
  onOpenInstagram,
}) => {
  return (
    <AnimatePresence>
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
                <VideoPlayer
                  src={selectedMedia.mediaUrl}
                  title={selectedMedia.title}
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
                onClick={onClose}
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
                    src={ArlaServiceImage}
                    alt="Perfil da ARLA Service"
                    className="w-6 h-6 rounded-full object-cover object-center"
                  />
                  <span>Publicado em {SITE_CONFIG.instagramHandle}</span>
                </div>

                <button
                  onClick={() => onOpenInstagram(selectedMedia.postUrl)}
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
  );
};
