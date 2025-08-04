// import { BiShoppingBag } from 'react-icons/bi';
import { SiTypescript } from 'react-icons/si';
import { LuNotebookPen } from 'react-icons/lu';

export interface PortfolioProject {
  id: string;
  category: string; // "frontend" | "shopify" | "optimization"
  icon: React.ComponentType<{ className?: string }>;
  gradientFrom: string;
  gradientTo: string;
  title: string;
  description: string;
  tags: string[];
  detailLink: string;
  date: string;
  isReady: boolean;
}
export const portfolioProjectData: PortfolioProject[] = [
  {
    id: 'project-2',
    category: 'frontend',
    icon: SiTypescript,
    gradientFrom: 'var(--color-react)',
    gradientTo: 'var(--color-typescript)',
    title: '社内メッセージサイト',
    description:
      '半期に一度、社員同士で「感謝のメッセージ」を送り合う社内文化があり、Googleフォームで行っていた運用を、Typescript+＋React＋AWSで置き換えたSPAツールです。\n認証・投稿・メール通知・DB保存までを自動化し、業務の手間を軽減しました。',
    tags: ['Typescript', 'React', 'AWS'],
    detailLink: '/portfolio/project-1',
    date: '2025-02-01',
    isReady: false,
  },
  {
    id: 'project-1',
    category: 'frontend, backend',
    icon: LuNotebookPen,
    gradientFrom: 'var(--color-shopify-1)',
    gradientTo: 'var(--color-shopify-3)',
    title: 'ポートフォリオサイト',
    description:
      'リトアニアに留学中、ブログとして使用していたドメインをポートフォリオ用に更新しました。\n今後、ブログや作ったものを足していく予定。',
    tags: ['Next.js', 'Vercel', 'Typescript', 'React', 'Tailwind', 'Canva'],
    detailLink: '/portfolio/project-2',
    date: '2025-08-01',
    isReady: false,
  },
  // {
  //   id: 'project-3',
  //   category: 'optimization',
  //   icon: BsThunderbolt,
  //   gradientFrom: 'var(--color-speed)',
  //   gradientTo: 'var(--color-ux)',
  //   title: '作品タイトル',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-3',
  // },
  // {
  //   id: 'project-4',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-shopify-1)',
  //   gradientTo: 'var(--color-shopify-3)',
  //   title: '作品タイトル',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-4',
  // },
  // {
  //   id: 'project-5',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-html)',
  //   gradientTo: 'var(--color-scss)',
  //   title: '作品タイトル5',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-5',
  // },
  // {
  //   id: 'project-1',
  //   category: 'frontend',
  //   icon: DiHtml5,
  //   gradientFrom: 'var(--color-react)',
  //   gradientTo: 'var(--color-typescript)',
  //   title: '作品タイトル',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-1',
  // },
  // {
  //   id: 'project-2',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-shopify-1)',
  //   gradientTo: 'var(--color-shopify-3)',
  //   title: '作品タイトル',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-2',
  // },
  // {
  //   id: 'project-3',
  //   category: 'optimization',
  //   icon: BsThunderbolt,
  //   gradientFrom: 'var(--color-speed)',
  //   gradientTo: 'var(--color-ux)',
  //   title: '作品タイトル',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-3',
  // },
  // {
  //   id: 'project-4',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-shopify-1)',
  //   gradientTo: 'var(--color-shopify-3)',
  //   title: '作品タイトル',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-4',
  // },
  // {
  //   id: 'project-5',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-html)',
  //   gradientTo: 'var(--color-scss)',
  //   title: '作品タイトル5',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-5',
  // },
  // {
  //   id: 'project-5',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-html)',
  //   gradientTo: 'var(--color-scss)',
  //   title: '作品タイトル5',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-5',
  // },
  // {
  //   id: 'project-5',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-html)',
  //   gradientTo: 'var(--color-scss)',
  //   title: '作品タイトル5',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-5',
  // },
  // {
  //   id: 'project-5',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-html)',
  //   gradientTo: 'var(--color-scss)',
  //   title: '作品タイトル5',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-5',
  // },
  // {
  //   id: 'project-5',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-html)',
  //   gradientTo: 'var(--color-scss)',
  //   title: '作品タイトル5',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-5',
  // },
  // {
  //   id: 'project-5',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-html)',
  //   gradientTo: 'var(--color-scss)',
  //   title: '作品タイトル5',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-5',
  // },
  // {
  //   id: 'project-5',
  //   category: 'shopify',
  //   icon: BiShoppingBag,
  //   gradientFrom: 'var(--color-html)',
  //   gradientTo: 'var(--color-scss)',
  //   title: '作品タイトル5',
  //   description:
  //     '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
  //   tags: ['Typescript', 'React', 'Tailwind'],
  //   detailLink: '/portfolio/project-5',
  // },
];
