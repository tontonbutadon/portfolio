import React from 'react';
import { DiHtml5 } from 'react-icons/di';
import { BiShoppingBag } from 'react-icons/bi';
import { BsThunderbolt } from 'react-icons/bs';

export const PortfolioSection: React.FC = ({}) => {
  return (
    <section className="bg-[var(--color-background)] py-10 md:py-15">
      <div className="m-auto max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-2 md:mb-3">
          ポートフォリオ
        </h2>
        <p className="text-base text-[var(--color-dark)]/70 m-auto text-center mb-8 md:mb-12">
          これまでに手がけた主なプロジェクト・作品
        </p>
        <div className="flex gap-4 flex-wrap justify-center mb-8 md:mb-12">
          <span className="shadow cursor-pointer font-medium py-1 px-3 rounded-4xl bg-[var(--color-flamingo)] text-white hover:bg-[var(--color-accent-2)] scale-105 ">
            すべて
          </span>
          <span className="shadow cursor-pointer py-1 px-3 rounded-4xl bg-white hover:bg-gray-50 transition-colors">
            フロントエンド
          </span>
          <span className="shadow cursor-pointer py-1 px-3 rounded-4xl bg-white hover:bg-gray-50 transition-colors">
            Shopify
          </span>
          <span className="shadow cursor-pointer py-1 px-3 rounded-4xl bg-white hover:bg-gray-50 transition-colors">
            最適化
          </span>
          <span className="shadow cursor-pointer py-1 px-3 rounded-4xl bg-white hover:bg-gray-50 transition-colors">
            Typescript
          </span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mb-10">
          <li className="flex flex-col shadow-md hover:shadow-lg hover:shadow-[var(--color-flamingo)]/20 transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-center bg-gradient-to-br from-[var(--color-react)] to-[var(--color-typescript)] h-44">
              <DiHtml5 className="text-white w-16 h-16"></DiHtml5>
            </div>
            <div className=" bg-white py-8 px-4">
              <h3 className="font-semibold text-xl mb-3">作品タイトル</h3>
              <p className="text-[var(--color-dark)]/70 mb-4">
                作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります
              </p>
              <div className="flex gap-2 mb-4 text-sm flex-wrap">
                <span className="py-1 px-2 rounded-4xl bg-[var(--color-typescript)]/20">
                  Typescript
                </span>
                <span className="py-1 px-2 rounded-4xl bg-[var(--color-react)]/20">React</span>
                <span className="py-1 px-2 rounded-4xl bg-[var(--color-tailwind)]/20">
                  Tailwind
                </span>
              </div>
              <button className="text-lg text-[var(--color-flamingo)] font-medium pointer-cursor cursor-pointer">
                詳細を見る
              </button>
            </div>
          </li>
          <li className="flex flex-col shadow-md hover:shadow-lg hover:shadow-[var(--color-flamingo)]/20 transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-center  bg-gradient-to-br from-[var(--color-shopify-1)] to-[var(--color-shopify-3)] h-44">
              <BiShoppingBag className="text-white w-16 h-16"></BiShoppingBag>
            </div>
            <div className=" bg-white py-8 px-4">
              <h3 className="font-semibold text-xl mb-3">作品タイトル</h3>
              <p className="text-[var(--color-dark)]/70 mb-4">
                作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります
              </p>
              <div className="flex gap-2 mb-4 text-sm flex-wrap">
                <span className="py-1 px-2 rounded-4xl bg-[var(--color-typescript)]/20">
                  Typescript
                </span>
                <span className="py-1 px-2 rounded-4xl bg-[var(--color-react)]/20">React</span>
                <span className="py-1 px-2 rounded-4xl bg-[var(--color-tailwind)]/20">
                  Tailwind
                </span>
              </div>
              <button className="text-lg text-[var(--color-flamingo)] font-medium cursor-pointer">
                詳細を見る
              </button>
            </div>
          </li>
          <li className="flex flex-col shadow-md hover:shadow-lg hover:shadow-[var(--color-flamingo)]/20 transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-center  bg-gradient-to-br from-[var(--color-speed)] to-[var(--color-ux)] h-44">
              <BsThunderbolt className="text-white w-16 h-16"></BsThunderbolt>
            </div>
            <div className=" bg-white py-8 px-4">
              <h3 className="font-semibold text-xl mb-3">作品タイトル</h3>
              <p className="text-[var(--color-dark)]/70 mb-4">
                作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります
              </p>
              <div className="flex gap-2 mb-4 text-sm flex-wrap">
                <span className="py-1 px-2 rounded-4xl bg-[var(--color-typescript)]/20">
                  Typescript
                </span>
                <span className="py-1 px-2 rounded-4xl bg-[var(--color-react)]/20">React</span>
                <span className="py-1 px-2 rounded-4xl bg-[var(--color-tailwind)]/20">
                  Tailwind
                </span>
              </div>
              <button
                aria-label="プロジェクトの詳細を見る"
                className="text-lg text-[var(--color-flamingo)] font-medium cursor-pointer"
              >
                詳細を見る
              </button>
            </div>
          </li>
        </ul>
        <button className="text-lg font-medium block m-auto px-4 py-3 rounded-4xl bg-[var(--color-flamingo)] text-white shadow cursor-pointer">
          もっと見る
        </button>
      </div>
    </section>
  );
};
