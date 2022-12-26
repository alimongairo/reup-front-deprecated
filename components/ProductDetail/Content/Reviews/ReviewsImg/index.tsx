import ScrollSlider from '@/components/common/ScrollSlider';

import { TReview } from '@/store/productDetail/type';
import Image from 'next/image';

interface IProps {
  reviews: TReview[];
  scrollToItemId: number;
  onClick?: (reviewId: number) => void;
}

const ReviewsImg = ({ reviews, scrollToItemId, onClick }: IProps) => {
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

  return (
    <ScrollSlider
      cardList={cardList}
      scrollToItemId={scrollToItemId}
      dataAttributeName={'reviewid'}
    />
  );
};

export default ReviewsImg;
