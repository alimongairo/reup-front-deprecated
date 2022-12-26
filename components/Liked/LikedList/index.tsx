import { useCallback } from 'react';

import ProductCard from '@/components/common/ProductCard';
import ScrollSlider from '@/components/common/ScrollSlider';

import { TLikedItem } from '@/store/likedList/type';

interface IProps {
  likedList: TLikedItem[];
}

const LikedList = ({ likedList }: IProps) => {
  const onLikeHandler = useCallback((id: number) => {
    console.log('like');
    console.log(likedList)
  }, []);

  const onAddToBasketHandler = useCallback((id: number) => {
    console.log('add to basket');
  }, []);

  if (!likedList.length) {
    return <div>Пустo...</div>;
  }

  const cardList = [...likedList, ...likedList].map((product) => {
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
  });

  return <ScrollSlider cardList={cardList} />;
};

export default LikedList;
