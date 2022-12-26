import { Skeleton } from 'antd';
import classNames from 'classnames';

import ReviewStars from '@/components/common/ReviewStars';
import ScrollSlider from '@/components/common/ScrollSlider';
import ReviewCard from '@/components/ProductDetail/Content/Reviews/ReviewCard';

import { useAppSelector } from '@/hooks/store';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';

import cx from './index.module.scss';
import Heading from '@/components/common/Heading';

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
      {data.reviews?.length && <ScrollSlider cardList={cardList || []} />}
    </div>
  );
};

export default Reviews;
