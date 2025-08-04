// app/favorites/page.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SectionTitle } from '@/components/blocks/SectionTitle';
import { AiOutlineSmile } from 'react-icons/ai';
import { favoriteData } from '@/types/favoriteData';

// データをネストしたリストに変換
type RecursiveItem = string | { title?: string; desc?: string; children: RecursiveItem[] };

function RecursiveList({ items }: { items: RecursiveItem[] }) {
  return (
    <ul className="list-disc list-inside pl-5 space-y-1 text-sm text-gray-700">
      {items.map((item, idx) =>
        typeof item === 'string' ? (
          <li key={idx}>{item}</li>
        ) : (
          <li key={idx}>
            {item.title?.trim() && <span className="font-medium">{item.title}</span>}
            {item.desc && <p className="pl-2 mt-1 mb-1 text-gray-600">{item.desc}</p>}
            {item.children?.length > 0 && <RecursiveList items={item.children} />}
          </li>
        )
      )}
    </ul>
  );
}

export default function FavoritesPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="px-4 py-8">
      <SectionTitle title="好きなもの" subTitle="早口で話してまう"></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteData.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
            <RecursiveList items={item.children} />
            {/* <div className="flex flex-wrap gap-2 mt-4">
              {item.images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={item.title}
                  width={120}
                  height={80}
                  className="cursor-pointer rounded hover:opacity-80"
                  onClick={() => setModalImage(src)}
                />
              ))}
            </div> */}
          </div>
        ))}
      </div>

      {/* {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <Image
            src={modalImage}
            alt="拡大画像"
            width={800}
            height={600}
            className="max-w-full max-h-full rounded shadow-lg"
          />
        </div>
      )} */}
    </div>
  );
}
