import React from 'react';
import { SectionContainer } from '../blocks/SectionContainer';
import { SectionTitle } from '../blocks/SectionTitle';
//History card
import { HistoryCard } from '../blocks/HistoryCard';
import { historyData } from '@/types/historyCard';

export const HistorySection: React.FC = ({}) => {
  return (
    <SectionContainer hasBackground={false}>
      <SectionTitle title="経歴" subTitle="これまでの職歴と学歴"></SectionTitle>
      <div className="">
        <ul className="border-l-2 h-full pl-10 border-[var(--color-flamingo)]/40">
          {historyData.map((history) => {
            return <HistoryCard historyCard={history} key={history.id}></HistoryCard>;
          })}
        </ul>
      </div>
    </SectionContainer>
  );
};
