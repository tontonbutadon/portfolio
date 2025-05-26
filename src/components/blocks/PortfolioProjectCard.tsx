import React from 'react';
import { PortfolioProject } from '@/types/portfolioProject';
import { PortfolioProjectTag } from './PortfolioProjectTag';

interface PortfolioProjectProps {
  project: PortfolioProject;
}

export const PortfolioProjectCard: React.FC<PortfolioProjectProps> = ({ project }) => {
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
    <li className="flex flex-col shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
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
        <div className="flex gap-2 mb-4 text-sm flex-wrap">
          {project.tags.map((tag) => {
            return <PortfolioProjectTag tag={tag} key={tag}></PortfolioProjectTag>;
          })}
        </div>
        <button
          className="text-lg text-[var(--color-flamingo)] font-medium cursor-pointer"
          onClick={() => {
            console.log(`遷移先: ${project.detailLink}`);
            // router.push(project.detailLink); // 後で有効化
          }}
        >
          詳細を見る
        </button>
      </div>
    </li>
  );
};
