import React from 'react';

interface AnimatedGridProps {
  className?: string;
  dotColor?: string;
  lineColor?: string;
}

export const AnimatedGrid: React.FC<AnimatedGridProps> = ({
  className = '',
  lineColor = 'rgba(255, 255, 255, 0.03)',
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 30%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 30%, #000 60%, transparent 100%)',
        }}
      />
    </div>
  );
};
