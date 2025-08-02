'use client';
import React from 'react';
import { SectionTitle } from '../blocks/SectionTitle';
// SkillCard
import { skillsData } from '@/types/skills';
import SkillCard from '../blocks/SkillCard';
import { SectionContainer } from '../blocks/SectionContainer';

const SkillSection: React.FC = () => {
  return (
    <SectionContainer hasBackground={false}>
      <SectionTitle
        title="スキル"
        subTitle={
          <>
            フロントエンドを中心に
            <span className="md:hidden">
              <br></br>
            </span>
            幅広いスキルを習得中です。
          </>
        }
      ></SectionTitle>
      <div className="md:grid md:grid-cols-2 gap-x-5 md:gap-12">
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
              <div className="flex items-center font-bold text-lg md:text-2xl mb-6 md:mb-7">
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
    </SectionContainer>
  );
};

export default SkillSection;
