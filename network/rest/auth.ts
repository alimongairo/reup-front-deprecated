import { makeRequest } from 'network/instance';

export const authRequest = (userData: { name: string }) => {
  return makeRequest({
    url: '/auth',
    method: 'POST',
    data: userData,
  });
};
