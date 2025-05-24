import { DiHtml5, DiJavascript, DiReact, DiGithub, DiPython, DiScrum } from 'react-icons/di';
import { SiShopify, SiGoogleanalytics, SiAsana } from 'react-icons/si';
import { SlSpeedometer } from 'react-icons/sl';
import { LuNotebookPen } from 'react-icons/lu';
import { FaAws } from 'react-icons/fa';

export interface Skill {
  title: string;
  experience: number;
  description: string;
  icon?: {
    type: 'react-icon' | 'svg' | 'png' | 'emoji' | 'text';
    content: React.ComponentType | string;
  };
  iconColor?: string;
  iconBgColor: string;
  progressPercent: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'フロントエンド',
    skills: [
      {
        title: 'HTML/CSS/SCSS',
        experience: 3,
        description: '説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる',
        icon: { type: 'react-icon', content: DiHtml5 },
        iconBgColor: 'var(--color-html)',
        progressPercent: 80,
      },
      {
        title: 'Javascript',
        experience: 3,
        description: '...',
        icon: { type: 'react-icon', content: DiJavascript },
        iconBgColor: 'var(--color-javascript)',
        progressPercent: 75,
      },
      {
        title: 'Typescript/React/Next.js',
        experience: 1,
        description: '...',
        icon: { type: 'react-icon', content: DiReact },
        iconBgColor: 'var(--color-react)',
        progressPercent: 25,
      },
    ],
  },
  {
    id: 'shopify',
    label: 'Shopify',
    skills: [
      {
        title: 'テーマカスタマイズ',
        experience: 3,
        description:
          'Liquid説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる',
        icon: { type: 'react-icon', content: SiShopify },
        iconBgColor: 'var(--color-shopify-1)',
        progressPercent: 80,
      },
      {
        title: 'カスタムアプリ開発',
        experience: 1.5,
        description: 'Checkoutout Extension...',
        icon: { type: 'react-icon', content: SiShopify }, // アイコンない場合
        iconBgColor: 'var(--color-shopify-2)',
        progressPercent: 45,
      },
      {
        title: 'Shopify運用全般',
        experience: 3,
        description: '（Flow・アプリ連携など）..',
        icon: { type: 'react-icon', content: SiShopify },
        iconBgColor: 'var(--color-shopify-3)',
        progressPercent: 80,
      },
    ],
  },
  {
    id: 'backend',
    label: 'バックエンド・AWS',
    skills: [
      {
        title: 'AWS',
        experience: 1,
        description:
          'Lambda/API Gateway/DynamoDB/Amplify説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる',
        icon: { type: 'react-icon', content: FaAws },
        iconBgColor: 'var(--color-aws)',
        progressPercent: 35,
      },
      {
        title: 'Python',
        experience: 1,
        description: '...',
        icon: { type: 'react-icon', content: DiPython },
        iconBgColor: 'var(--color-python)',
        progressPercent: 15,
      },
    ],
  },
  {
    id: 'analytics',
    label: '分析・最適化',
    skills: [
      {
        title: 'サイトパフォーマンス最適化',
        experience: 2,
        description: '説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる',
        icon: { type: 'react-icon', content: SlSpeedometer },
        iconBgColor: 'var(--color-speed)',
        progressPercent: 60,
      },
      {
        title: 'UI/UX改善',
        experience: 2,
        description: '...',
        icon: { type: 'react-icon', content: LuNotebookPen },
        iconBgColor: 'var(--color-ux)',
        progressPercent: 50,
      },
      {
        title: 'Google Analytics',
        experience: 1,
        description: '...',
        icon: { type: 'react-icon', content: SiGoogleanalytics },
        iconBgColor: 'var(--color-google-analytics)',
        progressPercent: 60,
      },
    ],
  },
  {
    id: 'tools',
    label: 'ツール・手法',
    skills: [
      {
        title: 'Git/Github',
        experience: 3,
        description: '説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる説明を入れる',
        icon: { type: 'react-icon', content: DiGithub },
        iconBgColor: 'var(--color-github)',
        progressPercent: 80,
      },
      {
        title: 'アジャイル/スクラム運用,',
        experience: 3,
        description: '...',
        icon: { type: 'react-icon', content: DiScrum },
        iconBgColor: 'var(--color-scrum)',
        progressPercent: 75,
      },
      {
        title: 'Asana/Backlog/Slack',
        experience: 3,
        description: '...',
        icon: { type: 'react-icon', content: SiAsana },
        iconBgColor: 'var(--color-asana)',
        progressPercent: 80,
      },
    ],
  },
];

// アイコンない場合
// {
//   title: 'アジャイル/スクラム運用,',
//   experience: 3,
//   description: '...',
//   icon: { type: 'text', content: 'A' },
//   iconBgColor: 'var(--color-accent1)',
// },
