export const PRODUCT_DETAILS_ALIAS = 'productDetailsAlias' as const

export type TProductDetailsStore = {
    loading: boolean;
    error: Error | null;
    dataSource: TProductItem
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