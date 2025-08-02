import { SiShopify } from 'react-icons/si';
import { IoServerOutline, IoAnalytics } from 'react-icons/io5';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { SlSettings } from 'react-icons/sl';
import { IoIosHappy } from 'react-icons/io';
export interface Skill {
  title: string;
  experience: number;
  barColor: string;
  progressPercent: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon?: {
    type: 'react-icon' | 'svg' | 'png' | 'emoji';
    content: React.ComponentType;
  };
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'フロントエンド',
    icon: { type: 'react-icon', content: HiOutlineDesktopComputer },
    skills: [
      {
        title: 'HTML',
        experience: 3,
        barColor: 'var(--color-html)',
        progressPercent: 80,
      },
      {
        title: 'CSS',
        experience: 3,
        barColor: 'var(--color-css)',
        progressPercent: 80,
      },
      {
        title: 'Javascript',
        experience: 3,
        barColor: 'var(--color-javascript)',
        progressPercent: 75,
      },
      {
        title: 'SCSS',
        experience: 1.5,
        barColor: 'var(--color-scss)',
        progressPercent: 70,
      },
      {
        title: 'Typescript',
        experience: 0.5,
        barColor: 'var(--color-typescript)',
        progressPercent: 25,
      },
      {
        title: 'React',
        experience: 0.5,
        barColor: 'var(--color-react)',
        progressPercent: 25,
      },
      // {
      //   title: 'Tailwind',
      //   experience: 0.1,
      //   barColor: 'var(--color-tailwind)',
      //   progressPercent: 25,
      // },
    ],
  },
  {
    id: 'shopify',
    label: 'Shopify',
    icon: { type: 'react-icon', content: SiShopify },
    skills: [
      {
        title: 'テーマ開発',
        experience: 3,
        barColor: 'var(--color-shopify-1)',
        progressPercent: 80,
      },
      {
        title: 'Shopify運用全般',
        experience: 3,
        barColor: 'var(--color-shopify-2)',
        progressPercent: 80,
      },
      {
        title: 'カスタムアプリ開発',
        experience: 1.5,
        barColor: 'var(--color-shopify-3)',
        progressPercent: 45,
      },
    ],
  },
  {
    id: 'backend',
    label: 'バックエンド',
    icon: { type: 'react-icon', content: IoServerOutline },
    skills: [
      {
        title: 'AWS',
        experience: 1,
        barColor: 'var(--color-aws)',
        progressPercent: 35,
      },
      {
        title: 'Python',
        experience: 0.5,
        barColor: 'var(--color-python)',
        progressPercent: 15,
      },
    ],
  },
  {
    id: 'analytics',
    label: '分析・最適化',
    icon: { type: 'react-icon', content: IoAnalytics },
    skills: [
      {
        title: 'サイトパフォーマンス最適化',
        experience: 2,
        barColor: 'var(--color-speed)',
        progressPercent: 60,
      },
      {
        title: 'UI/UX改善',
        experience: 2,
        barColor: 'var(--color-ux)',
        progressPercent: 50,
      },
      // {
      //   title: 'Google Analytics',
      //   experience: 1,
      //   barColor: 'var(--color-google-analytics)',
      //   progressPercent: 50,
      // },
    ],
  },
  {
    id: 'tools',
    label: 'ツール',
    icon: { type: 'react-icon', content: SlSettings },
    skills: [
      {
        title: 'Git/Github',
        experience: 3,
        barColor: 'var(--color-github)',
        progressPercent: 80,
      },
      // {
      //   title: 'アジャイル',
      //   experience: 3,
      //   barColor: 'var(--color-scrum)',
      //   progressPercent: 75,
      // },
      {
        title: 'Asana/Backlog/Slack',
        experience: 3,
        barColor: 'var(--color-asana)',
        progressPercent: 80,
      },
    ],
  },
  {
    id: 'studying',
    label: '学習中',
    icon: { type: 'react-icon', content: IoIosHappy },
    skills: [
      {
        title: 'Three.js',
        experience: 0.1,
        barColor: 'var(--color-threejs)',
        progressPercent: 5,
      },
      {
        title: 'Blender',
        experience: 0.1,
        barColor: 'var(--color-blender)',
        progressPercent: 5,
      },
    ],
  },
];
