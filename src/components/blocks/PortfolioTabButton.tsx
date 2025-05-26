import React from 'react';
import { PortfolioTabButtonType } from '@/types/portfolioTabButton';

interface PortfolioTabButtonProps {
  button: PortfolioTabButtonType;
  isActive?: boolean;
  onClick: () => void;
}

function PortfolioTabButton({ button, isActive, onClick }: PortfolioTabButtonProps) {
  return (
    <button
      className={`shadow cursor-pointer py-1 px-3 rounded-4xl transition-colors ${isActive ? 'bg-[var(--color-flamingo)] text-white hover:bg-[var(--color-accent-2)] scale-105' : ' bg-white text-[var(--color-dark)] hover:bg-gray-50 hover:shadow-md'}`}
      onClick={onClick}
    >
      {button.title}
    </button>
  );
}

export default PortfolioTabButton;
