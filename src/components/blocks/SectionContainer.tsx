import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  hasBackground?: boolean;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, hasBackground }) => {
  return (
    <section
      className={`${hasBackground ? 'bg-[var(--color-background)] py-10 md:py-15 mb-15 md:mb-20' : 'max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl m-auto px-5 mb-15 md:mb-20'}`}
    >
      {children}
    </section>
  );
};
