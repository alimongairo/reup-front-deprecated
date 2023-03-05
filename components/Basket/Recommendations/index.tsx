import { Skeleton } from 'antd';

import ProductsList from '@/components/Main/ProductList';
import Heading from '@/components/common/Heading';

import { getBasketLoading } from '@/store/basket/selectors';
import { getProductListDataSource } from '@/store/productList/selectors';
import { useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';

const Recommendations = () => {
  const products = useAppSelector(getProductListDataSource);
  const loading = useAppSelector(getBasketLoading);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <>
      <div className={cx.heading}>
        <Heading>подобрали для тебя </Heading>
      </div>
      <ProductsList productList={products} />
      <div className={cx.heading}>
        <Heading>избранное</Heading>
      </div>
      <ProductsList productList={products} />
    </>
  );
};

export default Recommendations;
