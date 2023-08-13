import { makeRequest } from '@/network/instance';

interface IData {
    product_id: number,
    customer_id: number,
}

export const likeRequest = (data: IData) => {
return  makeRequest({
    url: '/like/add',
    method: 'POST',
    data: data,
  })};
