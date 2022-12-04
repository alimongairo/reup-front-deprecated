import { createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCT_DETAIL_ALICE, TProductCard } from '@/store/productDetail/type';
import { notification } from 'antd';
import { getProductDetailRequest } from '@/network/rest/productDetail';
import { mockFetch } from '@/helpers/mockFetch';

import product2 from '@/static/img/product2.png';

const mockProduct: TProductCard = {
  id: '1',
  title: 'название товара',
  brandTitle: 'название бренда',
  sizes: [42, 44, 46, 48],
  description: 'Текстовый блок с описанием товара',
  params: 'Текстовый блок с характеристиками товара',
  price: 1990,
  oldPrice: 3990,
  isLiked: false,
  images: [product2, product2, product2],
};

export const getProductDetailAction = createAsyncThunk<
  TProductCard,
  string,
  {
    rejectValue: Error;
  }
>(`${PRODUCT_DETAIL_ALICE}/get`, async (id: string, { rejectWithValue }) => {
  try {
    // const data = getProductDetailRequest(id) // когда будет готов бек
    return mockProduct;
  } catch (error) {
    notification.error({ message: 'error!' });
    return rejectWithValue(error as Error);
  }
});
