import React from 'react';
import { Skill } from '@/types/skills';

interface SkillCardProps {
  skill: Skill;
}
function SkillCard({ skill }: SkillCardProps) {
  //進捗バーをレンダリング
  const renderBar = () => {
    return (
      <div
        className="h-full transition-all rounded-full "
        style={{ width: `${skill.progressPercent}%`, backgroundColor: `${skill.barColor}` }}
      ></div>
    );
  };

  return (
    <li className="mb-5">
      <div className="flex text-base md:text-lg mb-2">
        <h4 className="mr-auto font-semibold ">{skill.title}</h4>
        <div className="text-[var(--color-dark)]/70">{skill.experience}年</div>
      </div>
      <div className="w-full h-3 rounded-full mb-5 overflow-hidden shadow-inner bg-gray-100">
        {renderBar()}
      </div>
    </li>
  );
}

export default SkillCard;
