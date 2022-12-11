import Image from 'next/image';

import ReviewStars from '@/components/common/ReviewStars';

import { TReview } from '@/store/productDetail/type';

import cx from './index.module.scss';

const ReviewCard = ({
  avatar,
  name,
  date,
  grade,
  color,
  size,
  review,
}: TReview) => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.imgWrapper}>
        <Image src={avatar} alt={'avatar'} />
      </div>
      <div className={cx.content}>
        <div>
          <h1>{name}</h1>
          <span>{date}</span>
        </div>
        <div>
          <ReviewStars grade={grade} />
          <p>
            {color} / {size}
          </p>
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
