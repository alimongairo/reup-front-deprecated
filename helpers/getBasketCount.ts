import { TBasketItem } from '@/store/basket/type';

export const getBasketCount = (
  basketItems: TBasketItem[],
  onlyChecked = true,
) => {
  return onlyChecked
    ? basketItems
        .filter((product) => product.checked)
        .reduce((acc, current) => {
          return acc + current.amount;
        }, 0)
    : basketItems.reduce((acc, current) => {
        return acc + current.amount;
      }, 0);
};
