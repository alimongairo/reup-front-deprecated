import { Skeleton } from 'antd';
import Image from 'next/image';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

import { useAppSelector } from '@/hooks/store';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';

import heart from '@/static/icons/bigHard.svg';
import fillLike from '@/static/icons/fillLike.svg';

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
          <Heading size={'medium'}>{productDetail.brandTitle}</Heading>
          <Text size={'bold'}>{productDetail.brandCode}</Text>
        </div>
      </div>
      <Image src={productDetail.isLiked ? fillLike : heart} alt="heart" />
    </div>
  );
};

export default ProductDetailHeader;
