import { RootState } from 'store';

export const getOrderHistoryIsLoading = (state: RootState) =>
  state.orderHistory.loading;

export const getOrderHistoryDataSource = (state: RootState) =>
  state.orderHistory.dataSource;
