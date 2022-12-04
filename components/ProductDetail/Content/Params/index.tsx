import { useAppSelector } from '@/hooks/store';
import { Skeleton } from 'antd';
import Image from 'next/image';

import { getProductDetailDataSource } from '@/store/productDetail/selectors';
import bigHard from '@/static/icons/bigHard.svg';
import downArrow from '@/static/icons/downArrow.svg';

import cx from './index.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

const Params = () => {
  const data = useAppSelector(getProductDetailDataSource);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!data) {
    return <Skeleton active />;
  }

  return (
    <div>
      <div className={cx.header}>
        <div>
          <h1>{data.title}</h1>
          <h2>{data.brandTitle}</h2>
        </div>
        <div>
          <Image src={bigHard} alt="bigHard" />
        </div>
      </div>
      <div className={cx.row}>
        <div className={cx.rowHead}>
          <h1>Размер</h1>
          <div>
            <Image src={downArrow} alt="downArrow" />
          </div>
        </div>
        <div className={cx.rowContent}>
          {data.sizes.map((size) => {
            return (
              <span
                className={classNames(
                  cx.sizeBox,
                  size === selectedSize && cx.selectedSize,
                )}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </span>
            );
          })}
        </div>
      </div>
      <div className={cx.row}>
        <div className={cx.rowHead}>
          <h1>Описание</h1>
          <div>
            <Image src={downArrow} alt="downArrow" />
          </div>
        </div>
        <div className={cx.rowContent}>
          <p>{data.description}</p>
        </div>
      </div>
      <div className={cx.row}>
        <div className={cx.rowHead}>
          <h1>Характеристики</h1>
          <div>
            <Image src={downArrow} alt="downArrow" />
          </div>
        </div>
        <div className={cx.rowContent}>
          <p>{data.params}</p>
          <p>03289</p>
        </div>
      </div>
    </div>
  );
};

export default Params;
