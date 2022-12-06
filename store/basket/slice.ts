import { createSlice } from '@reduxjs/toolkit';
import { BASKET_ALIAS, TBasketStore } from '@/store/basket/type';
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
      state.error = null;
    });
    builder.addCase(getBasketAction.fulfilled, (state, { payload }) => {
      state.dataSource = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getBasketAction.rejected, (state, { payload }) => {
      state.dataSource = [];
      state.loading = false;
      state.error = payload || Error('unknown error');
    });
  },
});

export const {} = basketSlice.actions;
export default basketSlice.reducer;
