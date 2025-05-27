'use client';
import React from 'react';
//tab
import { portfolioTabButtonData } from '@/types/portfolioTabButton';
import PortfolioTabButton from '../blocks/PortfolioTabButton';
//project card
import { portfolioProjectData } from '@/types/portfolioProject';
import { PortfolioProjectCard } from '../blocks/PortfolioProjectCard';
//more button
import { portfolioLoadMoreButtonData } from '@/types/loadMoreButton';
import { LoadMoreButton } from '../blocks/LoadMoreButton';

import { useState } from 'react';

export const PortfolioSection: React.FC = ({}) => {
  const INITIAL_DISPLAY_COUNT = 3;
  const [activeTabButton, setActiveTabButton] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjectData);
  const [visibleCount, setVisibleCount] = useState(INITIAL_DISPLAY_COUNT);
  const projectsToDisplay = filteredProjects.slice(0, visibleCount);
  const loadMore = () => {
    const loadCount = portfolioLoadMoreButtonData.count;
    const newVisibleCount = Math.min(visibleCount + loadCount, filteredProjects.length);
    setVisibleCount(newVisibleCount);
  };
  const filterProjects = (category: string) => {
    if (category === 'all') {
      return portfolioProjectData;
    }
    return portfolioProjectData.filter((project) => project.category === category);
  };

  return (
    <section className="bg-[var(--color-background)] py-10 md:py-15 mb-15 md:mb-20">
      <div className="m-auto max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-2 md:mb-3">
          ポートフォリオ
        </h2>
        <p className="text-base text-[var(--color-dark)]/70 m-auto text-center mb-8 md:mb-12">
          これまでに手がけた主なプロジェクト・作品
        </p>
        <div className="flex gap-4 flex-wrap justify-center mb-8 md:mb-12">
          {portfolioTabButtonData.map((button) => {
            return (
              <PortfolioTabButton
                key={button.id}
                button={button}
                isActive={activeTabButton === button.id ? true : false}
                onClick={() => {
                  setActiveTabButton(button.id);
                  const filtered = filterProjects(button.id);
                  console.log('filteredProject: ', filtered);
                  setFilteredProjects(filtered);
                  setVisibleCount(INITIAL_DISPLAY_COUNT);
                }}
              ></PortfolioTabButton>
            );
          })}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mb-10">
          {projectsToDisplay.map((project, index) => {
            return <PortfolioProjectCard project={project} key={index}></PortfolioProjectCard>;
          })}
        </ul>
        {visibleCount < filteredProjects.length && (
          <LoadMoreButton
            button={portfolioLoadMoreButtonData}
            onClick={() => {
              loadMore();
            }}
          ></LoadMoreButton>
        )}
      </div>
    </section>
  );
};
