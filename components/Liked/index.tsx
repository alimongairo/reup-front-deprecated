import { EPagesRoutes } from '@/constants/router';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import Close from '@/static/icons/popupClose.svg';
import { getLikedListDataSource } from '@/store/likedList/selectors';
import { getLikedListAction } from '@/store/likedList/thunk';
import { getProductDetailLoading } from '@/store/productDetail/selectors';
import { getProductListDataSource } from '@/store/productList/selectors';
import { getProductListAction } from '@/store/productList/thunk';
import { Skeleton } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Heading from '../common/Heading';
import ProductsList from '../Main/ProductList';
import cx from './index.module.scss';
import LikedList from './LikedList';
import Search from './Search';

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
      <div className={cx.header}>
        <div className={cx.HeadAndNumber}>
          <Heading size="big">
            {likedList.length === 0 ? (
              <span>избранное</span>
            ) : (
              <span>избранное {likedList.length}шт</span>
            )}
          </Heading>
        </div>
        <Link href={`${EPagesRoutes.Main}`}>
          <Image src={Close} alt="close" />
        </Link>
      </div>

      <div className={cx.search}>
        {likedList.length === 0 ? '' : <Search />}
      </div>

      <LikedList likedList={likedList} />

      <div className={cx.recommendation}>
        <Heading size="big">вам может понравиться</Heading>
      </div>

      <ProductsList productList={productList} />
    </div>
  );
};

export default LikedLayout;
