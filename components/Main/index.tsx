import { useEffect } from 'react';

import Footer from '@/components/Main/Footer';
import Header from '@/components/Main/Header';
import ProductsList from '@/components/Main/ProductList';
import ReupChoosen from '@/components/Main/ReupChoosen';
import SaleSector from '@/components/Main/SaleSector';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getProductListDataSource } from '@/store/productList/selectors';
import { getProductListAction } from '@/store/productList/thunk';

import Slider from '@/components/Main/Slider';
import cx from './index.module.scss';

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const newProducts = useAppSelector(getProductListDataSource);

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <div className={cx.main}>
      <Header />
      <Slider />
      <ProductsList title="Новинки" productList={newProducts} />
      <SaleSector />
      <ProductsList productList={newProducts} />
      <ReupChoosen />
      <ProductsList title="Товары для тебя" productList={newProducts} />
      <ProductsList productList={newProducts} />
      <Footer />
    </div>
  );
};

export default MainLayout;
