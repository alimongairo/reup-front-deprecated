import { useCallback, useRef } from 'react';
import Image from 'next/image';

import ProductCard from '@/components/common/ProductCard';

import { TProductItem } from '@/store/productList/type';

import cx from './index.module.scss';

import leftArrow from '@/static/icons/leftArrow.svg';

interface IProps {
  title?:string,
  productList: TProductItem[];
}

const ProductsList = ({ title, productList }: IProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const onLikeHandler = useCallback((id: number) => {
    console.log('like');
  }, []);

  const onAddToBasketHandler = useCallback((id: number) => {
    console.log('add to basket');
  }, []);

  const scrollList = (isNext: boolean) => {
    if (listRef.current) {
      const currentPositionScrollPosition = listRef.current.scrollLeft;
      const scrollSize = document.body.clientWidth - 50;
      listRef.current.scrollTo({
        left:
          currentPositionScrollPosition + (isNext ? scrollSize : -scrollSize),
        behavior: 'smooth',
      });
    }
  };

  const scrollListToNext = () => {
    scrollList(true);
  };

  const scrollListToPrev = () => {
    scrollList(false);
  };

  return (
    <div className={cx.wrapper}>
      <div onClick={scrollListToPrev} className={cx.prevBtn}>
        <Image src={leftArrow} alt="arrow" height={30} />
      </div>
      <div ref={listRef} className={cx.list}>
        {[...productList, ...productList].map((product) => {
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
      <div onClick={scrollListToNext} className={cx.nextBtn}>
        <Image src={leftArrow} alt="arrow" height={30} />
      </div>
    </div>
  );
};

export default ProductsList;
