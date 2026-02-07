import React from 'react';
import { motion } from 'motion/react';

interface PixelCornerProps {
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
  color?: string;
  size?: number;
  className?: string;
  opacity?: number;
}

export const PixelCorner = ({ 
  position = 'bottom-right', 
  color = '#003636', 
  size = 40,
  className = "",
  opacity = 1
}: PixelCornerProps) => {
  const isTop = position.startsWith('top');
  const isLeft = position.endsWith('left');

  // Two green squares with the actual corner square being transparent/empty
  const blocks = [
    { x: 1, y: 0 }, // Horizontal neighbor
    { x: 0, y: 1 }, // Vertical neighbor
  ];

  return (
    <div 
      className={`absolute pointer-events-none select-none z-0 ${className}`}
      style={{
        width: size * 2,
        height: size * 2,
        top: isTop ? 0 : 'auto',
        bottom: !isTop ? 0 : 'auto',
        left: isLeft ? 0 : 'auto',
        right: !isLeft ? 0 : 'auto',
      }}
    >
      {blocks.map((block, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: opacity, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: (block.x + block.y) * 0.1,
            ease: "easeOut"
          }}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            backgroundColor: color,
            bottom: !isTop ? block.y * size : 'auto',
            top: isTop ? block.y * size : 'auto',
            right: !isLeft ? block.x * size : 'auto',
            left: isLeft ? block.x * size : 'auto',
          }}
        />
      ))}
    </div>
  );
};
