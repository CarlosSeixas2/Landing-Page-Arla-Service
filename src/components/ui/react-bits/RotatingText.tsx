import React, {
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
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

export interface RotatingTextProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> {
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

  // Typewriter
  typingSpeed?: number;
  typingDelay?: number;
  highlightDelay?: number;

  showCursor?: boolean;
  cursorCharacter?: string;

  mainClassName?: string;
  className?: string;
}

export const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      items,

      transition = {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },

      initial = {
        y: 28,
        opacity: 0,
        filter: "blur(4px)",
      },

      animate = {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      },

      exit = {
        y: -28,
        opacity: 0,
        filter: "blur(4px)",
      },

      animatePresenceMode = "wait",
      animatePresenceInitial = false,

      rotationInterval = 7000,
      loop = true,
      auto = true,

      onNext,

      typingSpeed = 120,
      typingDelay = 300,
      highlightDelay = 400,

      showCursor = false,
      cursorCharacter = "|",

      mainClassName,
      className = "",

      ...rest
    },
    ref,
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
      [list.length],
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
      [next, previous, jumpTo, reset],
    );

    /*
     * Troca de texto.
     *
     * O rotationInterval deve ser maior que o tempo necessário
     * para os dois textos serem digitados.
     */
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

    if (list.length === 0) {
      return null;
    }

    const currentItem = list[currentIndex];

    return (
      <div
        className={`relative inline-block w-full overflow-visible ${
          mainClassName || ""
        } ${className}`}
        {...rest}
      >
        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.div
            key={currentIndex}
            className="w-full"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          >
            {typeof currentItem === "object" && currentItem !== null ? (
              <div className="flex flex-col items-start whitespace-nowrap leading-[1.08] pt-1">
                <TypewriterText
                  text={currentItem.word}
                  speed={typingSpeed}
                  delay={typingDelay}
                  className="whitespace-nowrap text-white font-extrabold tracking-tight"
                  showCursor={showCursor}
                  cursorCharacter={cursorCharacter}
                />

                <TypewriterText
                  text={currentItem.highlight}
                  speed={typingSpeed}
                  delay={
                    typingDelay +
                    currentItem.word.length * typingSpeed +
                    highlightDelay
                  }
                  className="whitespace-nowrap bg-gradient-to-r from-white via-[#93c5fd] to-[#1473E6] bg-clip-text font-extrabold tracking-tight text-transparent"
                  showCursor={showCursor}
                  cursorCharacter={cursorCharacter}
                />
              </div>
            ) : (
              <TypewriterText
                text={String(currentItem)}
                speed={typingSpeed}
                delay={typingDelay}
                className="inline-block whitespace-pre-line"
                showCursor={showCursor}
                cursorCharacter={cursorCharacter}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  },
);

interface TypewriterTextProps {
  text: string;
  speed: number;
  delay: number;
  className?: string;
  showCursor?: boolean;
  cursorCharacter?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed,
  delay,
  className = "",
  showCursor = false,
  cursorCharacter = "|",
}) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    setVisibleText("");

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      let index = 0;

      intervalId = setInterval(() => {
        index += 1;

        setVisibleText(text.slice(0, index));

        if (index >= text.length && intervalId) {
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);

      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {visibleText}

      {showCursor && <span className="ml-1 opacity-70">{cursorCharacter}</span>}
    </span>
  );
};

RotatingText.displayName = "RotatingText";
