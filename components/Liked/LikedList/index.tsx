import { useCallback } from 'react';

import ProductCard from '@/components/common/ProductCard';

import { TLikedItem } from '@/store/likedList/type';
import cx from './index.module.scss';
import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';
import Text from '@/components/common/Text';

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
        <Text size="bold">
          <p>Кажется, вам пока ничего не понравилось</p>
        </Text>

        <Link href={`${EPagesRoutes.Main}`}>
          <button>отправиться на поиски</button>
        </Link>
      </div>
    );
  }
  return (
    <div className={cx.likedBlock}>
      <div className={cx.likedFlex}>
        {cardList.map((product) => {
          return (
            <div className={cx.likedSize} key={product.id}>
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
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default LikedList;
