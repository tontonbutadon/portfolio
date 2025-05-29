import React from 'react';
import Image from 'next/image';
import flamingoLogo from '@/assets/images/flamingo_logo.png';
//left
import { circleParticlesAboutLeft } from '@/types/circleParticle';
import { AboutLeftCircleParticles } from '../blocks/AboutLeftIcon';
//right
import { aboutTagsData } from '@/types/aboutTags';
import { AboutRightTag } from '../blocks/AboutRightTags';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[var(--color-background)] py-10 md:py-15 mb-15 md:mb-20">
      <div className="flex flex-col md:flex-row md:gap-16 m-auto max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl px-5">
        <div className="relative flex flex-col justify-start w-full md:w-1/2 mb-10 md:mb-0">
          <div>
            {circleParticlesAboutLeft.map((circle, index) => {
              return (
                <AboutLeftCircleParticles circle={circle} key={index}></AboutLeftCircleParticles>
              );
            })}
            <Image src={flamingoLogo} alt="Reiロゴ" width={200} height={200}></Image>
          </div>
          <h1 className="text-left font-bold md:leading-16 text-4xl md:text-6xl mb-2 md:mb-5">
            <span className="text-[var(--color-flamingo)]">
              <span className="md:block md:mb-4">No Swig, </span>
              <span className="md:block md:pl-15">All Swing</span>
            </span>
          </h1>
          <p className="text-left text-[var(--color-dark)]/80 font-medium text-xl md:text-[28px]">
            I create playful interfaces
          </p>
        </div>
        <div className="flex justify-end items-center w-full md:w-1/2">
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-5">自己紹介</h2>
            <div className="text-lg mb-5">
              <p className="mb-5">
                フロントエンドを中心に、バックエンドも対応できるエンジニアです。ユーザー体験を大切にした遊び心のあるインターフェースづくりが得意です。
              </p>
              <p>
                Shopifyカスタマイズやパフォーマンス最適化にも取り組んでいます。説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-lg">
              {aboutTagsData.map((tag) => {
                return <AboutRightTag tag={tag} key={tag.title}></AboutRightTag>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
