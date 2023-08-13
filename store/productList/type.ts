export const PRODUCT_LIST_ALIAS = 'productListAlias' as const;

export type TProductListStore = {
  loading: boolean;
  error: Error | null;
  dataSource: TProductItem[];
};

export type TProductItem = {
  name: string;
  vendor_id: number;
  product_id?: number;
  brand: string;
  price: number;
  sale?: number;
  description?: string;
  main_image: any; // TODO replace to url
  like?: boolean;
};
