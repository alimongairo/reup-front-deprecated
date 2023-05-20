import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import LinkWithArrow from '@/components/common/LinkWithArrow';
import Text from '@/components/common/Text';
import BrandProductList from '@/components/Brands/BrandProductList';

import cx from './index.module.scss';
import { Arrow } from '@/static/icons/Arrow';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import banner from './banner.jpg';
import banner2 from './banner2.jpg';

const BrandPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className={cx.banner}>
        <div
          className={classNames(cx.bannerItem, {
            [cx.active]: activeSlide === 0,
          })}
        >
          <Image className={cx.bannerImg} src={banner} alt={'banner'} />
          <Heading tag="h2" className={cx.brandName}>
            .solutions
          </Heading>
          <LinkWithArrow
            classNames={cx.nextBtb}
            color="white"
            text={<Heading tag="h2">о нас</Heading>}
            onClick={() => setActiveSlide(1)}
          />
        </div>
        <div
          className={classNames(cx.bannerItem, {
            [cx.active]: activeSlide === 1,
          })}
        >
          <Image className={cx.bannerImg} src={banner2} alt={'banner'} />
          <Heading tag="h2" className={cx.brandName}>
            о нас
          </Heading>
          <Text size="big" className={cx.description}>
            Lorem ipsum dolor sit amet consectetur. In nulla nulla velit lacinia
            suscipit quisque nisi. Auctor cras mattis facilisis quam dui velit
            ultrices.
          </Text>
          <div className={cx.moreBtn} onClick={() => setActiveSlide(0)}>
            <Arrow />
          </div>
        </div>
      </div>
      <div className={cx.navigation}>
        <div className={cx.left}>
          <Heading tag="h2">категории товаров</Heading>
          <LinkWithArrow color={'black'} text={<Text>больше</Text>} />
          <div className={cx.navItems}>
            <Button size={'small'}>category</Button>
            <Button size={'small'}>category</Button>
            <Button size={'small'}>category</Button>
            <Button size={'small'}>category</Button>
            <Button size={'small'}>category</Button>
            <Button size={'small'}>category</Button>
            <Button size={'small'}>category</Button>
            <Button size={'small'}>category</Button>
          </div>
        </div>
        <div className={cx.right}>
          <div className={cx.row}>
            <Heading tag="h2">категории товаров</Heading>
            <LinkWithArrow color={'black'} text={<Text>больше</Text>} />
          </div>
          <div className={cx.row}>
            <Heading tag="h2">категории товаров</Heading>
            <LinkWithArrow color={'black'} text={<Text>больше</Text>} />
          </div>
        </div>
      </div>
      <div className={cx.gallery}>
        <Heading tag="h2" className={cx.galleryTitle}>
          todayismyanotherday
        </Heading>
        <div className={cx.galleryItem}>
          <Image src={img1} alt={'img1'} />
        </div>
        <div className={cx.galleryItem}>
          <Image src={img2} alt={'img2'} />
        </div>
        <div className={cx.galleryItem}>
          <Image src={img3} alt={'img3'} />
        </div>
        <div className={classNames(cx.galleryItem, cx.text)}>
          <Text size="big">заголовок рекламы товара</Text>
          <Text size="thin">текстовый блок с описанием товара / реклама</Text>
        </div>
      </div>
      <BrandProductList />
    </>
  );
};

export default BrandPage;
