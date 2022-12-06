import { TBasketItem } from '@/store/basket/type';
import { TProductItem } from '@/store/productList/type';

export const getBasketTotalPrice = (
  basketItems: TBasketItem[],
  productItems: TProductItem[],
) => {
  return basketItems.reduce((acc, current) => {
    return acc + current.amount * productItems[current.productId].price;
  }, 0);
};
