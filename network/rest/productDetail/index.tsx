import { makeRequest } from '@/network/instance';

export const getProductDetailRequest = (id: string) =>
  makeRequest({
    url: '/api/product', // TODO поменять на правильный url
    method: 'GET',
    params: { id },
  });
