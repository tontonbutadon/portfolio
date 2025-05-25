import React from 'react';
import Image from 'next/image';
import flamingoLogo from '@/assets/images/flamingo_logo.png';

function AboutSection() {
  return (
    <section className="bg-[var(--color-background)] py-10 mb-10">
      <div className="flex flex-col md:flex-row md:gap-16 m-auto max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl px-5">
        <div className="relative flex flex-col justify-start w-full md:w-1/2 mb-10 md:mb-0">
          <div>
            <span className="absolute w-10 h-10 bg-[var(--color-beak)]/70 rounded-full"></span>
            <span className="absolute w-8 h-8 bg-[var(--color-beak)]/50 rounded-full top-5 left-3"></span>
            <Image src={flamingoLogo} alt="Reiロゴ" width={200} height={200}></Image>
          </div>
          <h1 className="text-left font-bold md:leading-16 text-4xl md:text-6xl mb-2 md:mb-5">
            こんにちは、<br></br>
            <span className="text-[var(--color-flamingo)]">フロントエンド</span>エンジニアです
          </h1>
          <p className="text-left text-[var(--color-dark)]/80 font-medium text-xl md:text-[28px]">
            I create playful interfaces
          </p>
        </div>
        <div className="flex justify-end items-center w-full md:w-1/2">
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-5">自己紹介</h2>
            <div className="text-lg mb-5">
              <p className="mb-5">
                フロントエンドを中心に、バックエンドも対応できるエンジニアです。ユーザー体験を大切にした遊び心のあるインターフェースづくりが得意です。
              </p>
              <p>
                Shopifyカスタマイズやパフォーマンス最適化にも取り組んでいます。説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-lg">
              <span className="bg-[var(--color-html)]/10 text-[var(--color-html)] shadow py-1 px-3 rounded-4xl">
                フロントエンド
              </span>
              <span className="bg-[var(--color-shopify)]/20 text-[var(--color-dark)] shadow py-1 px-3 rounded-4xl">
                Shopify
              </span>
              <span className="bg-[var(--color-aws)]/10 text-[var(--color-dark)] shadow py-1 px-3 rounded-4xl">
                AWS
              </span>
              <span className="bg-[var(--color-speed)]/10 text-[var(--color-dark)] shadow py-1 px-3 rounded-4xl">
                パフォーマンス最適化
              </span>
              <span className="bg-[var(--color-scrum)]/10 text-[var(--color-dark)] shadow py-1 px-3 rounded-4xl">
                アジャイル
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
