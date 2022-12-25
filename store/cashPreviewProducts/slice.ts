import { createSlice } from '@reduxjs/toolkit';
import {
  CASH_PREVIEW_PRODUCT_ALIAS,
  ICashPreviewProductStore,
} from '@/store/cashPreviewProducts/type';
import { getProductItemAction } from '@/store/cashPreviewProducts/thunk';

const initialState: ICashPreviewProductStore = {
  loading: false,
  cash: {},
};

const cashPreviewProductsSlice = createSlice({
  name: CASH_PREVIEW_PRODUCT_ALIAS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductItemAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductItemAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.cash = { ...state.cash, [payload.id]: payload };
    });
    builder.addCase(getProductItemAction.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export default cashPreviewProductsSlice.reducer;
