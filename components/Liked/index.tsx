import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getLikedListDataSource } from '@/store/likedList/selectors';
import { getLikedListAction } from '@/store/likedList/thunk';
import { getProductDetailLoading } from '@/store/productDetail/selectors';
import { getProductListDataSource } from '@/store/productList/selectors';
import { getProductListAction } from '@/store/productList/thunk';
import { Skeleton } from 'antd';
import React, { useEffect } from 'react';
import Heading from '../common/Heading';
import ProductsList from '../Main/ProductList';
import cx from './index.module.scss';
import LikedList from './LikedList';

const LikedLayout = () => {

  const productList = useAppSelector(getProductListDataSource);
  const likedList = useAppSelector(getLikedListDataSource);
  const loading = useAppSelector(getProductDetailLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLikedListAction());
    dispatch(getProductListAction());
  }, []);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div className={cx.wrapper}>
      <Heading>Избранное</Heading>
      <LikedList likedList={likedList} />
      <Heading>возможно вам понравится</Heading>
      <ProductsList productList={productList} /> 
    </div>  
  )
}

export default LikedLayout
