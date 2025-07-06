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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`w-full px-5 mb-15 md:mb-20 ${hasBackground ? 'bg-[var(--color-background)] py-10 md:py-15' : ''}`}
    >
      <div className="w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
};
