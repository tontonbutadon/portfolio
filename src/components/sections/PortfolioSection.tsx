import React from 'react';

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
          <span className="shadow cursor-pointer py-1 px-3 rounded-4xl bg-white">
            フロントエンド
          </span>
          <span className="shadow py-1 px-3 rounded-4xl bg-white">Shopify</span>
          <span className="shadow py-1 px-3 rounded-4xl bg-white">最適化</span>
          <span className="shadow py-1 px-3 rounded-4xl bg-white">Typescript</span>
        </div>
        <div className="">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            <li>
              {/* Image */}
              <h3>作品タイトル</h3>
              <p>
                作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります
              </p>
              <div className="flex gap-2">
                <span>Typescript</span>
                <span>React</span>
                <span>Tailwind</span>
              </div>
              <button>詳細を見る</button>
            </li>
            <li>
              {/* Image */}
              <h3>作品タイトル</h3>
              <p>
                作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります
              </p>
              <div className="flex gap-2">
                <span>Typescript</span>
                <span>React</span>
                <span>Tailwind</span>
              </div>
              <button>詳細を見る</button>
            </li>
            <li>
              {/* Image */}
              <h3>作品タイトル</h3>
              <p>
                作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります作品の説明が入ります
              </p>
              <div className="flex gap-2">
                <span>Typescript</span>
                <span>React</span>
                <span>Tailwind</span>
              </div>
              <button>詳細を見る</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
