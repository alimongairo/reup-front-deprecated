import ProductCard from '@/components/common/ProductCard';
import FiltersForProducts from '@/components/common/FiltersForProducts';

import cx from './index.module.scss';

import img from '@/static/img/product1.png';

const mockData = {
  id: 1,
  title: 'title 1',
  like: false,
  imgSource: img,
  brand: 'brand',
  price: 123,
};

const BrandProductList = () => {
  return (
    <div className={cx.container}>
      <FiltersForProducts />
      <div className={cx.wrapper}>
        {new Array(30).fill(0).map((_, index) => (
          <ProductCard {...mockData} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BrandProductList;
