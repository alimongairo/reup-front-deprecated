import { RootState } from 'store';

export const getBasketDataSource = (state: RootState) =>
  state.basket.dataSource;

export const getBasketErrLoading = (state: RootState) => {
  return {
    loading: state.basket.loading,
    error: state.basket.error,
  };
};
