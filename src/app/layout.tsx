import type { Metadata } from 'next';
import { Poppins, Noto_Sans_JP } from 'next/font/google';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: '安田零の自己紹介サイト',
  description:
    'Shopifyで構築されたECサイトの開発・運用をしています。フロントエンドを中心にUIの改善や機能追加などを行いながら、少しずつバックエンド開発にもチャレンジしています。',
  keywords: [
    'フロントエンド開発',
    'バックエンド開発',
    'Shopify',
    'ECエンジニア',
    'UI/UX',
    'ポートフォリオ',
  ],
  authors: [{ name: '安田零' }],
  creator: '安田零',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.yourportfolio.com/',
    title: '安田零',
    description:
      'Shopifyで構築されたECサイトの開発・運用をしています。フロントエンドを中心にUIの改善や機能追加などを行いながら、少しずつバックエンド開発にもチャレンジしています。',
    siteName: '安田零 ポートフォリオ',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '安田零のポートフォリオサイト',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '安田零',
    description:
      'Shopifyで構築されたECサイトの開発・運用をしています。フロントエンドを中心にUIの改善や機能追加などを行いながら、少しずつバックエンド開発にもチャレンジしています。/UX最適化のスペシャリスト',
    images: ['/images/twitter-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
};
// フォント
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${poppins.variable} ${notoSansJP.variable}`}>
      <body className="w-full">{children}</body>
    </html>
  );
}
