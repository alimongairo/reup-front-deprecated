import { createAsyncThunk } from '@reduxjs/toolkit';
import { LIKED_LIST_ALIAS, TLikedItem } from '@/store/likedList/type';
import { notification } from 'antd';
import { randomInteger } from '@/helpers/utils';

const mockData: TLikedItem[] = [];

// TODO remove
import product1 from '@/static/img/product1.png';

const imgs = [product1];

for (let i = 0; i < 10; i++) {
  mockData.push(
    {
    title: 'Свитшот',
    id: i,
    description: 'Тёплая одежда',
    price: randomInteger(499, 10000),
    imgSource: imgs[randomInteger(0, imgs.length - 1)],
    like: i % 3 === 0,
  }
  );
}

export const getLikedListAction = createAsyncThunk(
  `${LIKED_LIST_ALIAS}/fetch`,
  async () => {
    try {
      // const data = await getLikedListRequest();

      return mockData;
    } catch (error) {
      notification.error({ message: 'error' });
    }
  },
);
