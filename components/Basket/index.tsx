import BasketPageHeader from '@/components/Basket/Header';
import BasketProductList from '@/components/Basket/BasketItems';
import BasketBuyButton from '@/components/Basket/BasketItems/BasketBuyButton';
import { useAppDispatch } from '@/hooks/store';
import { useEffect } from 'react';
import { getBasketAction } from '@/store/basket/thunk';

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
