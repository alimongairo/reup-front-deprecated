import ProductCard from '@/components/common/ProductCard';
import React, { useCallback } from 'react';
import { TProductItem } from '@/store/productList/type';
import cx from './index.module.scss';

interface IProps {
  searchProducts: TProductItem[];
  searchValue: String;
}

const SearchList = ({ searchProducts, searchValue }: IProps) => {
  const onLikeHandler = useCallback((id: number) => {
    console.log('like');
  }, []);

  const onAddToBasketHandler = useCallback((id: number) => {
    console.log('add to basket');
  }, []);

  const searchList = [...searchProducts, ...searchProducts, ...searchProducts];

  return (
    <div className={cx.wrapper}>
      <div className={cx.search_list}>
        {searchList.map((product) => (
          <ProductCard
            key={product.id}
            onLike={onLikeHandler}
            onAddToBasket={onAddToBasketHandler}
            title={product.title}
            id={product.id}
            brand={product.brand}
            price={product.price}
            imgSource={product.imgSource}
            like={product.like}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchList;
