import { makeRequest } from '@/network/instance';

export const getProductsRequest = () =>
  makeRequest({
    url: '/product',
  });
