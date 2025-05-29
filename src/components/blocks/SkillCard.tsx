'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/types/skills';

interface SkillCardProps {
  skill: Skill;
}
function SkillCard({ skill }: SkillCardProps) {
  const [isInitialDone, setIsInitialDone] = useState(false);
  //進捗バーをレンダリング
  const renderBar = () => {
    if (!isInitialDone) {
      return (
        <motion.div
          className="h-full transition-all rounded-full "
          style={{ backgroundColor: `${skill.barColor}` }}
          initial={{ width: '0%' }}
          whileInView={{
            width: ['0%', `${skill.progressPercent}%`],
          }}
          transition={{ duration: 0.4, ease: 'linear' }}
          onAnimationComplete={() => setIsInitialDone(true)}
        ></motion.div>
      );
    } else {
      return (
        <motion.div
          className="h-full transition-all rounded-full "
          style={{ backgroundColor: `${skill.barColor}` }}
          initial={{ width: `${skill.progressPercent}%` }}
          animate={{
            width: [
              `${skill.progressPercent - 1}%`,
              `${skill.progressPercent + 4}%`,
              `${skill.progressPercent - 1}%`,
              `${skill.progressPercent + 4}%`,
            ],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>
      );
    }
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
