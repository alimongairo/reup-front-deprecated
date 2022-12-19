import { useEffect } from 'react';
import { Skeleton } from 'antd';

import Slider from '@/components/ProductDetail/Content/Slider';
import Params from '@/components/ProductDetail/Content/Params';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import {
  getCashedIdsSet,
  getCashProductsData,
} from '@/store/cashPreviewProducts/selectors';
import { getProductItemAction } from '@/store/cashPreviewProducts/thunk';

import cx from './index.module.scss';

interface IProps {
  productId: string;
}

export const PreviewProduct = ({ productId }: IProps) => {
  const dispatch = useAppDispatch();
  const cashItems = useAppSelector(getCashProductsData);
  const cashedIds = useAppSelector(getCashedIdsSet);

  useEffect(() => {
    if (!cashedIds.has(productId)) {
      dispatch(getProductItemAction(productId));
    }
  }, []);

  if (!cashItems[productId]) {
    return <Skeleton active />;
  }

  return (
    <div className={cx.wrapper}>
      <Slider images={cashItems[productId].images || []} />
      <Params {...cashItems[productId]} />
    </div>
  );
};

export default PreviewProduct;
