import { useCallback } from 'react';

import ProductCard from '@/components/common/ProductCard';
import ScrollSlider from '@/components/common/ScrollSlider';

import { TLikedItem } from '@/store/likedList/type';
import cx from './index.module.scss';

interface IProps {
  likedList: TLikedItem[];
}

const LikedList = ({ likedList }: IProps) => {
  const cardList = [...likedList, ...likedList];
  const onLikeHandler = useCallback((id: number) => {
    console.log('like');
    console.log(likedList);
  }, []);

  const onAddToBasketHandler = useCallback((id: number) => {
    console.log('add to basket');
  }, []);

  if (!likedList.length) {
    return <div>Пустo...</div>;
  }
  return (
    <div className={cx.likedBlock}>
      {cardList.map((product) => {
        return (
          <ProductCard
            productList={likedList}
            key={product.id}
            onLike={onLikeHandler}
            onAddToBasket={onAddToBasketHandler}
            title={product.title}
            id={product.id}
            description={product.description}
            price={product.price}
            imgSource={product.imgSource}
            like={product.like}
          />
        );
      })}
    </div>
  );
};

export default LikedList;
