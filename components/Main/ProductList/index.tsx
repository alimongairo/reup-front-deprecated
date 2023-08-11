import { useCallback } from 'react';

import ProductCard from '@/components/common/ProductCard';
import ScrollSlider from '@/components/common/ScrollSlider';

import { TProductItem } from '@/store/productList/type';

import cx from './index.module.scss';

interface IProps {
  productList: TProductItem[];
}

const ProductsList = ({ productList }: IProps) => {
  const onLikeHandler = useCallback((id: number) => {
    console.log('like');
  }, []);

  const onAddToBasketHandler = useCallback((id: number) => {
    console.log('add to basket');
  }, []);

  if (!productList.length) {
    return <div className={cx.container}>Пустo...</div>;
  }

  const cardList = productList.map((product) => {
    return (
      <ProductCard
        key={product.vendor_id}
        onLike={onLikeHandler}
        onAddToBasket={onAddToBasketHandler}
        name={product.name}
        vendor_id={product.vendor_id}
        brand={product.brand}
        price={product.price}
        main_image={product.main_image}
        like={product.like}
      />
    );
  });

  return <ScrollSlider cardList={cardList} />;
};

export default ProductsList;
