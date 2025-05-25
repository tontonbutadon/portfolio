import React from 'react';
import { AboutTag } from '@/types/aboutTags';

interface AboutRightProps {
  tag: AboutTag;
}

export const AboutRightTag: React.FC<AboutRightProps> = ({ tag }) => {
  return (
    <span
      className={`shadow py-1 px-3 rounded-4xl`}
      style={{
        backgroundColor: `color-mix(in srgb, ${tag.bgColor} ${tag.bgOpacity}%, transparent)`,
        color: tag.textColor || 'var(--color-dark)',
      }}
    >
      {tag.title}
    </span>
  );
};
