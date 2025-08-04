'use client';

import { useState } from 'react';
import { SectionTitle } from '@/components/blocks/SectionTitle';
import { favoriteData } from '@/types/favoriteData';
import { RiPushpinFill } from 'react-icons/ri';
import { HeaderSection } from '@/components/sections/HeaderSection';

export const pastelFavoriteBg = [
  '#ffeaea', // 薄ピンク
  '#eaf6ff', // 薄水色
  '#f3ffe8', // 薄緑
  '#fffbe8', // 薄黄
  '#f6f0ff', // 薄紫
  '#eafff5', // 薄エメラルド
  '#fef5e7', // 淡オレンジ
  '#fff0f0', // 薄赤
];

// データをネストしたリストに変換
type RecursiveItem = string | { title?: string; desc?: string; children?: RecursiveItem[] };

function RecursiveList({ items, level = 0 }: { items: RecursiveItem[]; level?: number }) {
  const getListStyle = (level: number) => {
    switch (level) {
      case 0:
        return 'space-y-3';
      case 1:
        return 'ml-4 mt-3 space-y-2 border-l-2 border-gray-300 pl-4';
      case 2:
        return 'ml-3 mt-2 space-y-2 border-l border-gray-400 pl-3';
      default:
        return 'ml-2 mt-1 space-y-1 pl-2';
    }
  };

  const getTextStyle = (level: number) => {
    switch (level) {
      case 0:
        return 'text-base md:text-lg font-semibold text-gray-800';
      case 1:
        return 'text-base font-medium text-gray-700';
      case 2:
        return 'text-sm font-medium text-gray-600';
      default:
        return 'text-sm text-gray-600';
    }
  };

  const getBullet = (level: number) => {
    if (level === 0) {
      return <div className="w-2 h-2 bg-orange-400 rounded-full mt-2.5 flex-shrink-0"></div>;
    }
    return null; // レベル1以降はアイコンなし
  };

  return (
    <div className={getListStyle(level)}>
      {items.map((item, idx) =>
        typeof item === 'string' ? (
          <div key={idx} className="flex items-start gap-3">
            {getBullet(level)}
            <span className={`${getTextStyle(level)} leading-relaxed flex-1`}>
              {item.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </div>
        ) : (
          <div key={idx} className="relative">
            {item.title?.trim() && (
              <div className="flex items-start gap-3 mb-1">
                {getBullet(level)}
                <span
                  className={`${getTextStyle(level)} leading-relaxed flex-1 ${level === 0 ? 'font-bold' : ''}`}
                >
                  {item.title}
                </span>
              </div>
            )}
            {item.desc?.trim() && (
              <div className="text-sm text-gray-600 italic ml-5 mb-3 bg-white/50 p-3 rounded-lg border border-gray-200 leading-relaxed">
                {item.desc.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            )}
            {item.children && item.children.length > 0 && (
              <RecursiveList items={item.children} level={level + 1} />
            )}
          </div>
        )
      )}
    </div>
  );
}

export default function FavoritesPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <HeaderSection></HeaderSection>
      <div className="px-4 py-8 min-h-screen">
        <SectionTitle title="好きなもの" subTitle="思いつくまま書いてみた" />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {favoriteData.map((item, idx) => {
            const bgColor = pastelFavoriteBg[(idx * 3) % pastelFavoriteBg.length];
            return (
              <div
                key={idx}
                style={{ backgroundColor: bgColor }}
                className="relative break-inside-avoid rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 w-full border border-gray-200 transform hover:-translate-y-1"
              >
                <RiPushpinFill className="absolute top-4 right-4 text-gray-400 text-2xl transform rotate-12" />

                {/* カテゴリータイトル */}
                <div className="mb-6 pb-3 border-b-2 border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    {item.title}
                  </h2>
                  {item.desc?.trim() && (
                    <p className="text-sm text-gray-600 italic mt-2 whitespace-pre-line">
                      {item.desc}
                    </p>
                  )}
                </div>

                {/* コンテンツ */}
                {item.children && (
                  <div className="overflow-hidden">
                    <RecursiveList items={item.children} />
                  </div>
                )}

                {/* 装飾的な影 */}
                <div className="absolute -bottom-1 -right-1 w-full h-full bg-gray-200 rounded-xl -z-10 opacity-30"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
