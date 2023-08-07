import { createSlice } from '@reduxjs/toolkit';
import {
  PRODUCT_LIST_ALIAS,
  TProductListStore,
} from '@/store/productList/type';
import { getProductListAction } from '@/store/productList/thunk';

const initialState: TProductListStore = {
  loading: false,
  error: null,
  dataSource: [],
};

const productListSlice = createSlice({
  name: PRODUCT_LIST_ALIAS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductListAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductListAction.fulfilled, (state, { payload }) => {
      state.dataSource = (payload as any) || [];
      state.loading = false;
    });
    builder.addCase(getProductListAction.rejected, (state, { payload }) => {
      state.dataSource = [];
      state.loading = false;
    });
  },
});

export const {} = productListSlice.actions;
export default productListSlice.reducer;
