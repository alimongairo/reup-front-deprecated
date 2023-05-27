import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';

import Select from '@/components/common/Select';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import Collapse from '@/components/common/Collapse';
import classNames from 'classnames';
import ProductInfo from '@/components/common/ProductCard/PreviewProductModal/ProductInfo';

import { TProductCard } from '@/store/productDetail/type';

import cx from './index.module.scss';

const mockText =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sequi, odio tenetur dolorem sint debitis molestias eligendi veniam dignissimos! Distinctio praesentium fugit possimus doloremque saepe mollitia voluptatum eos aliquam quo?';

const Params = ({ sizes, description, oldPrice, price }: TProductCard) => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.price}>
        <div className={cx.priceWrapper}>
          {oldPrice && <span className={cx.oldPrice}>{oldPrice}</span>}
          <span className={cx.price}>{price}</span>
        </div>

        <div className={cx.sizeButtons}>
          <Heading tag="h3">выберите размер</Heading>
          <div>
            <Button>{sizes[0]}</Button>
            <Button>{sizes[1]}</Button>
            <Button>{sizes[2]}</Button>
            <Button>{sizes[3]}</Button>
          </div>
        </div>

        <div className={cx.productButtons}>
          <Button>
            <Link className={cx.buyButton} href={EPagesRoutes.Basket}>
              купть сейчас
            </Link>
          </Button>
          <Button>добавить в корзину</Button>
        </div>
        <Text size="normal" decoration="underline">
          характеристики
        </Text>
      </div>
      <div>
        <div>
          <div className={cx.headRow}>
            <div className={cx.description}>
              <Collapse
                title={'описание'}
                content={<Text size="thin">{mockText}</Text>}
                moreText={'показать больше'}
                lessText={'показать меньше'}
                hideCollapseIcon
              />
            </div>
            <div className={cx.productInfo}>
              <div>
                <Collapse title={'о товаре'} content={<ProductInfo />} />
                <Text decoration="underline" className={'pointer'}>
                  таблица размеров
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Params;
