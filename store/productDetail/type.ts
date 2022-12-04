export const PRODUCT_DETAIL_ALICE = 'productDetail' as const;

export type TProductCard = {
  id: string;
  title: string;
  brandTitle: string;
  sizes: Array<number>;
  description: string;
  params: string;
  price: number;
  oldPrice?: number;
  isLiked: boolean;
  images: Array<any>; // TODO поменять на url как будет бек
};

export type TProductDetailStore = {
  loading: boolean;
  dataSource: TProductCard | null;
};
