import { notification } from 'antd';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  ORDER_HISTORY_ALICE,
  TOrderHistoryItem,
} from '@/store/orderHistory/type';

import smallProductImg from '@/static/img/smallProduct_remove.png';

const mockOrderHistory: TOrderHistoryItem[] = [
  {
    id: 0,
    num: '№200493',
    price: 7800,
    oldPrice: 12900,
    orderDate: '9.01.2022',
    paymentMethod: 'СБП Сбербанк',
    wayToGet: {
      recipient: 'Ившина Дарья',
      pointOfIssue: 'Н.Новгород, ул.Ошарская 8, кв 9',
    },
    status: 'в пути',
    deliveryDate: '12 января',
    isPaid: true,
    previewImages: [
      smallProductImg,
      smallProductImg,
      smallProductImg,
      smallProductImg,
      smallProductImg,
    ],
  },
  {
    id: 2,
    num: '№200493',
    price: 7800,
    oldPrice: 12900,
    orderDate: '9.01.2022',
    paymentMethod: 'СБП Сбербанк',
    wayToGet: {
      recipient: 'Ившина Дарья',
      pointOfIssue: 'Н.Новгород, ул.Ошарская 8, кв 9',
    },
    status: 'в пути',
    deliveryDate: '12 января',
    isPaid: true,
    previewImages: [
      smallProductImg,
      smallProductImg,
      smallProductImg,
      smallProductImg,
      smallProductImg,
    ],
  },
];

export const getOrderHistoryAction = createAsyncThunk<
  TOrderHistoryItem[],
  boolean,
  {
    rejectValue: Error;
  }
>(`${ORDER_HISTORY_ALICE}/get`, async (isActive, { rejectWithValue }) => {
  try {
    return mockOrderHistory;
  } catch (error) {
    notification.error({ message: 'error!' });
    return rejectWithValue(error as Error);
  }
});
