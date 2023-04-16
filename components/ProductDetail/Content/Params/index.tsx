import { useMemo } from 'react';
import Image from 'next/image';

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
      <div>
        <div>
          <Heading tag="h2">О ТОВАРЕ</Heading>
          <Text>{description}</Text>
        </div>
        <div>
          <div className={cx.headRow}>
            <Heading tag="h2">ХАРАКТЕРИСТИКИ</Heading>
            <Image src={arrowDown} alt={'arrowDown'} />
          </div>
          <Select title="выбрать размер" options={sizesOption} />
        </div>
      </div>

      <div className={cx.footer}>
        <Button>добавить в корзину</Button>
        <div className={cx.priceWrapper}>
          {oldPrice && <span className={cx.oldPrice}>{oldPrice}</span>}
          <span className={cx.price}>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Params;
