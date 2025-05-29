import React from 'react';

interface SectionTitleProps {
  title: string;
  subTitle?: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-2 md:mb-3">
        {title}
      </h2>
      {subTitle && (
        <p className="text-base text-[var(--color-dark)]/70 m-auto text-center mb-8 md:mb-12">
          {subTitle}
        </p>
      )}
    </>
  );
};
