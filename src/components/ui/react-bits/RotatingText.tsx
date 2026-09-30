import React, { useState, useEffect, useCallback, useImperativeHandle, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface RotatingItem {
  word: string;
  highlight: string;
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  texts?: string[];
  items?: Array<RotatingItem | string>;
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  animatePresenceMode?: "sync" | "popLayout" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  loop?: boolean;
  auto?: boolean;
  onNext?: (index: number) => void;
  mainClassName?: string;
  className?: string;
}

export const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      items,
      transition = { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      initial = { y: 28, opacity: 0, filter: "blur(4px)" },
      animate = { y: 0, opacity: 1, filter: "blur(0px)" },
      exit = { y: -28, opacity: 0, filter: "blur(4px)" },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2500,
      loop = true,
      auto = true,
      onNext,
      mainClassName,
      className = "",
      ...rest
    },
    ref
  ) => {
    const list = items ?? texts ?? [];
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = useCallback(() => {
      setCurrentIndex((prev) => {
        if (prev === list.length - 1) {
          return loop ? 0 : prev;
        }
        return prev + 1;
      });
    }, [list.length, loop]);

    const previous = useCallback(() => {
      setCurrentIndex((prev) => {
        if (prev === 0) {
          return loop ? list.length - 1 : prev;
        }
        return prev - 1;
      });
    }, [list.length, loop]);

    const jumpTo = useCallback(
      (index: number) => {
        if (index >= 0 && index < list.length) {
          setCurrentIndex(index);
        }
      },
      [list.length]
    );

    const reset = useCallback(() => {
      setCurrentIndex(0);
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset,
      }),
      [next, previous, jumpTo, reset]
    );

    useEffect(() => {
      if (!auto || list.length <= 1) return;
      const intervalId = setInterval(() => {
        next();
      }, rotationInterval);
      return () => clearInterval(intervalId);
    }, [auto, rotationInterval, next, list.length]);

    useEffect(() => {
      onNext?.(currentIndex);
    }, [currentIndex, onNext]);

    if (list.length === 0) return null;

    const currentItem = list[currentIndex];

    return (
      <div
        className={`relative inline-block w-full overflow-hidden ${mainClassName || ""} ${className}`}
        {...rest}
      >
        <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
          <motion.div
            key={currentIndex}
            className="w-full"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          >
            {typeof currentItem === "object" && currentItem !== null ? (
              <div className="flex flex-col items-start leading-[1.08]">
                <span className="text-white font-extrabold tracking-tight">
                  {currentItem.word}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#1473E6] font-extrabold tracking-tight">
                  {currentItem.highlight}
                </span>
              </div>
            ) : (
              <span className="inline-block whitespace-pre-line">
                {String(currentItem)}
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);

RotatingText.displayName = "RotatingText";
