import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import productListReducer from '@/store/productList/slice';
import basketReducer from '@/store/basket/slice';
import userReducer from '@/store/user/slice';
import productDetailReducer from '@/store/productDetail/slice';

export const makeStore = () =>
  configureStore({
    reducer: {
      productList: productListReducer,
      basket: basketReducer,
      productDetail: productDetailReducer,
      user: userReducer,
    },
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore, { debug: true }); // TODO add env config vars
