import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps {
  images: any[]; // TODO поменять на url
}

const Slider = ({ images }: IProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onNextSlide = () => {
    const maxCount = (images?.length || 0) - 1;
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
      <div className={cx.previewSlides}>
        {images.map((img, i) => (
          <div
            className={classNames(cx.prev, activeSlide === i && cx.active)}
            onClick={() => setActiveSlide(i)}
          >
            <Image src={img} alt={'prevSlide'} />
          </div>
        ))}
      </div>
      <div className={cx.activeSlide}>
        <Image src={images[activeSlide]} alt={'activeSlide'} />
      </div>
    </div>
  );
};

export default Slider;
