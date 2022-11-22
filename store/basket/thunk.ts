import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASKET_ALIAS, TBasketItem, TBasketStore } from './type';
import { notification } from 'antd';

const mockData: TBasketItem[] = [];

for (let i = 1; i <= 5; i++) {
  mockData.push({
    productId: i,
    amount: 1 + (i % 2),
  });
}

export const getBasketAction = createAsyncThunk<
  TBasketItem[],
  undefined,
  {
    rejectValue: TBasketStore['error'];
  }
>(`${BASKET_ALIAS}/fetch`, async (_, { rejectWithValue }) => {
  try {
    if (Math.floor(Math.random() * 10) < 1) {
      throw new Error('fetch error');
    }
    return mockData;
  } catch (error) {
    notification.error({ message: String(error) });
    return rejectWithValue(error as Error);
  }
});
