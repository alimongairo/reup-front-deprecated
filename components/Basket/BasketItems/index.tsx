import EmptyBasket from '@/components/Basket/EmptyBasket';
import Heading from '@/components/common/Heading';
import BasketItem from '@/components/Basket/BasketItems/BasketItem';
import Checkbox from '@/components/common/Checkbox';
import Summary from '@/components/Basket/BasketItems/Summary';

import { getBasketDataSource } from '@/store/basket/selectors';
import { useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';

const Basket = () => {
  const basket = useAppSelector(getBasketDataSource);

  if (!basket?.length) {
    return <EmptyBasket />;
  }

  return (
    <div className={cx.wrapper}>
      <Heading>корзина</Heading>
      <div className={cx.contentWrapper}>
        <div className={cx.productList}>
          <div className={cx.header}>
            <Heading tag={'h2'}>10 товаров</Heading>
            <Checkbox
              label="выбрать все"
              labelPlacement="left"
              id={'checkAll'}
            />
          </div>
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </div>
        <Summary />
      </div>
    </div>
  );
};

export default Basket;
