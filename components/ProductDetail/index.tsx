import { Skeleton } from 'antd';

import ProductDetailContent from '@/components/ProductDetail/Content';
import Footer from '@/components/common/Footer';
import ProductsList from '@/components/Main/ProductList';

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
      <h1>вы недавно смотрели</h1>
      <ProductsList productList={productList} />
      <h1>возможно вам понравится</h1>
      <ProductsList productList={productList} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
