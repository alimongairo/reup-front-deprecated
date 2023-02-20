import { memo, ReactNode, useRef } from 'react';
import Image from 'next/image';

import MoreButton from '@/components/common/MoreButton';

import back from '@/static/icons/back.svg';

import cx from './index.module.scss';

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
        <div className={cx.btnWrapper}>
          <div onClick={scrollListToPrev} className={cx.prevBtn}>
            <Image src={back} alt="arrow" width={18} />
          </div>
        </div>
        <div ref={listRef} className={cx.list}>
          {cardList}
        </div>
        <div className={cx.btnWrapper}>
          <div onClick={scrollListToNext} className={cx.nextBtn}>
            <Image src={back} alt="arrow" width={18} />
          </div>
        </div>
      </div>
      <MoreButton className={cx.moreBtn} />
    </>
  );
};

export default memo(ScrollSlider);
