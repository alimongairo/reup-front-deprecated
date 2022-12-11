import { RootState } from 'store';

export const getProductDetailDataSource = (store: RootState) =>
  store.productDetail.dataSource;

export const getProductDetailLoading = (store: RootState) =>
  store.productDetail.loading;
