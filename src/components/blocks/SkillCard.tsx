import React from 'react';
import { Skill } from '@/types/skills';

interface SkillCardProps {
  skill: Skill;
}
function SkillCard({ skill }: SkillCardProps) {
  //アイコンをレンダリング
  const renderIcon = () => {
    if (!skill.icon) return null;

    if (skill.icon.type == 'react-icon') {
      const IconComponent = skill.icon.content as React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
      }>;
      return (
        <div
          className="rounded-md mr-4 w-12 h-12 flex items-center justify-center"
          style={{
            backgroundColor: skill.iconBgColor,
          }}
        >
          <IconComponent
            className="text-2xl md:text-4xl"
            style={{
              backgroundColor: skill.iconBgColor,
              color: skill.iconColor ? skill.iconColor : '#fff',
            }}
          ></IconComponent>
        </div>
      );
    } else if (skill.icon.type == 'text') {
      const textContent = skill.icon.content as string;
      return (
        <div
          className="rounded-lg text-white w-12 h-12 mr-4 mb-5 flex items-center justify-center text-lg font-bold"
          style={{
            backgroundColor: skill.iconBgColor,
            color: skill.iconColor ? skill.iconColor : '#fff',
          }}
        >
          {textContent}
        </div>
      );
    }
  };

  //進捗バーをレンダリング
  const renderBar = () => {
    return (
      <div
        className="h-full transition-all rounded-full "
        style={{ backgroundColor: skill.iconBgColor, width: `${skill.progressPercent}%` }}
      ></div>
    );
  };

  return (
    <li className="p-5 bg-white rounded-lg shadow-md flex-1 min-w-64">
      <div className="flex mb-3 flex-1">
        {renderIcon()}
        <div className="flex-1">
          <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2">{skill.title}</h4>
          <div className="text-sm md:text-base">
            <span>経験年数：</span>
            <span>{skill.experience}年</span>
          </div>
        </div>
      </div>
      <div className="w-full h-3 rounded-full mb-5 overflow-hidden shadow-inner bg-gray-100">
        {renderBar()}
      </div>
      <p className="text-sm md:text-base">{skill.description}</p>
    </li>
  );
}

export default SkillCard;
