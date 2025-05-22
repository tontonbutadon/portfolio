import React from 'react';
import Image from 'next/image';

const SkillSection: React.FC = () => {
  return (
    <section className="max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-5xl m-auto">
      <h2 className="text-4xl text-center font-semibold">スキル</h2>
      <div className="flex justify-center gap-2 my-3 flex-wrap text-sm">
        <button className="p-4 rounded-lg cursor-pointer">フロントエンド</button>
        <button className="p-4 rounded-lg cursor-pointer">Shopify開発</button>
        <button className="p-4 rounded-lg cursor-pointer">バックエンド・AWS</button>
        <button className="p-4 rounded-lg cursor-pointer">分析・最適化</button>
        <button className="p-4 rounded-lg cursor-pointer">ツール&手法</button>
      </div>
      <div className="card-list">
        {/* Frontend */}
        <div className="w-full mx-auto">
          <ul className="flex justify-between gap-6">
            <li className="p-5 bg-white rounded-lg">
              <div className="flex">
                <Image></Image>
                <div className="">
                  <h4 className="text-lg font-bold">HTML/CSS/SCSS</h4>
                  <div className="text-xs">
                    <span>経験年数：</span>
                    <span>3年</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 bg-blue-400 block rounded-4xl"></div>
              <p className="text-sm">セマンティックなマークアップとレスポンシブなスタイリング</p>
            </li>
            <li className="p-5 bg-white rounded-lg">
              <div className="flex">
                <Image></Image>
                <div className="">
                  <h4 className="text-lg font-bold">Javascript</h4>
                  <div className="text-xs">
                    <span>経験年数：</span>
                    <span>3年</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 bg-blue-400 block rounded-4xl"></div>
              <p className="text-sm">セマンティックなマークアップとレスポンシブなスタイリング</p>
            </li>
            <li className="p-5 bg-white rounded-lg">
              <div className="flex">
                <Image></Image>
                <div className="">
                  <h4 className="text-lg font-bold">Typescript/React</h4>
                  <div className="text-xs">
                    <span>経験年数：</span>
                    <span>3年</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 bg-blue-400 block rounded-4xl"></div>
              <p className="text-sm">セマンティックなマークアップとレスポンシブなスタイリング</p>
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
