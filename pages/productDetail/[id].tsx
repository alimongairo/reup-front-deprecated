import { useRouter } from 'next/router';
import ProductDetail from '@/components/ProductDetail';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/store';
import { getProductDetailAction } from '@/store/productDetail/thunk';
import { getProductListAction } from '@/store/productList/thunk';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductDetailAction(id as string));
    }
    dispatch(getProductListAction());
  }, [id]);

  return <ProductDetail />;
};

export default ProductDetailPage;
