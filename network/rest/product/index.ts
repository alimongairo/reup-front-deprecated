import { makeRequest } from '@/network/instance';

export const getProductsRequest = () =>
  makeRequest({
    url: '/product',
  });

  
export const getLikedProductsRequest = () =>
makeRequest({
  url: '/like',
  data: {customer_id: 1}
});
