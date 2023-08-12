import { useEffect, useState } from 'react';
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
import Item from 'antd/es/list/Item';

const MainPageComponents = () => {
  const dispatch = useAppDispatch();
  const storeProducts = useAppSelector(getProductListDataSource);

  const [newProducts, setNewProducts] = useState([]);

  // TODO: по этоу логике сначала записывается в стэйт старое локлаьное хранилище, а оптом уже проводятся манипуляции => переместить
  useEffect(() => {
    if (window?.localStorage) {
      const productList = JSON.parse(
        localStorage.getItem('productList') as string,
      );

      if (productList && productList.length > 0) {
        console.log('SET OLD');
        setNewProducts(productList);
        // console.log("SET NEW !!!!!!")
      } else {
        console.log('DISPATCH NEW !!!!!!');
        dispatch(getProductListAction());
      }
    } else {
      dispatch(getProductListAction());
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('productList')) {
      console.log('GET PRODUCTS NEW 2');
      /// setNewProducts(storeProducts as any)
    } else {
      setNewProducts(JSON.parse(localStorage.getItem('productList') as string));
    }
  }, [storeProducts]);

  useEffect(() => {
    if (newProducts.length === 0) return;
    // TODO: отрабатывает только после двойной перезагрузки
    if (window?.localStorage) {
      const likedProducts = JSON.parse(
        localStorage.getItem('likedProducts') as string,
      );

      if (!likedProducts || likedProducts.length < 1) return;

      const accNewProducts = newProducts;
      accNewProducts.map((item: any) => {
        if (
          likedProducts.find(
            (itemLiked: any) => itemLiked.product_id == item.product_id,
          )
        ) {
          item.like = true;
        }
      });

      localStorage.setItem('productList', JSON.stringify(accNewProducts));
    }
  }, [newProducts]);

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

      {/* TODO: здесь понравившиеся */}
      <div className={classNames(cx.text, cx.left)}>
        <Heading>мне нравится</Heading>
        {/* <ProductsList productList={newProducts} /> */}
      </div>
      <Marquee gradient={false} speed={60}>
        <span className={cx.marquee}>
          акции скидки акции скидки акции скидки акции скидки
        </span>
      </Marquee>

      {/* TODO: здесь скилдки */}
      {/* <ProductsList productList={newProducts} /> */}
      <SaleSector />
    </div>
  );
};

export default MainPageComponents;
