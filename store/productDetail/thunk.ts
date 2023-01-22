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
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n',
  params: 'Текстовый блок с характеристиками товара',
  price: 1990,
  oldPrice: 3990,
  isLiked: true,
  images: [product2, product2, product2],
  brandCode: '03289',
  reviews: [
    {
      id: 1,
      name: 'Имя',
      date: '3.12.2022',
      grade: 3,
      color: 'цвет',
      size: 'размер',
      avatar: product2,
      reviewsImg: [
        { id: 1, img: product2, reviewId: 1 },
        { id: 2, img: product2, reviewId: 1 },
      ],
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      id: 2,
      name: 'Имя',
      date: '3.12.2022',
      grade: 3,
      color: 'цвет',
      size: 'размер',
      reviewsImg: [{ id: 3, img: product2, reviewId: 2 }],
      avatar: product2,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      id: 3,
      name: 'Имя',
      date: '3.12.2022',
      grade: 3,
      color: 'цвет',
      size: 'размер',
      reviewsImg: [],
      avatar: product2,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      id: 4,
      name: 'Имя',
      date: '3.12.2022',
      grade: 3,
      color: 'цвет',
      size: 'размер',
      reviewsImg: [
        { id: 4, img: product2, reviewId: 4 },
        { id: 5, img: product2, reviewId: 4 },
        { id: 6, img: product2, reviewId: 4 },
      ],
      avatar: product2,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
  ],
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
