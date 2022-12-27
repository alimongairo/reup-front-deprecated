export const LIKED_LIST_ALIAS = 'likedListAlias' as const;

export type TLikedListStore = {
  loading: boolean;
  error: Error | null;
  dataSource: TLikedItem[];
};

export type TLikedItem = {
  title: string;
  id: number;
  description: string;
  price: number;
  imgSource: any; // TODO replace to url
  like: boolean;
};
