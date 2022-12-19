import { Skeleton } from 'antd';
import classNames from 'classnames';

import ReviewStars from '@/components/common/ReviewStars';
import ScrollSlider from '@/components/common/ScrollSlider';
import ReviewCard from '@/components/ProductDetail/Content/Reviews/ReviewCard';

import { useAppSelector } from '@/hooks/store';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';

import cx from './index.module.scss';

const Reviews = () => {
  const data = useAppSelector(getProductDetailDataSource);

  if (!data) {
    return <Skeleton />;
  }

  const cardList = data.reviews?.map((review) => {
    return <ReviewCard key={review.id} {...review} />;
  });

  return (
    <div className={cx.wrapper}>
      <div className={classNames(cx.title, data.reviews?.length && cx.ping)}>
        <h1>продавец / название магазина</h1>
        <ReviewStars grade={4.3} />
        {data.reviews?.length ? (
          <h2>РЕЙТИНГ И ОТЗЫВЫ</h2>
        ) : (
          <h2>На этот товар пока нет отзывов. Закажите и будьте первым!</h2>
        )}
      </div>
      {data.reviews?.length && <ScrollSlider cardList={cardList || []} />}
    </div>
  );
};

export default Reviews;
