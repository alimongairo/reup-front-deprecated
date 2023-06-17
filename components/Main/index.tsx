import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import classNames from 'classnames';

import ProductsList from '@/components/Main/ProductList';
import SaleSector from '@/components/Main/SaleSector';
import Slider from '@/components/Main/Slider';
import Category from '@/components/Main/Category';
import Collections from '@/components/Main/Collections';
import Heading from '@/components/common/Heading';
import ReupChoosen from '@/components/Main/ReupChoosen';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getProductListDataSource } from '@/store/productList/selectors';
import { getProductListAction } from '@/store/productList/thunk';

import cx from './index.module.scss';

const MainPageComponents = () => {
  const dispatch = useAppDispatch();
  const newProducts = useAppSelector(getProductListDataSource);

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <div className={cx.main}>
      <Slider />
      <Category />

      <Heading>подобрали для тебя</Heading>
      <ProductsList productList={newProducts} />

      <Heading style={{ marginBottom: '-40px' }}>выбор REUP</Heading>
      <ReupChoosen />

      <div className={cx.greenText}>
        <Heading>коллекции</Heading>
      </div>
      <Collections />

      <div className={classNames(cx.text, cx.left)}>
        <Heading>мне нравится</Heading>
        <ProductsList productList={newProducts} />
      </div>
      <Marquee gradient={false} speed={60}>
        <span className={cx.marquee}>
          акции скидки акции скидки акции скидки акции скидки
        </span>
      </Marquee>
      <ProductsList productList={newProducts} />
      <SaleSector />
    </div>
  );
};

export default MainPageComponents;
