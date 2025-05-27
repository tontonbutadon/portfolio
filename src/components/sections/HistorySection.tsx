import React from 'react';

export const HistorySection: React.FC = ({}) => {
  return (
    <section className="max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl m-auto px-5 mb-15 md:mb-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-2 md:mb-3">
        経歴
      </h2>
      <p className="text-base text-[var(--color-dark)]/70 m-auto text-center mb-8 md:mb-12">
        これまでの職歴と学歴
      </p>
      <div className="">
        <div className="border-l-2 h-full pl-10 border-[var(--color-flamingo)]/40">
          <div className="relative bg-[var(--color-background)] rounded-3xl p-6 md:p-10 mb-10 md:mb-15">
            <div className="bg-white rounded-2xl p-6 md:p-10">
              <span className="absolute -top-1 -left-1 bg-[var(--color-flamingo)] w-5 h-5 rounded-full"></span>
              <div className="flex justify-between mb-2 md:mb-3">
                <span className="block font-semibold text-lg">WEBエンジニア</span>
                <span className="block py-1 px-2 rounded-4xl bg-[var(--color-flamingo)]/20 text-[var(--color-flamingo)]">
                  現在
                </span>
              </div>
              <span className="block text-[var(--color-dark)]/70 text-base mb-2 md:mb-3">
                株式会社ZENB JAPAN
                <span className="block md:inline">
                  （<time dateTime="2022-03-30">2022年3月</time> - <time>現在</time>）
                </span>
              </span>
              <p>
                新卒で入社。<br></br>
                社内唯一のエンジニアとして、Shopifyで構築されたECサイト開発・運用を中心に、フロントエンドからバックエンドまで担当。データドリブンなUI・UXの改善にも取り組む。
              </p>
            </div>
          </div>
          <div className="relative bg-[var(--color-background)] rounded-2xl p-6 md:p-10 mb-10 md:mb-15">
            <div className="bg-white rounded-2xl p-6 md:p-10">
              <span className="absolute -top-1 -left-1 bg-[var(--color-flamingo)] w-5 h-5 rounded-full"></span>
              <div className="flex justify-between mb-2 md:mb-3">
                <span className="block font-semibold text-lg">家庭教師</span>
                <span className="block py-1 px-2 rounded-4xl bg-[var(--color-dark)]/20">
                  アルバイト
                </span>
              </div>
              <span className="block text-[var(--color-dark)]/70 text-base mb-2 md:mb-3">
                家庭教師のトライ
                <span className="block md:inline">
                  （<time dateTime="2021-08-01">2021年8月</time> -{' '}
                  <time dateTime="2022-02-29">2022年2月</time>）
                </span>
              </span>
              <p>卒業から入学までの間、家庭教師のアルバイトをする</p>
            </div>
          </div>

          <div className="relative bg-[var(--color-background)] rounded-3xl p-6 md:p-10">
            <span className="absolute -top-1 -left-1 bg-[var(--color-flamingo)] w-5 h-5 rounded-full"></span>
            <div className="bg-white rounded-2xl p-6 md:p-10 mb-8 md:mb-12">
              <div className="flex justify-between mb-2 md:mb-3">
                <span className="block font-semibold text-lg">情報工学専攻</span>
                <span className="block py-1 px-2 rounded-4xl bg-[var(--color-dark)]/20">学歴</span>
              </div>
              <span className="block text-[var(--color-dark)]/70 text-base mb-2 md:mb-3">
                タルトゥ大学
                <span className="block md:inline">
                  （<time dateTime="2021-09-01">2021年9月</time>-
                  <time dateTime="2022-02-28">2022年2月</time>）
                </span>
              </span>
              <p>
                エストニアのタルトゥ大学に半年間、交換留学を行う。データ分析やロシア語など幅広い授業を履修
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-10">
              <div className="flex justify-between mb-2 md:mb-3">
                <span className="block font-semibold text-lg">情報工学専攻</span>
                <span className="block py-1 px-2 rounded-4xl bg-[var(--color-dark)]/20">学歴</span>
              </div>
              <span className="block text-[var(--color-dark)]/70 text-base mb-2 md:mb-3">
                ヴィリニュスゲディミナス工科大学
                <span className="block md:inline">
                  （<time dateTime="2017-09-01">2017年9月</time>-
                  <time dateTime="2021-07-14">2021年7月</time>）
                </span>
              </span>
              <p>ソフトウェアエンジニアリングを専攻。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
