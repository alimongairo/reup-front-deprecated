export const PRODUCT_DETAIL_ALICE = 'productDetail' as const;

export type TProductCard = {
  id: string;
  title: string;
  brandTitle: string;
  brandCode: string;
  sizes: Array<number>;
  description: string;
  params: string;
  price: number;
  oldPrice?: number;
  reviews?: TReview[];
  isLiked: boolean;
  images: Array<any>; // TODO поменять на url как будет бек
};

export type TReview = {
  id: number;
  name: string;
  date: string;
  grade: number;
  color: string;
  size: string;
  review: string;
  reviewsImg: Array<{ id: number; img: any; reviewId: number }>;
  avatar?: any; // TODO поменять на url как будет бек
};

export type TProductDetailStore = {
  loading: boolean;
  dataSource: TProductCard | null;
};
