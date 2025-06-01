'use client';
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioProject } from '@/types/portfolioProject';
import { PortfolioProjectTag } from './PortfolioProjectTag';

interface PortfolioProjectProps {
  project: PortfolioProject;
}

export const PortfolioProjectCard: React.FC<PortfolioProjectProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonhovered] = useState(false);
  const renderIcon = (project: PortfolioProject) => {
    if (project.icon) {
      const IconComponent = project.icon as React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
      }>;
      return <IconComponent className="text-white w-16 h-16"></IconComponent>;
    }
  };

  return (
    <li
      className="relative flex flex-col shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{
            background: [
              'linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.8) 50%, transparent 55%)',
              'linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.8) 50%, transparent 55%)',
            ],
            x: ['-100%', '100%'],
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ zIndex: 10 }}
        />
      )}

      <div
        className="flex items-center justify-center  bg-gradient-to-br h-44"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
        }}
      >
        {renderIcon(project)}
      </div>
      <div className=" bg-white py-8 px-4">
        <h3 className="font-semibold text-xl mb-3">{project.title}</h3>
        <p className="text-[var(--color-dark)]/70 mb-4">{project.description}</p>
        <div className="flex gap-2 mb-5 text-sm flex-wrap">
          {project.tags.map((tag) => {
            return <PortfolioProjectTag tag={tag} key={tag}></PortfolioProjectTag>;
          })}
        </div>
        <button
          className="inline-flex items-center gap-2 text-lg text-[var(--color-flamingo)] font-medium cursor-pointer"
          onMouseEnter={() => setIsButtonhovered(true)}
          onMouseLeave={() => setIsButtonhovered(false)}
          style={{
            backgroundColor: isButtonHovered ? 'var(--color-flamingo)' : 'transparent',
            color: isButtonHovered ? 'white' : 'var(--color-flamingo)',
            borderRadius: isButtonHovered ? '100px' : 'none',
            transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)',
            paddingTop: '4px',
            paddingBottom: '4px',
            paddingRight: '8px',
            paddingLeft: isButtonHovered ? '8px' : '0',
          }}
          onClick={() => {
            console.log(`遷移先: ${project.detailLink}`);
            // router.push(project.detailLink); // 後で有効化
          }}
        >
          くわしく見る
          <span
            className="w-0 h-0 border-l-[10px] border-l-[var(--color-flamingo)] border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"
            style={{
              borderLeftWidth: '10px',
              borderLeftStyle: 'solid',
              borderLeftColor: isButtonHovered ? 'white' : 'var(--color-flamingo)',
            }}
          ></span>
        </button>
      </div>
    </li>
  );
};
