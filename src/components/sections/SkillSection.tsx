'use client';
import React from 'react';
// SkillCard
import { skillsData } from '@/types/skills';
import SkillCard from '../blocks/SkillCard';

const SkillSection: React.FC = () => {
  return (
    <section className="max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl m-auto md:px-5">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-2 md:mb-3">
        スキル
      </h2>
      <p className="text-base text-[var(--color-dark)]/70 m-auto text-center mb-5 md:mb-12">
        フロントエンドを中心に幅広いスキルを持っています
      </p>
      <div className="md:grid md:grid-cols-2 gap-x-5 md:gap-12 mb-10 md:mb-15">
        {skillsData.map((category) => {
          const renderIcon = () => {
            if (!category.icon) return null;

            if (category.icon.type === 'react-icon') {
              const IconComponent = category.icon.content as React.ComponentType<{
                className?: string;
                style?: React.CSSProperties;
              }>;
              return <IconComponent className="mr-2"></IconComponent>;
            }
            return null;
          };

          return (
            <div
              className="shadow-xl  bg-[var(--color-background)] p-10 rounded-3xl mb-10 md:mb-0"
              key={category.id}
            >
              <div className="flex items-center font-bold text-lg md:text-2xl mv-6 md:mb-7">
                {renderIcon()}
                <h3 className="">{category.label}</h3>
              </div>
              <ul className="">
                {category.skills.map((skill, index) => {
                  return <SkillCard key={index} skill={skill}></SkillCard>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSection;
