import { RootState } from 'store';

export const getInitData = (store: RootState) => store.initData.dataSource;

export const getIniDataLoading = (store: RootState) => store.initData.loading;
