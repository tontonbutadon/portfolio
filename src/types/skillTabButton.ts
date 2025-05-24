export interface SkillTabButtonType {
  id: string;
  title: string;
  titleEn: string;
  activeBgColor: string;
  activeColor?: string;
}

export const skillTabButtonData: SkillTabButtonType[] = [
  {
    id: 'frontend',
    title: 'フロントエンド',
    titleEn: 'Frontend',
    activeBgColor: 'var(--color-javascript)',
  },
  {
    id: 'shopify',
    title: 'Shopify開発',
    titleEn: 'Shopify Dev',
    activeBgColor: 'var(--color-shopify-1)',
  },
  {
    id: 'backend',
    title: 'AWS・バックエンド',
    titleEn: 'AWS・Backend',
    activeBgColor: 'var(--color-aws)',
  },
  {
    id: 'analytics',
    title: '分析・最適化',
    titleEn: 'Analytics・Performance',
    activeBgColor: 'var(--color-speed)',
  },
  {
    id: 'tools',
    title: 'ツール・手法',
    titleEn: 'Tools',
    activeBgColor: 'var(--color-github)',
    activeColor: 'text-white',
  },
];
