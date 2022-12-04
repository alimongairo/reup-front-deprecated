import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useAppSelector } from '@/hooks/store';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';

import cx from './index.module.scss';
import classNames from 'classnames';

const Slider = () => {
  const dataSource = useAppSelector(getProductDetailDataSource);
  const [activeSlide, setActiveSlide] = useState(0);

  const onNextSlide = () => {
    const maxCount = (dataSource?.images.length || 0) - 1;
    if (maxCount) {
      setActiveSlide((state) => {
        if (state + 1 > maxCount) {
          return 0;
        }
        return state + 1;
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onNextSlide();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cx.slider}>
      {dataSource?.images.map((img, index) => {
        return (
          <div
            key={index}
            className={classNames(cx.slide, activeSlide === index && cx.active)}
            style={{
              flexGrow: activeSlide === index ? dataSource?.images.length : 1,
            }}
            onClick={() => setActiveSlide(index)}
          >
            <Image src={img} alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
