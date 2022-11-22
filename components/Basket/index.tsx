import { useEffect } from 'react';

import { getBasketAction } from '@/store/basket/thunk';

import { useAppDispatch } from '@/hooks/store';

import BasketPageHeader from '@/components/Basket/Header';
import BasketProductList from '@/components/Basket/BasketItems';

const BasketLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBasketAction());
  }, []);

  return (
    <div className="w100">
      <BasketPageHeader />
      <BasketProductList />
    </div>
  );
};

export default BasketLayout;
