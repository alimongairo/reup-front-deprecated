import { createAsyncThunk } from "@reduxjs/toolkit";
import { CATEGORY_ALIAS } from "@/store/category/type";
import { TProductItem } from "@/store/productList/type";
import { notification } from "antd";
import { randomInteger } from "@/helpers/utils";

const mockData: TProductItem [] = [];

// TODO remove
import product1 from '@/static/img/product1.png';

const imgs = [product1];

for (let i = 0; i < 4; i++) {
  mockData.push({
    title: 'Свитшот',
    id: i,
    description: 'Category_Name',
    price: randomInteger(499, 10000),
    imgSource: imgs[randomInteger(0, imgs.length - 1)],
    like: i % 3 === 0,
  });
}

export const getCategoryAction = createAsyncThunk(
  `${CATEGORY_ALIAS}/fetch`,
  async () => {
    try {
      // const data = await getCategoryRequest();

      return mockData;
    } catch (error) {
      notification.error({ message: 'error' });
    }
  },
);