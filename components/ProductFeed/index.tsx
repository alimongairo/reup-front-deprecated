import ProductCard from '@/components/common/ProductCard';

import img from '@/static/img/product1.png';

import cx from './index.module.scss';

const mockProduct = {
  vendor_id: 1,
  name: 'Блузка женская “Лэйди”',
  like: false,
  main_image: img,
  brand: 'Befree',
  price: 7500,
};

const ProductFeed = () => {
  return (
    <div className={cx.wrapper}>
      {new Array(30).fill(0).map((_, index) => (
        <ProductCard key={index} {...mockProduct} />
      ))}
    </div>
  );
};

export default ProductFeed;
