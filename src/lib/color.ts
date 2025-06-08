/**
 * カラーパレット定数
 * global.cssのCSS変数と同じ値を定義
 */

// メインカラー
export const colors = {
  // ブランドカラー
  flamingo: '#ff5252',
  beak: '#ffd740',
  dark: '#0f1c2e',
  background: '#fff8e6',
  accent1: '#ffc334',
  accent2: '#e83a3a',

  // 技術スタックカラー
  react: '#61dafb',
  javascript: '#f7df1e',
  html: '#e34f26',
  css: '#1572b6',
  typescript: '#3178c6',
  scss: '#cc6699',
  tailwind: '#38bdf8',

  // Shopify関連
  shopify: '#96bf48',
  shopify1: '#b8d78f',
  shopify2: '#a8c66c',
  shopify3: '#95b85c',

  // クラウド・ツール
  app: '#9e9e9e',
  aws: '#ff9900',
  python: '#3776ab',
  speed: '#7ed36e',
  ux: '#f48fb1',
  googleAnalytics: '#f9ab00',
  github: '#24292e',
  scrum: '#34d399',
  asana: '#fc636b',
} as const;

// カラーの型定義
export type ColorKey = keyof typeof colors;
export type ColorValue = (typeof colors)[ColorKey];

// よく使うカラーグループ
export const colorGroups = {
  brand: {
    primary: colors.flamingo,
    secondary: colors.beak,
    dark: colors.dark,
    background: colors.background,
  },
  accent: {
    primary: colors.accent1,
    secondary: colors.accent2,
  },
  tech: {
    frontend: [colors.react, colors.javascript, colors.typescript, colors.html, colors.css],
    backend: [colors.python, colors.aws],
    styling: [colors.scss, colors.tailwind],
    ecommerce: [colors.shopify, colors.shopify1, colors.shopify2, colors.shopify3],
  },
  tools: {
    development: [colors.github, colors.scrum, colors.asana],
    analytics: [colors.googleAnalytics, colors.speed],
  },
} as const;
