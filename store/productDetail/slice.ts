import { createSlice } from '@reduxjs/toolkit';
import {
  PRODUCT_DETAIL_ALICE,
  TProductDetailStore,
} from '@/store/productDetail/type';
import { getProductDetailAction } from '@/store/productDetail/thunk';

const initialState: TProductDetailStore = {
  loading: false,
  dataSource: null,
};

const productDetailSlice = createSlice({
  name: PRODUCT_DETAIL_ALICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetailAction.pending, (state) => {
      state.dataSource = null;
      state.loading = true;
    });
    builder.addCase(getProductDetailAction.fulfilled, (state, { payload }) => {
      state.dataSource = payload;
      state.loading = false;
    });
    builder.addCase(getProductDetailAction.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export default productDetailSlice.reducer;
