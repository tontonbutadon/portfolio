'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import flamingoLogo from '@/assets/images/flamingo_logo.png';
//section container
import { SectionContainer } from '../blocks/SectionContainer';
//left
import { circleParticlesAboutLeft } from '@/types/circleParticle';
import { AboutLeftCircleParticles } from '../blocks/AboutLeftIcon';
import { useTypewriter } from '@/hooks/useTypewriter';
import { ThreeH1Text } from '../blocks/ThreeH1Text';
//right
import { aboutTagsData } from '@/types/aboutTags';
import { AboutRightTag } from '../blocks/AboutRightTags';

const AboutSection: React.FC = () => {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  const { displayText } = useTypewriter(
    'From spark to screen, I shape every detail.',
    60,
    20,
    isContentLoaded
  );

  //DOM構築完了用
  useEffect(() => {
    const handleLoad = () => {
      setIsContentLoaded(true);
    };
    if (document.readyState === 'complete') {
      setIsContentLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <SectionContainer hasBackground={true}>
      <div className="flex flex-col md:flex-row md:gap-16 m-auto max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl px-5">
        <div className="relative flex flex-col justify-start w-full md:w-1/2 mb-10 md:mb-0">
          {/* <div className="mb-2 md:mb-4">
            {circleParticlesAboutLeft.map((circle, index) => {
              return (
                <AboutLeftCircleParticles circle={circle} key={index}></AboutLeftCircleParticles>
              );
            })}
            <Image src={flamingoLogo} alt="Reiロゴ" width={200} height={200}></Image>
          </div>
          <h1 className="text-left font-bold text-[var(--color-flamingo)] md:leading-16 text-4xl md:text-5xl mb-2 md:mb-4">
            Hands on. Heart in.
          </h1>
          <p className="text-left text-[var(--color-dark)]/80 font-medium text-xl md:text-[24px]">
            {displayText}
            {displayText && (
              <motion.span
                className="ml-1.5 text-[var(--color-flamingo)] font-extralight"
                animate={{
                  opacity: [1, 1, 0, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                |
              </motion.span>
            )}
          </p> */}
          <ThreeH1Text></ThreeH1Text>
        </div>
        <div className="flex justify-end items-center w-full md:w-1/2">
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-5">自己紹介</h2>
            <div className="text-lg mb-5">
              <p className="mb-5">
                Shopifyで構築されたECサイトの開発・運用をしています。フロントエンドを中心にUIの改善や機能追加などを行いながら、少しずつバックエンド開発にもチャレンジしています。
                <br></br>
              </p>
              <p></p>
            </div>
            <div className="flex flex-wrap gap-4 text-lg">
              {aboutTagsData.map((tag) => {
                return <AboutRightTag tag={tag} key={tag.title}></AboutRightTag>;
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
