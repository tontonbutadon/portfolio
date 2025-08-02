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
];
