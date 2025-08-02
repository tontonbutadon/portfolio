import React from 'react';

interface PortfolioProjectTagProps {
  tag: string;
}

export const PortfolioProjectTag: React.FC<PortfolioProjectTagProps> = ({ tag }) => {
  const getTagColor = (tagName: string) => {
    const normalizedTag = tagName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const colorMap: { [key: string]: string } = {
      react: 'var(--color-react)',
      javascript: 'var(--color-javascript)',
      html: 'var(--color-html)',
      css: 'var(--color-css)',
      typescript: 'var(--color-typescript)',
      scss: 'var(--color-scss)',
      tailwind: 'var(--color-tailwind)',
      shopify: 'var(--color-shopify)',
      liquid: 'var(--color-shopify-1)', // Shopify系
      app: 'var(--color-app)',
      aws: 'var(--color-aws)',
      lambda: 'var(--color-aws)', // AWS系
      dynamodb: 'var(--color-aws)', // AWS系
      python: 'var(--color-python)',
      performance: 'var(--color-speed)', // パフォーマンス系
      optimization: 'var(--color-speed)', // 最適化系
      ux: 'var(--color-ux)',
      ui: 'var(--color-ux)',
      analytics: 'var(--color-google-analytics)',
      github: 'var(--color-github)',
      git: 'var(--color-github)',
      scrum: 'var(--color-scrum)',
      agile: 'var(--color-scrum)',
      asana: 'var(--color-asana)',
      nextjs: 'var(--color-nextjs)',
      vercel: 'var(--color-vercel)',
      canva: 'var(--color-canva)',
      // デフォルト
    };
    return colorMap[normalizedTag] || 'var(--color-app)'; // gray-500の代わりにappカラー
  };

  return (
    <span
      className="py-1 px-2 rounded-4xl"
      style={{ backgroundColor: `color-mix(in srgb, ${getTagColor(tag)} 20%, transparent)` }}
    >
      {tag}
    </span>
  );
};
