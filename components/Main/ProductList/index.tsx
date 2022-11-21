import { useCallback } from 'react';

import ProductCard from '@/components/common/ProductCard';

import { TProductItem } from '@/store/productList/type';

import cx from './index.module.scss';

interface IProps {
  productList: TProductItem[];
  title?: string;
}

const ProductsList = ({ productList, title }: IProps) => {
  const onLikeHandler = useCallback((id: number) => {
    console.log('like');
  }, []);

  const onAddToBasketHandler = useCallback((id: number) => {
    console.log('add to basket');
  }, []);

  return (
    <div className={cx.wrapper}>
      {title && <h1>{title}</h1>}
      <div className={cx.list}>
        {productList.map((product) => {
          return (
            <ProductCard
              onLike={onLikeHandler}
              onAddToBasket={onAddToBasketHandler}
              key={product.id}
              title={product.title}
              id={product.id}
              description={product.description}
              price={product.price}
              imgSource={product.imgSource}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
