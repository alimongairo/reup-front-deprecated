import BasketProductCard from '@/components/Basket/BasketItems/BasketProductCard';
import cx from './index.module.scss';

import { useAppSelector } from '@/hooks/store';
import { getBasketDataSource } from '@/store/basket/selectors';

const BasketProductList = () => {
  const dataSource = useAppSelector(getBasketDataSource);

  return (
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
  );
};

export default BasketProductList;
