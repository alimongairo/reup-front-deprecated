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
  isLikedList?: boolean;
}

const ProductsList = ({ productList, isLikedList }: IProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserDataSource); // uid

  console.log(productList);
  const onLikeHandler = useCallback((pid: number) => {
    const data = {
      product_id: pid,
      customer_id: user?.uid || 1,
    };

    dispatch(likeProductAction(data));

    if (window?.localStorage) {
      const product = JSON.parse(
        localStorage.getItem('productList') as string,
      ).find((product: any) => product.vendor_id === pid);

      let likedProducts = JSON.parse(
        localStorage.getItem('likedProducts') as string,
      );
      if (!likedProducts || likedProducts.length < 1) {
        likedProducts = [];
      }
      localStorage.setItem(
        'likedProducts',
        JSON.stringify([...likedProducts, product]),
      );
    }
  }, []);

  const onAddToBasketHandler = useCallback((uid: number) => {
    console.log('add to basket');
  }, []);

  if (!productList.length) {
    return <div className={cx.container}>Пустo...</div>;
  }

  const cardList = productList.map((product) => {
    return (
      <ProductCard
        key={product.product_id}
        onLike={onLikeHandler}
        onAddToBasket={onAddToBasketHandler}
        name={product.name}
        vendor_id={product.vendor_id}
        brand={product.brand}
        price={product.price}
        sale={product.sale}
        main_image={product.main_image}
        like={isLikedList ? true : product.like}
        description={product.description}
      />
    );
  });

  return <ScrollSlider cardList={cardList} />;
};

export default ProductsList;
