import { useMemo } from 'react';
import { Skeleton } from 'antd';
import Image from 'next/image';

import Select from '@/components/common/Select';

import { getProductDetailDataSource } from '@/store/productDetail/selectors';
import { useAppSelector } from '@/hooks/store';

import arrowDown from '@/static/icons/downArrow.svg';
import cx from './index.module.scss';

const Params = () => {
  const data = useAppSelector(getProductDetailDataSource);

  const sizes = useMemo(() => {
    return (
      data?.sizes.map((i) => ({
        id: i,
        value: i,
        label: String(i),
      })) || []
    );
  }, []);

  if (!data) {
    return <Skeleton active />;
  }

  return (
    <div className={cx.wrapper}>
      <div>
        <div>
          <h1>О ТОВАРЕ</h1>
          <p>{data.description}</p>
        </div>
        <div>
          <div className={cx.headRow}>
            <h1>ХАРАКТЕРИСТИКИ</h1>
            <Image src={arrowDown} alt={'arrowDown'} />
          </div>
          <Select title="выбрать размер" options={sizes} />
        </div>
      </div>

      <div className={cx.footer}>
        <button>добавить в корзину</button>
        <div className={cx.priceWrapper}>
          {data.oldPrice && (
            <span className={cx.oldPrice}>{data.oldPrice}</span>
          )}
          <span className={cx.price}>{data.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Params;
