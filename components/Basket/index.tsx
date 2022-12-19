import { useEffect } from 'react';

import Header from '@/components/Main/Header';
import Footer from '@/components/Main/Footer';
import Basket from '@/components/Basket/BasketItems';
import Recommendations from '@/components/Basket/Recommendations';

import { getProductListAction } from '@/store/productList/thunk';
import { getBasketAction } from '@/store/basket/thunk';
import { useAppDispatch } from '@/hooks/store';

import cx from '@/components/Main/index.module.scss';

const BasketLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductListAction());
    dispatch(getBasketAction());
  }, []);

  return (
    //TODO: replace with MainLayout
    <div className={cx.main}>
      <Header />
      <Basket />
      <Recommendations />
      <Footer />
    </div>
  );
};

export default BasketLayout;
