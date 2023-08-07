import Axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';

// TODO credentials
const instance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_DB_PATH, // TODO replace at env
  withCredentials: false,
});

export const makeRequest = ({
  url,
  method = 'get',
  headers = {},
  params = {},
  responseType = 'json',
  data = {},
}: AxiosRequestConfig): AxiosPromise<any> => {
  return instance
    .request({
      url,
      method,
      headers,
      params,
      responseType,
      data,
    })
    .then((response) => response)
    .catch(async ({ response }: AxiosError) => {
      if (response) {
        const { message, status } = JSON.parse(
          await (response.data as any).text(),
        );
        throw { message, status, data };
      }
      throw {
        message: 'Соединение с сервером отсутствует',
        status: 502,
      };
    });
};

export default instance;
