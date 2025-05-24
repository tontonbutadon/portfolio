import React from 'react';
// import Image from 'next/image';
import { DiHtml5, DiJavascript, DiReact } from 'react-icons/di';

const SkillSection: React.FC = () => {
  return (
    <section className="max-w-sm md:max-w-5xl lg:max-w-6xl xl:max-w-7xl m-auto px-3">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-8">スキル</h2>
      <div className="flex justify-center gap-4 my-3 flex-wrap rounded-3xl shadow mb-10 text-base md:text-xl 2xl:text-2xl">
        <button className="p-4 rounded-lg cursor-pointer">フロントエンド</button>
        <button className="p-4 rounded-lg cursor-pointer">Shopify開発</button>
        <button className="p-4 rounded-lg cursor-pointer">バックエンド・AWS</button>
        <button className="p-4 rounded-lg cursor-pointer">分析・最適化</button>
        <button className="p-4 rounded-lg cursor-pointer">ツール&手法</button>
      </div>
      <div className="card-list">
        {/* Frontend */}
        <div className="w-full mx-auto max-w-6xl">
          <ul className="flex gap-6 w-full justify-between">
            <li className="p-5 bg-white rounded-lg shadow-md flex-1 min-w-64">
              <div className="flex mb-3">
                <DiHtml5 className="text-2xl md:text-4xl bg-[var(--color-html)] rounded-lg text-white w-12 h-12 mr-4 mb-5"></DiHtml5>
                <div>
                  <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2">HTML/CSS/SCSS</h4>
                  <div className="text-sm md:text-base">
                    <span>経験年数：</span>
                    <span>3年</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 bg-blue-400 block rounded-4xl mb-5">
                <span></span>
              </div>
              <p className="text-sm md:text-base">
                セマンティックなマークアップとレスポンシブなスタイリング
              </p>
            </li>
            <li className="p-5 bg-white rounded-lg shadow-md flex-1 min-w-64">
              <div className="flex mb-3">
                <DiJavascript className="text-2xl md:text-4xl bg-[var(--color-javascript)] rounded-lg text-white w-12 h-12 mr-4 mb-5"></DiJavascript>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2">Javascript</h4>
                  <div className="text-sm md:text-base">
                    <span>経験年数：</span>
                    <span>3年</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 bg-blue-400 block rounded-4xl mb-5"></div>
              <p className="text-sm md:text-base">
                セマンティックなマークアップとレスポンシブなスタイリング
              </p>
            </li>
            <li className="p-5 bg-white rounded-lg shadow-md flex-1 min-w-64">
              <div className="flex mb-3">
                <DiReact className="text-2xl md:text-4xl bg-[var(--color-react)] rounded-lg text-white w-12 h-12 mr-4 mb-5"></DiReact>
                <div className="">
                  <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2">
                    Typescript/React
                  </h4>
                  <div className="text-sm md:text-base">
                    <span>経験年数：</span>
                    <span>3年</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 bg-blue-400 block rounded-4xl mb-5"></div>
              <p className="text-sm md:text-base">
                セマンティックなマークアップとレスポンシブなスタイリング
              </p>
            </li>
          </ul>
        </div>
        {/* Shopify */}
        <div>
          <ul>
            <li>
              <h4>Liquid</h4>
              <div>
                <span>経験年数：</span>
                <span>3年</span>
              </div>
            </li>
            <li>
              <h4>カスタムアプリ開発</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
            <li>
              <h4>Checkout Extension</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
          </ul>
        </div>
        {/* Backend, AWS */}
        <div>
          <ul>
            <li>
              <h4>Lambda/API Gateway</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
            <li>
              <h4>DynamoDB</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
            <li>
              <h4>Amplify</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
          </ul>
        </div>
        {/* 分析・最適化 */}
        <div>
          <ul className="">
            <li>
              <h4>サイトパフォーマンス最適化</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
            <li>
              <h4>Google Analytics</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
            <li>
              <h4>UI/UX改善</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
          </ul>
        </div>
        {/* tools */}
        <div>
          <ul>
            <li>
              <h4>Git/Github</h4>
              <div>
                <span>経験年数：</span>
                <span>3年</span>
              </div>
            </li>
            <li>
              <h4>Asana/Backlog/Slack</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
            <li>
              <h4>Notion</h4>
              <div>
                <span>経験年数：</span>
                <span>1年</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
