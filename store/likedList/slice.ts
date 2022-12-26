import { createSlice } from '@reduxjs/toolkit';
import {
    LIKED_LIST_ALIAS,
    TLikedListStore,
} from '@/store/likedList/type';
import { getLikedListAction } from '@/store/likedList/thunk';

const initialState: TLikedListStore = {
  loading: false,
  error: null,
  dataSource: [],
};

const likedListSlice = createSlice({
  name: LIKED_LIST_ALIAS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikedListAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLikedListAction.fulfilled, (state, { payload }) => {
      state.dataSource = payload || [];
      state.loading = false;
    });
    builder.addCase(getLikedListAction.rejected, (state, { payload }) => {
      state.dataSource = [];
      state.loading = false;
    });
  },
});

export const {} = likedListSlice.actions;
export default likedListSlice.reducer;
