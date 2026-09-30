import React from "react";
import { motion } from "framer-motion";
import type { TestimonialItem } from "../../../data/content";
import { DynamicIcon } from "../../DynamicIcon";
import { Spotlight } from "../react-bits/Spotlight";

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
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
              {[...Array(testimonial.rating)].map((_, i) => (
                <DynamicIcon key={i} name="StarIcon" size={18} />
              ))}
            </div>

            {/* Review text */}
            <p className="text-[#F5F5F5] text-base leading-relaxed mb-8 italic">
              "{testimonial.comment}"
            </p>
          </div>

          {/* Customer Author */}
          <div className="flex items-center gap-3.5 pt-4 border-t border-[#292C31]/60">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-11 h-11 rounded-full object-cover border border-[#292C31]"
              loading="lazy"
            />
            <div>
              <h4 className="text-sm font-bold text-white font-heading">
                {testimonial.name}
              </h4>
              <span className="text-xs text-[#A7A9AD]">{testimonial.role}</span>
            </div>
          </div>
        </div>
      </Spotlight>
    </motion.div>
  );
};
