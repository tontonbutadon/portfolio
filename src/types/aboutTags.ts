export interface AboutTag {
  title: string;
  bgColor: string;
  bgOpacity?: number;
  textColor?: string;
}

export const aboutTagsData: AboutTag[] = [
  {
    title: 'フロントエンド',
    bgColor: 'var(--color-html)',
    bgOpacity: 10,
    textColor: 'var(--color-html)',
  },
  {
    title: 'Shopify',
    bgColor: 'var(--color-shopify)',
    bgOpacity: 20,
  },
  {
    title: 'AWS',
    bgColor: 'var(--color-aws)',
    bgOpacity: 10,
  },
  {
    title: 'パフォーマンス最適化',
    bgColor: 'var(--color-speed)',
    bgOpacity: 10,
  },
  {
    title: 'アジャイル',
    bgColor: 'var(--color-scrum)',
    bgOpacity: 10,
  },
];
