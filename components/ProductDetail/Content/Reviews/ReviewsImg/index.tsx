import ScrollSlider from '@/components/common/ScrollSlider';

import { TReview } from '@/store/productDetail/type';
import Image from 'next/image';
import { MutableRefObject, useEffect, useState } from 'react';

interface IProps {
  reviews: TReview[];
  scrollToItemId: number;
  setActiveItemId: (scrollToItemId: number) => void;
  onClick?: (reviewId: number) => void;
}

const ReviewsImg = ({
  reviews,
  scrollToItemId,
  onClick,
  setActiveItemId,
}: IProps) => {
  const [blockScroll, setBlockScroll] = useState(false);

  const cardList = reviews.flatMap((review) => {
    return review.reviewsImg.map((reviewImg) => {
      return (
        <div
          key={reviewImg.id}
          data-reviewid={reviewImg.reviewId}
          onClick={() => onClick && onClick(reviewImg.reviewId)}
        >
          <Image src={reviewImg.img} alt={'reviewImg'} />
        </div>
      );
    });
  });

  const onScroll = () => {
    if (!blockScroll) {
      console.log('scroll');
    }
  };

  useEffect(() => {
    setBlockScroll(true);
  }, [scrollToItemId]);

  return (
    <ScrollSlider
      cardList={cardList}
      scrollToItemId={scrollToItemId}
      dataAttributeName={'reviewid'}
      onScroll={onScroll}
    />
  );
};

export default ReviewsImg;
