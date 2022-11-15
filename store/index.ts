import {createWrapper} from "next-redux-wrapper";
import { configureStore} from "@reduxjs/toolkit";

import productListReducer from '@/store/productList/productListNew/slice'

export const makeStore = () =>
    configureStore({
        reducer: {
            productList: productListReducer
        },
    });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore, { debug: true }); // TODO add env config vars
