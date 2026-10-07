import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import {
  Map as MapLibreMap,
  Marker,
  NavigationControl,
  setWorkerUrl,
} from "maplibre-gl";
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import "maplibre-gl/dist/maplibre-gl.css";
import { Container } from "../components/ui/Container";
import { DynamicIcon } from "../components/DynamicIcon";
import { SITE_CONFIG } from "../data/content";
import arlaLogo from "../assets/foto_perfil.jpg";

setWorkerUrl(maplibreWorkerUrl);

export const Location: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const workshopCoords = SITE_CONFIG.coordinates;
    const entranceCoords = SITE_CONFIG.entranceCoordinates;
    const centerLng = (workshopCoords.lng + entranceCoords.lng) / 2;
    const centerLat = (workshopCoords.lat + entranceCoords.lat) / 2;

    const map = new MapLibreMap({
      container: mapContainerRef.current,
      style: "https://tiles.openfreemap.org/styles/bright",
      center: [centerLng, centerLat],
      zoom: 16,
    });

    map.addControl(new NavigationControl({ showCompass: false }), "top-right");

    // Workshop custom pin with logo
    const workshopEl = document.createElement("div");
    workshopEl.className =
      "flex flex-col items-center cursor-pointer select-none group";
    workshopEl.innerHTML = `
      <div class="relative flex items-center justify-center">
        <span class="absolute w-14 h-14 rounded-full bg-[#1473E6]/30 animate-ping"></span>
        <span class="absolute w-12 h-12 rounded-full bg-[#1473E6]/25"></span>
        <div class="relative w-12 h-12 rounded-full p-[2.5px] bg-gradient-to-tr from-[#1473E6] via-[#2589FF] to-white shadow-xl shadow-[#1473E6]/60">
          <img 
            src="${arlaLogo}" 
            alt="ARLA Service" 
            class="w-full h-full rounded-full object-cover bg-black"
          />
        </div>
      </div>
      <div class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#2589FF] -mt-0.5 filter drop-shadow"></div>
      <div class="mt-1 px-2.5 py-1 rounded-md bg-[#111316]/95 border border-[#1473E6]/60 backdrop-blur-md text-[11px] font-bold text-white shadow-lg whitespace-nowrap flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
        <span>ARLA Service</span>
      </div>
    `;

    const workshopMarker = new Marker({ element: workshopEl, anchor: "bottom" })
      .setLngLat([workshopCoords.lng, workshopCoords.lat])
      .addTo(map);

    // Entrance pin from BR-343
    const entranceEl = document.createElement("div");
    entranceEl.className = "flex flex-col items-center select-none";
    entranceEl.innerHTML = `
      <div class="px-2 py-0.5 rounded bg-[#111316]/90 border border-[#292C31] text-[10px] font-semibold text-[#A7A9AD] shadow mb-1 whitespace-nowrap flex items-center gap-1">
        <span>Acesso BR-343</span>
        <span class="text-[#1473E6] font-bold">➔</span>
      </div>
      <div class="w-3.5 h-3.5 rounded-full bg-[#1473E6] border-2 border-white shadow-md"></div>
    `;

    const entranceMarker = new Marker({ element: entranceEl, anchor: "bottom" })
      .setLngLat([entranceCoords.lng, entranceCoords.lat])
      .addTo(map);

    const addRoute = () => {
      if (map.getSource("access-route")) return;

      map.addSource("access-route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [entranceCoords.lng, entranceCoords.lat],
              [workshopCoords.lng, workshopCoords.lat],
            ],
          },
        },
      });

      map.addLayer({
        id: "access-route-line",
        type: "line",
        source: "access-route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#1473E6",
          "line-width": 3.5,
          "line-dasharray": [2, 2],
        },
      });
    };

    if (map.isStyleLoaded()) {
      addRoute();
    } else {
      map.on("load", addRoute);
    }

    return () => {
      workshopMarker.remove();
      entranceMarker.remove();
      map.remove();
    };
  }, []);

  const handleOpenMaps = () => {
    window.open(SITE_CONFIG.googleMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="localizacao"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
              NOSSO ENDEREÇO
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.15] mb-6">
              Onde estamos
            </h2>

            <div className="bg-[#111316] border border-[#292C31] p-6 rounded-2xl w-full mb-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1473E6]/10 border border-[#1473E6]/25 flex items-center justify-center text-[#1473E6] shrink-0 mt-0.5">
                  <DynamicIcon name="Location01Icon" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">
                    {SITE_CONFIG.name}
                  </h4>
                  <p className="text-[#A7A9AD] text-sm leading-relaxed">
                    {SITE_CONFIG.address} • {SITE_CONFIG.neighborhood}
                  </p>
                  <p className="text-[#A7A9AD] text-xs mt-0.5">
                    CEP: {SITE_CONFIG.cep}
                  </p>
                  <p className="text-[#2589FF] text-xs font-semibold mt-1">
                    {SITE_CONFIG.city}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#292C31] flex items-center gap-3 text-xs sm:text-sm text-[#A7A9AD]">
                <div className="w-8 h-8 rounded-lg bg-[#1473E6]/10 border border-[#1473E6]/25 flex items-center justify-center text-[#1473E6] shrink-0">
                  <DynamicIcon name="Mail01Icon" size={16} />
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors duration-200 truncate"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="pt-4 border-t border-[#292C31] text-xs text-[#A7A9AD] flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-[#1473E6]/10 border border-[#1473E6]/25 flex items-center justify-center text-[#1473E6] shrink-0 mt-0.5">
                  <DynamicIcon name="Target01Icon" size={13} />
                </div>
                <p className="leading-relaxed">
                  <strong className="text-white">Como chegar:</strong> Acesso direto pela BR-343 entrando na via lateral à esquerda (indicada no mapa com a logo da ARLA Service).
                </p>
              </div>

              <div className="pt-4 border-t border-[#292C31] flex items-center justify-between text-xs text-[#A7A9AD]">
                <div className="flex items-center gap-2">
                  <DynamicIcon
                    name="Clock01Icon"
                    size={16}
                    className="text-[#1473E6]"
                  />
                  <span>Segunda a Sexta: 08h às 18h</span>
                </div>
                <span>Sábado: 08h às 12h</span>
              </div>
            </div>

            <Button
              onPress={handleOpenMaps}
              className="bg-[#1473E6] hover:bg-[#2589FF] text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-[#1473E6]/25 transition-all duration-300 hover:shadow-[#1473E6]/40 hover:scale-[1.02] flex items-center gap-2.5 cursor-pointer border-none"
            >
              <DynamicIcon name="MapsIcon" size={20} />
              <span>Abrir no Google Maps</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#292C31] hover:border-[#1473E6]/70 bg-[#111316] h-[340px] sm:h-[400px] shadow-2xl transition-all duration-300">
              <div
                ref={mapContainerRef}
                role="application"
                aria-label="Mapa interativo da região da ARLA Service em Parnaíba"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 left-3 z-10 bg-[#111316]/95 backdrop-blur-md border border-[#292C31] px-3 py-1.5 rounded-xl text-[11px] text-[#A7A9AD] flex items-center gap-2 pointer-events-none shadow-lg">
                <span>Oficina na via lateral à esquerda da BR-343</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
