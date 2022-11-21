import { createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCT_LIST_ALIAS, TProductItem } from '@/store/productList/type';
import { notification } from 'antd';
import { randomInteger } from '@/helpers/utils';

const mockData: TProductItem[] = [];

// TODO remove
import product1 from '@/static/img/product1.png';
import product2 from '@/static/img/product2.png';
import product3 from '@/static/img/product3.png';
import product4 from '@/static/img/product4.png';

const imgs = [product1, product2, product3, product4];

for (let i = 0; i < 4; i++) {
  mockData.push({
    title: 'Свитшот',
    id: i,
    description: 'Тёплая одежда',
    price: randomInteger(499, 10000),
    imgSource: imgs[randomInteger(0, imgs.length - 1)],
  });
}

export const getProductListAction = createAsyncThunk(
  `${PRODUCT_LIST_ALIAS}/fetch`,
  async () => {
    try {
      // const data = await getProductListRequest();

      return mockData;
    } catch (error) {
      notification.error({ message: 'error' });
    }
  },
);
