import React from 'react';
import { loadMoreButton } from '@/types/loadMoreButton';

interface LoadMoreButtonProps {
  button: loadMoreButton;
  onClick: () => void;
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ button, onClick }) => {
  return (
    <button
      className="text-lg font-medium block m-auto px-4 py-3 rounded-4xl shadow cursor-pointer"
      style={{
        backgroundColor: `${button.bgColor}`,
        color: `${button.textColor ? button.textColor : '#fff'} `,
      }}
      onClick={onClick}
    >
      {button.text}
    </button>
  );
};
