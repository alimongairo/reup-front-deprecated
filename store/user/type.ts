export const USER_ALIAS = 'userAlias' as const;

export type TUserStore = {
  loading: boolean;
  error: Error | null;
  dataSource: TUserItem | null;
};

export type TUserItem = {
  uid: number;
  email: string;
  phone: number;
  surname: string;
  name: string;
  patronymic: string;
  address: TUserAddress;
};

export type TUserAddress = {
  region: string;
  street: string;
  postalCode: number;
};

//TODO: replace to order store if it will be

export enum EDeliveryType {
  Post = 'post',
  InPoint = 'inPoint',
}
export enum EPaymentType {
  Cash = 'cash',
  CreditCard = 'creditCard',
}
