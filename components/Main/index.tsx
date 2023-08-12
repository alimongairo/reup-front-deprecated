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

const MainPageComponents = () => {
  const dispatch = useAppDispatch();
  const storeProducts = useAppSelector(getProductListDataSource);

  const [newProducts, setNewProducts] = useState([]);
  const [likedProductsArr, setLikedProducts] = useState([]);

  useEffect(() => {
    if (window?.localStorage) {
      const likedProducts = JSON.parse(
        localStorage.getItem('likedProducts') as string,
      );

      const productList = JSON.parse(
        localStorage.getItem('productList') as string,
      );

      if (productList && productList.length > 0) {
        setNewProducts(productList);
      } else {
        dispatch(getProductListAction());
      }

      if (likedProducts) {
        setLikedProducts(likedProducts);
      } else {
        // TODO: то, что получаем из эндпоинта
        setLikedProducts([]);
        // dispatch
      }
    } else {
      dispatch(getProductListAction());
    }
  }, []);

  useEffect(() => {
    if (window?.localStorage && localStorage.getItem('productList')) {
      // в локальное мы записали в экшене
      setNewProducts(JSON.parse(localStorage.getItem('productList') as string));
    }
  }, [storeProducts]);

  useEffect(() => {
    if (newProducts.length === 0) return;
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
        <ProductsList productList={likedProductsArr} />
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
