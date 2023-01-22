import { useState } from 'react';
import { Skeleton } from 'antd';
import classNames from 'classnames';

import ReviewStars from '@/components/common/ReviewStars';
import Heading from '@/components/common/Heading';
import ReviewsSlider from '@/components/ProductDetail/Content/Reviews/ReviewsSlider';

import { useAppSelector } from '@/hooks/store';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';

import cx from './index.module.scss';
import ReviewsImg from '@/components/ProductDetail/Content/Reviews/ReviewsImg';

const Reviews = () => {
  const data = useAppSelector(getProductDetailDataSource);
  const [activeItemId, setActiveItemId] = useState(1);

  if (!data) {
    return <Skeleton />;
  }

  return (
    <div className={cx.wrapper}>
      <div className={classNames(cx.title, data.reviews?.length && cx.ping)}>
        <Heading size={'medium'}>продавец / название магазина</Heading>
        <ReviewStars grade={4.3} />
        {data.reviews?.length ? (
          <Heading size={'medium'}>рейтинг и отзывы</Heading>
        ) : (
          <Heading size={'medium'}>
            На этот товар пока нет отзывов. Закажите и будьте первым!
          </Heading>
        )}
      </div>
      <ReviewsImg
        reviews={data.reviews || []}
        scrollToItemId={activeItemId}
        setActiveItemId={setActiveItemId}
      />
      <ReviewsSlider
        reviews={data.reviews}
        activeItemId={activeItemId}
        setActiveItemId={setActiveItemId}
      />
    </div>
  );
};

export default Reviews;
