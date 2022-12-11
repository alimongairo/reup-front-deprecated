import { RootState } from 'store';
import { createSelector } from 'reselect';

export const getCashProductsData = (state: RootState) =>
  state.productsCash.cash;

export const getCashProductsLoading = (state: RootState) =>
  state.productsCash.loading;

export const getCashedIdsSet = createSelector(getCashProductsData, (cash) => {
  return new Set(Object.keys(cash));
});
