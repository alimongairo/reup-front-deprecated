import { Skeleton } from 'antd';

import ProductDetailContent from '@/components/ProductDetail/Content';

import { useAppSelector } from '@/hooks/store';
import {
  getProductDetailDataSource,
  getProductDetailLoading,
} from '@/store/productDetail/selectors';
import ProductsList from '@/components/Main/ProductList';
import { getProductListDataSource } from '@/store/productList/selectors';

const ProductDetail = () => {
  const productList = useAppSelector(getProductListDataSource);
  const loading = useAppSelector(getProductDetailLoading);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div>
      <ProductDetailContent />
      <h1>возможно вам понравится</h1>
      <ProductsList productList={productList} />
    </div>
  );
};

export default ProductDetail;
