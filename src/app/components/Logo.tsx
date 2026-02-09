import React from 'react';
import logoImg from "figma:asset/7ead5bbd9cde88ca88371c59497728d3e616cec5.png";
import logoInverseImg from "figma:asset/3bf34c35f5f11cfc6b9ed93d4fc3b135b707dc6e.png";

export const Logo: React.FC<{ className?: string, variant?: 'default' | 'inverse' }> = ({ className = "", variant = 'default' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={variant === 'inverse' ? logoInverseImg : logoImg} 
        alt="EvidenceMD Logo" 
        className="h-10 w-auto object-contain"
      />
    </div>
  );
};
