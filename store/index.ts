import { createWrapper } from 'next-redux-wrapper';
import { compose, configureStore } from '@reduxjs/toolkit';

import productListReducer from '@/store/productList/slice';
import basketReducer from '@/store/basket/slice';
import userReducer from '@/store/user/slice';
import productDetailReducer from '@/store/productDetail/slice';
import productCashReducer from '@/store/cashPreviewProducts/slice';
import brandSettingReducer from '@/store/brandSetting/slice';

// const composeEnhancers =
//   (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export const makeStore = () =>
  configureStore({
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      // composeEnhancers,
    ],
    reducer: {
      productList: productListReducer,
      basket: basketReducer,
      productDetail: productDetailReducer,
      user: userReducer,
      productsCash: productCashReducer,
      brandSetting: brandSettingReducer,
    },
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore, { debug: true }); // TODO add env config vars
