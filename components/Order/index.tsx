import { useEffect } from 'react';

import OrderPageHeader from '@/components/Order/Header';
import OrderPreview from '@/components/common/OrderPreview';
import OrderForm from '@/components/Order/OrderItems';

import { getProductListAction } from '@/store/productList/thunk';
import { getBasketAction } from '@/store/basket/thunk';
import { getUserAction } from '@/store/user/thunk';

import { getProductListDataSource } from '@/store/productList/selectors';
import {
  getBasketDataSource,
  getBasketErrLoading,
} from '@/store/basket/selectors';
import { getUserDataSource } from '@/store/user/selectors';

import { useAppDispatch, useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';

interface IProps {
  isLogined: boolean;
}

const OrderLayout = ({ isLogined }: IProps) => {
  const dispatch = useAppDispatch();

  const { error, loading } = useAppSelector(getBasketErrLoading); //TODO: check errors fetch products and user

  const products = useAppSelector(getProductListDataSource); //TODO: fetch by ids
  const basket = useAppSelector(getBasketDataSource);
  const user = useAppSelector(getUserDataSource);

  useEffect(() => {
    dispatch(getProductListAction());
    dispatch(getBasketAction());
    isLogined && dispatch(getUserAction());
  }, []);

  return (
    <div className="w100">
      <OrderPageHeader />
      {error || loading ? (
        <div>{error?.message || 'loading..'}</div>
      ) : (
        products.length && (
          <div className={cx.wrapper}>
            <OrderForm user={user} basket={basket} />
            <OrderPreview products={products} basket={basket} />
          </div>
        )
      )}
    </div>
  );
};

export default OrderLayout;
