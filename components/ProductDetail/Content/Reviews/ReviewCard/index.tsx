import Image from 'next/image';
import classNames from 'classnames';

import ReviewStars from '@/components/common/ReviewStars';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

import { TReview } from '@/store/productDetail/type';

import upFinger from '@/static/icons/upFinger.svg';
import cx from './index.module.scss';

const ReviewCard = ({
  avatar,
  name,
  date,
  grade,
  color,
  size,
  review,
  reviewsImg,
}: TReview) => {
  return (
    <div className={cx.wrapperWithImages}>
      <div className={cx.wrapper}>
        <div className={cx.contentWrapper}>
          <div className={cx.imgWrapper}>
            <Image src={avatar} alt={'avatar'} />
          </div>
          <div className={cx.content}>
            <div className={cx.row}>
              <Heading size={'medium'}>{name}</Heading>
              <Text>{date}</Text>
            </div>
            <div className={cx.row}>
              <ReviewStars grade={grade} />
              <Text>
                {color} / {size}
              </Text>
            </div>
            <Text>{review}</Text>
          </div>
        </div>
        <div className={classNames(cx.row, cx.footer)}>
          <Text>Этот отзыв был полезен?</Text>
          <div className={cx.likes}>
            <Image src={upFinger} alt={'upFinger'} />
            <Image
              src={upFinger}
              alt={'upFinger'}
              style={{ transform: 'rotate(180deg)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
