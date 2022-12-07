import { useCallback } from 'react';

import ProductCard from '@/components/common/ProductCard';

import { TProductItem } from '@/store/productList/type';

import ScrollSlider from '@/components/common/ScrollSlider';

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
    return <div>Пустo...</div>;
  }

  const cardList = [...productList, ...productList].map((product) => {
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
  });

  return <ScrollSlider cardList={cardList} />;
};

export default ProductsList;
