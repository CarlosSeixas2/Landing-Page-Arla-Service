import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl sm:text-4xl',
  };

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 42,
  };

  return (
    <a
      href="#inicio"
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 hover:scale-102 ${className}`}
      aria-label="ARLA Service - Página Inicial"
    >
      {/* Stylized Automotive Gear & Spark Badge */}
      <div className="relative flex items-center justify-center">
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 group-hover:rotate-45"
        >
          {/* Outer Gear Ring */}
          <circle cx="20" cy="20" r="16" stroke="#1473E6" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.8" />
          
          {/* Inner Accent Ring */}
          <circle cx="20" cy="20" r="11" stroke="#2589FF" strokeWidth="2" />
          
          {/* Dynamic Velocity Slash */}
          <path
            d="M13 27L22 13H27L18 27H13Z"
            fill="#1473E6"
            className="transition-all duration-300 group-hover:fill-[#2589FF]"
          />
          <circle cx="23" cy="23" r="2.5" fill="#F5F5F5" />
        </svg>
        
        {/* Subtle background glow on hover */}
        <div className="absolute inset-0 bg-[#1473E6]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center tracking-tight">
          <span className={`font-extrabold ${sizeClasses[size]} font-heading text-white tracking-wider`}>
            ARLA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1473E6] ml-1 mb-1 animate-pulse" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#1473E6] uppercase font-sans -mt-0.5">
          SERVICE
        </span>
      </div>
    </a>
  );
};
