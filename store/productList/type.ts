export const PRODUCT_LIST_ALIAS = 'productListAlias' as const

export type TProductListStore = {
    loading: boolean;
    error: Error | null;
    dataSource: TProductItem[]
}

export type TProductItem = {
    title: string;
    id: number;
    description: string;
    price: number;
    img: string;
    like: boolean;
    cartActive: boolean;
    idChapter: string;
}