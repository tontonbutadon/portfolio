import { DiHtml5 } from 'react-icons/di';
import { BiShoppingBag } from 'react-icons/bi';
import { BsThunderbolt } from 'react-icons/bs';

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
}
export const portfolioProjectData: PortfolioProject[] = [
  {
    id: 'project-1',
    category: 'frontend',
    icon: DiHtml5,
    gradientFrom: 'var(--color-react)',
    gradientTo: 'var(--color-typescript)',
    title: '作品タイトル',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-1',
  },
  {
    id: 'project-2',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-shopify-1)',
    gradientTo: 'var(--color-shopify-3)',
    title: '作品タイトル',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-2',
  },
  {
    id: 'project-3',
    category: 'optimization',
    icon: BsThunderbolt,
    gradientFrom: 'var(--color-speed)',
    gradientTo: 'var(--color-ux)',
    title: '作品タイトル',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-3',
  },
  {
    id: 'project-4',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-shopify-1)',
    gradientTo: 'var(--color-shopify-3)',
    title: '作品タイトル',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-4',
  },
  {
    id: 'project-5',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-html)',
    gradientTo: 'var(--color-scss)',
    title: '作品タイトル5',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-5',
  },
  {
    id: 'project-1',
    category: 'frontend',
    icon: DiHtml5,
    gradientFrom: 'var(--color-react)',
    gradientTo: 'var(--color-typescript)',
    title: '作品タイトル',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-1',
  },
  {
    id: 'project-2',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-shopify-1)',
    gradientTo: 'var(--color-shopify-3)',
    title: '作品タイトル',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-2',
  },
  {
    id: 'project-3',
    category: 'optimization',
    icon: BsThunderbolt,
    gradientFrom: 'var(--color-speed)',
    gradientTo: 'var(--color-ux)',
    title: '作品タイトル',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-3',
  },
  {
    id: 'project-4',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-shopify-1)',
    gradientTo: 'var(--color-shopify-3)',
    title: '作品タイトル',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-4',
  },
  {
    id: 'project-5',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-html)',
    gradientTo: 'var(--color-scss)',
    title: '作品タイトル5',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-5',
  },
  {
    id: 'project-5',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-html)',
    gradientTo: 'var(--color-scss)',
    title: '作品タイトル5',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-5',
  },
  {
    id: 'project-5',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-html)',
    gradientTo: 'var(--color-scss)',
    title: '作品タイトル5',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-5',
  },
  {
    id: 'project-5',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-html)',
    gradientTo: 'var(--color-scss)',
    title: '作品タイトル5',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-5',
  },
  {
    id: 'project-5',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-html)',
    gradientTo: 'var(--color-scss)',
    title: '作品タイトル5',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-5',
  },
  {
    id: 'project-5',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-html)',
    gradientTo: 'var(--color-scss)',
    title: '作品タイトル5',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-5',
  },
  {
    id: 'project-5',
    category: 'shopify',
    icon: BiShoppingBag,
    gradientFrom: 'var(--color-html)',
    gradientTo: 'var(--color-scss)',
    title: '作品タイトル5',
    description:
      '作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります',
    tags: ['Typescript', 'React', 'Tailwind'],
    detailLink: '/portfolio/project-5',
  },
];
