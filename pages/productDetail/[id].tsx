import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductDetail from '@/components/ProductDetail';
import MainLayout from '@/layouts/MainLayout';

import { useAppDispatch } from '@/hooks/store';
import { getProductDetailAction } from '@/store/productDetail/thunk';
import { getProductListAction } from '@/store/productList/thunk';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      // dispatch(getProductDetailAction(id as string));
    }
    // dispatch(getProductListAction());
  }, [id]);

  return (
    <MainLayout>
      <ProductDetail />
    </MainLayout>
  );
};

export default ProductDetailPage;
