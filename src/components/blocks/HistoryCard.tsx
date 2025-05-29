import React from 'react';
import { HistoryItem } from '@/types/historyCard';

interface HistoryCardProps {
  historyCard: HistoryItem;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({ historyCard }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 0から始まるので+1
    return `${year}年${month}月`;
  };
  return (
    <li className="relative shadow-md bg-[var(--color-background)] rounded-b-3xl rounded-tr-3xl p-6 md:p-10 [&:not(:last-child)]:mb-10 md:[&:not(:last-child)]:mb-15">
      <div className="bg-white rounded-2xl p-6 md:p-10">
        <span className="absolute -top-1 -left-1 bg-[var(--color-flamingo)] w-5 h-5 rounded-full"></span>
        <div className="flex justify-between mb-2 md:mb-3">
          <span className="block font-semibold text-lg">{historyCard.title}</span>
          <span
            className={`block py-1 px-2 rounded-4xl ${historyCard.status === '現在' ? 'text-[var(--color-flamingo)] bg-[var(--color-flamingo)]/20' : 'text-[var(--color-dark)] bg-[var(--color-dark)]/20'}`}
          >
            {historyCard.status}
          </span>
        </div>
        <span className="block text-base mb-2 md:mb-3 text-[var(--color-dark)]/70">
          {historyCard.company}
          <span className="block md:inline">
            （
            <time dateTime={`${historyCard.period.start}`}>
              {formatDate(historyCard.period.start)}
            </time>{' '}
            -{' '}
            <time dateTime={`${historyCard.period.end}` ? historyCard.period.end : '現在'}>
              {historyCard.period.end ? formatDate(historyCard.period.end) : '現在'}
            </time>
            ）
          </span>
        </span>
        <p>{historyCard.description}</p>
      </div>
    </li>
  );
};
