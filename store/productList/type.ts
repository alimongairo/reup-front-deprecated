export const PRODUCT_LIST_ALIAS = 'productListAlias' as const;

export type TProductListStore = {
  loading: boolean;
  error: Error | null;
  dataSource: TProductItem[];
};

export type TProductItem = {
  title: string;
  id: number;
  brand: string;
  price: number;
  imgSource: any; // TODO replace to url
  like?: boolean;
};
