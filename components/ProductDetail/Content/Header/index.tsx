import { Skeleton } from 'antd';
import Image from 'next/image';

import { useAppSelector } from '@/hooks/store';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';

import heart from '@/static/icons/bigHard.svg';
import cx from './index.module.scss';

const ProductDetailHeader = () => {
  const productDetail = useAppSelector(getProductDetailDataSource);

  if (!productDetail) {
    return <Skeleton active />;
  }

  return (
    <div className={cx.wrapper}>
      <div className={cx.info}>
        <h1>{productDetail.title}</h1>
        <div>
          <h2>{productDetail.brandTitle}</h2>
          <span>{productDetail.brandCode}</span>
        </div>
      </div>
      <Image src={heart} alt="heart" />
    </div>
  );
};

export default ProductDetailHeader;
