import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INIT_DATA_ALIAS, IUser, TInitDataStore } from '@/store/initData/type';
import { authAction } from '@/store/initData/thunk';

const initialState: TInitDataStore = {
  dataSource: null,
  error: null,
  loading: true,
};

const initDataSlice = createSlice({
  name: INIT_DATA_ALIAS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authAction.fulfilled, (state, { payload }) => {
      state.dataSource = payload;
      state.loading = false;
    });
    builder.addCase(authAction.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export default initDataSlice.reducer;
