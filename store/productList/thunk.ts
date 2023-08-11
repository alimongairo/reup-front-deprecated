import { createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCT_LIST_ALIAS, TProductItem } from '@/store/productList/type';
import { notification } from 'antd';
import { randomInteger } from '@/helpers/utils';

const mockData: TProductItem[] = [];

// TODO remove
import product1 from '@/static/img/product1.png';
import { getProductsRequest } from '@/network/rest/product';
import { likeRequest } from "@/network/rest/like";

const imgs = [product1];

for (let i = 0; i < 12; i++) {
  mockData.push({
    name: 'Блузка женская “Лэйди”',
    vendor_id: i,
    brand: 'Befree',
    price: randomInteger(499, 10000),
    main_image: imgs[randomInteger(0, imgs.length - 1)],
    like: i % 3 === 0,
  });
}

export const getProductListAction = createAsyncThunk(
  `${PRODUCT_LIST_ALIAS}/fetch`,
  async () => {
    try {
      const response = await getProductsRequest();
      // const r = useLocalStorage('productList', JSON.stringify(response.data))
      // localStorage.setItem("productList",JSON.stringify(response.data))
      return response.data;
    } catch (error) {
      notification.error({ message: 'error' });
    }
  },
);

export const likeProductAction = createAsyncThunk(
  PRODUCT_LIST_ALIAS,
  // TODO: add ts
  async (data: any) => {
    try {
      const response = await likeRequest(data);
      localStorage.setItem("products",JSON.stringify(response.data))
      return response.data;
    } catch (error) {
      notification.error({ message: 'error' });
    }
  },
);
