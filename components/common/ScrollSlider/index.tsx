import { ReactNode, useRef } from 'react';
import Image from 'next/image';

import leftArrow from '@/static/icons/leftArrow.svg';
import cx from './index.module.scss';

export interface IScrollSlider {
  cardList: Array<ReactNode>;
}

const ScrollSlider = ({ cardList }: IScrollSlider) => {
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
  );
};

export default ScrollSlider;
