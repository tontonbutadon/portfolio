import React from 'react';
import { HistoryCard } from '../blocks/HistoryCard';
import { historyData } from '@/types/historyCard';

export const HistorySection: React.FC = ({}) => {
  return (
    <section className="max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl m-auto px-5 mb-15 md:mb-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-2 md:mb-3">
        経歴
      </h2>
      <p className="text-base text-[var(--color-dark)]/70 m-auto text-center mb-8 md:mb-12">
        これまでの職歴と学歴
      </p>
      <div className="">
        <ul className="border-l-2 h-full pl-10 border-[var(--color-flamingo)]/40">
          {historyData.map((history) => {
            return <HistoryCard historyCard={history} key={history.id}></HistoryCard>;
          })}
        </ul>
      </div>
    </section>
  );
};
