export interface PortfolioTabButtonType {
  id: string;
  title: string;
  titleEn: string;
}

export const portfolioTabButtonData: PortfolioTabButtonType[] = [
  {
    id: 'all',
    title: 'すべて',
    titleEn: 'all',
  },
  {
    id: 'frontend',
    title: 'フロントエンド',
    titleEn: 'Frontend',
  },
  {
    id: 'shopify',
    title: 'Shopify',
    titleEn: 'Shopify Dev',
  },
  {
    id: 'backend',
    title: 'バックエンド',
    titleEn: 'AWS・Backend',
  },
  {
    id: 'analytics',
    title: '分析・最適化',
    titleEn: 'Analytics・Performance',
  },
  {
    id: 'tools',
    title: 'ツール',
    titleEn: 'Tools',
  },
];
