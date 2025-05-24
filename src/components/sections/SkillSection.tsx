import React from 'react';
import SkillCard from '../blocks/SkillCard';
import { skillsData } from '@/types/skills';

const SkillSection: React.FC = () => {
  return (
    <section className="max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl m-auto px-3">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-8">スキル</h2>
      <div className="flex justify-center gap-4 my-3 flex-wrap rounded-3xl shadow mb-10 text-base md:text-xl 2xl:text-2xl">
        <button className="p-4 rounded-lg cursor-pointer">フロントエンド</button>
        <button className="p-4 rounded-lg cursor-pointer">Shopify開発</button>
        <button className="p-4 rounded-lg cursor-pointer">バックエンド・AWS</button>
        <button className="p-4 rounded-lg cursor-pointer">分析・最適化</button>
        <button className="p-4 rounded-lg cursor-pointer">ツール&手法</button>
      </div>
      <div className="card-list">
        {skillsData.map((category) => {
          return (
            <div className="w-full mx-auto max-w-6xl" key={category.id}>
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
