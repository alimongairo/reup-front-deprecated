import { RootState } from 'store';

export const getOrderHistoryIsLoading = (state: RootState) =>
  state.orderHistory.loading;

export const getOrderHistoryDataSource = (state: RootState) =>
  state.orderHistory.dataSource;

export const getOrderDetailIsLoading = (state: RootState) =>
  state.orderHistory.orderDetailLoading;
export const getOrderDetailDataSource = (state: RootState) =>
  state.orderHistory.orderDetail;
