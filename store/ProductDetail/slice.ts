import {createSlice} from "@reduxjs/toolkit";
import {PRODUCT_DETAILS_ALIAS, TProductDetailsStore} from "@/store/ProductDetail/type";
import {getProductDetailsAction} from "@/store/ProductDetail/thunk";
import {mockData} from '@/store/ProductDetail/thunk'

const initialState:TProductDetailsStore = {
    loading: false,
    error: null,
    dataSource: mockData
}

const productDetailsSlice = createSlice(
    {
        name: PRODUCT_DETAILS_ALIAS,
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getProductDetailsAction.pending, (state)=>{
                state.loading = true
            });
            builder.addCase(getProductDetailsAction.fulfilled, (state, {payload})=>{
                state.dataSource = mockData
                state.loading = false
            })
            builder.addCase(getProductDetailsAction.rejected, (state, {payload})=>{
                state.dataSource = mockData
                state.loading = false
            })
        }
    }
)

export const {}=productDetailsSlice.actions;
export default productDetailsSlice.reducer