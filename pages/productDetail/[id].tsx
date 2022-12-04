import { useRouter } from 'next/router';

import ProductDetail from '@/components/ProductDetail';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <ProductDetail />;
};

export default ProductDetailPage;
