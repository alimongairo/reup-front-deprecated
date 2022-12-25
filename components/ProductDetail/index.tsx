import { Skeleton } from 'antd';

import ProductDetailContent from '@/components/ProductDetail/Content';
import ProductsList from '@/components/Main/ProductList';
import Heading from '@/components/common/Heading';

import { useAppSelector } from '@/hooks/store';
import { getProductDetailLoading } from '@/store/productDetail/selectors';
import { getProductListDataSource } from '@/store/productList/selectors';

import cx from './index.module.scss';

const ProductDetail = () => {
  const productList = useAppSelector(getProductListDataSource);
  const loading = useAppSelector(getProductDetailLoading);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div className={cx.wrapper}>
      <ProductDetailContent />
      <Heading>вы недавно смотрели</Heading>
      <ProductsList productList={productList} />
      <Heading>возможно вам понравится</Heading>
      <ProductsList productList={productList} />
    </div>
  );
};

export default ProductDetail;
