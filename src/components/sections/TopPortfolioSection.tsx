'use client';
import React from 'react';
import { SectionContainer } from '../blocks/SectionContainer';
import { SectionTitle } from '../blocks/SectionTitle';
//project card
import { portfolioProjectData } from '@/types/portfolioProject';
import { PortfolioProjectCard } from '../blocks/PortfolioProjectCard';
import Link from 'next/link';

export const TopPortfolioSection: React.FC = ({}) => {
  const DISPLAY_COUNT = 3;
  const projectsToDisplay = portfolioProjectData.slice(0, DISPLAY_COUNT);

  return (
    <SectionContainer hasBackground={true}>
      <div className="m-auto max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <SectionTitle
          title="つくってみたもの"
          subTitle={
            <>
              気になったことや「こうしたら便利そう」を
              <span className="md:hidden">
                <br></br>
              </span>
              カタチにした記録です。
            </>
          }
        ></SectionTitle>
        <ul className="items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-10 mb-8 md:mb-12">
          {projectsToDisplay.map((project, index) => {
            return <PortfolioProjectCard project={project} key={index}></PortfolioProjectCard>;
          })}
        </ul>
        {/* <button className="relative text-lg font-medium block m-auto px-4 py-3 rounded-4xl shadow cursor-pointer bg-[var(--color-flamingo)] text-white">
          <Link href="/portfolio">もっと見る</Link>
        </button> */}
      </div>
    </SectionContainer>
  );
};
