import React from 'react';
import { motion } from 'motion/react';

interface DecorativeSquaresProps {
  variant?: 'l-shape' | 'checkered' | 'two-square';
  colors?: string[];
  size?: number;
  className?: string;
  opacity?: number;
}

export const DecorativeSquares = ({ 
  variant = 'l-shape', 
  colors = ['#006D69'], // Default to brand green
  size = 64,
  className = "",
  opacity = 1
}: DecorativeSquaresProps) => {
  const blocks = variant === 'l-shape' 
    ? [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 2, y: 1 },
        { x: 1, y: 2 }
      ]
    : variant === 'checkered'
    ? [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 2, y: 1 }
      ]
    : [
        { x: 1, y: 0 },
        { x: 0, y: 1 }
      ];

  const gridSize = 3;
  const blockSize = 100 / gridSize;

  return (
    <div 
      className={`absolute pointer-events-none select-none z-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {blocks.map((block, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: opacity, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          style={{
            position: 'absolute',
            width: `${blockSize}%`,
            height: `${blockSize}%`,
            backgroundColor: colors[i % colors.length],
            top: `${block.y * blockSize}%`,
            left: `${block.x * blockSize}%`,
          }}
        />
      ))}
    </div>
  );
};
