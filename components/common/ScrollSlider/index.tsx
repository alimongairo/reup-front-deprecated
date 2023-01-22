import React, {
  ForwardedRef,
  memo,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import Image from 'next/image';

import leftArrow from '@/static/icons/leftArrow.svg';
import cx from './index.module.scss';

export interface IScrollSlider {
  cardList: Array<ReactNode>;
  scrollToItemId?: number;
  dataAttributeName?: string;
  onScroll?: (listRef: MutableRefObject<HTMLDivElement | null>) => void;
}

const ScrollSlider = React.forwardRef(
  (
    { cardList, scrollToItemId, dataAttributeName, onScroll }: IScrollSlider,
    ref: any,
  ) => {
    const scrollList = (isNext: boolean) => {
      if (ref?.current) {
        const currentPositionScrollPosition = ref.current.scrollLeft;
        const scrollSize = document.body.clientWidth - 50;
        ref.current.scrollTo({
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

    useEffect(() => {
      if (ref?.current && onScroll) {
        ref.current.onscroll = () => onScroll(ref);
      }
    }, []);

    useEffect(() => {
      if (ref?.current && scrollToItemId !== undefined) {
        const left = ref.current
          .querySelector(`div[data-${dataAttributeName}="${scrollToItemId}"]`)
          ?.getBoundingClientRect().left;

        ref.current.scrollTo({
          left,
          behavior: 'smooth',
        });
      }
    }, [scrollToItemId]);

    return (
      <div className={cx.wrapper}>
        <div onClick={scrollListToPrev} className={cx.prevBtn}>
          <Image src={leftArrow} alt="arrow" height={30} />
        </div>
        <div ref={ref} className={cx.list}>
          {cardList}
        </div>
        <div onClick={scrollListToNext} className={cx.nextBtn}>
          <Image src={leftArrow} alt="arrow" height={30} />
        </div>
      </div>
    );
  },
);

export default memo(ScrollSlider);
