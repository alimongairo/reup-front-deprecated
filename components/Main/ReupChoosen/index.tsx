import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import MoreButton from '@/components/common/MoreButton';

import { useWindowSize } from '@/hooks/useWindow';

import img from '@/static/img/model1.png';
import cx from './index.module.scss';

const ReupChoosen = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { width } = useWindowSize();
  const curWidth = width ? width - 200 : 'auto';

  return (
    <div className={cx.slider}>
      <div className={cx.slides}>
        <div
          className={classNames(cx.slide, {
            [cx.active]: 0 === activeSlideIndex,
          })}
          style={{
            transform: `translateX(-${100 * activeSlideIndex}%)`,
            width: curWidth,
          }}
          onClick={() => setActiveSlideIndex(0)}
        >
          <div className={cx.text}>
            <Heading tag="h2">BEFREE</Heading>
            <Text size="thin">
              Наше дело не так однозначно, как может показаться: существующая
              теория напрямую зависит от стандартных подходов. Идейные
              соображения высшего порядка, а также разбавленное изрядной долей{' '}
            </Text>
            <MoreButton className={cx.moreBtn} />
          </div>
          <div
            className={cx.imgWrapper}
            style={{
              width: typeof curWidth === 'number' ? curWidth * 0.6 : 'auto',
            }}
          >
            <Image src={img} alt={'img'} />
          </div>
        </div>
        <div
          className={classNames(cx.slide, {
            [cx.active]: 1 === activeSlideIndex,
          })}
          style={{
            transform: `translateX(-${100 * activeSlideIndex}%)`,
            width: curWidth,
          }}
          onClick={() => setActiveSlideIndex(1)}
        >
          <div className={cx.text}>
            <Heading tag="h2">BEFREE</Heading>
            <Text size="thin">
              Наше дело не так однозначно, как может показаться: существующая
              теория напрямую зависит от стандартных подходов. Идейные
              соображения высшего порядка, а также разбавленное изрядной долей{' '}
            </Text>
            <MoreButton className={cx.moreBtn} />
          </div>
          <div
            className={cx.imgWrapper}
            style={{
              width: typeof curWidth === 'number' ? curWidth * 0.6 : 'auto',
            }}
          >
            <Image src={img} alt={'img'} />
          </div>
        </div>
        <div
          className={classNames(cx.slide, {
            [cx.active]: 2 === activeSlideIndex,
          })}
          style={{
            transform: `translateX(-${100 * activeSlideIndex}%)`,
            width: curWidth,
          }}
          onClick={() => setActiveSlideIndex(2)}
        >
          <div className={cx.text}>
            <Heading tag="h2">BEFREE</Heading>
            <Text size="thin">
              Наше дело не так однозначно, как может показаться: существующая
              теория напрямую зависит от стандартных подходов. Идейные
              соображения высшего порядка, а также разбавленное изрядной долей{' '}
            </Text>
            <MoreButton className={cx.moreBtn} />
          </div>
          <div
            className={cx.imgWrapper}
            style={{
              width: typeof curWidth === 'number' ? curWidth * 0.6 : 'auto',
            }}
          >
            <Image src={img} alt={'img'} />
          </div>
        </div>
      </div>
      <div className={cx.footer}>
        <Text className={cx.countTitle}>{activeSlideIndex + 1} из 3</Text>
        <div className={cx.slideCount}>
          {[1, 2, 3].map((i, index) => {
            return (
              <div
                key={index}
                onClick={() => setActiveSlideIndex(index)}
                className={classNames(cx.count, {
                  [cx.activeCount]: index === activeSlideIndex,
                })}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReupChoosen;
