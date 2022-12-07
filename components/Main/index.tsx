import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';

import Header from '@/components/Main/Header';
import ProductsList from '@/components/Main/ProductList';
import ReupChoosen from '@/components/Main/ReupChoosen';
import SaleSector from '@/components/Main/SaleSector';
import Slider from '@/components/Main/Slider';
import Category from '@/components/Main/Category';
import Collections from '@/components/Main/Collections';
import Footer from '@/components/common/Footer';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getProductListDataSource } from '@/store/productList/selectors';
import { getProductListAction } from '@/store/productList/thunk';

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
      <Category />
      <h1>picked for you</h1>
      <ProductsList productList={newProducts} />
      <h1>REUP choos</h1>
      <div className={cx.pink}>
        <ReupChoosen />
        <h1>collections</h1>
        <Collections />
        <h1 style={{ textAlign: 'right' }}>i like</h1>
        <ProductsList productList={newProducts} />
      </div>
      <Marquee gradient={false} speed={60}>
        <span className={cx.marquee}>
          акции скидки акции скидки акции скидки акции скидки
        </span>
      </Marquee>
      <ProductsList productList={newProducts} />
      <SaleSector />
      <Footer />
    </div>
  );
};

export default MainLayout;
