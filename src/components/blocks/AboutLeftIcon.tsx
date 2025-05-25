import React from 'react';
import { CircleParticle } from '@/types/circleParticle';

interface AboutLeftCircleParticleProps {
  circle: CircleParticle;
}

export const AboutLeftCircleParticles: React.FC<AboutLeftCircleParticleProps> = ({ circle }) => {
  return (
    <span
      className="absolute rounded-full"
      style={{
        width: `${circle.size * 4}px`, // Tailwindのw-10 = 40px = size 10 * 4
        height: `${circle.size * 4}px`,
        top: `${circle.top || 0}rem`, // Tailwindのtop-3 = 0.75rem
        left: `${circle.left || 0}rem`,
        backgroundColor: `color-mix(in srgb, ${circle.color} ${circle.opacity || 50}%, transparent)`,
        zIndex: circle.zIndex || 0,
        animationDelay: `${circle.animationDelay || 0}s`,
        animationDuration: `${circle.animationDuration || 3}s`,
      }}
    ></span>
  );
};
