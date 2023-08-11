import { useCallback } from 'react';

import ProductCard from '@/components/common/ProductCard';
import ScrollSlider from '@/components/common/ScrollSlider';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { TProductItem } from '@/store/productList/type';

import cx from './index.module.scss';
import { likeProductAction } from '@/store/productList/thunk';
import { getUserDataSource } from '@/store/user/selectors';

interface IProps {
  productList: TProductItem[];
}

const ProductsList = ({ productList }: IProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserDataSource); // uid

  const onLikeHandler = useCallback(
    (pid: number, idx: number, uid?: number) => {
      /*
    кликнули
    отправили в локальное хранилище
    если авторизован, отправили на урл 
    перекрасили
    дальше при перезагрзке страницы отображаем цвет уже в зависимости от like !like
    метод для лайка написан (likeRequest)
    */
      const data = {
        product_id: pid,
        customer_id: user?.uid || 1,
      };
      dispatch(likeProductAction(data));
    },
    [],
  );

  const onAddToBasketHandler = useCallback((uid: number) => {
    console.log('add to basket');
  }, []);

  if (!productList.length) {
    return <div className={cx.container}>Пустo...</div>;
  }

  const cardList = productList.map((product, idx) => {
    return (
      <ProductCard
        key={product.product_id}
        onLike={onLikeHandler}
        idx={idx}
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
