'use client';
import React from 'react';
import { motion } from 'framer-motion';
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
      {historyCard.children &&
        historyCard.children.map((child) => {
          return (
            <div
              className="bg-gradient-to-t from-white to-[var(--color-background)] rounded-2xl p-6 md:p-10 mb-4 md:mb-10"
              key={child.id}
            >
              <div className="flex justify-between mb-2 md:mb-3">
                <span className="block font-semibold text-lg">{child.title}</span>
                <span
                  className={`block py-1 px-2 rounded-4xl ${child.status === '現在' ? 'text-[var(--color-flamingo)] bg-[var(--color-flamingo)]/20' : 'text-[var(--color-dark)] bg-[var(--color-dark)]/20'}`}
                >
                  {child.status}
                </span>
              </div>
              <span className="block text-base mb-2 md:mb-3 text-[var(--color-dark)]/70">
                {child.company}
                <span className="block md:inline">
                  （<time dateTime={`${child.period.start}`}>{formatDate(child.period.start)}</time>{' '}
                  -{' '}
                  <time dateTime={`${child.period.end}` ? child.period.end : '現在'}>
                    {child.period.end ? formatDate(child.period.end) : '現在'}
                  </time>
                  ）
                </span>
              </span>
              <p>{child.description}</p>
            </div>
          );
        })}
      <div className="bg-white rounded-2xl p-6 md:p-10">
        <span className="absolute -top-1 -left-1 bg-[var(--color-flamingo)] w-5 h-5 rounded-full"></span>
        <div className="flex justify-between mb-2 md:mb-3">
          <span className="block font-semibold text-lg">{historyCard.title}</span>
          <motion.span
            className={`relative block py-1 px-2 rounded-4xl ${historyCard.status === '現在' ? 'text-[var(--color-flamingo)] bg-[var(--color-flamingo)]/20' : 'text-[var(--color-dark)] bg-[var(--color-dark)]/20'}`}
          >
            {historyCard.status}
            {historyCard.status === '現在' && (
              <motion.div
                className="absolute -z-10 inset-0 bg-[var(--color-flamingo)]/20 rounded-4xl"
                animate={{
                  scale: [1, 1.3, 1.5, 1.3, 1],
                  opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            )}
          </motion.span>
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
        <p>
          {historyCard.description.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </li>
  );
};
