'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  children: React.ReactNode;
  hasBackground?: boolean;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, hasBackground }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // 開始状態
      whileInView={{ opacity: 1, y: 0 }} // 画面に入った時
      transition={{ duration: 1 }} // アニメーション設定
      viewport={{ once: true }} // 一度だけ実行
      className={`${hasBackground ? 'bg-[var(--color-background)] py-10 md:py-15 mb-15 md:mb-20' : 'max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl m-auto px-5 mb-15 md:mb-20'}`}
    >
      {children}
    </motion.section>
  );
};
