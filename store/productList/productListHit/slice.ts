import {createSlice} from "@reduxjs/toolkit";
import {PRODUCT_LIST_ALIAS, TProductListStoreHit} from "@/store/productList/productListHit/type";
import {getProductListAction} from "@/store/productList/productListHit/thunk";

const initialState:TProductListStoreHit = {
    loading: false,
    error: null,
    dataSourceHit: []
}

const productListSlice = createSlice(
    {
        name: PRODUCT_LIST_ALIAS,
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getProductListAction.pending, (state)=>{
                state.loading = true
            });
            builder.addCase(getProductListAction.fulfilled, (state, {payload})=>{
                state.dataSourceHit = payload || []
                state.loading = false
            })
            builder.addCase(getProductListAction.rejected, (state, {payload})=>{
                state.dataSourceHit = []
                state.loading = false
            })
        }
    }
)

export const {}=productListSlice.actions;
export default productListSlice.reducer