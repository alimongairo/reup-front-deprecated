import { useCallback } from 'react';
import Link from 'next/link';

import ProductCard from '@/components/common/ProductCard';
import Text from '@/components/common/Text';
import { EPagesRoutes } from '@/constants/router';

import { TLikedItem } from '@/store/likedList/type';
import cx from './index.module.scss';

interface IProps {
  likedList: TLikedItem[];
}

const LikedList = ({ likedList }: IProps) => {
  const cardList = [...likedList];

  const onLikeHandler = useCallback((id: number) => {
    console.log('like');
    console.log(likedList);
  }, []);

  const onAddToBasketHandler = useCallback((id: number) => {
    console.log('add to basket');
  }, []);

  if (!likedList.length) {
    return (
      <div className={cx.space}>
        <Text size="bold">Кажется, вам пока ничего не понравилось</Text>

        <Link href={`${EPagesRoutes.Main}`}>
          <button>отправиться на поиски</button>
        </Link>
      </div>
    );
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
