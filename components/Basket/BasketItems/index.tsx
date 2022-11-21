import {
  getBasketDataSource,
  getBasketErrLoading,
} from '@/store/basket/selectors';

import { useAppSelector } from '@/hooks/store';

import BasketProductCard from '@/components/Basket/BasketItems/BasketProductCard';
import BasketBuyButton from '@/components/Basket/BasketItems/BasketBuyButton';
import cx from './index.module.scss';

const BasketProductList = () => {
  const dataSource = useAppSelector(getBasketDataSource);
  const ErrorOrLoading = useAppSelector(getBasketErrLoading);

  const getTotalPrice = (products: typeof dataSource) => {
    return products.reduce((acc, carVal) => {
      return acc + carVal.amount * 100;
    }, 0);
  };

  return ErrorOrLoading.error ? (
    <div>{ErrorOrLoading.error.message}</div>
  ) : (
    <>
      <div className={cx.basketProductList}>
        {dataSource.map((product) => {
          return (
            <BasketProductCard
              productId={product.productId}
              amount={product.amount}
              key={product.productId}
            />
          );
        })}
      </div>
      <BasketBuyButton total={getTotalPrice(dataSource)} />
    </>
  );
};

export default BasketProductList;
