import { createSlice } from '@reduxjs/toolkit';
import {
  ORDER_HISTORY_ALICE,
  TOrderHistoryStore,
} from '@/store/orderHistory/type';
import { getOrderHistoryAction } from '@/store/orderHistory/thunk';

const initialState: TOrderHistoryStore = {
  loading: true,
  dataSource: [],
};

const orderHistorySlice = createSlice({
  name: ORDER_HISTORY_ALICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderHistoryAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrderHistoryAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.dataSource = payload;
    });
    builder.addCase(getOrderHistoryAction.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default orderHistorySlice.reducer;
