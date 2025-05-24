'use client';
import React from 'react';
import { useState } from 'react';
// SkillCard
import { skillsData } from '@/types/skills';
import SkillCard from '../blocks/SkillCard';
//SkillTabButton
import { skillTabButtonData } from '@/types/skillTabButton';
import SkillTabButton from '../blocks/SkillTabButton';

const SkillSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section className="max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl m-auto px-3">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-10 md:mb-13">
        スキル
      </h2>
      <div className="flex gap-3 justify-center md:justify-between flex-wrap my-3 rounded-4xl mb-10 md:mb-13 text-base md:text-xl 2xl:text-2xl p-2 shadow bg-gray-50">
        {skillTabButtonData.map((button) => {
          return (
            <SkillTabButton
              button={button}
              key={button.id}
              isActive={activeTab === button.id}
              onClick={() => {
                setActiveTab(button.id);
              }}
            ></SkillTabButton>
          );
        })}
      </div>
      <div className="">
        {skillsData
          .filter((category) => category.id === activeTab)
          .map((category) => {
            return (
              <div className="w-full mx-auto max-w-6xl pb-10" key={category.id}>
                <ul className="flex flex-col md:flex-row gap-3 md:gap-6 w-full md:justify-between">
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
