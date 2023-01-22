import { createSlice } from '@reduxjs/toolkit';
import { USER_ALIAS, TUserStore } from '@/store/user/type';
import { getUserAction } from '@/store/user/thunk';

const initialState: TUserStore = {
  loading: false,
  error: null,
  dataSource: null,
};

const userSlice = createSlice({
  name: USER_ALIAS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserAction.fulfilled, (state, { payload }) => {
      state.dataSource = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getUserAction.rejected, (state, { payload }) => {
      state.dataSource = null;
      state.loading = false;
      state.error = payload || Error('unknown error');
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
