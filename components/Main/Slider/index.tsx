import { useEffect, useState } from 'react';
import Image from 'next/image';
import cx from './index.module.scss';

import leftArrow from '@/static/icons/leftArrow.svg';
import slide1 from '@/static/img/slide1.png';
import slide2 from '@/static/img/SliderOne_two.png';

import Slide, { ISlide } from '@/components/Main/Slider/Slide';
import classNames from 'classnames';

const slideCount = 1;

const slideArray: ISlide[] = [
  {
    id: 0,
    active: false,
    brandDescription:
      'Наше дело не так однозначно, как может показаться: существующая теория ',
    smallImg: slide2,
    bigImg: slide1,
    brandName: 'Название бренда',
  },
  {
    id: 1,
    active: false,
    brandDescription:
      'Наше дело не так однозначно, как может показаться: существующая теория ',
    smallImg: slide2,
    bigImg: slide1,
    brandName: 'Имя бренда',
  },
];

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const onNextSlide = () => {
    setSlideNumber((state) => {
      if (state + 1 > slideCount) {
        return 0;
      }
      return state + 1;
    });
  };
  const onPrevSlide = () => {
    setSlideNumber((state) => {
      if (state - 1 < 0) {
        return slideCount;
      }
      return state - 1;
    });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     onNextSlide();
  //   }, 5000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [slideNumber]);

  return (
    <div className={cx.wrapper}>
      <div onClick={onPrevSlide} className={cx.arrow}>
        <Image src={leftArrow} alt="Arrow left" />
      </div>

      <div className={cx.slides}>
        {slideArray.map((slide) => {
          return (
            <Slide
              key={slide.id}
              {...slide}
              active={slide.id === slideNumber}
            />
          );
        })}
      </div>

      <div onClick={onNextSlide} className={classNames(cx.arrow, cx.rotate)}>
        <Image src={leftArrow} alt="Arrow right" />
      </div>
    </div>
  );
};

export default Slider;
