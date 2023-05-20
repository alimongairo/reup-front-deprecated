import React, { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import LinkWithArrow from '@/components/common/LinkWithArrow';
import Button from '@/components/common/Button';

import cx from './index.module.scss';

export interface ISlide {
  title: string;
  description?: string;
  imgSource?: string;
}

interface IProps {
  slides: [ISlide, ISlide];
  withUploadBtns?: boolean;
}

const Slider = ({ slides, withUploadBtns }: IProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={cx.wrapper}>
      <div className={classNames(cx.slide, { [cx.active]: activeSlide === 0 })}>
        {slides[0].imgSource && (
          <Image src={slides[0].imgSource} alt={'banner'} />
        )}
        <Heading tag="h2" className={cx.brandName}>
          {slides[0].title || 'Название бренда'}
        </Heading>
        {withUploadBtns && (
          <Button transparent className={cx.btnDownload}>
            добавить фото / видео{' '}
          </Button>
        )}
        <LinkWithArrow
          classNames={cx.nextBtb}
          color="white"
          text={<Heading tag="h2">о нас</Heading>}
          onClick={() => setActiveSlide(1)}
        />
      </div>
      <div className={classNames(cx.slide, { [cx.active]: activeSlide === 1 })}>
        {slides[1].imgSource && (
          <Image src={slides[1].imgSource} alt={'banner'} />
        )}
        <Heading tag="h2" className={cx.brandName}>
          {slides[1].title}
        </Heading>
        {withUploadBtns && (
          <Button transparent className={cx.btnDownload}>
            добавить фото / видео{' '}
          </Button>
        )}
        <Text size="big" className={cx.description}>
          {slides[1].description || 'Описание бренда'}
        </Text>
        <LinkWithArrow
          classNames={cx.backBtb}
          color="white"
          text={''}
          onClick={() => setActiveSlide(0)}
        />
      </div>
    </div>
  );
};

export default Slider;
