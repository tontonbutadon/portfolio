import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { loadMoreButton } from '@/types/loadMoreButton';
import { PiBirdDuotone } from 'react-icons/pi';

interface LoadMoreButtonProps {
  button: loadMoreButton;
  onClick: () => void;
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ button, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const birdsPosition = [
    { top: '-2.1rem', left: '0.2rem' },
    { top: '-2.1rem', left: '2.7rem' },
    { top: '-2.1rem', left: '5.2rem' },
  ];

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsHovered(false), 100);
    setTimeoutId(id);
  };

  return (
    <motion.div
      className="pt-8 w-fit mx-auto"
      style={{
        marginTop: isHovered ? '3.2rem' : '0',
      }}
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        className="relative text-lg font-medium block m-auto px-4 py-3 rounded-4xl shadow cursor-pointer"
        style={{
          backgroundColor: `${button.bgColor}`,
          color: `${button.textColor ? button.textColor : '#fff'} `,
        }}
        onClick={onClick}
        animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
      >
        {button.text}
        {isHovered &&
          birdsPosition.map((bird, index) => (
            <motion.div
              key={index}
              className="absolute pointer-events-none text-4xl text-[var(--color-flamingo)]"
              style={{
                top: bird.top,
                left: bird.left,
              }}
              animate={{
                rotate: [-60, -30, 0, 30, 60, 30, 0, -30, -60],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <PiBirdDuotone></PiBirdDuotone>
            </motion.div>
          ))}
      </motion.button>
    </motion.div>
  );
};
