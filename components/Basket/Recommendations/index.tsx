import { Skeleton } from 'antd';

import ProductsList from '@/components/Main/ProductList';

import { getBasketLoading } from '@/store/basket/selectors';
import { getProductListDataSource } from '@/store/productList/selectors';
import { useAppSelector } from '@/hooks/store';

const Recommendations = () => {
  const products = useAppSelector(getProductListDataSource);
  const loading = useAppSelector(getBasketLoading);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <>
      <h1>подобрали для тебя </h1>
      <ProductsList productList={products} />
      <h1>избранное</h1>
      <ProductsList productList={products} />
    </>
  );
};

export default Recommendations;
