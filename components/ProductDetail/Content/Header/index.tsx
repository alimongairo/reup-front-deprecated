import { Skeleton } from 'antd';
import Image from 'next/image';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

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
        <Heading>{productDetail.title}</Heading>
        <div>
          <Heading tag="h3">{productDetail.brandTitle}</Heading>
          <Text className={cx.brandCode}>{productDetail.brandCode}</Text>
        </div>
      </div>
      <div className={cx.icon}>
        <Image src={heart} alt="heart" />
      </div>
    </div>
  );
};

export default ProductDetailHeader;
