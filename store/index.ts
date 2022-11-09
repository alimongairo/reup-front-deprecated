import {createWrapper} from "next-redux-wrapper";
import { configureStore} from "@reduxjs/toolkit";

export const makeStore = () =>
    configureStore({
        reducer: {

        },
    });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore, { debug: true }); // TODO add env config vars
