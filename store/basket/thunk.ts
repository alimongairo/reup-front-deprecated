import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASKET_ALIAS, TBasketItem } from './type';
import { notification } from 'antd';

const mockData: TBasketItem[] = [];

for (let i = 1; i <= 5; i++) {
  mockData.push({
    productId: i,
    amount: 1 + (i % 2),
  });
}

export const getBasketAction = createAsyncThunk(
  `${BASKET_ALIAS}/fetch`,
  async () => {
    try {
      return mockData;
    } catch (error) {
      notification.error({ message: 'error' });
    }
  },
);
