import React from 'react';
import { SkillTabButtonType } from '@/types/skillTabButton';

interface SkillTabButtonProps {
  button: SkillTabButtonType;
  isActive?: boolean;
  onClick: () => void;
}

function SkillTabButton({ button, isActive, onClick }: SkillTabButtonProps) {
  return (
    <button
      className={`p-4 rounded-4xl cursor-pointer ${isActive ? 'bg-[var(--color-flamingo)] text-white shadow transform scale-105' : 'bg-white/80 text-[var(--color-dark)] hover:bg-white hover:shadow-md'}`}
      onClick={onClick}
    >
      {button.title}
    </button>
  );
}

export default SkillTabButton;
