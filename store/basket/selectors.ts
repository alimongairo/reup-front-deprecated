import { RootState } from 'store';

export const getBasketDataSource = (state: RootState) =>
  state.basket.dataSource;

export const getBasketLoading = (state: RootState) => state.basket.loading;
