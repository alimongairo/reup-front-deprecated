import { useEffect } from 'react';

import Header from '@/components/Main/Header';
import ProductsList from '@/components/Main/ProductList';
import ReupChoosen from '@/components/Main/ReupChoosen';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getProductListDataSource } from '@/store/productList/selectors';
import { getProductListAction } from '@/store/productList/thunk';

import Collections from './Collections';
import Footer from './Footer';
import cx from './index.module.scss';
import SaleSector from './SaleSector';
import Slider from './Slider';
import Category from '@/components/Main/Category';
// import Marquee from 'react-fast-marquee';

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
      {/* <Marquee gradient={false} speed={60}>
        <span className={cx.marquee}>
          акции скидки акции скидки акции скидки акции скидки
        </span> */}
      {/* </Marquee> */}
      <ProductsList productList={newProducts} />
      <SaleSector />
      <Footer />
    </div>
  );
};

export default MainLayout;
