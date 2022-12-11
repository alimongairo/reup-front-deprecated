import { TProductCard } from '@/store/productDetail/type';

export const CASH_PREVIEW_PRODUCT_ALIAS = 'cashPreviewProduct' as const;

export interface ICashPreviewProductStore {
  loading: boolean;
  cash: { [key: string]: TProductCard };
}
