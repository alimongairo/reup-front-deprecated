import { createAsyncThunk } from '@reduxjs/toolkit';
import { CASH_PREVIEW_PRODUCT_ALIAS } from '@/store/cashPreviewProducts/type';
import product2 from '@/static/img/product2.png';
import { TProductCard } from '@/store/productDetail/type';

const mockUpProduct = {
  id: '1',
  title: 'название товара',
  brandTitle: 'название бренда',
  sizes: [42, 44, 46, 48],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n',
  params: 'Текстовый блок с характеристиками товара',
  price: 1990,
  oldPrice: 3990,
  isLiked: false,
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
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
  ],
};

export const getProductItemAction = createAsyncThunk<
  TProductCard,
  string,
  {
    rejectValue: Error;
  }
>(
  `${CASH_PREVIEW_PRODUCT_ALIAS}/getItem`,
  async (id: string, { rejectWithValue }) => {
    try {
      return mockUpProduct;
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  },
);
