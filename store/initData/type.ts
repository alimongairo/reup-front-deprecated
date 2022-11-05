export const INIT_DATA_ALIAS = 'initDataAlias' as const;

export interface IUser {
  name: string;
}

export type TInitDataStore = {
  loading: boolean;
  dataSource: IUser | null;
  error: Error | null;
};
