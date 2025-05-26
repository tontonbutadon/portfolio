export interface loadMoreButton {
  count: number;
  text: string;
  bgColor: string;
  textColor?: string; //default white
}

export const portfolioLoadMoreButtonData: loadMoreButton = {
  count: 9,
  text: 'もっと見る',
  bgColor: 'var(--color-flamingo)',
};
