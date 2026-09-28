import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS_DATA } from "../data/content";
import { DynamicIcon } from "./DynamicIcon";
import { Spotlight } from "./react-bits/Spotlight";

export const Testimonials: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="py-24 sm:py-32 bg-[#090A0C] relative overflow-hidden border-t border-[#292C31]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="text-[#1473E6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3 font-sans">
              DEPOIMENTOS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Quem conhece, recomenda.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#A7A9AD] max-w-md text-sm sm:text-base leading-relaxed"
          >
            A confiança dos nossos clientes é o que nos motiva a melhorar sempre
            e manter o mais alto padrão técnico.
          </motion.p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                scale: 0.78,
                y: 18,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 115,
                damping: 17,
                delay: index * 0.12,
              }}
            >
              <Spotlight className="h-full rounded-2xl">
                <div className="h-full bg-[#111316] border border-[#292C31] hover:border-[#1473E6]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1473E6]/10">
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1.5 mb-6 text-[#1473E6]">
                      {[...Array(item.rating)].map((_, i) => (
                        <DynamicIcon key={i} name="StarIcon" size={18} />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-[#F5F5F5] text-base leading-relaxed mb-8 italic">
                      "{item.comment}"
                    </p>
                  </div>

                  {/* Customer Author */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-[#292C31]/60">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#292C31]"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        {item.name}
                      </h4>
                      <span className="text-xs text-[#A7A9AD]">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
