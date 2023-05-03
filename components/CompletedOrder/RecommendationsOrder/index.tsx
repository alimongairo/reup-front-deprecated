import ProductsList from '@/components/Main/ProductList';
import Heading from '@/components/common/Heading';

import { getProductListDataSource } from '@/store/productList/selectors';
import { useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';

const RecommendationsOrder = () => {
  const products = useAppSelector(getProductListDataSource);

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

export default RecommendationsOrder;
