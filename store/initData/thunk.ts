import { createAsyncThunk } from '@reduxjs/toolkit';
import { authRequest } from '@/network/rest/auth';
import { mockFetch } from '@/helpers/mockFetch';
import { INIT_DATA_ALIAS, IUser } from './type';

export const authAction = createAsyncThunk(
  `${INIT_DATA_ALIAS}/auth`,
  async (userData: IUser, { rejectWithValue }) => {
    try {
      // const response = await authRequest(userData);
      return mockFetch<IUser>(userData, 1500);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error as Error);
    }
  },
);

export const registrationAction = createAsyncThunk(
  `${INIT_DATA_ALIAS}/registration`,
  async (userData: IUser, { rejectWithValue }) => {
    try {
      // const response = await authRequest(userData);
      return mockFetch<IUser>(userData, 1500);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error as Error);
    }
  },
);
