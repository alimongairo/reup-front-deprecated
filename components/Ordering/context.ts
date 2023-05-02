import { createContext } from 'react';

export enum PersonalDataType {
  PersonalData = 'false',
  Mailing = 'false',
}

export type TOrderData = Omit<IOrderContext, 'setOrderData'>;

export interface IOrderContext {
  lastName?: string;
  name?: string;
  personalDataType?: PersonalDataType;
  patronymic?: boolean;
  numberTel?: number;
  mail?: string;
  setOrderData?: (data: Partial<Omit<IOrderContext, 'setOrderData'>>) => void;
}

export const OrderContext = createContext<IOrderContext>({});
