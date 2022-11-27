import { makeRequest } from "@/network/instance";

export const getProductDetailsRequest = () => {
  return makeRequest({
    url: '/products', 
    method: 'GET'
  })
}