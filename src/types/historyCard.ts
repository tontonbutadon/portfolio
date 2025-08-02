export interface HistoryItem {
  id: string;
  title: string;
  company: string;
  period: { start: string; end?: string };
  status: string; // "現在" | "学歴" | "アルバイト" | "職歴"
  description: string;
  isNested?: boolean; // 交換留学用
  children?: HistoryItem[]; // ネストした学歴カード用
}

export const historyData: HistoryItem[] = [
  {
    id: 'zenb',
    title: 'WEBエンジニア',
    company: '株式会社ZENB JAPAN',
    period: {
      start: '2022-03-30',
      end: undefined, // 現在
    },
    status: '現在',
    description:
      '新卒で入社。\n社内唯一のエンジニアとして、Shopifyで構築されたECサイトの開発・運用を中心に、フロントエンドからバックエンドまで担当。UI・UXの改善にも取り組む。',
  },
  {
    id: 'tutor',
    title: '家庭教師',
    company: '家庭教師のトライ',
    period: {
      start: '2021-08-01',
      end: '2022-02-29',
    },
    status: 'アルバイト',
    description: '帰国後から入社までの8ヶ月間、家庭教師のアルバイトをする。',
  },
  {
    id: 'university',
    title: '大学',
    company: 'Vilnius Gediminas Technical University',
    period: {
      start: '2017-09-01',
      end: '2021-07-14',
    },
    status: '学歴',
    description:
      'ソフトウェアエンジニアリングを専攻。Java, C+を使ったプログラミング、データベース、要件定義書の作成などの基礎を学ぶ。',
    children: [
      {
        id: 'exchange',
        title: '交換留学',
        company: 'University of Tartu',
        period: {
          start: '2021-09-01',
          end: '2022-02-28',
        },
        status: '学歴',
        description:
          'エストニアのタルトゥ大学に半年間、交換留学を行う。データ分析やロシア語など幅広い授業を履修。',
        isNested: true,
      },
    ],
  },
];
