import Button from '@/components/common/Button';
import ProductCard from '@/components/common/ProductCard';
import { useAppSelector } from '@/hooks/store';
import { getProductListDataSource } from '@/store/productList/selectors';
import { useCallback } from 'react';
import cx from './index.module.scss';

const SearchList = () => {
  const searchProducts = useAppSelector(getProductListDataSource);
  const onLikeHandler = useCallback((id: number) => {
    console.log('like');
  }, []);

  const onAddToBasketHandler = useCallback((id: number) => {
    console.log('add to basket');
  }, []);

  const searchList = [
    ...searchProducts,
    ...searchProducts,
    ...searchProducts,
    ...searchProducts,
    ...searchProducts,
  ];

  return (
    <div className={cx.wrapper}>
      <div className={cx.buttons}>
        <Button className={cx.btn_filters_one}>брюки</Button>
        <Button className={cx.btn_filters}>блузки</Button>
        <Button className={cx.btn_filters}>сумки</Button>
        <Button className={cx.btn_filters}>футболки</Button>
      </div>

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
