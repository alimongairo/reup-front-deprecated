import Image from 'next/image';

import star from '@/static/icons/star.svg';
import fillStar from '@/static/icons/fillStar.svg';

import cx from './index.module.scss';

export interface IReviewStars {
  grade: number;
}

const startCount = 5;

const ReviewStars = ({ grade }: IReviewStars) => {
  return (
    <div className={cx.wrapper}>
      {Array(startCount)
        .fill('')
        .map((_, i) => (
          <Image
            src={i >= Number.parseInt(String(grade)) ? star : fillStar}
            alt={'star'}
          />
        ))}
    </div>
  );
};

export default ReviewStars;
