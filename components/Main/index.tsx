import { useEffect } from 'react';

import Header from '@/components/Main/Header';
import ProductsList from '@/components/Main/ProductList';
import SaleSector from '@/components/Main/SaleSector';
import ReupChoosen from '@/components/Main/ReupChoosen';
import Footer from '@/components/Main/Footer';
import FullScreenBanner from '@/components/Main/FullScreenBanner';

import { getProductListAction } from '@/store/productList/thunk';
import { getProductListDataSource } from '@/store/productList/selectors';
import { useAppDispatch, useAppSelector } from '@/hooks/store';

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
      <FullScreenBanner />
      <h1>picked for you</h1>
      <ProductsList productList={newProducts} />
      <SaleSector />
      <h1>мне нравится</h1>
      <ProductsList productList={newProducts} />
      <ReupChoosen />
      <ProductsList productList={newProducts} />
      <Footer />
    </div>
  );
};

export default MainLayout;
