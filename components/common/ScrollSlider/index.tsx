import { memo, ReactNode, useRef } from 'react';
import Image from 'next/image';

import leftArrow from '@/static/icons/leftArrow.svg';
import moreArrow from '@/static/icons/moreArrow.svg';

import cx from './index.module.scss';
import Text from '@/components/common/Text';

export interface IScrollSlider {
  cardList: Array<ReactNode>;
  onClickMore?: () => void;
}

const ScrollSlider = ({ cardList, onClickMore }: IScrollSlider) => {
  const listRef = useRef<HTMLDivElement | null>(null);

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
    <>
      <div className={cx.wrapper}>
        <div onClick={scrollListToPrev} className={cx.prevBtn}>
          <Image src={leftArrow} alt="arrow" height={30} />
        </div>
        <div ref={listRef} className={cx.list}>
          {cardList}
        </div>
        <div onClick={scrollListToNext} className={cx.nextBtn}>
          <Image src={leftArrow} alt="arrow" height={30} />
        </div>
      </div>
      <div className={cx.more} onClick={onClickMore}>
        <Text size="bold">больше</Text>
        <Image src={moreArrow} alt="more" />
      </div>
    </>
  );
};

export default memo(ScrollSlider);
