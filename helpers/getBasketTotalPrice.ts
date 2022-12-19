import { TBasketItem } from '@/store/basket/type';
import { TProductItem } from '@/store/productList/type';

export const getBasketTotalPrice = (
  basketItems: TBasketItem[],
  productItems: TProductItem[],
  withDiscount: boolean = true,
): number => {
  return withDiscount
    ? basketItems
        .filter((product) => product.checked)
        .reduce((acc, current) => {
          return acc + current.amount * productItems[current.productId].price;
        }, 0)
    : basketItems
        .filter((product) => product.checked)
        .reduce((acc, current) => {
          return (
            //TODO: replace with old price (without discound)
            acc +
            current.amount * (productItems[current.productId].price + 1000)
          );
        }, 0);
};
