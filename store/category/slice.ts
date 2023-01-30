import { createSlice } from "@reduxjs/toolkit";
import { CATEGORY_ALIAS } from "./type";
import { TCategory } from "./type";
import { getCategoryAction } from "./thunk";

const initialState: TCategory = {
    loading: false,
    error: null,
    dataSource: [],
  };
  
  const categorySlice = createSlice({
    name: CATEGORY_ALIAS,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getCategoryAction.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getCategoryAction.fulfilled, (state, { payload }) => {
        state.dataSource = payload || [];
        state.loading = false;
      });
      builder.addCase(getCategoryAction.rejected, (state, { payload }) => {
        state.dataSource = [];
        state.loading = false;
      });
    },
  });
  
  export const {} = categorySlice.actions;
  export default categorySlice.reducer;