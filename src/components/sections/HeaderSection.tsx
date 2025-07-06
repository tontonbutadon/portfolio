'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Feather Icons

export const HeaderSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow py-3 md:py-4">
      <div className="w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto flex justify-between items-center px-5">
        <Link href="/" className="flex items-center">
          <img src="/flamingo_logo.png" alt="flamingo logo" className="w-10 h-10" />
        </Link>

        {/* PCメニュー */}
        <ul className="hidden md:flex gap-10 text-[var(--color-dark)] font-medium">
          <li className="cursor-pointer">
            <Link href="/play">お遊び</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/portfolio">ポートフォリオ</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/blogs">ブログ</Link>
          </li>
        </ul>

        {/* ハンバーガーアイコン */}
        <button
          className="md:hidden text-[var(--color-dark)] cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden mt-5 px-5">
          <ul className="flex flex-col gap-5 text-[var(--color-dark)] font-medium">
            <li className="cursor-pointer">
              <Link href="/play" onClick={() => setMenuOpen(false)}>
                遊び
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
                ポートフォリオ
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/blogs" onClick={() => setMenuOpen(false)}>
                ブログ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
