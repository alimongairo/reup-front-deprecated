export const PRODUCT_LIST_ALIAS = 'productListAlias' as const

export type TProductListStoreHit = {
    loading: boolean;
    error: Error | null;
    dataSourceHit: TProductItemHit[]
}

export type TProductItemHit = {
    title: string;
    id: number;
    description: string;
    price: number;
    img: string;
    like: boolean;
    cartActive: boolean;
}