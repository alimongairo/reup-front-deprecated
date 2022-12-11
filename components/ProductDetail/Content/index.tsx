import { Skeleton } from 'antd';

import Slider from '@/components/ProductDetail/Content/Slider';
import Params from '@/components/ProductDetail/Content/Params';
import Header from '@/components/ProductDetail/Content/Header';
import Reviews from '@/components/ProductDetail/Content/Reviews';

import { getProductDetailDataSource } from '@/store/productDetail/selectors';

import cx from './index.module.scss';
import { useAppSelector } from '@/hooks/store';

const ProductDetailContent = () => {
  const data = useAppSelector(getProductDetailDataSource);

  if (!data) {
    return <Skeleton active />;
  }

  return (
    <div className={cx.wrapper}>
      <Header />
      <div className={cx.content}>
        <Slider images={data?.images || []} />
        <Params {...data} />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
};

export default ProductDetailContent;
