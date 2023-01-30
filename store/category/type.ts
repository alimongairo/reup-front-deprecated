import { TProductItem } from "@/store/productList/type";

export const CATEGORY_ALIAS = 'categoryAlias' as const;

export type TCategory = {
    loading: boolean;
    error: Error | null;
    dataSource: TProductItem [];
};

