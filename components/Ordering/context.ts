import { createContext } from 'react';

export enum EPersonalDataType {
  PersonalData = 'personalData',
  Mailing = 'mailing',
}

export type TOrderData = Omit<IOrderContext, 'setOrderData'>;

export interface IOrderContext {
  lastName?: string;
  name?: string;
  personalDataType?: EPersonalDataType[];
  patronymic?: boolean;
  numberTel?: number;
  mail?: string;
  setOrderData?: (data: Partial<Omit<IOrderContext, 'setOrderData'>>) => void;
}

export const OrderContext = createContext<IOrderContext>({});
