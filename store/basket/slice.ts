import { createSlice } from '@reduxjs/toolkit';
import { BASKET_ALIAS, TBasketStore } from './type';
import { getBasketAction } from '@/store/basket/thunk';

const initialState: TBasketStore = {
  loading: false,
  error: null,
  dataSource: [],
};

const basketSlice = createSlice({
  name: BASKET_ALIAS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBasketAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBasketAction.fulfilled, (state, { payload }) => {
      state.dataSource = payload || [];
      state.loading = false;
    });
    builder.addCase(getBasketAction.rejected, (state, { payload }) => {
      state.dataSource = [];
      state.loading = false;
      state.error = new Error('error');
    });
  },
});

export const {} = basketSlice.actions;
export default basketSlice.reducer;
