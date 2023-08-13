import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps {
  slides: Array<{ id: string | number; img: any }>;
}

const Slider = ({ slides }: IProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={cx.slider}>
      <div className={cx.slides}>
        <span className={cx.info}>!</span>
        {slides.map((slide) => {
          return (
            <Image
              src={slide.img}
              alt={'ledy'}
              className={cx.slide}
              key={slide.id}
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              fill
            />
          );
        })}
        <div className={cx.counter}>
          {slides.map((slide, i) => {
            return (
              <div
                className={classNames(cx.countBlock, {
                  [cx.active]: i === activeSlide,
                })}
                key={slide.id}
                onClick={() => setActiveSlide(i)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
