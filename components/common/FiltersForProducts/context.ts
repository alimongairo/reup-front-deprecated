import { createContext } from 'react';

export enum ESizeType {
  Ru = 'ru',
  Int = 'int',
}

export enum ESize {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

export enum ECompound {
  Cotton = 'cotton',
  Synthetics = 'synthetics',
}

export enum EPattern {
  Linen = 'linen',
  Maple = 'maple',
  Bouillon = 'bouillon',
  Medallion = 'medallion',
}

export enum ESeason {
  Spring = 'spring',
  Summer = 'summer',
  Autumn = 'autumn',
  Winter = 'winter',
}

export enum EColor {
  Black = 'black',
  White = 'white',
  Blue = 'blue',
  Green = 'green',
}

export type TFilterData = Omit<IFilterContext, 'setFilterData'>;

export interface IFilterContext {
  priceStart?: string;
  priceEnd?: string;
  sizeType?: ESizeType;
  sizes?: ESize[];
  compounds?: ECompound[];
  patterns?: EPattern[];
  seasons?: ESeason[];
  colors?: EColor[];
  styles?: string[];
  search?: string;
  setFilterData?: (
    data: Partial<Omit<IFilterContext, 'setFilterData'>>,
  ) => void;
}

export const FilterContext = createContext<IFilterContext>({});
