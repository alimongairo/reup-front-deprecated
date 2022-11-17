import { useEffect } from 'react';

import { getBasketAction } from '@/store/basket/thunk';

import { useAppDispatch } from '@/hooks/store';

import BasketPageHeader from '@/components/Basket/Header';
import BasketProductList from '@/components/Basket/BasketItems';
import BasketBuyButton from '@/components/Basket/BasketItems/BasketBuyButton';

const BasketLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBasketAction());
  }, []);

  return (
    <div className="w100">
      <BasketPageHeader />
      <BasketProductList />
      <BasketBuyButton total={800} />
    </div>
  );
};

export default BasketLayout;
