import React from "react";
import { motion } from "framer-motion";
import { Card } from "@heroui/react";
import type { ServiceItem } from "../../../data/content";
import { DynamicIcon } from "../../DynamicIcon";
import { Spotlight } from "../react-bits/Spotlight";

const entranceDirections = [
  { x: -90, y: 24, rotate: -6 },
  { x: 90, y: 24, rotate: 6 },
  { x: -70, y: -46, rotate: -4 },
  { x: 70, y: -46, rotate: 4 },
  { x: -90, y: 34, rotate: -6 },
  { x: 90, y: 34, rotate: 6 },
];

export interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onClick: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onClick,
}) => {
  const direction = entranceDirections[index % entranceDirections.length];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction.x,
        y: direction.y,
        rotate: direction.rotate,
        scale: 0.94,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 115,
        damping: 17,
        mass: 0.8,
        delay: (index % 3) * 0.1,
      }}
    >
      <Spotlight className="h-full rounded-2xl">
        <Card
          onClick={() => onClick(service.title)}
          className="relative w-full h-full bg-[#111316] border border-[#292C31] hover:border-[#1473E6]/70 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1473E6]/10 group text-left flex flex-col justify-between cursor-pointer"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              {/* Icon container & tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-xl bg-[#1473E6]/10 border border-[#1473E6]/25 flex items-center justify-center text-[#1473E6] group-hover:bg-[#1473E6] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <DynamicIcon name={service.iconName} size={28} />
                </div>

                {service.tag && (
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#A7A9AD] bg-[#181B1F] px-2.5 py-1 rounded-md border border-[#292C31]">
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading group-hover:text-[#2589FF] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#A7A9AD] text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Bottom Action Hint */}
            <div className="mt-8 pt-4 border-t border-[#292C31]/60 flex items-center justify-between text-xs font-semibold text-[#A7A9AD] group-hover:text-white transition-colors">
              <span className="group-hover:text-[#2589FF] transition-colors">
                Solicitar orçamento
              </span>
              <DynamicIcon
                name="ArrowRight01Icon"
                size={16}
                className="text-[#1473E6] transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </Card>
      </Spotlight>
    </motion.div>
  );
};
