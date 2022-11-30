import { notification } from 'antd';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_ALIAS, TUserItem, TUserStore } from '@/store/user/type';
import { mockFetch } from '@/helpers/mockFetch';

const mockData: TUserItem = {
  uid: 1,
  email: 'ivshina3@gmail.com',
  phone: 9123642790,
  surname: 'Ившина',
  name: 'Дарья',
  patronymic: 'Ивановна',
  address: {
    region: 'Нижегородская обл, Нижний Новгород г',
    street: 'Ванеева ул. дом 19',
    postalCode: 603105,
  },
};

export const getUserAction = createAsyncThunk<
  TUserItem,
  undefined,
  {
    rejectValue: TUserStore['error'];
  }
>(`${USER_ALIAS}/fetch`, async (_, { rejectWithValue }) => {
  try {
    const data = await mockFetch(mockData);
    return data;
  } catch (error) {
    notification.error({ message: String(error) });
    return rejectWithValue(error as Error);
  }
});
