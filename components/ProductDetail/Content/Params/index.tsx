import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';

import Select from '@/components/common/Select';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

import { TProductCard } from '@/store/productDetail/type';

import arrowDown from '@/static/icons/downArrow.svg';

import cx from './index.module.scss';

const Params = ({ sizes, description, oldPrice, price }: TProductCard) => {
  const sizesOption = useMemo(() => {
    return (
      sizes.map((i) => ({
        id: i,
        value: i,
        label: String(i),
      })) || []
    );
  }, []);

  return (
    <div className={cx.wrapper}>
      <div className={cx.price}>
        <div className={cx.priceWrapper}>
          {oldPrice && <span className={cx.oldPrice}>{oldPrice}</span>}
          <span className={cx.price}>{price}</span>
        </div>
        <Select title="выбрать размер" options={sizesOption} />
        <div className={cx.productButtons}>
          <Button>
            <Link href={EPagesRoutes.Basket}>купть сейчас</Link>
          </Button>
          <Button>добавить в корзину</Button>
        </div>
        <Heading tag="h2">характеристики</Heading>
      </div>

      <div>
        <div>
          <div className={cx.headRow}>
            <div className={cx.description}>
              <Heading tag="h2">описание</Heading>
              <p>
                <Text>{description}</Text>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Params;
