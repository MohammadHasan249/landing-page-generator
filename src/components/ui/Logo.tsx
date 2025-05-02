'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  textClassName?: string;
  variant?: 'light' | 'dark';
}

export const Logo = ({ 
  className = '', 
  textClassName = '',
  variant = 'light'
}: LogoProps) => {
  // Determine color based on variant
  const accentColor = variant === 'light' ? '#3B82F6' : '#60A5FA'; // blue-600 or blue-400
  const textColor = variant === 'light' ? '#111827' : '#F9FAFB'; // gray-900 or gray-50
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-8 w-8 mr-2">
        {/* Logo shape */}
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" stroke={accentColor} strokeWidth="2" />
          <path 
            d="M10 12L16 8L22 12V20L16 24L10 20V12Z" 
            fill={accentColor} 
            stroke={accentColor} 
            strokeWidth="1.5" 
          />
          <circle cx="16" cy="16" r="3" fill={variant === 'light' ? 'white' : '#111827'} />
        </svg>
      </div>
      <span className={`text-xl font-bold ${textClassName}`} style={{ color: textColor }}>
        Genique
      </span>
    </div>
  );
}; 