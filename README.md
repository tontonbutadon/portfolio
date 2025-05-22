# ポートフォリオサイト

## 使用技術

-   **Next.js**：React ベースのフレームワーク。静的生成＋拡張性
-   **TypeScript**：型安全な開発を実現。
-   **Tailwind CSS**：ユーティリティファーストな CSS フレームワーク。
-   **AWS Amplify**：ホスティング・CI/CD に使用（GitHub 連携）。

## 主な機能

-   レスポンシブ対応（スマホ／PC 対応）
-   開発実績のポートフォリオ掲載（タグ絞り込み機能追加予定）
-   スキル一覧をカテゴリ別に視覚化
-   ブログ（追加予定）

## ページ構成

### 🏠 トップページ

-   自己紹介
-   テーマカラーとロゴを活かしたビジュアル

### 👤 自己紹介

-   自己紹介文・経歴概要・趣味や性格
-   職務経歴書リンクあり

### 💼 開発実績

-   プロジェクトカード表示（画像・概要・GitHub 等）
-   タグ絞り込み機能付き
-   詳細ページまたはモーダルで技術や成果を表示

### 🛠 スキル一覧

-   フロントエンド／バックエンド／クラウドなどカテゴリ別
-   得意度・使用年数の表示も視覚化

### ✍️ ブログ（追加予定）

-   Markdown or MDX 管理予定

### 📩 問い合わせ（追加予定）

-   メールアドレス or SNS リンク掲載予定

---

# My Portfolio

## Tech Stack

-   **Next.js**: React-based framework with static generation and flexibility.
-   **TypeScript**: Enables safe, typed development.
-   **Tailwind CSS**: Utility-first CSS framework.
-   **AWS Amplify**: Used for hosting and CI/CD (via GitHub integration).

## Features

-   Fully responsive design
-   Project portfolio with tag filtering
-   Visualized skill set by category
-   Blog (tech/gadget/travel) planned for future
-   Playful flamingo-themed logo design

## Pages

### 🏠 TOP

-   Intro section with name
-   Visual identity based on logo and theme color

### 👤 About

-   Who I am, background, hobbies, personality
-   Link to downloadable resume or in-page summary

### 💼 Portfolio

-   Project cards (image, description, tech stack, GitHub)
-   Tag filtering
-   Detail view or modal for each project

### 🛠 Skills

-   Grouped by area (Frontend / Backend / Cloud / Other)
-   Visualized with experience level or familiarity

### ✍️ Blog (Coming Soon)

-   Managed with Markdown or MDX

### 📩 Contact (Optional)

-   Email or social media links

## フォルダ構成

### `public/`

静的ファイルを格納しています。画像、アイコン、フォントなど、ビルドプロセスを通さずにそのまま配信されるファイルはここに配置しています。

-   **`images/`**: サイトで使用する画像ファイル
    -   **`projects/`**: 各プロジェクトのスクリーンショットや関連画像
    -   **`profile/`**: プロフィール写真
    -   **`backgrounds/`**: 背景画像やテクスチャ

### `src/`

アプリケーションのソースコードが含まれています。

-   **`app/`**: Next.js 13+ の App Router を使用したページ構成

    -   各フォルダがルートに対応しています

-   **`components/`**: 再利用可能な React コンポーネント

    -   **`layout/`**: ヘッダー、フッター、全体レイアウトなど
    -   **`blocks/`**: ボタン、カード、入力フィールドなどの基本 UI 要素
    -   **`sections/`**: ページの主要セクション（ヒーロー、スキル、タイムラインなど）
    -   **`projects/`**: プロジェクト表示関連のコンポーネント
    -   **`animations/`**: アニメーション効果を実装したコンポーネント

-   **`lib/`**: ユーティリティ関数、データ、ヘルパーなど

    -   **`projects.ts`**: プロジェクトの詳細データ
    -   **`skills.ts`**: スキルデータ（カテゴリ、経験年数など）

-   **`hooks/`**: カスタム React Hooks

    -   **`useMediaQuery.ts`**: レスポンシブ対応のためのメディアクエリフック
    -   **`useScrollPosition.ts`**: スクロール位置を検出するフック

-   **`styles/`**: グローバルスタイル定義

    -   **`globals.css`**: Tailwind CSS のインポートと独自のグローバルスタイル

-   **`types/`**: TypeScript 型定義
    -   プロジェクト全体で共有される型情報

## 実装上の主なポイント

-   **コンポーネントの分割**: 各コンポーネントは単一の責任を持ち、再利用可能なように設計
-   **TypeScript**: 型安全性を確保し、開発体験を向上
-   **レスポンシブデザイン**: モバイルファーストのアプローチで、すべての画面サイズに最適化
-   **アクセシビリティ**: WAI-ARIA の実践とキーボードナビゲーションのサポート
-   **パフォーマンス最適化**: 画像最適化、コード分割、レンダリングパフォーマンスの向上

## 環境構築

1. リポジトリをクローン:

````bash
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site

# This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
