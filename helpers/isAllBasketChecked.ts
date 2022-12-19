import { TBasketItem } from '@/store/basket/type';

export const isAllBasketChecked = (basketItems: TBasketItem[]): boolean => {
  return basketItems.every((elem) => elem.checked);
};
