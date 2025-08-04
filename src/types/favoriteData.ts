export type FavoriteItem = {
  title?: string;
  desc?: string;
  children: (string | FavoriteItem)[];
};

export const favoriteData: FavoriteItem[] = [
  {
    title: 'アニメ',
    children: [
      {
        title: 'ドラゴンボール',
        children: [
          {
            title: '好きなキャラクター',
            children: ['スーパーサイヤ人3 ゴテンクス'],
          },
          {
            title: '好きなシーン',
            children: [
              'フュージョン後、調子乗って出ていって、ブウにボコボコにされてすぐ戻って来るシーン（通常のゴテンクス）',
            ],
          },
        ],
      },
      {
        title: '進撃の巨人',
        children: ['伏線はんぱなかった。大分のミュージアム'],
      },
      {
        title: '面白かったアニメ',
        children: [
          'エヴァンゲリオン',
          '攻殻機動隊',
          'チ。-地球の運動について-',
          'コードギアス',
          '幼女戦記',
          '夏目友人帳',
          'AIR',
          'アカギ',
          '...',
        ],
      },
      {
        title: '見たいアニメ',
        children: ['ガンダムシリーズ'],
      },
    ],
  },
  {
    title: '漫画',
    children: [
      {
        title: 'ナルト',
        children: [
          '王道ジャンプ作品！',
          {
            title: '好きなキャラクター①',
            children: [
              'イタチ',
              {
                title: '',
                children: ['強い、優しい、イケメン'],
              },
            ],
          },
        ],
      },
      {
        title: 'アフターゴッド',
        children: [
          'マンガワンで連載中の江野朱美先生の漫画。どうなるか分からない展開が好き。絵柄も好き。あと、たまに出てくるネコがかわいい。',
        ],
      },
    ],
  },
  {
    title: '映画',
    children: [
      {
        title: '最近みた映画',
        children: [
          {
            title: 'ジーサンズ',
            children: ['おもろかった'],
          },
          {
            title: 'ラストベガス',
            children: ['おもろかった'],
          },
          {
            title: '最高の人生の見つけ方',
            children: ['おもろかった'],
          },
          {
            title: 'TED',
            children: ['おもろかった'],
          },
          {
            title: '最強のふたり',
            children: ['おもろかった'],
          },
        ],
      },
      {
        title: '好きな映画',
        children: [
          {
            title: 'Scent of woman',
            children: ['アルパチーノの演技が！'],
          },
          {
            title: 'ショーシャンクの空に',
            children: ['何回見てもいい'],
          },
        ],
      },
    ],
  },
  {
    title: 'スポーツ',
    children: [
      {
        title: 'バスケットボール',
        desc: '小学1年〜高校2年までバスケしてました。昔は、ヒゲモジャモジャのハーデンのプレーが好きでした。',
        children: [],
      },
      {
        title: '競艇',
        desc: '年に1,2回くらい場に行って賭ける（健全）。コロナ禍のロックダウン中やることがなくハマっちゃった。菅選手の大外、チルト3度のまくりを目の前で見てみたいな〜！',
        children: [
          {
            title: '好きな選手',
            children: ['池田浩二'],
          },
        ],
      },
    ],
  },
  {
    title: 'お菓子作り',
    children: [
      {
        title: '洋菓子、焼き菓子が得意です！',
        children: [
          {
            title: '好きな洋菓子',
            children: ['エンガディナー、ディアマンクッキー、シフォンケーキ、レモンケーキ'],
          },
          {
            title: '作ってて楽しい洋菓子',
            children: ['型抜きクッキー、ケーキ'],
          },
        ],
      },
    ],
  },
  {
    title: '旅行',
    desc: '国内外',
    children: [
      {
        title: '洋菓子、焼き菓子が得意です！',
        children: [
          {
            title: '好きな洋菓子',
            children: ['エンガディナー、ディアマンクッキー、シフォンケーキ、レモンケーキ'],
          },
          {
            title: '作ってて楽しい洋菓子',
            children: ['型抜きクッキー、ケーキ'],
          },
        ],
      },
    ],
  },
  {
    title: '運転',
    desc: '国内外',
    children: [
      {
        title: '洋菓子、焼き菓子が得意です！',
        children: [
          {
            title: '好きな洋菓子',
            children: ['エンガディナー、ディアマンクッキー、シフォンケーキ、レモンケーキ'],
          },
          {
            title: '作ってて楽しい洋菓子',
            children: ['型抜きクッキー、ケーキ'],
          },
        ],
      },
    ],
  },
];
