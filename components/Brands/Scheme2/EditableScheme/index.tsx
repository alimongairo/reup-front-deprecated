import React from 'react';

import HeaderForEdit from '@/components/Brands/HeaderForEdit';
import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

import cx from './index.module.scss';
import MoreButton from '@/components/common/MoreButton';

const Scheme2Editable = () => {
  return (
    <>
      <HeaderForEdit />
      <div className={cx.banner}>
        <Button transparent className={cx.uploadBtn}>
          добавить фото / видео
        </Button>
      </div>
      <div className={cx.logo}>
        <div className={cx.logoImgWrapper}>
          <Button transparent>добавить фото логотипа</Button>
        </div>
      </div>
      <div className={cx.cardsWrapper}>
        <div className={cx.card}>
          <Heading tag="h2">заголовок</Heading>
          <Text>текстовый блок</Text>
          <div className={cx.imgWrapper}>
            <Button transparent className={cx.btn}>
              добавить фото
            </Button>
          </div>
          <MoreButton className={cx.moreBtn} />
        </div>
        <div className={cx.centerCard}>
          <div className={cx.imgWrapper}>
            <Button transparent className={cx.btn}>
              добавить фото
            </Button>
          </div>
          <div className={cx.footer}>
            <Heading tag="h2">кнопка</Heading>
            <MoreButton />
          </div>
        </div>
        <div className={cx.card}>
          <Heading tag="h2">о нас</Heading>
          <Text>текстовый блок</Text>
        </div>
      </div>
    </>
  );
};

export default Scheme2Editable;
