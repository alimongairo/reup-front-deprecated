import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';

import Select from '@/components/common/Select';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import classNames from 'classnames';

import { TProductCard } from '@/store/productDetail/type';

import cx from './index.module.scss';

const Params = ({ sizes, description, oldPrice, price }: TProductCard) => {
  const [hide, setHide] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {});

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
        <Heading tag="h3">характеристики</Heading>
      </div>

      <div>
        <div>
          <div className={cx.headRow}>
            <div className={cx.description}>
              <Heading tag="h3"> описание</Heading>
              <p>
                <Text className={classNames(cx.short, { [cx.full]: hide })}>
                  {description}
                </Text>
                <Heading tag="h3" onClick={() => setHide(true)}>
                  показать больше
                </Heading>
              </p>
            </div>
            <div className={cx.productInfo}>
              <Heading tag="h3">о товаре</Heading>
              <div className={classNames(cx.closed, { [cx.open]: open })}>
                <Text>состав </Text>
                <Text>сезон </Text>
                <Text>узор </Text>{' '}
                {/* подставить данные о товаре с бэка/моков */}
                <Text>стиль </Text>
                <Text>цвет </Text>
                <Text>
                  <a href="#">тфблица размеров</a>
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
