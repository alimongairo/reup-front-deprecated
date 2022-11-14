import { RootState } from 'store';

export const getBasketDataSource = (state: RootState) =>
  state.basket.dataSource;
