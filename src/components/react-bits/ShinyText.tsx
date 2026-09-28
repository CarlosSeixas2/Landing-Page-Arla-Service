import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = '',
  speed = 4,
}) => {
  return (
    <span
      className={`inline-block relative bg-clip-text text-transparent bg-gradient-to-r from-white via-[#8ec5fc] to-white bg-[length:200%_auto] animate-shine font-extrabold ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
      <style>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shine {
          animation: shine 4s linear infinite;
        }
      `}</style>
    </span>
  );
};
