import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
  variant?: 'default' | 'white';
}

export default function BrandLogo({ size = 32, className = '', variant = 'default' }: BrandLogoProps) {
  const strokeColor = variant === 'white' ? '#FFFFFF' : '#1D1D1F';
  const accentColor = variant === 'white' ? '#F58220' : '#0057B8';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-500 ease-out`}
    >
      {/* Pristine Perfect Outer Circle */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke={strokeColor}
        strokeWidth="1.25"
        className="opacity-15"
      />
      
      {/* Delicate Inner Guidelines for Architectural feel */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={strokeColor}
        strokeWidth="0.75"
        strokeDasharray="2 2"
        className="opacity-10"
      />

      {/* Axis Crosshairs - Symbolizes Precision */}
      <line x1="50" y1="2" x2="50" y2="8" stroke={strokeColor} strokeWidth="1" className="opacity-20" />
      <line x1="50" y1="92" x2="50" y2="98" stroke={strokeColor} strokeWidth="1" className="opacity-20" />
      <line x1="2" y1="50" x2="8" y2="50" stroke={strokeColor} strokeWidth="1" className="opacity-20" />
      <line x1="92" y1="50" x2="98" y2="50" stroke={strokeColor} strokeWidth="1" className="opacity-20" />

      {/* Structural "M" Monogram & Classical Column Pillars */}
      {/* Elegant, clean geometric strokes of varying weight */}
      <path
        d="M 28 68 V 34 M 72 68 V 34"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        className="opacity-90"
      />
      
      <path
        d="M 28 34 L 50 54 L 72 34"
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-500"
      />

      {/* Precise Center Balance Point */}
      <circle
        cx="50"
        cy="54"
        r="2"
        fill={accentColor}
        className="transition-colors duration-500"
      />
    </svg>
  );
}

