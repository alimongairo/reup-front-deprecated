import { Skeleton } from 'antd';
import classNames from 'classnames';

import ReviewStars from '@/components/common/ReviewStars';
import ScrollSlider from '@/components/common/ScrollSlider';
import ReviewCard from '@/components/ProductDetail/Content/Reviews/ReviewCard';

import { useAppSelector } from '@/hooks/store';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';

import cx from './index.module.scss';
import Heading from '@/components/common/Heading';
import ReviewsImg from '@/components/ProductDetail/Content/Reviews/ReviewsImg';
import { MutableRefObject, useState } from 'react';

const visibleItems = new Set<number>();

const Reviews = () => {
  const data = useAppSelector(getProductDetailDataSource);
  const [activeReviewItem, setActiveReviewItem] = useState(1);

  if (!data) {
    return <Skeleton />;
  }

  let observer = new IntersectionObserver(function (entries) {
    return entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        visibleItems.add(+(entry.target as any).dataset.reviewid);
      } else {
        visibleItems.delete(+(entry.target as any).dataset.reviewid);
      }
      console.log(Math.min(...visibleItems.values()));
      setActiveReviewItem(Math.min(...visibleItems.values()));
    });
  });

  const onScrollReviews = (
    listRef: MutableRefObject<HTMLDivElement | null>,
  ) => {
    window.requestAnimationFrame(() => {
      listRef.current?.childNodes.forEach((i) =>
        observer.observe(i as Element),
      );
    });
  };

  const cardList = data.reviews?.map((review) => {
    return <ReviewCard key={review.id} {...review} />;
  });

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
        scrollToItemId={activeReviewItem}
        onClick={(reviewId) => setActiveReviewItem(reviewId)}
      />
      {data.reviews?.length && (
        <ScrollSlider
          cardList={cardList || []}
          scrollToItemId={activeReviewItem}
          dataAttributeName={'reviewid'}
          onScroll={onScrollReviews}
        />
      )}
    </div>
  );
};

export default Reviews;
